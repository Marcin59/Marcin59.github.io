import { useEffect, useState } from "react";

export const useContainerDimensions = (myRef: React.RefObject<HTMLElement>) => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  
    useEffect(() => {
      const getDimensions = () => ({
        width: myRef.current ? myRef.current.offsetWidth : 0,
        height: myRef.current ? myRef.current.offsetHeight : 0
      })
  
      const handleResize = () => {
        setDimensions(getDimensions())
      }
  
      if (myRef.current) {
        setDimensions(getDimensions())
      }
  
      window.addEventListener("resize", handleResize)
      window.addEventListener("animationstart", handleResize)
  
      return () => {
        window.removeEventListener("resize", handleResize)
        window.removeEventListener("animationstart", handleResize)
      }
    }, [myRef])
  
    return dimensions;
  };