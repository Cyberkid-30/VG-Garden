import { FaCloud, FaInstagram, FaWhatsapp, FaPhotoVideo } from "react-icons/fa";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-car flex flex-col justify-center items-center text-white text-center px-6">
      <h1 className="text-4xl md:text-7xl font-handlee font-semibold mb-10 animate-from-top">
        Welcome to Velvet Green Garden
      </h1>
      <div className="flex gap-5 flex-wrap justify-center">
        <a
          href="https://drive.google.com/drive/folders/1KeG1r1zyzvatr_l-TqNjfR6oBHUAlfLX"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Google Drive"
          className="text-white text-4xl md:text-5xl transition-transform duration-300 hover:scale-125 hover:text-sky-400 active:scale-95 animate-from-left"
        >
          <FaCloud className="size-[50px] md:size-[100px]" />
        </a>
        <a
          href="https://buscaraspirar21.pixieset.com/velvetgreengarden-1/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-white text-4xl md:text-5xl transition-transform duration-300 hover:scale-125 hover:text-sky-400 active:scale-95 animate-from-bottom"
        >
          <FaPhotoVideo className="size-[50px] md:size-[100px]" />
        </a>
        <a
          href="https://www.instagram.com/velvetgreengarden?igsh=MTBrMXllcTF4cmk3NA%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-white text-4xl md:text-5xl transition-transform duration-300 hover:scale-125 hover:text-sky-400 active:scale-95 animate-from-bottom"
        >
          <FaInstagram className="size-[50px] md:size-[100px]" />
        </a>
        <a
          href="https://wa.me/message/FIS7HOZMTRSEF1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-white text-4xl md:text-5xl transition-transform duration-300 hover:scale-125 hover:text-sky-400 active:scale-95 animate-from-right"
        >
          <FaWhatsapp className="size-[50px] md:size-[100px]" />
        </a>
      </div>
      <div className="absolute bottom-10 px-3">
        Tap on the above icons to access our online gallery, Instagram and
        WhatsApp respectively{" "}
        <div className="inline-block text-2xl animate-move-up">&uarr;</div>
      </div>
    </div>
  );
}
