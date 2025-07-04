import PropTypes from 'prop-types';
import * as React from "react"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef(function Alert(props, ref) {
  const { className, variant, ...otherProps } = props;
  return (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...otherProps}
    />
  );
});

Alert.displayName = "Alert";

Alert.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'destructive']),
  children: PropTypes.node
};

const AlertTitle = React.forwardRef(function AlertTitle(props, ref) {
  const { className, ...otherProps } = props;
  return (
    <h5
      ref={ref}
      className={cn("mb-1 font-medium leading-none tracking-tight", className)}
      {...otherProps}
    />
  );
});

AlertTitle.displayName = "AlertTitle";

AlertTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

const AlertDescription = React.forwardRef(function AlertDescription(props, ref) {
  const { className, ...otherProps } = props;
  return (
    <div
      ref={ref}
      className={cn("text-sm [&_p]:leading-relaxed", className)}
      {...otherProps}
    />
  );
});

AlertDescription.displayName = "AlertDescription";

AlertDescription.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export { Alert, AlertTitle, AlertDescription }
