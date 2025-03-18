import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext';
import search from "../../assets/images/Search.svg"
import star from "../../assets/images/star.svg"
import add from "../../assets/images/Add.svg"
import OptionDot from "../../assets/images/option.svg"
import { Button, Col, Dropdown, Form, InputGroup, Offcanvas, Row } from 'react-bootstrap';
import Circle_Check from "../../assets/images/modal/Circle_Check.svg";
import Stop_Sign from "../../assets/images/modal/Stop_Sign.svg";
import Wavy_Check from "../../assets/images/modal/Wavy_Check.svg";
import Wavy_Check_blue from "../../assets/images/modal/Wavy_Check_blue.svg";
import Wavy_Warning from "../../assets/images/modal/Wavy_Warning.svg";
import delet from "../../assets/images/modal/Delete Option.svg";
import Arrows_Reload_01 from "../../assets/images/modal/Arrows_Reload_01.svg";
import MyVerticallyCenteredModal from '../components/MyVerticallyCenteredModal';
import textEdit from "../../assets/images/textEdit.svg"
import uploadIcon from "../../assets/images/uploadFiles.svg"
import helpQ from "../../assets/images/help-circle.svg"
import backArrow from "../../assets/images/backArrow.svg"

const DocumentTemplates = () => {
    const [newRequest, setnewRequest] = useState(false);
    const [requestDone, setRequestDone] = useState(false);
    const [customerDone, setCustomertDone] = useState(false);
    const [activeLog, setActiveLog] = useState(false);

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
    const handleCloseActive = () => setActiveLog(false);
    const handleShowActive = () => setActiveLog(true);
    const { sidebar, setSidebar } = useContext(AppContext);

    const [validated, setValidated] = useState(false);
    console.log(validated)

    const handleSubmit = (event) => {
        setRequestDone(true);
        event.preventDefault(); // Prevent form submission
        event.stopPropagation(); // Stop event propagation
        setnewRequest(false)


    };



    const [modalShow, setModalShow] = useState(false);
    const [modalData, setModalData] = useState({ indicator: '', heading: '', Details: '', leftBTN: '', rightBTN: '', colorCode: "", LeftColorBTN: "", RightColorBTN: "" });

    const modals = [
        {
            indicator: Wavy_Check,
            heading: 'Document Templates Added Successfully!',
            Details: 'The new Document Templates has been created and is now available.',
            leftBTN: 'Submit & Go Document Templates',
            LeftColorBTN: "greenBTN",
            colorCode: 'green',
        },
        {
            indicator: Wavy_Warning,
            heading: 'Are you sure you want to deactivate this Document Templates?',
            Details: 'Deactivating will make it unavailable to users..',
            leftBTN: 'Yes Deactivate',
            LeftColorBTN: "redBTN",
            rightBTN: 'Cancel',
            colorCode: 'red',
            conformationData: '6'
        },
        {
            indicator: Arrows_Reload_01,
            heading: 'Reactivate Document Templates',
            Details: 'Restore access for an Document Templates. Confirm the details below to reactivate their profile and allow them to resume their activities..',
            leftBTN: 'Yes Reactivate',
            LeftColorBTN: "orgBTN",
            rightBTN: 'Cancel',
            colorCode: 'orange',
            conformationData: '4'
        },
        {
            indicator: delet,
            heading: 'Document Templates Deleted Successfully!',
            Details: 'The Document Templates has been permanently removed from the system.',
            leftBTN: 'Delete Templates ',
            LeftColorBTN: "greenBTN",
            colorCode: 'green',
            conformationData: ''
        },
        {
            indicator: Circle_Check,
            heading: 'Reactivation Successful!',
            Details: 'The Document Templates  profile has been successfully reactivated and they now have access to the platform.',
            leftBTN: 'Back to Document Templates',
            LeftColorBTN: "greenBTN",
            colorCode: 'green',
            conformationData: ''
        },
        {
            indicator: Wavy_Warning,
            heading: 'Are you sure you want to delete this Document Templates?',
            Details: 'This action will permanently remove the Document Templates and all associated data. This cannot be undone.',
            leftBTN: 'Yes’ Delete',
            LeftColorBTN: "redBTN",
            rightBTN: 'Cancel',
            colorCode: 'red',
            conformationData: '3'
        },
        {
            indicator: Stop_Sign,
            heading: 'Document Templates Deactivated Successfully!',
            Details: 'The Document Templates has been deactivated. They no longer have access to their account.',
            leftBTN: 'Back to Document Templates',
            LeftColorBTN: "greenBTN",
            colorCode: 'green',
            conformationData: ''
        },
        {
            indicator: Wavy_Check_blue,
            heading: 'Document Templates added successfully!',
            Details: 'TYou can now create a template for this service or choose to do it later..',
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
                <div className="">
                    <p className="heading">Document Templates</p>
                    <p className="minorHeading">Here you can manage your document templates. Create, edit, or update templates to streamline your service processes efficiently.</p>
                </div>
                <div className="headerContain">
                    <div className="search">
                        <img src={search} alt="" />
                        <input type="text" placeholder='Search' />
                    </div>
                    <div className="normalBTN">
                        Active Logs
                    </div>
                    <div className="AddBTN" onClick={handleShow}>
                        <img src={add} alt="" />
                        <p>New Templates</p>
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
                        <th>Template Code</th>
                        <th>Template Name</th>
                        <th>Create Date</th>
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
                        <td>PP01</td>
                        <td className='template_help'>
                            Quotation Document Template
                            <img src={helpQ} alt="" />
                        </td>
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
                        <td>PP01</td>
                        <td className='template_help'>
                            Passport Template
                            <img src={helpQ} alt="" />
                        </td>
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
                        <td>PP01</td>
                        <td className='template_help'>
                            Iqama Template
                            <img src={helpQ} alt="" />
                        </td>
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
                        <td>PP01</td>
                        <td className='template_help'>
                            Visa Template
                            <img src={helpQ} alt="" />
                        </td>
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
                        <td>PP01</td>
                        <td className='template_help'>
                            contract Document Template
                            <img src={helpQ} alt="" />
                        </td>
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


            <div className="offcanvas_main">
                <Offcanvas show={newRequest} onHide={handleClose} placement="end" backdrop="static" style={{ width: '98%' }} className="offcanvas_wrapper" >
                    <Offcanvas.Header closeButton className='offcanvas_header'>
                        <Offcanvas.Title>Template Name</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className="template-editor">
                            <div className="template-sidebar">
                                <div className="">
                                    <button className="sidebar-button">
                                        <img src={textEdit} alt="" />
                                        Text Field
                                    </button>
                                    <button className="sidebar-button">
                                        <img src={textEdit} alt="" />
                                        Text Area
                                    </button>
                                </div>
                                <div className="">
                                    <button className="sidebar-button">
                                        <img src={textEdit} alt="" />
                                        Header
                                    </button>
                                    <button className="sidebar-button">
                                        <img src={textEdit} alt="" />
                                        Paragraph
                                    </button>
                                </div>
                                <div className="">
                                    <button className="sidebar-button">
                                        <img src={textEdit} alt="" />
                                        Email
                                    </button>
                                    <button className="sidebar-button">
                                        <img src={textEdit} alt="" />
                                        Select
                                    </button>
                                </div>
                                <div className="">
                                    <button className="sidebar-button">
                                        <img src={textEdit} alt="" />
                                        Checkbox
                                    </button>
                                    <button className="sidebar-button">
                                        <img src={textEdit} alt="" />
                                        Date Field
                                    </button>
                                </div>
                                <div className="">
                                    <button className="sidebar-button">
                                        <img src={textEdit} alt="" />
                                        File Upload
                                    </button>
                                    <button className="sidebar-button">
                                        <img src={textEdit} alt="" />
                                        Checkbox Group
                                    </button>
                                </div>
                            </div>
                            <div className="editor-area">
                                <h1 className="template-heading">Heading</h1>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="textarea">Text Area</label>
                                        <textarea id="textarea" className="form-control" placeholder="Enter text area"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="textfield">Text Field</label>
                                        <input
                                            type="text"
                                            id="textfield"
                                            className="form-control"
                                            placeholder="Enter text field"
                                        />
                                    </div>
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

                                </form>
                            </div>
                            <div className="form-metadata">
                                <div className="form-group">
                                    <label htmlFor="template-code">Template Code *</label>
                                    <input
                                        type="text"
                                        id="template-code"
                                        className="form-control"
                                        placeholder="Enter Template Code"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="template-name">Template Name *</label>
                                    <input
                                        type="text"
                                        id="template-name"
                                        className="form-control"
                                        placeholder="Enter Template Name"
                                    />
                                </div>
                            </div>
                        </div>
                    </Offcanvas.Body>
                    <div className="form_btn_wrapper" md="12">
                        <Button type='' className='Cancel_btn'>Cancel</Button>
                        <Button type="submit" className='Submit_btn' onClick={(e) => handleSubmit(e)}>Submit</Button>
                    </div>
                </Offcanvas>
            </div>

            <div className="offcanvas_main">
                <Offcanvas show={requestDone} onHide={handleCloseDone} placement="end" backdrop="static" style={{ width: '40%' }} className="offcanvas_wrapper" >
                    <Offcanvas.Header closeButton className='offcanvas_header'>
                        <Offcanvas.Title>
                            View Document Template
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className="offcanvas_body">
                            <p className="">Please perform your actions for this service using the provided template. Ensure all necessary details are accurately completed before submission..</p>
                            <div className="tabs_wrapper mt-4">
                                <div className="Tab_body">
                                    <div className="form_wrapper">
                                        <Form noValidate validated={validated} onSubmit={(e) => handleSubmit(e, "requestDone")}>
                                            <Row className="mb-3">
                                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                                    <Form.Label>Request Date<span class="required">*</span></Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="date"
                                                    />
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                </Form.Group>
                                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                                    <Form.Label>Request Number<img src={star} alt="" /></Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="text"
                                                        placeholder="Enter Request Number"
                                                    />
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                </Form.Group>
                                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                                    <Form.Label>Issue Date<span class="required">*</span></Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="date"
                                                        placeholder="Enter Document ID"
                                                    />
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                </Form.Group>
                                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                                    <Form.Label>Place of Issue<img src={star} alt="" /></Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="text"
                                                        placeholder="Enter Request Number"
                                                    />
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                </Form.Group>
                                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                                    <Form.Label>Expiry Date<span class="required">*</span></Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="date"
                                                        placeholder="Enter Document ID"
                                                    />
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                </Form.Group>
                                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                                    <Form.Label>Passport Number<img src={star} alt="" /></Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="text"
                                                        placeholder="Passport Number"
                                                    />
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
                                        </Form>

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

export default DocumentTemplates