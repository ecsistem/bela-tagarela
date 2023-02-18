import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home"
import  {Vocalizador}  from '../pages/Vocalizador'
import  {Prancha}  from '../pages/Prancha'
import { PageNotFound } from "../pages/PageNotFound";
import { Preloader } from "../components/Preloader"
import { useState, useEffect } from "react";


export function MainRoutes(){
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data asynchronously
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Cancel timer if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vocalizador" element={<Vocalizador />} />
      <Route path="/prancha" element={<Prancha />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}