"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FadeUp from "./FadeUp";
import Button from "./Button";
import Image from "next/image";

function Card({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-xs">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default function Main() {
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);

  const icons = [
    "/icons/js.png",
    "/icons/figma.png",
    "/icons/bootstrap.png",
    "/icons/photoshop.png",
    "/icons/illustrator.png",
    "/icons/xd.png",
    "/icons/jquery.png",
    "/icons/html.png",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const secondPageHeight = windowHeight * 5;

      if (scrollY < 200) {
        // 첫 번째 페이지
        if (showSecond || showThird) {
          setShowSecond(false);
          setShowThird(false);
        }
      } else if (scrollY >= 200 && scrollY < secondPageHeight + 200) {
        // 두 번째 페이지 (200vh 높이 + offset 200)
        if (!showSecond || showThird) {
          setShowSecond(true);
          setShowThird(false);
        }
      } else if (scrollY >= secondPageHeight + 200) {
        // 세 번째 페이지
        if (!showThird || showSecond) {
          setShowSecond(false);
          setShowThird(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showSecond, showThird]);

  return (
    <>
      <section className="fixed inset-0 flex flex-col items-center justify-center text-center bg-gray-800 text-white px-4 z-0">
        <FadeUp
          delay={0}
          className="text-[7vw] md:text-[6vw] font-extrabold leading-tight select-none">
          FullStack
        </FadeUp>
        <FadeUp delay={0.6} className="mt-2 text-xl md:text-3xl font-semibold">
          풀스택 개발자 <strong>박정수</strong>입니다.
        </FadeUp>
        <FadeUp
          delay={1.2}
          className="mt-6 max-w-xl text-base md:text-lg leading-relaxed mx-auto">
          <p>
            이타적인 성향으로, 사용자에게 가치있는 서비스 제공을 지향합니다.
          </p>
          <p>새로운 도전을 좋아하며, 문제를 해결하는 것을 즐깁니다.</p>
        </FadeUp>
      </section>

      <motion.section
        initial={{ y: "100%" }}
        animate={showSecond ? { y: 0 } : { y: "100%" }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ minHeight: "1000vh" }} // 여기에 길이 지정
        className="fixed inset-0 bg-white text-black flex flex-col px-4 z-10">
        <FadeUp delay={0} className="text-5xl font-bold">
          두 번째 페이지
        </FadeUp>
        <FadeUp delay={0.6} className="mt-4 max-w-lg text-lg mx-auto">
          사용하는 기술 스택입니다.
        </FadeUp>
        {/* 아이콘 리스트 */}
        <div className="overflow-hidden w-full mt-12">
          <motion.div
            className="flex gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}>
            {[...icons, ...icons].map((src, index) => (
              <Image
                key={index}
                src={src}
                alt="stack"
                width={50}
                height={50}
                className="rounded-md"
              />
            ))}
          </motion.div>
        </div>
      </motion.section>

      <div style={{ height: "200vh" }} />

      <motion.section
        initial={{ y: "100%" }}
        animate={showThird ? { y: 0 } : { y: "100%" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="fixed inset-0 bg-gray-100 text-black flex flex-col items-center justify-center text-center px-4 z-20">
        <FadeUp delay={0} className="text-5xl font-bold">
          세 번째 페이지
        </FadeUp>
        <FadeUp delay={0.6} className="mt-4 max-w-lg text-lg mx-auto">
          프로젝트 포트폴리오입니다.
        </FadeUp>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">프로젝트 1</h3>
            <p className="text-gray-600 mb-4">프로젝트 설명이 들어갑니다.</p>
            <div className="flex gap-2">
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                React
              </span>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                Next.js
              </span>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">프로젝트 2</h3>
            <p className="text-gray-600 mb-4">프로젝트 설명이 들어갑니다.</p>
            <div className="flex gap-2">
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                TypeScript
              </span>
              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                Tailwind
              </span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <section className="mt-[200vh] px-6 py-16 bg-gray-50 flex flex-wrap justify-center gap-8">
        <Card title="카드 1" description="첫 번째 카드 설명입니다." />
        <Card title="카드 2" description="두 번째 카드 설명입니다." />
        <Card title="카드 3" description="세 번째 카드 설명입니다." />
        <Card title="카드 4" description="네 번째 카드 설명입니다." />
      </section>

      <div className="h-[200vh]" />
      <div className="fixed bottom-4 left-4 text-xs text-gray-500 select-none z-20">
        update. 24. 12. 21
      </div>
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-20">
        <Button onClick={() => alert("Chat function will be here")} icon="💬" />
        <Button
          onClick={() =>
            (window.location.href = "mailto:jeongsuu1006@gmail.com")
          }
          icon="📧"
        />
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          icon="⬆️"
        />
      </div>
    </>
  );
}
