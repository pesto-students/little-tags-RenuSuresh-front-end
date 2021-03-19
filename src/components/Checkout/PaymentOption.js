import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Button } from "@material-ui/core";

import CardPayment from "./Card";
import Upi from "./Upi";
import Cod from "./Cod";
import { useHistory } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    // maxHeight: 151,
  },
  tabpanelBox: {
    width: "98%",
  },
  button: {
    backgroundColor: "#0c0351",
    fontSize: "0.9em",
    fontWeight: "600",
    margin: "1em 0em 5em 3em",
    // width: "6em",
    marginLeft: "auto",
    "@media only screen and (max-width: 770px)": {
      width: "60%",
      marginLeft: "auto",

      margin: "0em 2em 5em 3em",
    },
  },
}));

function PaymentOption() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const goToThankYou = () => {
    history.push("/orderPlacedSuccessfully");
  };

  return (
    <>
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab label="Card" {...a11yProps(0)} />
          <Tab label="UPI" {...a11yProps(1)} />
          <Tab label="COD" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0} className={classes.tabpanelBox}>
          <CardPayment />
        </TabPanel>
        <TabPanel value={value} index={1} className={classes.tabpanelBox}>
          <Upi />
        </TabPanel>
        <TabPanel value={value} index={2} className={classes.tabpanelBox}>
          <Cod />
        </TabPanel>
      </div>
      <Box color="text.primary" clone>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          className={classes.button}
          onClick={goToThankYou}
        >
          <span className="cart__placeOrder">Place order</span>
        </Button>
      </Box>
    </>
  );
}
export default PaymentOption;
