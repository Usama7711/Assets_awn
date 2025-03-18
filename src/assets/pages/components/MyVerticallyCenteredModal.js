import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

// Reusable Modal Component
function MyVerticallyCenteredModal({ show, onHide, indicator, heading, Details, leftBTN, rightBTN, colorCode, LeftColorBTN, nextModal, onLeftButtonClick }) {
    return (
        <div className="modalWrapper">
            <Modal
                show={show}
                onHide={onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    {indicator && (
                        <div className={`modalImage ${colorCode}`}>
                            <img src={indicator} alt="Modal Icon" />
                        </div>
                    )}
                    {heading && <p className="heading">{heading}</p>}
                    {Details && <p className="details">{Details}</p>}
                </Modal.Body>
                <Modal.Footer>
                    {rightBTN && (
                        <Button onClick={onHide} className='cancelBTN'>
                            {rightBTN}
                        </Button>
                    )}
                    {leftBTN && (
                        <Button
                            className={LeftColorBTN || ""}
                            onClick={onLeftButtonClick} // Execute the passed function here
                        >
                            {leftBTN}
                        </Button>
                    )}
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default MyVerticallyCenteredModal;
