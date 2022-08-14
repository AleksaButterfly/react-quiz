import React from "react";
import { node, string } from "prop-types";

// External
import { Helmet } from "react-helmet";
import classNames from "classnames";

// Shared
import css from "./Page.module.scss";

const DEFAULT_TITLE = "Quiz";

const Page = (props) => {
  const { rootClassName, className, children } = props;
  const classes = classNames(rootClassName || className, css.root);

  const title = props.title || DEFAULT_TITLE;
  return (
    <div className={classes}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link rel="canonical" href={process.env.REACT_APP_CANONICAL_ROOT_URL} />
      </Helmet>
      {children}
    </div>
  );
};

Page.defaultProps = {
  rootClassName: null,
  className: null,
  title: null,
  children: null,
};

Page.propTypes = {
  rootClassName: string,
  className: string,
  title: string,
  children: node.isRequired,
};

export default Page;
