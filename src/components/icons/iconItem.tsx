import { type JSX } from "react";

export interface IconItemProps {
  url: string;
  icon: JSX.Element;
  arial_label: string;
  animation: string;
}

export default function IconItem({
  url,
  icon,
  arial_label,
  animation,
}: IconItemProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={arial_label}
      className={`text-white transition-transform duration-300 hover:scale-125 hover:text-sky-400 active:scale-95 ${animation}`}
    >
      {icon}
    </a>
  );
}
