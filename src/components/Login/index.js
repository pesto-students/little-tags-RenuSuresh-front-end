import React from "react";

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
          <button
            className="loginBtn loginBtn--google"
            onClick={() => handleLogin(googleProvider)}
          >
            {t(`login.google`)}
          </button>
          <div className="login__or">
            <span>{t(`login.or`)}</span>
          </div>
          <button
            className="loginBtn loginBtn--facebook"
            onClick={() => handleLogin(facebookProvider)}
          >
            {t(`login.facebook`)}
          </button>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

export default LoginIndex;
