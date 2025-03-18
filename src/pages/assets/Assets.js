import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext';
import { Button, Dropdown, Form, Offcanvas, Table, Row, Col, Nav } from 'react-bootstrap';
import OptionDot from "../../assets/option.svg"
import search from "../../assets/Search.svg"
import add from "../../assets/Add.svg"
import MyVerticallyCenteredModal from '../../components/MyVerticallyCenteredModal';
import modals from "../../components/ModalData";


const Assets = () => {
    const [newAsset, setNewAsset] = useState(false);
    const [activeTab, setActiveTab] = useState("assets");
    const handleClose = () => setNewAsset(false);
    const handleShow = () => setNewAsset(true);
    const { sidebar, setSidebar } = useContext(AppContext);

    const [modalShow, setModalShow] = useState(false);
    const [modalData, setModalData] = useState({ 
        indicator: '', 
        heading: '', 
        Details: '', 
        leftBTN: '', 
        rightBTN: '', 
        colorCode: "", 
        LeftColorBTN: "", 
        RightColorBTN: "" 
    });

    const handleModalOpen = (data) => {
        setModalShow(true)
        setModalData(data);
    };

    return (
<div className={sidebar ? "taskMain " : "cx-active taskMain"} id='cx-main'>
    <div className="commom_main_heading">
        {/* Heading Block */}
        <div className="heading-block">
            <p className="heading">Asset Management</p>
            <p className="sub-heading" style={{ color: '#666', fontSize: '14px' }}>
Efficiently manage and track all your answers in one place. Add, update, monitor and maintain records of company assets to ensure smooth operations.            </p>
        </div>

        {/* Controls Container */}
        <div className="headerContain">
            <div className="dropDownBTN">
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Category All
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className="dropDownBTN">
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Type All
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
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
            <div className="AddBTN" onClick={handleShow}>
                <img src={add} alt="" />
                <p>New Asset</p>
            </div>
        </div>
    </div>
            <div className="text">
            <div className="table-wrapper-main mb-4">
  <Table responsive>
  <thead>
  <tr className="firstTabelRow" style={{ backgroundColor: '#f5f5f5', borderBottom: '2px solid #ddd' }}>
    <th style={{ padding: '10px', textAlign: 'center' }}>
      <Form.Check type='checkbox' id="all" className='Common_checkbox' style={{ marginBottom: '10px' }} />
    </th>
    <th style={{ padding: '10px' }}>Asset ID</th>
    <th style={{ padding: '10px' }}>Asset Name</th>
    <th style={{ padding: '10px' }}>Asset Category</th>
    <th style={{ padding: '10px' }}>Asset Type</th>
    <th style={{ padding: '10px' }}>Assigned To</th>
    <th style={{ padding: '10px' }}>Status</th>
    <th style={{ padding: '10px' }}>Actions</th>
  </tr>
</thead>

<tbody>
  {/* Hardcoded Asset Entries */}
 <tr className="table-row-main" style={{ borderBottom: '1px solid #ddd' }}>
  <td style={{ textAlign: 'center', padding: '10px' }}>
    <Form.Check type='checkbox' id="asset-1" className='Common_checkbox' style={{ marginTop: '10px' }} />
  </td>
  <td style={{ padding: '10px' }}>Ass-12345</td>
  <td style={{ padding: '10px' }}>Asset Name Here</td>
  <td style={{ padding: '10px' }}>Category Here</td>
  <td style={{ padding: '10px' }}>Type Here</td>
  <td style={{ padding: '10px' }}>Basil</td>
  <td className="status-label green" style={{ padding: '10px' }}>
    <div><span></span>Active</div>
  </td>
  <td style={{ padding: '10px' }}>
    <Dropdown as="div">
      <Dropdown.Toggle split variant="success" className="custom-dropdown-toggle">
        <img src={OptionDot} alt="dropdown-icon" className="custom-dropdown-img" />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>
          Edit Asset Details
        </Dropdown.Item>
        <Dropdown.Item>
          Delete Asset
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </td>
</tr>

<tr className="table-row-main" style={{ borderBottom: '1px solid #ddd' }}>
  <td style={{ textAlign: 'center', padding: '10px' }}>
    <Form.Check type='checkbox' id="asset-2" className='Common_checkbox' style={{ marginTop: '10px' }} />
  </td>
  <td style={{ padding: '10px' }}>Ass-12346</td>
  <td style={{ padding: '10px' }}>Asset Name Here</td>
  <td style={{ padding: '10px' }}>Category Here</td>
  <td style={{ padding: '10px' }}>Type Here</td>
  <td style={{ padding: '10px' }}>Abdul Salam</td>
  <td className="status-label green" style={{ padding: '10px' }}>
    <div><span></span>Active</div>
  </td>
  <td style={{ padding: '10px' }}>
    <Dropdown as="div">
      <Dropdown.Toggle split variant="success" className="custom-dropdown-toggle">
        <img src={OptionDot} alt="dropdown-icon" className="custom-dropdown-img" />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>
          Edit Asset Details
        </Dropdown.Item>
        <Dropdown.Item>
          Delete Asset
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </td>
</tr>

<tr className="table-row-main" style={{ borderBottom: '1px solid #ddd' }}>
  <td style={{ textAlign: 'center', padding: '10px' }}>
    <Form.Check type='checkbox' id="asset-3" className='Common_checkbox' style={{ marginTop: '10px' }} />
  </td>
  <td style={{ padding: '10px' }}>Ass-12347</td>
  <td style={{ padding: '10px' }}>Asset Name Here</td>
  <td style={{ padding: '10px' }}>Category Here</td>
  <td style={{ padding: '10px' }}>Type Here</td>
  <td style={{ padding: '10px' }}>Basil</td>
  <td className="status-label green" style={{ padding: '10px' }}>
    <div><span></span>Active</div>
  </td>
  <td style={{ padding: '10px' }}>
    <Dropdown as="div">
      <Dropdown.Toggle split variant="success" className="custom-dropdown-toggle">
        <img src={OptionDot} alt="dropdown-icon" className="custom-dropdown-img" />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>
          Edit Asset Details
        </Dropdown.Item>
        <Dropdown.Item>
          Delete Asset
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </td>
</tr>

<tr className="table-row-main" style={{ borderBottom: '1px solid #ddd' }}>
  <td style={{ textAlign: 'center', padding: '10px' }}>
    <Form.Check type='checkbox' id="asset-4" className='Common_checkbox' style={{ marginTop: '10px' }} />
  </td>
  <td style={{ padding: '10px' }}>Ass-12348</td>
  <td style={{ padding: '10px' }}>Asset Name Here</td>
  <td style={{ padding: '10px' }}>Category Here</td>
  <td style={{ padding: '10px' }}>Type Here</td>
  <td style={{ padding: '10px' }}>Abdul Salam</td>
  <td className="status-label green" style={{ padding: '10px' }}>
    <div><span></span>Active</div>
  </td>
  <td style={{ padding: '10px' }}>
    <Dropdown as="div">
      <Dropdown.Toggle split variant="success" className="custom-dropdown-toggle">
        <img src={OptionDot} alt="dropdown-icon" className="custom-dropdown-img" />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>
          Edit Asset Details
        </Dropdown.Item>
        <Dropdown.Item>
          Delete Asset
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </td>
</tr>

<tr className="table-row-main" style={{ borderBottom: '1px solid #ddd' }}>
  <td style={{ textAlign: 'center', padding: '10px' }}>
    <Form.Check type='checkbox' id="asset-5" className='Common_checkbox' style={{ marginTop: '10px' }} />
  </td>
  <td style={{ padding: '10px' }}>Ass-12349</td>
  <td style={{ padding: '10px' }}>Asset Name Here</td>
  <td style={{ padding: '10px' }}>Category Here</td>
  <td style={{ padding: '10px' }}>Type Here</td>
  <td style={{ padding: '10px' }}>Ahmed</td>
  <td className="status-label green" style={{ padding: '10px' }}>
    <div><span></span>Active</div>
  </td>
  <td style={{ padding: '10px' }}>
    <Dropdown as="div">
      <Dropdown.Toggle split variant="success" className="custom-dropdown-toggle">
        <img src={OptionDot} alt="dropdown-icon" className="custom-dropdown-img" />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>
          Edit Asset Details
        </Dropdown.Item>
        <Dropdown.Item>
          Delete Asset
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </td>
</tr>
</tbody>
</Table>
    </div>


            </div>
            {/* Offcanvas for Adding New Asset */}
            <Offcanvas show={newAsset} onHide={handleClose} backdrop="static" placement="end" style={{ width: '45%', backgroundColor: '#F8FAFC' }}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title className="fw-bold" style={{ color: '#4F5C6B' }}>Add New Assets</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {/* Tab Navigation */}
                <Nav variant="tabs" defaultActiveKey="assets" className="mb-3" onSelect={(selectedKey) => setActiveTab(selectedKey)}>
                    <Nav.Item>
                        <Nav.Link eventKey="assets" className="active-tab" style={{ color: '#4F5C6B', fontWeight: 'bold' }} 
                                  onMouseEnter={(e) => e.target.style.color = '#7B8A92'}
                                  onMouseLeave={(e) => e.target.style.color = '#4F5C6B'}>
                            Assets
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="asset-info" style={{ color: '#4F5C6B', fontWeight: 'bold' }} 
                                  onMouseEnter={(e) => e.target.style.color = '#7B8A92'}
                                  onMouseLeave={(e) => e.target.style.color = '#4F5C6B'}>
                            Asset Information
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="supplier-info" style={{ color: '#4F5C6B', fontWeight: 'bold' }} 
                                  onMouseEnter={(e) => e.target.style.color = '#7B8A92'}
                                  onMouseLeave={(e) => e.target.style.color = '#4F5C6B'}>
                            Asset Supplier Information
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="custom-fields" style={{ color: '#4F5C6B', fontWeight: 'bold' }} 
                                  onMouseEnter={(e) => e.target.style.color = '#7B8A92'}
                                  onMouseLeave={(e) => e.target.style.color = '#4F5C6B'}>
                            Asset Custom Fields
                        </Nav.Link>
                    </Nav.Item>
                </Nav>

                {/* Form Fields */}
                <Form noValidate>
                {activeTab === "assets" && (
    <>
        {/* General Asset Fields */}
        <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Asset Main Image *</Form.Label>
            <Form.Control type="file" className="custom-file-input p-2" style={{ backgroundColor: '#f1f1f1' }} />
        </Form.Group>
        <Row className="mb-3">
            <Form.Group as={Col} md="6">
                <Form.Label>Asset Id *</Form.Label>
                <Form.Control type="text" placeholder="Enter Asset Id" className="border-0 p-2" style={{ backgroundColor: '#f1f1f1' }} required />
            </Form.Group>
            <Form.Group as={Col} md="6">
                <Form.Label>Asset Type *</Form.Label>
                <Form.Select className="border-0 p-2" style={{ backgroundColor: '#f1f1f1' }}>
                    <option>Select Asset Type</option>
                </Form.Select>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} md="6">
                <Form.Label>Asset Name *</Form.Label>
                <Form.Control type="text" placeholder="Enter Asset Name" className="border-0 p-2" style={{ backgroundColor: '#f1f1f1' }} required />
            </Form.Group>
            <Form.Group as={Col} md="6">
                <Form.Label>Asset Manager *</Form.Label>
                <Form.Select className="border-0 p-2" style={{ backgroundColor: '#f1f1f1' }}>
                    <option>Select Asset Manager</option>
                </Form.Select>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} md="6">
                <Form.Label>Asset Category *</Form.Label>
                <Form.Control type="text" placeholder="Enter Asset Category" className="border-0 p-2" style={{ backgroundColor: '#f1f1f1' }} required />
            </Form.Group>
            <Form.Group as={Col} md="6">
                <Form.Label>Purchase Cost *</Form.Label>
                <Form.Control type="text" placeholder="Enter Purchase Cost" className="border-0 p-2" style={{ backgroundColor: '#f1f1f1' }} required />
            </Form.Group>
        </Row>
        <Form.Group className="mb-3">
            <Form.Label>Description *</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter Description" className="border-0 p-2" style={{ backgroundColor: '#f1f1f1' }} required />
        </Form.Group>
    </>
)}


{activeTab === "asset-info" && (
    <>
        {/* Asset Information Fields */}
        <Row className="mb-3">
            <Form.Group as={Col} md="6">
                <Form.Label>Serial Number *</Form.Label>
                <Form.Control type="text" placeholder="Enter Serial Number" className="border-0 p-2" style={{ backgroundColor: '#f1f1f1' }} required />
            </Form.Group>
            <Form.Group as={Col} md="6">
                <Form.Label>Model Number *</Form.Label>
                <Form.Control type="text" placeholder="Enter Model Number" className="border-0 p-2" style={{ backgroundColor: '#f1f1f1' }} required />
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} md="6">
                <Form.Label>Warranty Period (Months) *</Form.Label>
                <Form.Control type="number" placeholder="Enter Warranty Period" className="border-0 p-2" style={{ backgroundColor: '#f1f1f1' }} required />
            </Form.Group>
            <Form.Group as={Col} md="6">
                <Form.Label>Document Category *</Form.Label>
                <Form.Select className="border-0 p-2" style={{ backgroundColor: '#f1f1f1' }}>
                    <option>Select Document Type</option>
                </Form.Select>
            </Form.Group>
        </Row>
    </>
)}

{activeTab === "supplier-info" && (
    <>
        {/* Supplier Information Fields */}
        <Row className="mb-3">
            <Form.Group as={Col} md="6">
                <Form.Label>Supplier Name *</Form.Label>
                <Form.Control type="text" placeholder="Enter supplier name" className="border-0 p-2" style={{ backgroundColor: '#f1f1f1' }} required />
            </Form.Group>
            <Form.Group as={Col} md="6">
                <Form.Label>Supplier Phone Number *</Form.Label>
                <Form.Control type="text" placeholder="Enter supplier phone number" className="border-0 p-2" style={{ backgroundColor: '#f1f1f1' }} required />
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} md="12">
                <Form.Label>Supplier Address *</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter supplier address" className="border-0 p-2" style={{ backgroundColor: '#f1f1f1' }} required />
            </Form.Group>
        </Row>
    </>
)}

{activeTab === "custom-fields" && (
    <>
        {/* Asset Custom Fields */}
        <Row className="mb-3">
            <Form.Group as={Col} md="6">
                <Form.Label>Field Belongs to *</Form.Label>
                <Form.Select className="bg-light border-0 p-2" style={{ backgroundColor: '#f1f1f1' }}>
                    <option>Select Field Belongs</option>
                    {/* Add your options here */}
                </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md="6">
                <Form.Label>Field Name *</Form.Label>
                <Form.Control type="text" placeholder="Enter Field Name" className="border-0 p-2" style={{ backgroundColor: '#f1f1f1' }} required />
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} md="6">
                <Form.Label>Default Value *</Form.Label>
                <Form.Control type="text" placeholder="Enter Default Value" className="border-0 p-2" style={{ backgroundColor: '#f1f1f1' }} required />
            </Form.Group>
            <Form.Group as={Col} md="6">
                <Form.Label>Order *</Form.Label>
                <Form.Select className="bg-light border-0 p-2" style={{ backgroundColor: '#f1f1f1' }}>
                    <option>Select Order Type</option>
                    {/* Add your options here */}
                </Form.Select>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} md="6">
                <Form.Label>Grid (Bootstrap Column eq. 12) *</Form.Label>
                <Form.Control type="text" placeholder="Enter Grid Size" className="border-0 p-2" style={{ backgroundColor: '#f1f1f1' }} required />
            </Form.Group>
            <Form.Group as={Col} md="6">
                <Form.Label>Col-Md- *</Form.Label>
                <Form.Control type="text" placeholder="Enter Col-Md-" className="border-0 p-2" style={{ backgroundColor: '#f1f1f1' }} required />
            </Form.Group>
        </Row>
        {/* Checkboxes */}
        <Form.Group className="mb-3">
            <Form.Check type="checkbox" label="Disabled" />
            <Form.Check type="checkbox" label="Restrict visibility for administrators only" />
            <Form.Check type="checkbox" label="Required Visibility" />
            <Form.Check type="checkbox" label="Show on table" />
        </Form.Group>
    </>
)}


                 
                </Form>

                {/* Buttons at bottom right */}
                <div className="d-flex justify-content-end position-absolute" style={{ bottom: '20px', right: '20px' }}>
                    <Button variant="light" className="me-2 text-dark border" onClick={handleClose}>Cancel</Button>
                    <Button variant="warning" className="px-4">Next</Button>
                </div>
            </Offcanvas.Body>
        </Offcanvas>



            {/* Offcanvas and Modal components */}
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                {...modalData}
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

export default Assets;