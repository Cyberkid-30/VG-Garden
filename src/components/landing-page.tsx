import { FaCloud, FaInstagram } from "react-icons/fa";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-car flex flex-col justify-center items-center text-white text-center px-6">
      <h1 className="text-3xl md:text-7xl font-handlee font-semibold mb-10 animate-from-top">
        Welcome to WanderTours
      </h1>
      <div className="flex gap-10 flex-wrap justify-center">
        <a
          href="https://drive.google.com/your-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Google Drive"
          className="text-white text-4xl md:text-5xl transition-transform duration-300 hover:scale-125 hover:text-sky-400 active:scale-95 animate-from-left"
        >
          <FaCloud className="size-[50px] md:size-[100px]" />
        </a>
        <a
          href="https://instagram.com/your-handle"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-white text-4xl md:text-5xl transition-transform duration-300 hover:scale-125 hover:text-sky-400 active:scale-95 animate-from-right"
        >
          <FaInstagram className="size-[50px] md:size-[100px]" />
        </a>
      </div>
    </div>
  );
}
