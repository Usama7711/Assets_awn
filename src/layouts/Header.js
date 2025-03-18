import React, { useContext } from 'react'
import sideBarClocer from "../assets/Compress.svg"
import { AppContext } from '../context/AppContext';
import docuMang from "../assets/ActionMenu.svg"
import notification from "../assets/Notification.svg"
import lang from "../assets/Language.svg"
import help from "../assets/HelpSupport.svg"
import { Dropdown } from 'react-bootstrap';
const Header = () => {
    const { sidebar, setSidebar } = useContext(AppContext);

    const handleSidebar = () => {
        setSidebar(!sidebar);
    };

    return (
        <main className="cx-header">
            <div
                className={
                    sidebar ? "cx-header-wrapper " : "cx-header-wrapper headerActive"
                }
            >
                <div className="header_Container">
                    <div className="sideBarCloser">
                        {sidebar ?
                            <img src={sideBarClocer} alt="" onClick={handleSidebar} /> :
                            <img src={sideBarClocer} alt="" onClick={handleSidebar} className='openSideBarImage' />
                        }
                    </div>
                    <div className="header_left_content">
                        <div className="iconWrapper">
                            <div className="documentmanage">
                                <img src={docuMang} alt="" />
                                <p>Asset Management</p>
                            </div>
                            <div className="notificationWrapper">
                                <img src={notification} alt="" />
                                <img src={lang} alt="" />
                                <img src={help} alt="" />
                            </div>
                        </div>
                        <div className="profiles">
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    {/* AWN */}
                                    <p>AWN</p>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Header