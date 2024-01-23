import { IoVideocamSharp } from "react-icons/io5";
import { AiOutlineHistory } from "react-icons/ai";
import { PATH } from "./route/path";

export const sidebarData = [
  { name: "Stream", Icon: IoVideocamSharp, link: PATH.home },
  { name: "History", Icon: AiOutlineHistory, link: PATH.history },
];

export const theme = {
  darkModeBackground: "gray-800",
  lightModeBackground: "white",
  darkModeFont: "white",
  lightModeFont: "gray-800",
};
