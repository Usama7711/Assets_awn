import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext';
import logo from "../assets/Logo.png"
import logo_short from "../assets/logo_short.png"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import dashboard_active from "../assets/SideBar/Dashboard_active.svg"
import dashboard from "../assets/SideBar/Dashboard.svg"
import request from "../assets/SideBar/Requests.svg"
import request_active from "../assets/SideBar/Requests_active.svg"
import Documents from "../assets/SideBar/Document.svg"
import Documents_active from "../assets/SideBar/Document_active.svg"
import Templates from "../assets/SideBar/DocumentTemplates.svg"
import Templates_active from "../assets/SideBar/DocumentTemplates_active.svg"
import Doctype from "../assets/SideBar/DocumentTypes.svg"
import Doctype_active from "../assets/SideBar/DocumentTypes_active.svg"
import DocCatagiry from "../assets/SideBar/DocumentCategories.svg"
import DocCatagiry_active from "../assets/SideBar/DocumentCategories_active.svg"
import Doctag from "../assets/SideBar/DocumentTags.svg"
import Doctag_active from "../assets/SideBar/DocumentTags_active.svg"
import audio_Active from "../assets/SideBar/AuditTrail_activecopy.svg"
import { useMediaQuery } from "react-responsive";

const SideBar = () => {
    const navigate = useNavigate();
    const currentRoute = useLocation().pathname;
    const { sidebar, setSidebar } = useContext(AppContext);
    const isMobile = useMediaQuery({
        query: "(max-width: 992px)",
    });

    useEffect(() => {
        isMobile ? setSidebar(false) : setSidebar(true);
        // handleOpenMenu();
        return () => { };
    }, [isMobile]);
    return (
        <main className="cx-sidebar">
            <div
                className={
                    sidebar ? "cx-sidebar-wrapper " : "cx-sidebar-wrapper sidebarActive"
                }
            >
                {sidebar ?
                    <div className="logoMain">
                        <img src={logo} alt="" />
                    </div> :
                    <div className="logoMain logoMainshort  ">
                        <img src={logo_short} alt="" />
                    </div>
                }
                <div className="sideBarContent">
                    <div className="sideBarMain">
                        <div className="sideBarMainHeading">Main</div>
                        <div className="menulist">
                            <div
                                className={
                                    currentRoute === "/"
                                        ? "singleMenu singleMenuActiva"
                                        : "singleMenu"
                                }
                            >
                                <Link to="/" className='icon-menu-name' >
                                    <div className="icon-left">
                                        {currentRoute === "/Dashboard"
                                            ? (
                                                <img src={dashboard_active} alt="" />
                                            ) : (
                                                <img src={dashboard} alt="" />
                                            )}
                                    </div>
                                    <div
                                        className={sidebar ? "menu-name" : "d-none"}
                                    >
                                        Dashboard
                                    </div>
                                </Link>
                            </div>
                            <div
                                className={
                                    currentRoute === "/Requests"
                                        ? "singleMenu singleMenuActiva"
                                        : "singleMenu"
                                }
                            >
                                <Link to="/Requests" className='icon-menu-name' >
                                    <div className="icon-left">
                                        {currentRoute === "/Requests"
                                            ? (
                                                <img src={request_active} alt="" />
                                            ) : (
                                                <img src={request} alt="" />
                                            )}
                                    </div>
                                    <div
                                        className={sidebar ? "menu-name" : "d-none"}
                                    >
                                        Requests
                                    </div>
                                </Link>
                            </div>
                            <div
  className={
    currentRoute === "/assets"  // Change from "/Documents" to "/assets"
      ? "singleMenu singleMenuActiva"
      : "singleMenu"
  }
>
  <Link to="/assets" className="icon-menu-name">  {/* Change "/Documents" to "/assets" */}
    <div className="icon-left">
      {currentRoute === "/assets"  // Change from "/Documents" to "/assets"
        ? (
          <img src={Documents_active} alt="" />
        ) : (
          <img src={Documents} alt="" />
        )}
    </div>
    <div className={sidebar ? "menu-name" : "d-none"}>
      Assets  {/* Ensure this text reflects the page you want */}
    </div>
  </Link>
</div>

                        </div>
                    </div>
                    <div className="sideBarMain">
                        <div className="sideBarMainHeading">Masters</div>
                        <div className="menulist">
                            <div
                                className={
                                    currentRoute === "/DocumentTemplates"
                                        ? "singleMenu singleMenuActiva"
                                        : "singleMenu"
                                }
                            >
                                <Link to="/DocumentTemplates" className='icon-menu-name' >
                                    <div className="icon-left">
                                        {currentRoute === "/DocumentTemplates"
                                            ? (
                                                <img src={Templates_active} alt="" />
                                            ) : (
                                                <img src={Templates} alt="" />
                                            )}
                                    </div>
                                    <div
                                        className={sidebar ? "menu-name" : "d-none"}
                                    >
                                       Asset Types
                                    </div>
                                </Link>
                            </div>
                            <div
                                className={
                                    currentRoute === "/Documenttypes"
                                        ? "singleMenu singleMenuActiva"
                                        : "singleMenu"
                                }
                            >
                                <Link to="/Documenttypes" className='icon-menu-name' >
                                    <div className="icon-left">
                                        {currentRoute === "/Documenttypes"
                                            ? (
                                                <img src={Doctype_active} alt="" />
                                            ) : (
                                                <img src={Doctype} alt="" />
                                            )}
                                    </div>
                                    <div
                                        className={sidebar ? "menu-name" : "d-none"}
                                    >
                                       Asset Categories
                                    </div>
                                </Link>
                            </div>
                            <div
                                className={
                                    currentRoute === "/DocumentCategories"
                                        ? "singleMenu singleMenuActiva"
                                        : "singleMenu"
                                }
                            >
                                <Link to="/DocumentCategories" className='icon-menu-name' >
                                    <div className="icon-left">
                                        {currentRoute === "/DocumentCategories"
                                            ? (
                                                <img src={DocCatagiry_active} alt="" />
                                            ) : (
                                                <img src={DocCatagiry} alt="" />
                                            )}
                                    </div>
                                    <div
                                        className={sidebar ? "menu-name" : "d-none"}
                                    >
                                        Asset Tags
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="sideBarMain">
                        <div className="sideBarMainHeading">Audit Trail</div>
                        <div className="menulist">
                            <div className={
                                currentRoute === "/AuditTrail"
                                    ? "singleMenu singleMenuActiva"
                                    : "singleMenu"
                            }
                            >
                                <Link to="/AuditTrail" className='icon-menu-name' >
                                    <div className="icon-left">
                                        {currentRoute === "/AuditTrail"
                                            ? (
                                                <img src={audio_Active} alt="" />
                                            ) : (
                                                <img src={audio_Active} alt="" />
                                            )}
                                    </div>
                                    <div
                                        className={sidebar ? "menu-name" : "d-none"}
                                    >
                                        Audit Trail
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default SideBar