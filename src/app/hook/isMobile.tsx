"use client";

import { useEffect, useState } from "react";

export default function useIsMobile() {
  const getIsMobile = (): boolean =>
    typeof window !== "undefined" ? window.innerWidth < 568 : false;

  const [isMobile, setIsMobile] = useState(getIsMobile());

  useEffect(() => {
    const onResize = () => {
      setIsMobile(getIsMobile());
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return isMobile;
}
