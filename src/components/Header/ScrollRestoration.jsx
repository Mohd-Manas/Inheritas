import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollRestoration = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly set scroll to top on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollRestoration;
