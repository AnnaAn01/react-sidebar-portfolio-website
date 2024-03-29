import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import "./Sidebar.css";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navSidebar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "side-menu active" : "side-menu"}>
          <ul className="side-menu-items" onClick={showSidebar}>
            <li className="sidebar-toggle">
              <Link to="#" className="close-menu">
                <FaIcons.FaWindowClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className="sidebardata-span">{item.title}</span>
                  </Link>
                </li>
              );
            })}

            <span className="get-in-touch">GET IN TOUCH</span>
            <div className="sidebar-social-media-icons">
              <span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.gmail.com/"
                >
                  <MdIcons.MdEmail className="sidebar-sns" />
                </a>
              </span>
              <span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/"
                >
                  <FaIcons.FaLinkedin className="sidebar-sns" />
                </a>
              </span>
              <span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/"
                >
                  <FaIcons.FaGithubSquare className="sidebar-sns" />
                </a>
              </span>
              <span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/"
                >
                  <FaIcons.FaTwitterSquare className="sidebar-sns" />
                </a>
              </span>
              <span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/"
                >
                  <FaIcons.FaYoutube className="sidebar-sns" />
                </a>
              </span>
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Sidebar;
