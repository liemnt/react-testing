import React from "react";
import PropTypes from "prop-types";

function SharedButton({ buttonText, emitEvent }) {
  const submitEvent = () => {
    if (emitEvent) {
      emitEvent();
    }
  };
  return (
    <button onClick={() => submitEvent()} data-test="buttonComponent">
      {buttonText}
    </button>
  );
}

SharedButton.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func
};
SharedButton.defaultProps = {};

export default SharedButton;
