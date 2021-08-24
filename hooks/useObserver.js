import React, { useEffect, useRef } from "react";

function useObserver(className) {
  const elementRef = useRef([]);
  elementRef.current = [];
  const options = {
    root: null,
    rootMargin: "10px",
    threshold: 0,
  };
  function handleIntersect(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(className);
        return;
      }
      //   entry.target.classList.remove(className)
    });
  }
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, options);
    elementRef.current &&
      elementRef.current.length > 0 &&
      elementRef.current.forEach((ele) => {
        observer.observe(ele);
      });
    return () => {
      elementRef.current &&
        elementRef.current.length > 0 &&
        elementRef.current.forEach((ele) => {
          observer.unobserve(ele);
        });
    };
  }, []);
  const setRef = (ele) =>
    (elementRef.current[elementRef.current.length + 1] = ele);
  return [setRef];
}

export default useObserver;
