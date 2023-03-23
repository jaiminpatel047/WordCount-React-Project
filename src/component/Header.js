import React from "react";
import ToggleButton from "./ToggleButton";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = (props) => {
  return (
    <>
      <nav>
          <div className=" d-flex justify-content-between">
              {/* <h1>{props.title}</h1> */}
              <ToggleButton /> 
          </div>
      </nav>
    </>
  );
};

export default Header;
