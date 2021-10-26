import React from "react";
import * as RiIcons from "react-icons/ri";
import * as ImIcons from "react-icons/im";
import * as MdIcons from "react-icons/md";
import * as HiIcons from "react-icons/hi";
import * as TiIcons from "react-icons/ti";

export const SidebarData = [
  {
    title: "About me",
    path: "/about",
    icon: <MdIcons.MdPersonOutline />,
    cName: "side-text",
  },
  {
    title: "Portfolio",
    path: "/portfolio",
    icon: <HiIcons.HiOutlineDesktopComputer />,
    cName: "side-text",
  },
  {
    title: "My Cv",
    path: "/mycv",
    icon: <RiIcons.RiFilePaper2Line />,
    cName: "side-text",
  },
  {
    title: "Blog",
    path: "/blog",
    icon: <HiIcons.HiOutlineNewspaper />,
    cName: "side-text",
  },
  {
    title: "Contact Me",
    path: "/contactMe",
    icon: <TiIcons.TiMessages />,
    cName: "side-text",
  },
];
