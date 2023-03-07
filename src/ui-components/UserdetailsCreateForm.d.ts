/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserdetailsCreateFormInputValues = {
    Email?: string;
    Username?: string;
    Password?: string;
    Lname?: string;
    Fname?: string;
    Dob?: string;
    Country?: string;
    Payment_status?: string;
};
export declare type UserdetailsCreateFormValidationValues = {
    Email?: ValidationFunction<string>;
    Username?: ValidationFunction<string>;
    Password?: ValidationFunction<string>;
    Lname?: ValidationFunction<string>;
    Fname?: ValidationFunction<string>;
    Dob?: ValidationFunction<string>;
    Country?: ValidationFunction<string>;
    Payment_status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserdetailsCreateFormOverridesProps = {
    UserdetailsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
    Username?: PrimitiveOverrideProps<TextFieldProps>;
    Password?: PrimitiveOverrideProps<TextFieldProps>;
    Lname?: PrimitiveOverrideProps<TextFieldProps>;
    Fname?: PrimitiveOverrideProps<TextFieldProps>;
    Dob?: PrimitiveOverrideProps<TextFieldProps>;
    Country?: PrimitiveOverrideProps<TextFieldProps>;
    Payment_status?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserdetailsCreateFormProps = React.PropsWithChildren<{
    overrides?: UserdetailsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserdetailsCreateFormInputValues) => UserdetailsCreateFormInputValues;
    onSuccess?: (fields: UserdetailsCreateFormInputValues) => void;
    onError?: (fields: UserdetailsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserdetailsCreateFormInputValues) => UserdetailsCreateFormInputValues;
    onValidate?: UserdetailsCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserdetailsCreateForm(props: UserdetailsCreateFormProps): React.ReactElement;
