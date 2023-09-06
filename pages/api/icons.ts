import { NextApiRequest, NextApiResponse } from "next";
import { IconType } from "react-icons";
import { FiHeart, FiStar, FiCircle } from "react-icons/fi";
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineFileDone, AiOutlineWindows } from "react-icons/ai";
import { BsDiagram3Fill } from "react-icons/bs";
import { FaPeopleLine } from "react-icons/fa6";
import { BiDollar } from "react-icons/bi";
import { TbPhotoPlus } from "react-icons/tb";

const icons: { [key: string]: IconType } = {
  heart: FiHeart,
  star: FiStar,
  circle: FiCircle,
  check: AiOutlineCheckCircle,
  close: AiOutlineCloseCircle,
  flow: BsDiagram3Fill,
  crm: FaPeopleLine,
  apps: AiOutlineWindows,
  project: AiOutlineFileDone,
  dollar: BiDollar,
  image: TbPhotoPlus,
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const { name } = req.query;
  if (typeof name === "string" && name in icons) {
    const IconComponent = icons[name];
    console.log(IconComponent)
    res.status(200).json({ icon: IconComponent });
  } else {
    res.status(400).json({ error: "Invalid icon name" });
  }
}
