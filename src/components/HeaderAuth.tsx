import { useEffect, useState } from "react";
import { LogOut, UserRound } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { lovable } from "@/integrations/lovable/index";
import { supabase } from "@/integrations/supabase/client";

const GoogleMark = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px] shrink-0">
    <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z" />
    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z" />
    <path fill="#FBBC05" d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z" />
    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z" />
  </svg>
);

const HeaderAuth = () => {
  const [user, setUser] = useState<{ email?: string; user_metadata?: Record<string, unknown> } | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let mounted = true;
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    void supabase.auth.getUser().then(({ data, error }) => {
      if (mounted) setUser(error ? null : data.user);
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const handleGoogleSignIn = async () => {
    setBusy(true);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
      extraParams: { prompt: "select_account" },
    });

    if (result.error) {
      toast.error("Google sign-in couldn’t start. Please try again.");
      setBusy(false);
      return;
    }

    if (!result.redirected) setBusy(false);
  };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("Couldn’t sign out. Please try again.");
      return;
    }
    toast.success("You’re signed out.");
  };

  const displayName = typeof user?.user_metadata?.full_name === "string"
    ? user.user_metadata.full_name
    : typeof user?.user_metadata?.name === "string"
      ? user.user_metadata.name
      : user?.email;

  return (
    <div className="absolute right-0 top-0 z-20 flex max-w-[calc(100%-1.5rem)] items-center gap-2 p-4 sm:p-6">
      {user ? (
        <>
          <span className="hidden max-w-44 items-center gap-2 truncate rounded-md border border-primary/30 bg-background/80 px-3 py-2 text-sm text-foreground sm:flex">
            <UserRound aria-hidden="true" className="h-4 w-4 shrink-0 text-primary" />
            <span className="truncate">{displayName}</span>
          </span>
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={handleSignOut}
            aria-label="Sign out"
            title="Sign out"
            className="border-primary/40 bg-background/80 text-foreground hover:bg-background"
          >
            <LogOut aria-hidden="true" />
          </Button>
        </>
      ) : (
        <Button
          type="button"
          variant="outline"
          onClick={handleGoogleSignIn}
          disabled={busy}
          className="h-10 gap-[10px] border-[var(--google-button-border)] bg-[var(--google-button-background)] px-3 text-[var(--google-button-foreground)] hover:bg-[var(--google-button-background)] hover:opacity-90"
        >
          <GoogleMark />
          <span>{busy ? "Connecting…" : "Continue with Google"}</span>
        </Button>
      )}
    </div>
  );
};

export default HeaderAuth;