import React from "react";
import { node, string, bool } from "prop-types";
import classNames from "classnames";
import { IconSpinner, IconCheckmark } from "../../components";

import css from "./Button.module.scss";

const Button = (props) => {
  const {
    children,
    rootClassName,
    className,
    checkmarkClassName,
    spinnerClassName,
    inProgress,
    ready,
    disabled,
    ...rest
  } = props;

  const classes = classNames(rootClassName || css.root, className, {
    [css.ready]: ready,
    [css.inProgress]: inProgress,
  });

  let content;

  if (inProgress) {
    content = <IconSpinner rootClassName={spinnerClassName || css.spinner} />;
  } else if (ready) {
    content = (
      <IconCheckmark rootClassName={checkmarkClassName || css.checkmark} />
    );
  } else {
    content = children;
  }

  return (
    <button className={classes} disabled={disabled} {...rest}>
      {content}
    </button>
  );
};

Button.defaultProps = {
  children: null,
  rootClassName: null,
  className: null,
  checkmarkClassName: null,
  spinnerClassName: null,
  inProgress: false,
  ready: false,
  disabled: false,
};

Button.propTypes = {
  children: node.isRequired,
  rootClassName: string,
  className: string,
  checkmarkClassName: string,
  spinnerClassName: string,
  inProgress: bool,
  ready: bool,
  disabled: bool,
};

export default Button;

export const SecondaryButton = (props) => {
  const classes = classNames(
    css.root || css.secondaryButtonRoot,
    css.secondaryButton
  );
  return <Button {...props} rootClassName={classes} />;
};

SecondaryButton.displayName = "SecondaryButton";
