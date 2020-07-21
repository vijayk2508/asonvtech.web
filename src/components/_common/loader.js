import React from "react";
import '../../assets/css/loading.css'
function Loader(props) {
  return (
    <>
      <div className="cube-wrapper" style={{ display: "block" }}>
        <div className="cube-folding">
          <span className="leaf1"></span>
          <span className="leaf2"></span>
          <span className="leaf3"></span>
          <span className="leaf4"></span>
        </div>
        <span className="loading" data-name="Loading" style={{color: "#6440e1"}}>
          Loading
        </span>
      </div>
    </>
  );
}

Loader.defaultProps = {
    
}

export default Loader;
