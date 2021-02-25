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
    const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
      setClosed(true);
    };
    return (
      <div className={classes} onClick={handleClose}>
        <a className='alert-close-icon'>关闭</a>
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