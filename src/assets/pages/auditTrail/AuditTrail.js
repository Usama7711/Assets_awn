import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext';
import { Dropdown, Form } from 'react-bootstrap';
import search from "../../assets/images/Search.svg"

const AuditTrail = () => {
    const { sidebar, setSidebar } = useContext(AppContext);
    return (
        <div
            className={sidebar ? "taskMain " : "cx-active taskMain"}
            id='cx-main'
        >
            <div className='commom_main_heading'>
                <div className="">
                    <p className="heading">Audit Trail</p>
                </div>
                <div className="headerContain">
                    <div className="search">
                        <img src={search} alt="" />
                        <input type="text" placeholder='Search' />
                    </div>
                    <div className="dropDownBTN">
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Category All
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="dropDownBTN">
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Performed By All
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="dropDownBTN">
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Export All
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
            <div className="table-wrapper-main mb-4">
                <table>
                    <tr className="firstTabelRow">
                        <th>
                            <Form.Check
                                type='checkbox'
                                id="all"
                                className='Common_checkbox'
                            // label=
                            />

                        </th>
                        <th>Action Performed</th>
                        <th>Document ID</th>
                        <th>Document Category</th>
                        <th>Document Title</th>
                        <th>Performed By</th>
                        <th>Date & Time</th>
                    </tr>

                    <tr className="table-row-main">
                        <td>
                            <Form.Check
                                type='checkbox'
                                id="all"
                                className='Common_checkbox'
                            // label=
                            />
                        </td>
                        <td>Document Created</td>
                        <td>Tag DOC-12345</td>
                        <td>Category</td>
                        <td>Quarterly Financial Report</td>
                        <td>Admin (John Doe)</td>
                        <td>2024-12-07, 14:35 UTC</td>
                       
                    </tr>
                    <tr className="table-row-main">
                        <td>
                            <Form.Check
                                type='checkbox'
                                id="all"
                                className='Common_checkbox'
                            // label=
                            />
                        </td>
                        <td>Document Created</td>
                        <td>Tag DOC-12345</td>
                        <td>Category</td>
                        <td>Quarterly Financial Report</td>
                        <td>Admin (John Doe)</td>
                        <td>2024-12-07, 14:35 UTC</td>
                       
                    </tr>
                    <tr className="table-row-main">
                        <td>
                            <Form.Check
                                type='checkbox'
                                id="all"
                                className='Common_checkbox'
                            // label=
                            />
                        </td>
                        <td>Document Created</td>
                        <td>Tag DOC-12345</td>
                        <td>Category</td>
                        <td>Quarterly Financial Report</td>
                        <td>Admin (John Doe)</td>
                        <td>2024-12-07, 14:35 UTC</td>
                       
                    </tr>
                    <tr className="table-row-main">
                        <td>
                            <Form.Check
                                type='checkbox'
                                id="all"
                                className='Common_checkbox'
                            // label=
                            />
                        </td>
                        <td>Document Created</td>
                        <td>Tag DOC-12345</td>
                        <td>Category</td>
                        <td>Quarterly Financial Report</td>
                        <td>Admin (John Doe)</td>
                        <td>2024-12-07, 14:35 UTC</td>
                       
                    </tr>
                    <tr className="table-row-main">
                        <td>
                            <Form.Check
                                type='checkbox'
                                id="all"
                                className='Common_checkbox'
                            // label=
                            />
                        </td>
                        <td>Document Created</td>
                        <td>Tag DOC-12345</td>
                        <td>Category</td>
                        <td>Quarterly Financial Report</td>
                        <td>Admin (John Doe)</td>
                        <td>2024-12-07, 14:35 UTC</td>
                       
                    </tr>
                    <tr className="table-row-main">
                        <td>
                            <Form.Check
                                type='checkbox'
                                id="all"
                                className='Common_checkbox'
                            // label=
                            />
                        </td>
                        <td>Document Created</td>
                        <td>Tag DOC-12345</td>
                        <td>Category</td>
                        <td>Quarterly Financial Report</td>
                        <td>Admin (John Doe)</td>
                        <td>2024-12-07, 14:35 UTC</td>
                       
                    </tr>
                    <tr className="table-row-main">
                        <td>
                            <Form.Check
                                type='checkbox'
                                id="all"
                                className='Common_checkbox'
                            // label=
                            />
                        </td>
                        <td>Document Created</td>
                        <td>Tag DOC-12345</td>
                        <td>Category</td>
                        <td>Quarterly Financial Report</td>
                        <td>Admin (John Doe)</td>
                        <td>2024-12-07, 14:35 UTC</td>
                       
                    </tr>
                    <tr className="table-row-main">
                        <td>
                            <Form.Check
                                type='checkbox'
                                id="all"
                                className='Common_checkbox'
                            // label=
                            />
                        </td>
                        <td>Document Created</td>
                        <td>Tag DOC-12345</td>
                        <td>Category</td>
                        <td>Quarterly Financial Report</td>
                        <td>Admin (John Doe)</td>
                        <td>2024-12-07, 14:35 UTC</td>
                       
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default AuditTrail