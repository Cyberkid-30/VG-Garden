import { Icons } from "./icons/icons";
import IconItem from "./icons/iconItem";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-car flex flex-col justify-center items-center text-white text-center px-6">
      <h1 className="text-4xl md:text-7xl font-inter font-semibold mb-10 animate-from-top">
        Welcome to The Velvet Green
      </h1>
      <div className="flex gap-5 flex-wrap justify-center">
        {Icons.map((icon) => (
          <IconItem
            key={icon.arial_label}
            url={icon.url}
            icon={icon.icon}
            arial_label={icon.arial_label}
            animation={icon.animation}
          />
        ))}
      </div>
      <div className="absolute flex flex-col gap-1 bottom-10 px-6">
        <div className="text-2xl animate-move-up">&uarr;</div>
        <p>
          Tap on the above icons to access our online gallery, Instagram and
          WhatsApp respectively
        </p>
      </div>
    </div>
  );
}
