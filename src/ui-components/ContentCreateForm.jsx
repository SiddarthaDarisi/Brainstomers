/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Content } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ContentCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Class_link: "",
    Homework: "",
  };
  const [Class_link, setClass_link] = React.useState(initialValues.Class_link);
  const [Homework, setHomework] = React.useState(initialValues.Homework);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setClass_link(initialValues.Class_link);
    setHomework(initialValues.Homework);
    setErrors({});
  };
  const validations = {
    Class_link: [],
    Homework: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Class_link,
          Homework,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Content(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ContentCreateForm")}
      {...rest}
    >
      <TextField
        label="Class link"
        isRequired={false}
        isReadOnly={false}
        value={Class_link}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Class_link: value,
              Homework,
            };
            const result = onChange(modelFields);
            value = result?.Class_link ?? value;
          }
          if (errors.Class_link?.hasError) {
            runValidationTasks("Class_link", value);
          }
          setClass_link(value);
        }}
        onBlur={() => runValidationTasks("Class_link", Class_link)}
        errorMessage={errors.Class_link?.errorMessage}
        hasError={errors.Class_link?.hasError}
        {...getOverrideProps(overrides, "Class_link")}
      ></TextField>
      <TextField
        label="Homework"
        isRequired={false}
        isReadOnly={false}
        value={Homework}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Class_link,
              Homework: value,
            };
            const result = onChange(modelFields);
            value = result?.Homework ?? value;
          }
          if (errors.Homework?.hasError) {
            runValidationTasks("Homework", value);
          }
          setHomework(value);
        }}
        onBlur={() => runValidationTasks("Homework", Homework)}
        errorMessage={errors.Homework?.errorMessage}
        hasError={errors.Homework?.hasError}
        {...getOverrideProps(overrides, "Homework")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
