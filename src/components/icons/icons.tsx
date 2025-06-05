import { FaCloud, FaInstagram, FaWhatsapp, FaPhotoVideo } from "react-icons/fa";
import type { IconItemProps } from "./iconItem";

const size = "size-[50px] md:size-[100px]";

export const Icons: IconItemProps[] = [
  {
    url: "https://drive.google.com/drive/folders/1KeG1r1zyzvatr_l-TqNjfR6oBHUAlfLX",
    icon: <FaCloud className={size} />,
    arial_label: "Google Drive",
    animation: "animate-from-left",
  },
  {
    url: "https://buscaraspirar21.pixieset.com/velvetgreengarden-1/",
    icon: <FaPhotoVideo className={size} />,
    arial_label: "Gallery",
    animation: "animate-from-bottom",
  },
  {
    url: "https://www.instagram.com/velvetgreengarden?igsh=MTBrMXllcTF4cmk3NA%3D%3D&utm_source=qr",
    icon: <FaInstagram className={size} />,
    arial_label: "Instagram",
    animation: "animate-from-bottom",
  },
  {
    url: "https://wa.me/message/FIS7HOZMTRSEF1",
    icon: <FaWhatsapp className={size} />,
    arial_label: "Whatsapp",
    animation: "animate-from-right",
  },
];
