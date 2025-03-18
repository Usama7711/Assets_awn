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

const DocumentCategories = () => {
    const { sidebar, setSidebar } = useContext(AppContext);
    const [newRequest, setnewRequest] = useState(false);
    const [validated, setValidated] = useState(false);
    const handleClose = () => setnewRequest(false);
    const handleShow = () => setnewRequest(true);

    const handleSubmit = (event, actionType) => {
        event.preventDefault(); // Prevent form submission
        event.stopPropagation();
        handleModalOpen(modals[0]) // Stop event propagation
        setnewRequest(false)
    }



    const [modalShow, setModalShow] = useState(false);
    const [modalData, setModalData] = useState({ indicator: '', heading: '', Details: '', leftBTN: '', rightBTN: '', colorCode: "", LeftColorBTN: "", RightColorBTN: "" });

    const modals = [
        {
            indicator: Wavy_Check,
            heading: 'Document Category Added Successfully!',
            Details: 'The new Document Category has been created.',
            leftBTN: 'Submit & Go Document Categories',
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
            heading: 'Reactivate Document Category',
            Details: 'Restore access for an inactive employee. Confirm the details below to reactivate their profile and allow them to resume their activities..',
            leftBTN: 'Yes Reactivate',
            LeftColorBTN: "orgBTN",
            rightBTN: 'Cancel',
            colorCode: 'orange',
            conformationData: '4'
        },
        {
            indicator: delet,
            heading: 'Document Category Deleted Successfully!',
            Details: 'The Document Category has been permanently removed from the system.',
            leftBTN: 'Go to Document Categories ',
            LeftColorBTN: "greenBTN",
            colorCode: 'green',
            conformationData: ''
        },
        {
            indicator: Circle_Check,
            heading: 'Reactivation Successful!',
            Details: 'The employee  profile has been successfully reactivated and they now have access to the platform.',
            leftBTN: 'Back to Request',
            LeftColorBTN: "greenBTN",
            colorCode: 'green',
            conformationData: ''
        },
        {
            indicator: Wavy_Warning,
            heading: 'Are you sure you want to delete this Document Category?',
            Details: 'This action will permanently remove the Document Category and all associated data. This cannot be undone.',
            leftBTN: 'Yes’ Delete',
            LeftColorBTN: "redBTN",
            rightBTN: 'Cancel',
            colorCode: 'red',
            conformationData: '3'
        },
        {
            indicator: Stop_Sign,
            heading: 'Document Category Deactivated Successfully!',
            Details: 'The Employee has been deactivated. They no longer have access to their account.',
            leftBTN: 'Back to Request',
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
                <div className="">
                    <p className="heading">Document Types</p>
                </div>
                <div className="headerContain">
                    <div className="search">
                        <img src={search} alt="" />
                        <input type="text" placeholder='Search' />
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
                                Export All
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
                        <p>New DocumentCategories</p>
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
                        <th>Type Code</th>
                        <th>Type Name</th>
                        <th>Description</th>
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
                        <td>CCC_1</td>
                        <td>Passport</td>
                        <td>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</td>
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
                        <td>CCC_2</td>
                        <td>Visa</td>
                        <td>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</td>
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
                        <td>CCC_3</td>
                        <td>Iqama</td>
                        <td>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</td>
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
                        <td>CCC_4</td>
                        <td>Invoice</td>
                        <td>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</td>
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
                        <td>CCC_5</td>
                        <td>Quotation</td>
                        <td>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</td>
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
                        <Offcanvas.Title>Add New Document Category</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className="offcanvas_body">
                            <div className="tabs_wrapper">
                                <div className="Tab_body">
                                    <div className="form_wrapper">
                                        <Form noValidate validated={validated} onSubmit={(e) => handleSubmit(e, "requestDone")}>
                                            <Row className="mb-3">
                                                <Form.Group as={Col} md="12" controlId="validationCustom01">
                                                    <Form.Label>Category Code <img src={star} alt="" /></Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="text"
                                                        placeholder="Enter Category Code"
                                                    />
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                </Form.Group>
                                                <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                                                    <Form.Label>Category Name <img src={star} alt="" /></Form.Label>
                                                    <InputGroup hasValidation>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Enter Category Name"
                                                            required
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            Please choose a username.
                                                        </Form.Control.Feedback>
                                                    </InputGroup>
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                    <Form.Label>Description <img src={star} alt="" /></Form.Label>
                                                    <Form.Control as="textarea" rows={3} placeholder='Enter Description' />
                                                </Form.Group>
                                            </Row>
                                            <div className="form_btn_wrapper" md="12">
                                                <Button type='' className='Cancel_btn' onClick={handleClose}>Cancel</Button>
                                                <Button onClick={(e) => handleSubmit(e, "newRequest")} type="submit" className='Submit_btn'>Submit</Button>
                                            </div>
                                        </Form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas >
            </div >

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

        </div >
    )
}

export default DocumentCategories