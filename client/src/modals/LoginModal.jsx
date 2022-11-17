import React, { useState } from "react";
import { Modal } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useSelector, useDispatch } from 'react-redux'
import { handleLoginModal } from "../reducers/ModalReducer";
import LoginForm from "../forms/LoginForm";

const getModalStyle = () => {
  const top = 50;
  const left = 50;
  return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
  };
};

const useStyles = makeStyles(() => ({
  modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  },
  paper: {
    position: 'absolute',
    width: 450,
    height: 190,
    backgroundColor: 'white',
    padding: 30
},
  header: {
    background: 'linear-gradient(45deg, #124eb0 70%, #501573 90%)',
    border: 0,
    borderRadius: 30,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    textAlign: 'center',
    height: 30,
    marginTop: 5,
    padding: '0 30px',
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <h2 className={classes.header}> Log in </h2>
  );
};

const LogInModal = () => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const modalOpen = useSelector((state) => state.modal.login);
  const dispatch = useDispatch();

  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={modalOpen}
      onClose={() => dispatch(handleLoginModal(false))}
    >
      <div style={modalStyle} className={classes.paper}>
        <Header />
        <LoginForm />
      </div>
    </Modal>
  );
};

export default LogInModal;