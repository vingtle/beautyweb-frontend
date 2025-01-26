import React from "react";
import PropTypes from "prop-types";
import WaxModal from "./Waxmodal";

const FaceWax = ({ onClose }) => {
  return (
    <WaxModal 
    category="facewax" 
    title="Face Wax Options" 
    onClose={onClose} />
  );
};

FaceWax.propTypes = {
  onClose: PropTypes.func.isRequired,
};
export default FaceWax;
