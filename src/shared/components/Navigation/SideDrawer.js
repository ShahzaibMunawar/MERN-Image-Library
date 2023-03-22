import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import "./SideDrawer.css";

const SideDrawer = (props) => {
  const content = (
    //      mountOnEnter, unmountOnExit used with the React Transition
    //      mountOnEnter: This prop specifies whether the child component should be mounted on the DOM when the in prop (which controls whether the component is visible or not) changes from false to true. By default, this prop is set to false, meaning the child component will be mounted as soon as the parent component is mounted, regardless of the in prop.
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer" onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
