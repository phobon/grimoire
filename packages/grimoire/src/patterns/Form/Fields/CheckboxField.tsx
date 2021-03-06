/* eslint-disable react/prefer-stateless-function */
import React, { useContext, forwardRef } from "react";
import { Text, Checkbox, Box } from "@phobon/base";

import { FormFieldContext } from "../FormFieldContext";

import { IAsFieldProps } from "./asField";

import { AlertCircle } from "../../../icons/AlertCircle";

export type CheckboxFieldProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  IAsFieldProps;

export const CheckboxField: React.FunctionComponent<CheckboxFieldProps> = forwardRef<
  HTMLInputElement,
  CheckboxFieldProps
>(
  (
    {
      label,
      id,
      required = false,
      invalid,
      hint,
      visible = true,
      className,
      disabled,
      useUnprocessed = false,
      ...props
    },
    ref: any
  ) => {
    const { optionalLabel, formDisabled } = useContext(FormFieldContext);

    // If the field shouldn't be visible, don't render it.
    if (!visible) {
      return null;
    }

    const fieldDisabled = disabled || formDisabled;

    // If we want to use an unprocessed component.
    if (useUnprocessed) {
      return (
        <Checkbox
          id={id}
          ref={ref}
          {...props}
          invalid={invalid}
          disabled={fieldDisabled}
          label={label}
        />
      );
    }

    return (
      <Box
        flex={1}
        className="form__field"
        flexDirection="column"
        alignItems="flex-start"
        fullWidth
        position="relative"
      >
        <Checkbox
          id={id}
          ref={ref}
          {...props}
          className={className}
          invalid={invalid}
          disabled={fieldDisabled}
          label={
            label && (
              <>
                <Text
                  as="span"
                  color="grayscale.4"
                  lineHeight={0}
                  display="inline"
                >
                  {label}
                </Text>
                {!required && optionalLabel && (
                  <Text
                    as="span"
                    color="grayscale.4"
                    lineHeight={0}
                    ml={1}
                    display="inline"
                  >
                    {`(${optionalLabel()})`}
                  </Text>
                )}
              </>
            )
          }
        />
        {hint && (
          <Text fontSize={0} mt={1} color="grayscale.3">
            {hint}
          </Text>
        )}
        {invalid && (
          <Box mt={2} color="reds.2">
            <AlertCircle width={16} height={16} />
            <Text ml={1} fontSize={0} color="guidance.error.0">
              {invalid}
            </Text>
          </Box>
        )}
      </Box>
    );
  }
);

CheckboxField.defaultProps = {
  required: false,
  visible: true,
  useUnprocessed: false,
  disabled: false,
};
