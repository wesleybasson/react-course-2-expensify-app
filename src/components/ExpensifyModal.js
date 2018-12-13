import React from 'react';
import Modal from 'react-modal';

export default (props) => (
    <Modal
        isOpen={props.modalOpen}
        onRequestClose={props.handleClose}
        contentLabel="Expensify"
        closeTimeoutMS={200}
        className="modal"
        ariaHideApp={false}
    >
        <h3 className="modal__title">{props.title}</h3>
        <p className="modal__body">Do you really want to remove this item?</p>
        <div className="container">
            <button className="button button__half button--success" onClick={props.handleAction}>Yes</button>
            <button className="button button__half button--cancel" onClick={props.handleClose}>No</button>
        </div>
    </Modal>
);