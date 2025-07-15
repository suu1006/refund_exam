interface ButtonProps {
  icon?: string;
  onClick: () => void;
}

export default function Button({ icon, onClick }: ButtonProps) {
  return (
    <button
      className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-500 transition-colors duration-300"
      onClick={onClick}>
      {icon}
    </button>
  );
}
