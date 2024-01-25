import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// Used for scrolling to top when navigate from page to another
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
