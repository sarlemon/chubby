import React from 'react';
import classNames from "classnames";

interface BaseAlertProps {
  className?: string;
  type?: "success" | "default" | "warning" | "danger";
  closable?: boolean;
  description?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  message: React.ReactNode;
}

const Alert:React.FC<BaseAlertProps> = (props) => {
    const {
        type,
        className,
        closable,
        description,
        onClick,
        message,
        ...restProps
    } = props;
    const [closed, setClosed] = React.useState(false);
    const classes = classNames("alert", {
      [`alert-${type}`]: type,
    });
    return (
      <div className={classes}>
        {message}
        {description}
      </div>
    );
}

Alert.defaultProps = {
  type: "default",
  closable: false,
};

export default Alert;