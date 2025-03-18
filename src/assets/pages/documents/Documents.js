import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext';
import search from "../../assets/images/Search.svg"
import add from "../../assets/images/Add.svg"
import { Accordion, Button, Dropdown, Form, Nav, Offcanvas, Tab } from 'react-bootstrap';
import CreatedPersone from "../../assets/images/Created_Persone.png"
import OptionDot from "../../assets/images/option.svg"
import MyVerticallyCenteredModal from '../components/MyVerticallyCenteredModal';
import delet from "../../assets/images/modal/Delete Option.svg";
import Arrows_Reload_01 from "../../assets/images/modal/Arrows_Reload_01.svg";
import Circle_Check from "../../assets/images/modal/Circle_Check.svg";
import Stop_Sign from "../../assets/images/modal/Stop_Sign.svg";
import Wavy_Check from "../../assets/images/modal/Wavy_Check.svg";
import Wavy_Check_blue from "../../assets/images/modal/Wavy_Check_blue.svg";
import Wavy_Warning from "../../assets/images/modal/Wavy_Warning.svg";
import star from "../../assets/images/star.svg"
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import uploadIcon from "../../assets/images/uploadFiles.svg"
import close from "../../assets/images/Close.svg"
import { Link } from 'react-router-dom';
import backArrow from "../../assets/images/backArrow.svg"
import template from "../../assets/images/template.svg"
import Edit from "../../assets/images/Edit.svg"
import reset from "../../assets/images/reset.svg"
import xlFile from "../../assets/images/ms_excel.svg"
import DocFile from "../../assets/images/DocFile.svg"
import clock from "../../assets/images/clock.svg"
import ARROW_04 from "../../assets/images/ARROW_04.svg"


const Documents = () => {
    const [newRequest, setnewRequest] = useState(false);
    const [requestDone, setRequestDone] = useState(false);
    const [customerDone, setCustomertDone] = useState(false);
    const [activeLog, setActiveLog] = useState(false);

    const handleCloseDone = () => {
        setRequestDone(false); // Existing functionality
        handleModalOpen(modals[7]); // Add modal opening functionality
    };
    const handleShowDone = () => setRequestDone(true);

    const handleCloseCustomerDone = () => {
        setCustomertDone(false); // Existing functionality
        handleModalOpen(modals[0]); // Add modal opening functionality
    };
    const handleShowCustomerDone = () => setCustomertDone(true);

    const handleClose = () => setnewRequest(false);
    const handleShow = () => setnewRequest(true);
    const handleCloseActive = () => setActiveLog(false);
    const handleShowActive = () => setActiveLog(true);
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
    const modals = [
        {
            indicator: Wavy_Check,
            heading: 'Document Updated Successfully!!',
            Details: 'The Document Templates has been Updated and is now available.',
            leftBTN: 'Submit & Go  Documents',
            LeftColorBTN: "greenBTN",
            colorCode: 'green',
        },
        {
            indicator: Wavy_Warning,
            heading: 'Are you sure you want to deactivate this Document?',
            Details: 'Deactivating will make it unavailable to users..',
            leftBTN: 'Yes Deactivate',
            LeftColorBTN: "redBTN",
            rightBTN: 'Cancel',
            colorCode: 'red',
            conformationData: '6'
        },
        {
            indicator: Arrows_Reload_01,
            heading: 'Reactivate Document',
            Details: 'Restore access for an inactive Document. Confirm the details below to reactivate their profile and allow them to resume their activities..',
            leftBTN: 'Yes Reactivate',
            LeftColorBTN: "orgBTN",
            rightBTN: 'Cancel',
            colorCode: 'orange',
            conformationData: '4'
        },
        {
            indicator: delet,
            heading: 'Document Deleted Successfully!',
            Details: 'TThe selected document has been removed from the system.',
            leftBTN: 'Back to Documents',
            LeftColorBTN: "greenBTN",
            colorCode: 'green',
            conformationData: ''
        },
        {
            indicator: Circle_Check,
            heading: 'Reactivation Successful!',
            Details: 'The employee  profile has been successfully reactivated and they now have access to the platform.',
            leftBTN: 'Back to Document',
            LeftColorBTN: "greenBTN",
            colorCode: 'green',
            conformationData: ''
        },
        {
            indicator: Wavy_Warning,
            heading: 'Are you sure you want to delete this Document?',
            Details: 'This action will permanently remove the Document and all associated data. This cannot be undone.',
            leftBTN: 'Yes’ Delete',
            LeftColorBTN: "redBTN",
            rightBTN: 'Cancel',
            colorCode: 'red',
            conformationData: '3'
        },
        {
            indicator: Stop_Sign,
            heading: 'Document Deactivated Successfully!',
            Details: 'The Document has been deactivated. They no longer have access to their account.',
            leftBTN: 'Back to Document',
            LeftColorBTN: "greenBTN",
            colorCode: 'green',
            conformationData: ''
        },
        {
            indicator: Wavy_Check_blue,
            heading: 'Document added successfully!',
            Details: 'You can now create a template for this service or choose to do it later..',
            leftBTN: 'Save do it later',
            rightBTN: 'Submit & create template',
            LeftColorBTN: "blueBTN",
            colorCode: 'blue',
            conformationData: '0'
        },
    ];

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
            <div className='commom_main_heading'>
                <p className="heading">Documents</p>
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
                                Type All
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
                                Status All
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
                                Export CSV
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="normalBTN"  onClick={handleShowActive}>Activity Logs</div>
                    <div className="AddBTN" onClick={handleShow}>
                        <img src={add} alt="" />
                        <p>New Document</p>
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
                        <th>Document ID</th>
                        <th>Document Title</th>
                        <th>Category</th>
                        <th>Type</th>
                        <th>Author/Creator</th>
                        <th>Date Created</th>
                        <th>Expiration Date</th>

                        <th>
                            <div className="status">
                                <p>Status</p>

                            </div>
                        </th>
                        <th>
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
                        <td>DOC-1234</td>
                        <td>Title Here</td>
                        <td>Category Here</td>
                        <td>Type Here</td>
                        <td>Admin</td>
                        <td>01-01-2025</td>
                        <td>01-01-2025</td>
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
                        <td>DOC-1234</td>
                        <td>Title Here</td>
                        <td>Category Here</td>
                        <td>Type Here</td>
                        <td>Admin</td>
                        <td>01-01-2025</td>
                        <td>01-01-2025</td>
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
                        <td>DOC-1234</td>
                        <td>Title Here</td>
                        <td>Category Here</td>
                        <td>Type Here</td>
                        <td>Admin</td>
                        <td>01-01-2025</td>
                        <td>01-01-2025</td>
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
                        <td>DOC-1234</td>
                        <td>Title Here</td>
                        <td>Category Here</td>
                        <td>Type Here</td>
                        <td>Admin</td>
                        <td>01-01-2025</td>
                        <td>01-01-2025</td>
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
                        <td>DOC-1234</td>
                        <td>Title Here</td>
                        <td>Category Here</td>
                        <td>Type Here</td>
                        <td>Admin</td>
                        <td>01-01-2025</td>
                        <td>01-01-2025</td>
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

            <div className="offcanvas_main">
                <Offcanvas show={newRequest} onHide={handleClose} placement="end" backdrop="static" style={{ width: '40%' }} className="offcanvas_wrapper" >
                    <Offcanvas.Header closeButton className='offcanvas_header'>
                        <Offcanvas.Title>Add New Document</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className="offcanvas_body">
                            <div className="tabs_wrapper">
                                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                    <Nav variant="pills" className="flex-column tab_header_btn">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Create New Document</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Select Document Template</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <div className="Tab_body">
                                                <div className="form_wrapper">
                                                    <Form noValidate validated={validated} onSubmit={(e) => handleSubmit(e, "requestDone")}>
                                                        <Row className="mb-3">
                                                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                                                <Form.Label>Document ID<span class="required">*</span></Form.Label>
                                                                <div className="inputAddtionalText">
                                                                    <Form.Control
                                                                        required
                                                                        type="text"
                                                                        placeholder="Enter Document ID"
                                                                    />
                                                                    <span class="autogenerated">Autogenerated</span>
                                                                </div>
                                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                            </Form.Group>
                                                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                                                <Form.Label>Document Title<img src={star} alt="" /></Form.Label>
                                                                <Form.Control
                                                                    required
                                                                    type="text"
                                                                    placeholder="Enter Document Title"
                                                                />
                                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                            </Form.Group>
                                                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                                                <Form.Label>Document Category<img src={star} alt="" /></Form.Label>
                                                                <Form.Control
                                                                    required
                                                                    type="text"
                                                                    placeholder="Enter Document Category"
                                                                />
                                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                            </Form.Group>
                                                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                                                                <Form.Label>Document Type <img src={star} alt="" /></Form.Label>
                                                                <Form.Select aria-label="Default select example">
                                                                    <option>Select Document Type</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </Form.Select>
                                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                            </Form.Group>
                                                            <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                                                                <Form.Label>Author/Creator <img src={star} alt="" /></Form.Label>
                                                                <InputGroup hasValidation>
                                                                    <Form.Control
                                                                        type="text"
                                                                        placeholder="Enter Author/Creator"
                                                                        required
                                                                    />
                                                                    <Form.Control.Feedback type="invalid">
                                                                        Please choose a username.
                                                                    </Form.Control.Feedback>
                                                                </InputGroup>
                                                            </Form.Group>
                                                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                                                                <Form.Label>Document Tags <img src={star} alt="" /></Form.Label>
                                                                <Form.Select aria-label="Default select example">
                                                                    <option>Select Requst Category</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </Form.Select>
                                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                            </Form.Group>
                                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                                <Form.Label>Description <img src={star} alt="" /></Form.Label>
                                                                <Form.Control as="textarea" rows={3} />
                                                            </Form.Group>
                                                            {/* <Form.Group controlId="formFile" className="mb-3">
                                                                <Form.Label className="d-flex align-items-center">
                                                                    <i className="bi bi-upload me-2"></i>
                                                                  
                                                                </Form.Label>
                                                                <Form.Control type="file" className="uploadFileInput" />
                                                            </Form.Group> */}
                                                            <Form.Group className="mb-3" md="12" controlId="exampleForm.ControlTextarea1">
                                                                <div class="upload-box">
                                                                    <div class="upload-icon">
                                                                        <img src={uploadIcon} alt="Upload Icon" />
                                                                    </div>
                                                                    <p class="upload-text">
                                                                        Drag and drop or <span class="upload-link">Choose File</span> to Upload
                                                                    </p>
                                                                    <input type="file" class="file-input" />
                                                                </div>
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
                                                    <p className="heading">Document Template</p>
                                                    <p className="content">Choose a template for the document. If no template is available, please save the  details and create a new template for your newly
                                                        added document.</p>
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
                                                <div className="form_btn_wrapper">
                                                    <Button type='' className='Cancel_btn' onClick={handleClose}>Cancel</Button>
                                                    <Button onClick={(e) => handleSubmit(e, "requestDone")} className='Submit_btn'>Submit</Button>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>

                <div className="offcanvas_main">
                    <Offcanvas show={requestDone} onHide={handleCloseDone} placement="end" backdrop="static" style={{ width: '40%' }} className="offcanvas_wrapper" >
                        <Offcanvas.Header closeButton className='offcanvas_header'>
                            <Offcanvas.Title>
                                <img src={backArrow} alt="" onClick={handleShow} />
                                Document Details
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <div className="offcanvas_body">
                                <p className="doneMessage">Here you can view, edit, and update Requests effortlessly. Keep information up-to-date and manage Requests details seamlessly.</p>
                                <div className="EmployeerDetails">
                                    <div className="EmployeeHeading">
                                        <p>Document Details</p>
                                        <div className="edit" onClick={handleShow}>
                                            <img src={Edit} alt="" />
                                            <p>Edit</p>
                                        </div>
                                    </div>
                                    <div className="EmployeeBody">
                                        <div className="row">
                                            <div className="col-lg-6 mb-3">
                                                <p className="label">Document ID</p>
                                                <p className="details">DOC-123</p>
                                            </div>
                                            <div className="col-lg-6 mb-3">
                                                <p className="label">Document Title</p>
                                                <p className="details">Title</p>
                                            </div>
                                            <div className="col-lg-6 mb-3">
                                                <p className="label">Document Category</p>
                                                <p className="details">Category Name</p>
                                            </div>
                                            <div className="col-lg-6 mb-3">
                                                <p className="label">Document Type</p>
                                                <p className="details">Type 1</p>
                                            </div>
                                            <div className="col-lg-6 mb-3">
                                                <p className="label">Author/Creator</p>
                                                <p className="details">Admin</p>
                                            </div>
                                            <div className="col-lg-6 mb-3">
                                                <p className="label">Description</p>
                                                <p className="details">Description</p>
                                            </div>
                                            <div className="col-lg-6 mb-3">
                                                <p className="label">Document Tags</p>
                                                <div className="singleTemplate">
                                                    <p>Template 01</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="EmployeeBody mt-4">
                                        <div className="EmployeeHeading">
                                            <p>Documents</p>
                                        </div>
                                        <div className="EmployeeBody">
                                            <div className="template_wrapper">
                                                <div className="single_template">
                                                    <div className="templateLogo">
                                                        <img src={template} alt="" />
                                                        <p>Documents 01</p>
                                                    </div>
                                                    <div className="templateView">
                                                        <Link to="#">View</Link>
                                                    </div>
                                                </div>
                                                <div className="single_template">
                                                    <div className="templateLogo">
                                                        <img src={template} alt="" />
                                                        <p>Documents 01</p>
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
                            <div className="DeactivateRequests">Deactivate Documents</div>
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
            </div>


            <div className="offcanvas_main">
                <Offcanvas show={newRequest} onHide={handleClose} placement="end" backdrop="static" style={{ width: '40%' }} className="offcanvas_wrapper" >
                    <Offcanvas.Header closeButton className='offcanvas_header'>
                        <Offcanvas.Title>Add New Document</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className="offcanvas_body">
                            <div className="tabs_wrapper">
                                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                    <Nav variant="pills" className="flex-column tab_header_btn">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Create New Document</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Select Document Template</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <div className="Tab_body">
                                                <div className="form_wrapper">
                                                    <Form noValidate validated={validated} onSubmit={(e) => handleSubmit(e, "requestDone")}>
                                                        <Row className="mb-3">
                                                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                                                <Form.Label>Document ID<span class="required">*</span></Form.Label>
                                                                <div className="inputAddtionalText">
                                                                    <Form.Control
                                                                        required
                                                                        type="text"
                                                                        placeholder="Enter Document ID"
                                                                    />
                                                                    <span class="autogenerated">Autogenerated</span>
                                                                </div>
                                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                            </Form.Group>
                                                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                                                <Form.Label>Document Title<img src={star} alt="" /></Form.Label>
                                                                <Form.Control
                                                                    required
                                                                    type="text"
                                                                    placeholder="Enter Document Title"
                                                                />
                                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                            </Form.Group>
                                                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                                                <Form.Label>Document Category<img src={star} alt="" /></Form.Label>
                                                                <Form.Control
                                                                    required
                                                                    type="text"
                                                                    placeholder="Enter Document Category"
                                                                />
                                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                            </Form.Group>
                                                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                                                                <Form.Label>Document Type <img src={star} alt="" /></Form.Label>
                                                                <Form.Select aria-label="Default select example">
                                                                    <option>Select Document Type</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </Form.Select>
                                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                            </Form.Group>
                                                            <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                                                                <Form.Label>Author/Creator <img src={star} alt="" /></Form.Label>
                                                                <InputGroup hasValidation>
                                                                    <Form.Control
                                                                        type="text"
                                                                        placeholder="Enter Author/Creator"
                                                                        required
                                                                    />
                                                                    <Form.Control.Feedback type="invalid">
                                                                        Please choose a username.
                                                                    </Form.Control.Feedback>
                                                                </InputGroup>
                                                            </Form.Group>
                                                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                                                                <Form.Label>Document Tags <img src={star} alt="" /></Form.Label>
                                                                <Form.Select aria-label="Default select example">
                                                                    <option>Select Requst Category</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </Form.Select>
                                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                            </Form.Group>
                                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                                <Form.Label>Description <img src={star} alt="" /></Form.Label>
                                                                <Form.Control as="textarea" rows={3} />
                                                            </Form.Group>
                                                            <Form.Group className="mb-3" md="12" controlId="exampleForm.ControlTextarea1">
                                                                <div class="upload-box">
                                                                    <div class="upload-icon">
                                                                        <img src={uploadIcon} alt="Upload Icon" />
                                                                    </div>
                                                                    <p class="upload-text">
                                                                        Drag and drop or <span class="upload-link">Choose File</span> to Upload
                                                                    </p>
                                                                    <input type="file" class="file-input" />
                                                                </div>
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
                                                    <p className="heading">Document Template</p>
                                                    <p className="content">Choose a template for the document. If no template is available, please save the  details and create a new template for your newly
                                                        added document.</p>
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
                                                <div className="form_btn_wrapper">
                                                    <Button type='' className='Cancel_btn' onClick={handleClose}>Cancel</Button>
                                                    <Button onClick={(e) => handleSubmit(e, "requestDone")} className='Submit_btn'>Submit</Button>
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

            {/* active Logs */}

            <div className="offcanvas_main">
                <Offcanvas show={activeLog} onHide={handleCloseActive} placement="end" backdrop="static" style={{ width: '40%' }} className="offcanvas_wrapper" >
                    <Offcanvas.Header closeButton className='offcanvas_header'>
                        <Offcanvas.Title>
                        Activity Logs
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className="activity-logs">
                            <div className="logs-header">
                                <Dropdown>
                                    <Dropdown.Toggle className="dropdown-btn">
                                        Document ID <span className="filter-type">All</span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>All</Dropdown.Item>
                                        <Dropdown.Item>Created</Dropdown.Item>
                                        <Dropdown.Item>Updated</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <div className="actions">
                                    <Button className="refresh-btn">
                                        <img src={reset} alt="" />
                                    </Button>
                                    <Button className="export-btn">
                                        <img src={xlFile} alt="" />
                                    </Button>
                                </div>
                            </div>
                            <div className="logs-table">
                                {[...Array(4)].map((_, index) => (
                                    <div key={index} className="log-entry">
                                        <div className="log-id">
                                            <img src={DocFile} alt="" />
                                            Document ID
                                        </div>
                                        <div className="log-time">
                                            <img src={clock} alt="" /> 20 Min
                                        </div>
                                        <div className="log-action">Status</div>
                                        <div className="log-status">
                                            <span className="status active"> <span className='avtive'></span>Active</span>
                                            <img src={ARROW_04} alt="" />
                                            <span className="status deactivate"><span className='deactive'></span>Deactivate</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
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

export default Documents