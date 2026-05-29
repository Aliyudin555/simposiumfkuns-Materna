"use client"

import { ToastContainer } from "react-toastify";
import Closing from "./components/closing-card"; 

export default function Register() {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center gap-8 lg:px-48 md:px-16 px-4 py-12 
                    bg-[url('/background/bacgroundsolo.png')] bg-cover bg-center bg-no-repeat bg-fixed">
      
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
      
      <div className="relative z-10 w-full flex flex-col items-center">
        <ToastContainer />
 
        <Closing /> 
      </div>
    </div>
  );
}