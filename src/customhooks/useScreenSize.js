import { useEffect, useState } from "react";
export default function useScreenSize() {
  const [value, setValue] = useState();
  useEffect(() => {
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize");
    };
  }, []);
  const checkSize = () => {
    if (window.innerWidth > 1024) {
      return setValue("larger");
    }
    if (window.innerWidth > 725 && window.innerWidth < 1024) {
      return setValue("middle");
    }
    if (window.innerWidth < 725) {
      return setValue("small");
    }
  };
  return value;
}
