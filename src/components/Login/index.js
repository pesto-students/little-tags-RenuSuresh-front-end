import React, { useState, useEffect } from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

import DialogContent from "@material-ui/core/DialogContent";

import DialogTitle from "@material-ui/core/DialogTitle";

import CloseIcon from "@material-ui/icons/Close";
import { useTranslation } from "react-i18next";
import { facebookProvider, googleProvider } from "../../config/authMethod";
import socialMediaAuth from "../../service/auth";
import "./Login.css";
import { Provider, useSelector, useDispatch } from "react-redux";
import { SET_USER } from "../../constant/properties";

function LoginIndex({ handleMenuClose }) {
  const [t] = useTranslation("common");
  const dispatch = useDispatch();

  const handleLogin = async (provider) => {
    const res = await socialMediaAuth(provider);
    dispatch({ type: SET_USER, data: res.providerData[0].displayName });
    handleClose();
  };

  const handleClose = () => {
    handleMenuClose();
  };

  return (
    <React.Fragment>
      <Dialog
        fullWidth={true}
        maxWidth={"sm"}
        open={true}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">
          {t(`login.modalText`)}

          <Button onClick={handleClose} color="primary">
            <CloseIcon />
          </Button>
        </DialogTitle>
        <DialogContent>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleLogin(googleProvider)}
          >
            <i className="fa fa-google-plus-official"></i>
            {t(`login.google`)}
          </Button>
          <div className="login__or">
            <span>{t(`login.or`)}</span>
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleLogin(facebookProvider)}
          >
            <i className="fa fa-facebook" aria-hidden="true"></i>
            {t(`login.facebook`)}
          </Button>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

export default LoginIndex;
