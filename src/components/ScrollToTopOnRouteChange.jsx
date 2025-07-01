import { useLocation } from "react-router";
import { useEffect } from 'react';
const ScrollToTopOnRouteChange = () => {
    const { pathname } = useLocation();

    
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}
export default ScrollToTopOnRouteChange