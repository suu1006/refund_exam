"use client";
import Header from "@/component/Header";
import Main from "@/component/Main";

export default function MainHome() {
  return (
    <>
      <div className="relative min-h-screen bg-[url('/marble-texture.jpg')] bg-cover bg-center text-white font-sans overflow-hidden">
        <Header />
        <Main />
      </div>
    </>
  );
}
