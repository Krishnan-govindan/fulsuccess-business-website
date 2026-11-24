import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <h1 className="font-display text-7xl font-bold text-gradient">404</h1>
        <p className="mt-4 text-xl text-muted-foreground">Oops! This page doesn't exist.</p>
        <a href="/" className="btn-glow mt-8 inline-flex">
          <ArrowLeft className="h-5 w-5" />
          Return Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
