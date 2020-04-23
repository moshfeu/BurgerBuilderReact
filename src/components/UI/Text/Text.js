import React from "react";

const Text = props => (props.showText ? <p>{props.children}</p> : null);
export default Text;
