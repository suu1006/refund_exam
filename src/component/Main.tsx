"use client";
import { AnimatePresence, motion } from "framer-motion";
import FadeUp from "./FadeUp";
import Button from "./Button";
import Image from "next/image";
import { useState } from "react";

export default function Main() {
  const icons = [
    "/icons/java.png",
    "/icons/springboot.png",
    "/icons/react.png",
    "/icons/nextjs.png",
    "/icons/react-query.png",
    "/icons/tailwindcss.png",
    "/icons/typescript.png",
    "/icons/prisma.png",
    "/icons/aws-codecommit.png",
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["FrontEnd", "BackEnd", "Database", "ETC"];

  const skills = [
    {
      src: "/icons/html5.png",
      title: "HTML5",
      desc: "기본적인 HTML 태그를 사용할 수 있습니다.",
      category: "FrontEnd",
    },
    {
      src: "/icons/css3.png",
      title: "CSS3",
      desc: "순수 CSS만을 이용하여 레이아웃을 구성할 수 있습니다.",
      category: "FrontEnd",
    },
    {
      src: "/icons/javascript.png",
      title: "JavaScript",
      desc: "ES6+ 문법을 활용하여 코드를 작성할 수 있습니다.",
      category: "FrontEnd",
    },
    {
      src: "/icons/typescript.png",
      title: "TypeScript",
      desc: "제네릭, 유틸리티 타입 등을 이용하여 명확한 코드를 작성할 수 있습니다.",
      category: "FrontEnd",
    },
    {
      src: "/icons/react.png",
      title: "React",
      desc: "컴포넌트 기반 UI를 구성하고 상태 관리를 할 수 있습니다.",
      category: "FrontEnd",
    },
    {
      src: "/icons/nextjs.png",
      title: "Next.js",
      desc: "SSR/CSR을 적절히 활용할 수 있습니다.",
      category: "FrontEnd",
    },
    {
      src: "/icons/java.png",
      title: "Java",
      desc: "학부 시절부터 사용해온 언어로, 다양한 과제를 수행했습니다.",
      category: "BackEnd",
    },
    {
      src: "/icons/springboot.png",
      title: "Spring Boot",
      desc: "REST API 서버를 구현할 수 있습니다.",
      category: "BackEnd",
    },
    {
      src: "/icons/prisma.png",
      title: "Prisma",
      desc: "ORM을 활용하여 DB와 타입 안정성 있게 연동할 수 있습니다.",
      category: "Database",
    },
    {
      src: "/icons/aws-codecommit.png",
      title: "CodeCommit",
      desc: "AWS 환경에서 Git 저장소를 연동할 수 있습니다.",
      category: "ETC",
    },
  ];

  return (
    <>
      {/* 첫 번째 페이지 */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-800 text-white px-4">
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

      {/* 두 번째 페이지 */}
      <section className="min-h-screen bg-white text-black px-4 py-20 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-4">기술 스택</h2>
        <p className="text-gray-600 mb-12 text-center">
          제가 다룰 수 있는 기술들을 분류별로 소개합니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl w-full">
          {/* 카테고리 */}
          <div className="col-span-1 flex flex-col">
            <span className="text-[#4fffd7] font-bold text-xl mb-6 border-l-4 border-[#4fffd7] pl-4">
              Categories
            </span>
            <div className="flex flex-col gap-4 pl-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-left transition font-medium ${
                    selectedCategory === cat
                      ? "text-black font-semibold"
                      : "text-gray-600 hover:text-black"
                  }`}>
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* 카드 */}
          <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <AnimatePresence>
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="bg-gray-50 rounded-xl shadow-md p-6 flex items-start gap-4 hover:shadow-lg transition">
                  <Image
                    src={skill.src}
                    alt={skill.title}
                    width={50}
                    height={50}
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{skill.title}</h3>
                    <p className="text-gray-500 text-sm mt-1">{skill.desc}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 세 번째 페이지 */}
      <section className="min-h-screen bg-gray-100 text-black flex flex-col items-center justify-center text-center px-4">
        <FadeUp delay={0} className="text-5xl font-bold">
          프로젝트 포트폴리오
        </FadeUp>
        <FadeUp delay={0.6} className="mt-4 max-w-lg text-lg mx-auto">
          프로젝트 설명이 들어갑니다.
        </FadeUp>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* 카드 예시 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:w-1/2 h-56 md:h-auto relative">
              <Image
                src="/images/refund_main.png" // 프로젝트 대표 이미지
                alt="refund_project"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 flex flex-col justify-center md:w-1/2">
              <h3 className="text-2xl font-bold mb-2 text-left">프로젝트 1</h3>
              <p className="text-gray-600 mb-4 text-left">
                간단한 설명이 들어갑니다.
              </p>
              <div className="flex gap-2 mb-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  React
                </span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                  Next.js
                </span>
              </div>
              <span className="text-xs text-gray-400 text-left">2024.06</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 네번째 페이지 */}
      <section className="min-h-screen bg-[#111827] text-white flex flex-col items-center justify-center text-center px-4">
        <FadeUp delay={0} className="text-5xl font-bold">
          Contact
        </FadeUp>
        <FadeUp delay={0.6} className="mt-4 text-lg max-w-md mx-auto">
          정수에게 연락하시려면 아래 버튼을 클릭하세요.
        </FadeUp>
        <div className="mt-8">
          <Button
            onClick={() =>
              (window.location.href = "mailto:jeongsuu1006@gmail.com")
            }
            icon="📧"
          />
        </div>
      </section>

      {/* 고정 버튼 */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-40">
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
