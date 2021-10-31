import React from "react";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";
import * as HiIcons from "react-icons/hi";
import * as TiIcons from "react-icons/ti";

export const SidebarData = [
  {
    title: "ABOUT ME",
    path: "/",
    icon: <MdIcons.MdPersonOutline className="sidebar-icon-style" />,
    cName: "side-text",
  },
  {
    title: "PORTFOLIO",
    path: "/portfolio",
    icon: <HiIcons.HiOutlineDesktopComputer className="sidebar-icon-style" />,
    cName: "side-text",
  },
  {
    title: "MY CV",
    path: "/mycv",
    icon: <RiIcons.RiFilePaper2Line className="sidebar-icon-style" />,
    cName: "side-text",
  },
  {
    title: "BLOG",
    path: "/blog",
    icon: <HiIcons.HiOutlineNewspaper className="sidebar-icon-style" />,
    cName: "side-text",
  },
  {
    title: "CONTACT ME",
    path: "/contactMe",
    icon: <TiIcons.TiMessages className="sidebar-icon-style" />,
    cName: "side-text",
  },
];
