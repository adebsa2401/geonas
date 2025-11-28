"use client";

import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

const AOS = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return null;
};

export { AOS };
