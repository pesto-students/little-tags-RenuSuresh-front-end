import React from "react";
import errorImage from "../../assets/images/error.png";
import { useHistory } from "react-router-dom";

function Error() {
  const history = useHistory();

  const goToHome = () => {
    history.push(`/`);
  };
  return (
    <div className="category__error">
      <img src={errorImage} alt="error" />
      <h1>No data available!!</h1>
      <button onClick={goToHome}>Back</button>
    </div>
  );
}

export default Error;
