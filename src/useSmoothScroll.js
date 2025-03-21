import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

const useSmoothScroll = () => {
  useEffect(() => {
    const scrollContainer = document.querySelector("[data-scroll-container]");

    if (!scrollContainer) return;

    const scroll = new LocomotiveScroll({
      el: scrollContainer,
      smooth: true,
    });

    // ✅ Fix: Ensure the scroll height is recalculated on route change
    const updateScroll = () => {
      setTimeout(() => {
        scroll.update();
      }, 300); // Give time for new content to load before updating
    };

    // Listen for window resize and route changes to recalculate height
    window.addEventListener("resize", updateScroll);
    window.addEventListener("load", updateScroll);

    return () => {
      scroll.destroy();
      window.removeEventListener("resize", updateScroll);
      window.removeEventListener("load", updateScroll);
    };
  }, []);

  return null;
};

export default useSmoothScroll;
