import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext';

const Dashboard = () => {
    const { sidebar, setSidebar } = useContext(AppContext);
    return (
        <div
            className={sidebar ? "taskMain " : "cx-active taskMain"}
            id='cx-main'
        >
            <div className='commom_main_heading'>
                <p className="heading">Dashboard</p>
            </div>
        </div>
    )
}

export default Dashboard