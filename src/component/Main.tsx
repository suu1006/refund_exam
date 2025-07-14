"use client";

import { motion } from "framer-motion";
import Header from "./Header";

export default function Main() {
  return (
    <div className="relative min-h-screen bg-[url('/marble-texture.jpg')] bg-cover bg-center text-white font-sans overflow-hidden">
      <Header />

      {/* 메인 컨텐츠 */}
      <main className="flex flex-col items-center justify-center text-center min-h-screen px-4">
        <motion.h1
          className="text-[7vw] md:text-[8vw] font-extrabold leading-tight select-none"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          Front-End
        </motion.h1>

        <motion.p
          className="mt-2 text-xl md:text-3xl font-semibold"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}>
          풀스택 개발자 <strong>박정수</strong>입니다.
        </motion.p>

        <motion.div
          className="mt-6 max-w-xl text-base md:text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}>
          <p>
            이타적인 성향으로, 사용자에게 가치있는 서비스 제공을 지향합니다.
          </p>
          <p>새로운 도전을 좋아하며, 문제를 해결하는 것을 즐깁니다.</p>
        </motion.div>

        {/* 흑백 인물 사진 */}
        <motion.img
          src="/profile_bw.png"
          alt="Profile"
          className="mt-16 w-48 h-64 object-cover rounded-md grayscale"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
        />
      </main>

      {/* 좌측 하단 업데이트 날짜 */}
      <div className="absolute bottom-4 left-4 text-xs text-gray-500 select-none">
        update. 24. 12. 21
      </div>

      {/* 우측 하단 버튼들 */}
      <div className="absolute bottom-8 right-8 flex flex-col gap-4">
        <button
          aria-label="Email"
          className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition"
          onClick={() =>
            (window.location.href = "mailto:your.email@example.com")
          }>
          📧
        </button>
        <button
          aria-label="Chat"
          className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition"
          onClick={() => alert("Chat function will be here")}>
          💬
        </button>
        <button
          aria-label="Scroll to Top"
          className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          ⬆️
        </button>
      </div>
    </div>
  );
}
