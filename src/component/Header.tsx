"use client";

export default function Header() {
  return (
    <nav className="absolute top-8 left-8 flex space-x-8 text-sm font-medium">
      <a
        href="https://github.com/yourgithub"
        target="_blank"
        rel="noopener noreferrer"
        className="relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-black after:opacity-70">
        GitHub
      </a>
      <a
        href="https://velog.io/@yourvelog"
        target="_blank"
        rel="noopener noreferrer"
        className="relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-black after:opacity-70">
        Velog
      </a>
    </nav>
  );
}
