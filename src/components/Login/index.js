import React from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

import DialogContent from "@material-ui/core/DialogContent";

import DialogTitle from "@material-ui/core/DialogTitle";

import CloseIcon from "@material-ui/icons/Close";
import { useTranslation } from "react-i18next";
import { facebookProvider, googleProvider } from "../../config/authMethod";
import socialMediaAuth from "../../service/auth";
import { makeStyles } from "@material-ui/core";
import "./Login.css";
import { Provider, useSelector, useDispatch } from "react-redux";
import { SET_USER } from "../../constant/properties";

const useStyles = makeStyles((theme) => ({
  shade: {
    backgroundImage: "linear-gradient(to bottom right, #c4c1e9, #ffffff)",
  },
}));
function LoginIndex({ handleMenuClose }) {
  const [t] = useTranslation("common");
  const dispatch = useDispatch();
  const classes = useStyles();
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
          <h2> {t(`login.modalText`)}</h2>
          <Button onClick={handleClose} color="primary">
            <CloseIcon />
          </Button>
        </DialogTitle>
        <DialogContent>
          <div class="container">
            <div class="col-left">
              <div class="login-text">
                <button
                  class="g-button"
                  onClick={() => handleLogin(googleProvider)}
                >
                  <img
                    class="g-logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/157px-Google_%22G%22_Logo.svg.png"
                    alt="Google Logo"
                  />
                  <p class="g-text">{t(`login.google`)}</p>
                </button>

                <button
                  className="loginBtn loginBtn--facebook"
                  onClick={() => handleLogin(facebookProvider)}
                >
                  {t(`login.facebook`)}
                </button>
              </div>
            </div>
            <div class="col-right">
              <div class="login-form">
                <form>
                  <p className="login__form">
                    <input type="text" placeholder="Email" required />
                  </p>
                  <p className="login__form">
                    <input type="password" placeholder="Password" required />
                  </p>
                  <p className="login__form">
                    <input class="btn" type="submit" value="Sign In" />
                  </p>
                </form>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

export default LoginIndex;
