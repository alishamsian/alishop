import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const bg = props.backgrounColor ? "bg-" + props.backgrounolor : "bg-main";

  const size = props.size ? "bg-" + props.size : "";

  const animate = props.animate ? "btn-animate" : "";

  return (
    <button
      className={`btn ${bg} ${size} ${animate}`}
      onClick={props.onClick ? () => props.onClick() : null}>
          <span className="btn__txt">{props.children}</span>
          {
              props.icon ? (
                  <span className="btn__icon">
                      <i className={`${props.icon} bx-tada`}></i>
                  </span>
              ): ''
          }
        
    </button>
  );
};

Button.propTypes = {
  background_color: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.string,
  animate: PropTypes.bool,
  onclick: PropTypes.func,
};

export default Button;
