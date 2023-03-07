/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Userdetails } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function UserdetailsUpdateForm(props) {
  const {
    id: idProp,
    userdetails,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Email: "",
    Username: "",
    Password: "",
    Lname: "",
    Fname: "",
    Dob: "",
    Country: "",
    Payment_status: "",
  };
  const [Email, setEmail] = React.useState(initialValues.Email);
  const [Username, setUsername] = React.useState(initialValues.Username);
  const [Password, setPassword] = React.useState(initialValues.Password);
  const [Lname, setLname] = React.useState(initialValues.Lname);
  const [Fname, setFname] = React.useState(initialValues.Fname);
  const [Dob, setDob] = React.useState(initialValues.Dob);
  const [Country, setCountry] = React.useState(initialValues.Country);
  const [Payment_status, setPayment_status] = React.useState(
    initialValues.Payment_status
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = userdetailsRecord
      ? { ...initialValues, ...userdetailsRecord }
      : initialValues;
    setEmail(cleanValues.Email);
    setUsername(cleanValues.Username);
    setPassword(cleanValues.Password);
    setLname(cleanValues.Lname);
    setFname(cleanValues.Fname);
    setDob(cleanValues.Dob);
    setCountry(cleanValues.Country);
    setPayment_status(cleanValues.Payment_status);
    setErrors({});
  };
  const [userdetailsRecord, setUserdetailsRecord] = React.useState(userdetails);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Userdetails, idProp)
        : userdetails;
      setUserdetailsRecord(record);
    };
    queryData();
  }, [idProp, userdetails]);
  React.useEffect(resetStateValues, [userdetailsRecord]);
  const validations = {
    Email: [{ type: "Required" }, { type: "Email" }],
    Username: [{ type: "Required" }],
    Password: [{ type: "Required" }],
    Lname: [],
    Fname: [],
    Dob: [],
    Country: [],
    Payment_status: [{ type: "Required" }],
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
          Email,
          Username,
          Password,
          Lname,
          Fname,
          Dob,
          Country,
          Payment_status,
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
          await DataStore.save(
            Userdetails.copyOf(userdetailsRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "UserdetailsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={Email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Email: value,
              Username,
              Password,
              Lname,
              Fname,
              Dob,
              Country,
              Payment_status,
            };
            const result = onChange(modelFields);
            value = result?.Email ?? value;
          }
          if (errors.Email?.hasError) {
            runValidationTasks("Email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("Email", Email)}
        errorMessage={errors.Email?.errorMessage}
        hasError={errors.Email?.hasError}
        {...getOverrideProps(overrides, "Email")}
      ></TextField>
      <TextField
        label="Username"
        isRequired={true}
        isReadOnly={false}
        value={Username}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Email,
              Username: value,
              Password,
              Lname,
              Fname,
              Dob,
              Country,
              Payment_status,
            };
            const result = onChange(modelFields);
            value = result?.Username ?? value;
          }
          if (errors.Username?.hasError) {
            runValidationTasks("Username", value);
          }
          setUsername(value);
        }}
        onBlur={() => runValidationTasks("Username", Username)}
        errorMessage={errors.Username?.errorMessage}
        hasError={errors.Username?.hasError}
        {...getOverrideProps(overrides, "Username")}
      ></TextField>
      <TextField
        label="Password"
        isRequired={true}
        isReadOnly={false}
        value={Password}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Email,
              Username,
              Password: value,
              Lname,
              Fname,
              Dob,
              Country,
              Payment_status,
            };
            const result = onChange(modelFields);
            value = result?.Password ?? value;
          }
          if (errors.Password?.hasError) {
            runValidationTasks("Password", value);
          }
          setPassword(value);
        }}
        onBlur={() => runValidationTasks("Password", Password)}
        errorMessage={errors.Password?.errorMessage}
        hasError={errors.Password?.hasError}
        {...getOverrideProps(overrides, "Password")}
      ></TextField>
      <TextField
        label="Lname"
        isRequired={false}
        isReadOnly={false}
        value={Lname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Email,
              Username,
              Password,
              Lname: value,
              Fname,
              Dob,
              Country,
              Payment_status,
            };
            const result = onChange(modelFields);
            value = result?.Lname ?? value;
          }
          if (errors.Lname?.hasError) {
            runValidationTasks("Lname", value);
          }
          setLname(value);
        }}
        onBlur={() => runValidationTasks("Lname", Lname)}
        errorMessage={errors.Lname?.errorMessage}
        hasError={errors.Lname?.hasError}
        {...getOverrideProps(overrides, "Lname")}
      ></TextField>
      <TextField
        label="Fname"
        isRequired={false}
        isReadOnly={false}
        value={Fname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Email,
              Username,
              Password,
              Lname,
              Fname: value,
              Dob,
              Country,
              Payment_status,
            };
            const result = onChange(modelFields);
            value = result?.Fname ?? value;
          }
          if (errors.Fname?.hasError) {
            runValidationTasks("Fname", value);
          }
          setFname(value);
        }}
        onBlur={() => runValidationTasks("Fname", Fname)}
        errorMessage={errors.Fname?.errorMessage}
        hasError={errors.Fname?.hasError}
        {...getOverrideProps(overrides, "Fname")}
      ></TextField>
      <TextField
        label="Dob"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={Dob}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Email,
              Username,
              Password,
              Lname,
              Fname,
              Dob: value,
              Country,
              Payment_status,
            };
            const result = onChange(modelFields);
            value = result?.Dob ?? value;
          }
          if (errors.Dob?.hasError) {
            runValidationTasks("Dob", value);
          }
          setDob(value);
        }}
        onBlur={() => runValidationTasks("Dob", Dob)}
        errorMessage={errors.Dob?.errorMessage}
        hasError={errors.Dob?.hasError}
        {...getOverrideProps(overrides, "Dob")}
      ></TextField>
      <TextField
        label="Country"
        isRequired={false}
        isReadOnly={false}
        value={Country}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Email,
              Username,
              Password,
              Lname,
              Fname,
              Dob,
              Country: value,
              Payment_status,
            };
            const result = onChange(modelFields);
            value = result?.Country ?? value;
          }
          if (errors.Country?.hasError) {
            runValidationTasks("Country", value);
          }
          setCountry(value);
        }}
        onBlur={() => runValidationTasks("Country", Country)}
        errorMessage={errors.Country?.errorMessage}
        hasError={errors.Country?.hasError}
        {...getOverrideProps(overrides, "Country")}
      ></TextField>
      <TextField
        label="Payment status"
        isRequired={true}
        isReadOnly={false}
        value={Payment_status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Email,
              Username,
              Password,
              Lname,
              Fname,
              Dob,
              Country,
              Payment_status: value,
            };
            const result = onChange(modelFields);
            value = result?.Payment_status ?? value;
          }
          if (errors.Payment_status?.hasError) {
            runValidationTasks("Payment_status", value);
          }
          setPayment_status(value);
        }}
        onBlur={() => runValidationTasks("Payment_status", Payment_status)}
        errorMessage={errors.Payment_status?.errorMessage}
        hasError={errors.Payment_status?.hasError}
        {...getOverrideProps(overrides, "Payment_status")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || userdetails)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || userdetails) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
