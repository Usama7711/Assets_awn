import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext';
import { Button, Dropdown, DropdownButton, Form, Offcanvas, Table } from 'react-bootstrap';
import CreatedPersone from "../../assets/images/Created_Persone.png"
import OptionDot from "../../assets/images/option.svg"
import search from "../../assets/images/Search.svg"
import add from "../../assets/images/Add.svg"
import frame1 from "../../assets/images/Frame1.svg"
import frame2 from "../../assets/images/Frame2.svg"
import frame3 from "../../assets/images/Frame3.svg"
import frame4 from "../../assets/images/Frame4.svg"
import frame5 from "../../assets/images/Frame5.svg"
import star from "../../assets/images/star.svg"
import close from "../../assets/images/Close.svg"
import backArrow from "../../assets/images/backArrow.svg"
import Profile_Image from "../../assets/images/Profile_Image.svg"
import template from "../../assets/images/template.svg"
import Edit from "../../assets/images/Edit.svg"
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Accordion from 'react-bootstrap/Accordion';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import MyVerticallyCenteredModal from '../components/MyVerticallyCenteredModal';
import modals  from "../components/ModalData"


const Requests = () => {
    const [newRequest, setnewRequest] = useState(false);
    const [requestDone, setRequestDone] = useState(false);
    const [customerDone, setCustomertDone] = useState(false);

    const handleCloseDone = () => {
        setRequestDone(false); // Existing functionality
        handleModalOpen(modals[0]); // Add modal opening functionality
    };
    const handleShowDone = () => setRequestDone(true);

    const handleCloseCustomerDone = () => {
        setCustomertDone(false); // Existing functionality
        handleModalOpen(modals[0]); // Add modal opening functionality
    };
    const handleShowCustomerDone = () => setCustomertDone(true);

    const handleClose = () => setnewRequest(false);
    const handleShow = () => setnewRequest(true);
    const { sidebar, setSidebar } = useContext(AppContext);

    const [validated, setValidated] = useState(false);
    console.log(validated)

    const handleSubmit = (event, actionType) => {
        event.preventDefault(); // Prevent form submission
        event.stopPropagation(); // Stop event propagation

        const form = event.currentTarget; // Get the form element

        if (form.checkValidity() === true) {
            console.log("Form is valid");

            if (actionType === "requestDone") {
                setRequestDone(true);
                setnewRequest(false);
                setCustomertDone(false);
                // Perform the navigation or action for "requestDone"
            } else if (actionType === "newRequest") {
                setRequestDone(false);
                setnewRequest(false);
                setCustomertDone(true);
                // Perform the navigation or action for "newRequest"
            }
        } else {
            console.log("Form is not valid");
            setValidated(true); // Trigger validation feedback
        }
    };


    // modal data
    const [modalShow, setModalShow] = useState(false);
    const [secondModalShow, setSecondModalShow] = useState(false);
    const [modalData, setModalData] = useState({ indicator: '', heading: '', Details: '', leftBTN: '', rightBTN: '', colorCode: "", LeftColorBTN: "", RightColorBTN: "" });

    // Array of modals with different data
   

    // Open modal with specific data
    const handleModalOpen = (data) => {
        setModalShow(true)
        setModalData(data);
    };



    return (
        <div
            className={sidebar ? "taskMain " : "cx-active taskMain"}
            id='cx-main'
        >
            <div className="commom_main_heading">
                <p className="heading">Requests</p>
                <div className="headerContain">
                    <div className="search">
                        <img src={search} alt="" />
                        <input type="text" placeholder='Search' />
                    </div>
                    <div className="dropDownBTN">
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Export CSV
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="AddBTN" onClick={handleShow}>
                        <img src={add} alt="" />
                        <p>New Requests</p>
                    </div>
                </div>
            </div>
            <div className="TabsContent">
                <div className="singleTabs">
                    <img src={frame3} alt="" />
                    <div className="countSection">
                        <p className="count">50</p>
                        <p className="title">Pending Requests </p>
                    </div>
                </div>
                <div className="singleTabs">
                    <img src={frame1} alt="" />
                    <div className="countSection">
                        <p className="count">50</p>
                        <p className="title">Approved Requests </p>
                    </div>
                </div>
                <div className="singleTabs">
                    <img src={frame2} alt="" />
                    <div className="countSection">
                        <p className="count">50</p>
                        <p className="title">Assigned Requests </p>
                    </div>
                </div>
                <div className="singleTabs">
                    <img src={frame4} alt="" />
                    <div className="countSection">
                        <p className="count">50</p>
                        <p className="title">Completed Requests </p>
                    </div>
                </div>
                <div className="singleTabs">
                    <img src={frame5} alt="" />
                    <div className="countSection">
                        <p className="count">20</p>
                        <p className="title">Rejected Requests </p>
                    </div>
                </div>
            </div>
            <div className="SubHeading">
                New Requests <span>(5)</span>
            </div>
            <div className="text">
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
                            <th>Request Number</th>
                            <th>
                                <div className="entries-wrapper">
                                    {/* <p>Entries per page</p> */}
                                    <select
                                        className="form-select select-drop-icon"
                                        aria-label="Default select example"
                                    >
                                        <option selected>Name</option>
                                        <option value="1">20</option>
                                        <option value="2">10</option>
                                        <option value="3">5</option>
                                    </select>
                                </div>
                            </th>
                            <th>
                                <div className="entries-wrapper">
                                    {/* <p>Entries per page</p> */}
                                    <select
                                        className="form-select select-drop-icon"
                                        aria-label="Default select example"
                                    >
                                        <option selected>Request Type</option>
                                        <option value="1">20</option>
                                        <option value="2">10</option>
                                        <option value="3">5</option>
                                    </select>
                                </div>
                            </th>
                            <th>
                                <div className="entries-wrapper">
                                    {/* <p>Entries per page</p> */}
                                    <select
                                        className="form-select select-drop-icon"
                                        aria-label="Default select example"
                                    >
                                        <option selected>Created By</option>
                                        <option value="1">20</option>
                                        <option value="2">10</option>
                                        <option value="3">5</option>
                                    </select>
                                </div>
                            </th>
                            <th>
                                <div className="entries-wrapper">
                                    {/* <p>Entries per page</p> */}
                                    <select
                                        className="form-select select-drop-icon"
                                        aria-label="Default select example"
                                    >
                                        <option selected>Source</option>
                                        <option value="1">20</option>
                                        <option value="2">10</option>
                                        <option value="3">5</option>
                                    </select>
                                </div>
                            </th>
                            <th>
                                <div className="entries-wrapper">
                                    {/* <p>Entries per page</p> */}
                                    <select
                                        className="form-select select-drop-icon"
                                        aria-label="Default select example"
                                    >
                                        <option selected>Request Date</option>
                                        <option value="1">20</option>
                                        <option value="2">10</option>
                                        <option value="3">5</option>
                                    </select>
                                </div>
                            </th>
                            <th>
                                <div className="status">
                                    <p>Status</p>
                                </div>
                            </th>
                            <th>
                                <Dropdown as="div">
                                    <Dropdown.Toggle
                                        split
                                        variant="success"
                                        id="dropdown-split-basic"
                                        className="custom-dropdown-toggle"
                                    >
                                        {/* Replace the arrow with custom image */}
                                        <img src={OptionDot} alt="dropdown-icon" className="custom-dropdown-img" />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => handleModalOpen(modals[5])}>
                                            Delete
                                        </Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleModalOpen(modals[1])}>
                                            Deactivate
                                        </Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleModalOpen(modals[2])}>
                                            Reactivate
                                        </Dropdown.Item>

                                    </Dropdown.Menu>
                                </Dropdown>
                            </th>
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
                            <td>REQ001</td>
                            <td>Barister Tools</td>
                            <td>Business</td>
                            <td>
                                <div className="created_Persone">
                                    <div className="porfileImg">
                                        <img src={CreatedPersone} alt="" />
                                    </div>
                                    <div className="containiet">
                                        <p className="name">Ahmed Al Anazi</p>
                                        <p className="email">JaneCooper@awn.com</p>
                                    </div>
                                </div>
                            </td>
                            <td>Offline/WhatsApp</td>
                            <td>20.02.2024</td>
                            <td className="status-label green">
                                <div className=""> <span></span>Active</div>
                            </td>
                            <td>
                                <Dropdown as="div">
                                    <Dropdown.Toggle
                                        split
                                        variant="success"
                                        id="dropdown-split-basic"
                                        className="custom-dropdown-toggle"
                                    >
                                        {/* Replace the arrow with custom image */}
                                        <img src={OptionDot} alt="dropdown-icon" className="custom-dropdown-img" />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => handleModalOpen(modals[5])}>
                                            Delete
                                        </Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleModalOpen(modals[1])}>
                                            Deactivate
                                        </Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleModalOpen(modals[2])}>
                                            Reactivate
                                        </Dropdown.Item>

                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
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
                            <td>REQ002</td>
                            <td>Dots Tools</td>
                            <td>Employees</td>
                            <td>
                                <div className="created_Persone">
                                    <div className="porfileImg">
                                        <img src={CreatedPersone} alt="" />
                                    </div>
                                    <div className="containiet">
                                        <p className="name">Abdul Salam</p>
                                        <p className="email">JaneCooper@awn.com</p>
                                    </div>
                                </div>
                            </td>
                            <td>Offline/Message</td>
                            <td>20.02.2024</td>
                            <td className="status-label pending">
                                <div className=""><span></span>Pending</div>
                            </td>
                            <td>
                                <Dropdown as="div">
                                    <Dropdown.Toggle
                                        split
                                        variant="success"
                                        id="dropdown-split-basic"
                                        className="custom-dropdown-toggle"
                                    >
                                        {/* Replace the arrow with custom image */}
                                        <img src={OptionDot} alt="dropdown-icon" className="custom-dropdown-img" />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => handleModalOpen(modals[5])}>
                                            Delete
                                        </Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleModalOpen(modals[1])}>
                                            Deactivate
                                        </Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleModalOpen(modals[2])}>
                                            Reactivate
                                        </Dropdown.Item>

                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
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
                            <td>REQ003</td>
                            <td>Wosol</td>
                            <td>Business</td>
                            <td>
                                <div className="created_Persone">
                                    <div className="porfileImg">
                                        <img src={CreatedPersone} alt="" />
                                    </div>
                                    <div className="containiet">
                                        <p className="name">Basil</p>
                                        <p className="email">JaneCooper@awn.com</p>
                                    </div>
                                </div>
                            </td>
                            <td>Offline/WhatsApp</td>
                            <td>20.02.2024</td>
                            <td className="status-label pending">
                                <div className=""><span></span>Pending</div>
                            </td>
                            <td>
                                <Dropdown as="div">
                                    <Dropdown.Toggle
                                        split
                                        variant="success"
                                        id="dropdown-split-basic"
                                        className="custom-dropdown-toggle"
                                    >
                                        {/* Replace the arrow with custom image */}
                                        <img src={OptionDot} alt="dropdown-icon" className="custom-dropdown-img" />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => handleModalOpen(modals[5])}>
                                            Delete
                                        </Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleModalOpen(modals[1])}>
                                            Deactivate
                                        </Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleModalOpen(modals[2])}>
                                            Reactivate
                                        </Dropdown.Item>

                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
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
                            <td>REQ004</td>
                            <td>Mventus</td>
                            <td>HR</td>
                            <td>
                                <div className="created_Persone">
                                    <div className="porfileImg">
                                        <img src={CreatedPersone} alt="" />
                                    </div>
                                    <div className="containiet">
                                        <p className="name">Waleed</p>
                                        <p className="email">JaneCooper@awn.com</p>
                                    </div>
                                </div>
                            </td>
                            <td>Offline/WhatsApp</td>
                            <td>20.02.2024</td>
                            <td className="status-label pending">
                                <div className=""><span></span>Pending</div>
                            </td>
                            <td>
                                <Dropdown as="div">
                                    <Dropdown.Toggle
                                        split
                                        variant="success"
                                        id="dropdown-split-basic"
                                        className="custom-dropdown-toggle"
                                    >
                                        {/* Replace the arrow with custom image */}
                                        <img src={OptionDot} alt="dropdown-icon" className="custom-dropdown-img" />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => handleModalOpen(modals[5])}>
                                            Delete
                                        </Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleModalOpen(modals[1])}>
                                            Deactivate
                                        </Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleModalOpen(modals[2])}>
                                            Reactivate
                                        </Dropdown.Item>

                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                        <tr className="table-row-main">
                            <td className='lastRowFirst'>
                                <Form.Check
                                    type='checkbox'
                                    id="all"
                                    className='Common_checkbox'
                                // label=
                                />
                            </td>
                            <td>REQ005</td>
                            <td>Maroof</td>
                            <td>Employees</td>
                            <td>
                                <div className="created_Persone">
                                    <div className="porfileImg">
                                        <img src={CreatedPersone} alt="" />
                                    </div>
                                    <div className="containiet">
                                        <p className="name">Mohammad</p>
                                        <p className="email">JaneCooper@awn.com</p>
                                    </div>
                                </div>
                            </td>
                            <td>Offline/Call</td>
                            <td>20.02.2024</td>
                            <td className="status-label pending lastRowFirst">
                                <div className=""><span></span>Pending</div>
                            </td>
                            <td>
                                <Dropdown as="div">
                                    <Dropdown.Toggle
                                        split
                                        variant="success"
                                        id="dropdown-split-basic"
                                        className="custom-dropdown-toggle"
                                    >
                                        {/* Replace the arrow with custom image */}
                                        <img src={OptionDot} alt="dropdown-icon" className="custom-dropdown-img" />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => handleModalOpen(modals[5])}>
                                            Delete
                                        </Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleModalOpen(modals[1])}>
                                            Deactivate
                                        </Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleModalOpen(modals[2])}>
                                            Reactivate
                                        </Dropdown.Item>

                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>

                    </table>
                </div>
            </div>
            <div className="offcanvas_main">
                <Offcanvas show={newRequest} onHide={handleClose} placement="end" backdrop="static" style={{ width: '40%' }} className="offcanvas_wrapper" >
                    <Offcanvas.Header closeButton className='offcanvas_header'>
                        <Offcanvas.Title>Add New Request</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className="offcanvas_body">
                            <div className="tabs_wrapper">
                                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                    <Nav variant="pills" className="flex-column tab_header_btn">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Select Employee</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Select Customer</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <div className="Tab_body">
                                                <div className="selectTemplate">
                                                    <p className="heading">Select Employee</p>
                                                    <p className="content">Choose a  customer for the request. If no customer is available, please save the  details and create a new customer for your newly added customer</p>
                                                    <div className="requirHeading">
                                                        <p>Template</p>
                                                        <img src={star} alt="" />
                                                    </div>
                                                    <div className="accordian_main">
                                                        <Accordion>
                                                            <Accordion.Item eventKey="0">
                                                                <Accordion.Header>
                                                                    <div className="singleTemplate">
                                                                        <p>Template 01</p>
                                                                        <img src={close} alt="" />
                                                                    </div>
                                                                </Accordion.Header>
                                                                <Accordion.Body>
                                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                                </Accordion.Body>
                                                            </Accordion.Item>
                                                        </Accordion>
                                                    </div>

                                                </div>
                                                <div className="form_wrapper">
                                                    <Form noValidate validated={validated} onSubmit={(e) => handleSubmit(e, "requestDone")}>
                                                        <Row className="mb-3">
                                                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                                                <Form.Label>Employee Name <img src={star} alt="" /></Form.Label>
                                                                <Form.Control
                                                                    required
                                                                    type="text"
                                                                    placeholder="Enter employee Name"
                                                                />
                                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                            </Form.Group>
                                                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                                                                <Form.Label>Source <img src={star} alt="" /></Form.Label>
                                                                <Form.Select aria-label="Default select example">
                                                                    <option>Source select</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </Form.Select>
                                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                            </Form.Group>
                                                            <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                                                                <Form.Label>Request Number <img src={star} alt="" /></Form.Label>
                                                                <InputGroup hasValidation>
                                                                    <Form.Control
                                                                        type="text"
                                                                        placeholder="Enter Request ID or Number"
                                                                        required
                                                                    />
                                                                    <Form.Control.Feedback type="invalid">
                                                                        Please choose a username.
                                                                    </Form.Control.Feedback>
                                                                </InputGroup>
                                                            </Form.Group>
                                                            <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                                                                <Form.Label>Request Title <img src={star} alt="" /></Form.Label>
                                                                <InputGroup hasValidation>
                                                                    <Form.Control
                                                                        type="text"
                                                                        placeholder="Enter Request Title or Name"
                                                                        required
                                                                    />
                                                                    <Form.Control.Feedback type="invalid">
                                                                        Please choose a username.
                                                                    </Form.Control.Feedback>
                                                                </InputGroup>
                                                            </Form.Group>
                                                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                                                                <Form.Label>Request Type <img src={star} alt="" /></Form.Label>
                                                                <Form.Select aria-label="Default select example">
                                                                    <option>Select Request Type</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </Form.Select>
                                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                            </Form.Group>
                                                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                                                                <Form.Label>Request Category <img src={star} alt="" /></Form.Label>
                                                                <Form.Select aria-label="Default select example">
                                                                    <option>Select Requst Category</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </Form.Select>
                                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                            </Form.Group>
                                                            <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                                                                <Form.Label>Request Date <img src={star} alt="" /></Form.Label>
                                                                <InputGroup hasValidation>
                                                                    <Form.Control
                                                                        type="date"
                                                                        placeholder="DD/MM/YYYY"
                                                                        required
                                                                    />
                                                                    <Form.Control.Feedback type="invalid">
                                                                        Please choose a username.
                                                                    </Form.Control.Feedback>
                                                                </InputGroup>
                                                            </Form.Group>
                                                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                                                                <Form.Label>Priority <img src={star} alt="" /></Form.Label>
                                                                <Form.Select aria-label="Default select example" placeholder="Select Prirority">
                                                                    <option>Select Prirority</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </Form.Select>
                                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                            </Form.Group>
                                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                                <Form.Label>Example textarea</Form.Label>
                                                                <Form.Control as="textarea" rows={3} />
                                                            </Form.Group>
                                                        </Row>
                                                        <div className="form_btn_wrapper">
                                                            <Button type='' className='Cancel_btn' onClick={handleClose}>Cancel</Button>
                                                            <Button onClick={(e) => handleSubmit(e, "requestDone")} className='Submit_btn'>Submit</Button>
                                                        </div>
                                                    </Form>

                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <div className="Tab_body">
                                                <div className="selectTemplate">
                                                    <p className="heading">Select Customer</p>
                                                    <p className="content">Choose a  customer for the request. If no customer is available, please save the  details and create a new customer for your newly added customer</p>
                                                    <div className="requirHeading">
                                                        <p>Template</p>
                                                        <img src={star} alt="" />
                                                    </div>
                                                    <div className="accordian_main">
                                                        <Accordion>
                                                            <Accordion.Item eventKey="0">
                                                                <Accordion.Header>
                                                                    <div className="singleTemplate">
                                                                        <p>Template 01</p>
                                                                        <img src={close} alt="" />
                                                                    </div>
                                                                </Accordion.Header>
                                                                <Accordion.Body>
                                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                                </Accordion.Body>
                                                            </Accordion.Item>
                                                        </Accordion>
                                                    </div>

                                                </div>
                                                <div className="form_wrapper">
                                                    <Form noValidate validated={validated} onSubmit={(e) => handleSubmit(e, "requestDone")}>
                                                        <Row className="mb-3">
                                                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                                                <Form.Label>customer Name <img src={star} alt="" /></Form.Label>
                                                                <Form.Control
                                                                    required
                                                                    type="text"
                                                                    placeholder="Enter customer Name"
                                                                />
                                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                            </Form.Group>
                                                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                                                                <Form.Label>Source <img src={star} alt="" /></Form.Label>
                                                                <Form.Select aria-label="Default select example">
                                                                    <option>Source select</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </Form.Select>
                                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                            </Form.Group>
                                                            <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                                                                <Form.Label>Request Number <img src={star} alt="" /></Form.Label>
                                                                <InputGroup hasValidation>
                                                                    <Form.Control
                                                                        type="text"
                                                                        placeholder="Enter Request ID or Number"
                                                                        required
                                                                    />
                                                                    <Form.Control.Feedback type="invalid">
                                                                        Please choose a username.
                                                                    </Form.Control.Feedback>
                                                                </InputGroup>
                                                            </Form.Group>
                                                            <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                                                                <Form.Label>Request Title <img src={star} alt="" /></Form.Label>
                                                                <InputGroup hasValidation>
                                                                    <Form.Control
                                                                        type="text"
                                                                        placeholder="Enter Request Title or Name"
                                                                        required
                                                                    />
                                                                    <Form.Control.Feedback type="invalid">
                                                                        Please choose a username.
                                                                    </Form.Control.Feedback>
                                                                </InputGroup>
                                                            </Form.Group>
                                                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                                                                <Form.Label>Request Type <img src={star} alt="" /></Form.Label>
                                                                <Form.Select aria-label="Default select example">
                                                                    <option>Select Request Type</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </Form.Select>
                                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                            </Form.Group>
                                                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                                                                <Form.Label>Request Category <img src={star} alt="" /></Form.Label>
                                                                <Form.Select aria-label="Default select example">
                                                                    <option>Select Requst Category</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </Form.Select>
                                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                            </Form.Group>
                                                            <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                                                                <Form.Label>Request Date <img src={star} alt="" /></Form.Label>
                                                                <InputGroup hasValidation>
                                                                    <Form.Control
                                                                        type="date"
                                                                        placeholder="DD/MM/YYYY"
                                                                        required
                                                                    />
                                                                    <Form.Control.Feedback type="invalid">
                                                                        Please choose a username.
                                                                    </Form.Control.Feedback>
                                                                </InputGroup>
                                                            </Form.Group>
                                                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                                                                <Form.Label>Priority <img src={star} alt="" /></Form.Label>
                                                                <Form.Select aria-label="Default select example" placeholder="Select Prirority">
                                                                    <option>Select Prirority</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </Form.Select>
                                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                            </Form.Group>
                                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                                <Form.Label>Example textarea</Form.Label>
                                                                <Form.Control as="textarea" rows={3} />
                                                            </Form.Group>
                                                        </Row>
                                                        <div className="form_btn_wrapper">
                                                            <Button type='' className='Cancel_btn' onClick={handleClose}>Cancel</Button>
                                                            <Button onClick={(e) => handleSubmit(e, "newRequest")} type="submit" className='Submit_btn'>Submit</Button>
                                                        </div>
                                                    </Form>

                                                </div>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
            <div className="offcanvas_main">
                <Offcanvas show={requestDone} onHide={handleCloseDone} placement="end" backdrop="static" style={{ width: '40%' }} className="offcanvas_wrapper" >
                    <Offcanvas.Header closeButton className='offcanvas_header'>
                        <Offcanvas.Title>
                            <img src={backArrow} alt="" onClick={handleShow} />
                            Requests
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className="offcanvas_body">
                            <p className="doneMessage">Here you can view, edit, and update Requests effortlessly. Keep information up-to-date and manage Requests details seamlessly.</p>
                            <div className="ProfileBix">
                                <div className="porfilePhoto">
                                    <img src={Profile_Image} alt="" />
                                </div>
                                <div className="porfileSicription">
                                    <div className="RequesterName">FAWZY ABDELKADER MOHAMED AWAD ALI</div>
                                    <div className="requsterDetails">
                                        <div className="detailsWrapper">EMPID: 1001</div>
                                        <div className="detailsWrapper">Product Designer</div>
                                    </div>
                                </div>
                            </div>
                            <div className="EmployeerDetails">
                                <div className="EmployeeHeading">
                                    <p>Employee</p>
                                    <div className="edit" onClick={handleShow}>
                                        <img src={Edit} alt="" />
                                        <p>Edit</p>
                                    </div>
                                </div>
                                <div className="EmployeeBody">
                                    <div className="row">
                                        <div className="col-lg-6 mb-3">
                                            <p className="label">Employee Name</p>
                                            <p className="details">Abdul Salam</p>
                                        </div>
                                        <div className="col-lg-6 mb-3">
                                            <p className="label">Source</p>
                                            <p className="details">Offline/WhatsApp</p>
                                        </div>
                                        <div className="col-lg-6 mb-3">
                                            <p className="label">Request Number</p>
                                            <p className="details">09XXXXXX</p>
                                        </div>
                                        <div className="col-lg-6 mb-3">
                                            <p className="label">Request Title</p>
                                            <p className="details">Business Set Up Request</p>
                                        </div>
                                        <div className="col-lg-6 mb-3">
                                            <p className="label">Request Type</p>
                                            <p className="details">Business</p>
                                        </div>
                                        <div className="col-lg-6 mb-3">
                                            <p className="label">Request Category</p>
                                            <p className="details">New Business</p>
                                        </div>
                                        <div className="col-lg-6 mb-3">
                                            <p className="label">Request Date</p>
                                            <p className="details">20.02.2024</p>
                                        </div>
                                        <div className="col-lg-6 mb-3">
                                            <p className="label">Priority</p>
                                            <p className="details">High</p>
                                        </div>
                                        <div className="col-lg-6 mb-3">
                                            <p className="label">Description</p>
                                            <p className="details">Set up a new business invoice</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="EmployeeBody mt-4">
                                    <div className="EmployeeHeading">
                                        <p>Template</p>
                                    </div>
                                    <div className="EmployeeBody">
                                        <div className="template_wrapper">
                                            <div className="single_template">
                                                <div className="templateLogo">
                                                    <img src={template} alt="" />
                                                    <p>Templates 01</p>
                                                </div>
                                                <div className="templateView">
                                                    <Link to="#">View</Link>
                                                </div>
                                            </div>
                                            <div className="single_template">
                                                <div className="templateLogo">
                                                    <img src={template} alt="" />
                                                    <p>Templates 01</p>
                                                </div>
                                                <div className="templateView">
                                                    <Link to="#">View</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Offcanvas.Body>
                    <div className="offcanvas_footer">
                        <div className="DeactivateRequests">Deactivate Requests</div>
                        <div className="DeactivateSwitch">
                            <Form>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                />
                            </Form>
                        </div>
                    </div>
                </Offcanvas>
            </div>
            <div className="offcanvas_main">
                <Offcanvas show={customerDone} onHide={handleCloseCustomerDone} placement="end" backdrop="static" style={{ width: '40%' }} className="offcanvas_wrapper" >
                    <Offcanvas.Header closeButton className='offcanvas_header'>
                        <Offcanvas.Title>
                            <img src={backArrow} alt="" onClick={handleShow} />
                            Requests
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className="offcanvas_body">
                            <p className="doneMessage">Here you can view, edit, and update Requests effortlessly. Keep information up-to-date and manage Requests details seamlessly.</p>
                            <div className="ProfileBix">
                                <div className="porfilePhoto">
                                    <img src={Profile_Image} alt="" />
                                </div>
                                <div className="porfileSicription">
                                    <div className="RequesterName">FAWZY ABDELKADER MOHAMED AWAD ALI</div>
                                    <div className="requsterDetails">
                                        <div className="detailsWrapper">EMPID: 1001</div>
                                        <div className="detailsWrapper">Product Designer</div>
                                    </div>
                                </div>
                            </div>
                            <div className="EmployeerDetails">
                                <div className="EmployeeHeading">
                                    <p>Customer</p>
                                    <div className="edit" onClick={handleShow}>
                                        <img src={Edit} alt="" />
                                        <p>Edit</p>
                                    </div>
                                </div>
                                <div className="EmployeeBody">
                                    <div className="row">
                                        <div className="col-lg-6 mb-3">
                                            <p className="label">Employee Name</p>
                                            <p className="details">Abdul Salam</p>
                                        </div>
                                        <div className="col-lg-6 mb-3">
                                            <p className="label">Source</p>
                                            <p className="details">Offline/WhatsApp</p>
                                        </div>
                                        <div className="col-lg-6 mb-3">
                                            <p className="label">Request Number</p>
                                            <p className="details">09XXXXXX</p>
                                        </div>
                                        <div className="col-lg-6 mb-3">
                                            <p className="label">Request Title</p>
                                            <p className="details">Business Set Up Request</p>
                                        </div>
                                        <div className="col-lg-6 mb-3">
                                            <p className="label">Request Type</p>
                                            <p className="details">Business</p>
                                        </div>
                                        <div className="col-lg-6 mb-3">
                                            <p className="label">Request Category</p>
                                            <p className="details">New Business</p>
                                        </div>
                                        <div className="col-lg-6 mb-3">
                                            <p className="label">Request Date</p>
                                            <p className="details">20.02.2024</p>
                                        </div>
                                        <div className="col-lg-6 mb-3">
                                            <p className="label">Priority</p>
                                            <p className="details">High</p>
                                        </div>
                                        <div className="col-lg-6 mb-3">
                                            <p className="label">Description</p>
                                            <p className="details">Set up a new business invoice</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="EmployeeBody mt-4">
                                    <div className="EmployeeHeading">
                                        <p>Template</p>
                                    </div>
                                    <div className="EmployeeBody">
                                        <div className="template_wrapper">
                                            <div className="single_template">
                                                <div className="templateLogo">
                                                    <img src={template} alt="" />
                                                    <p>Templates 01</p>
                                                </div>
                                                <div className="templateView">
                                                    <Link to="#">View</Link>
                                                </div>
                                            </div>
                                            <div className="single_template">
                                                <div className="templateLogo">
                                                    <img src={template} alt="" />
                                                    <p>Templates 01</p>
                                                </div>
                                                <div className="templateView">
                                                    <Link to="#">View</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Offcanvas.Body>
                    <div className="offcanvas_footer">
                        <div className="DeactivateRequests">Deactivate Requests</div>
                        <div className="DeactivateSwitch">
                            <Form>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                />
                            </Form>
                        </div>
                    </div>
                </Offcanvas>
            </div>

            {/* //Modal */}
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                indicator={modalData?.indicator}
                heading={modalData?.heading}
                Details={modalData?.Details}
                leftBTN={modalData?.leftBTN}
                rightBTN={modalData?.rightBTN}
                colorCode={modalData?.colorCode}
                LeftColorBTN={modalData?.LeftColorBTN}
                RightColorBTN={modalData?.RightColorBTN}
                onLeftButtonClick={() => {
                    if (!modalData?.conformationData) {
                        setModalShow(false);
                    } else {
                        handleModalOpen(modals[modalData.conformationData]);
                    }
                }}
            />


        </div>
    )
}

export default Requests