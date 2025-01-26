import React from "react";
import PropTypes from "prop-types";
import WaxModal from "./Waxmodal";

const BikiniWax = ({ onClose }) => {
  return (
    <WaxModal
      category="bikiniwax"
      title="Bikini Wax Options"
      onClose={onClose}
    />
  );
};

BikiniWax.propTypes = {
  onClose: PropTypes.func.isRequired,
};
export default BikiniWax;
