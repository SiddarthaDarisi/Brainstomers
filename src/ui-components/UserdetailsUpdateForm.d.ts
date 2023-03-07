/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Userdetails } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserdetailsUpdateFormInputValues = {
    Email?: string;
    Username?: string;
    Password?: string;
    Lname?: string;
    Fname?: string;
    Dob?: string;
    Country?: string;
    Payment_status?: string;
};
export declare type UserdetailsUpdateFormValidationValues = {
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
export declare type UserdetailsUpdateFormOverridesProps = {
    UserdetailsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
    Username?: PrimitiveOverrideProps<TextFieldProps>;
    Password?: PrimitiveOverrideProps<TextFieldProps>;
    Lname?: PrimitiveOverrideProps<TextFieldProps>;
    Fname?: PrimitiveOverrideProps<TextFieldProps>;
    Dob?: PrimitiveOverrideProps<TextFieldProps>;
    Country?: PrimitiveOverrideProps<TextFieldProps>;
    Payment_status?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserdetailsUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserdetailsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userdetails?: Userdetails;
    onSubmit?: (fields: UserdetailsUpdateFormInputValues) => UserdetailsUpdateFormInputValues;
    onSuccess?: (fields: UserdetailsUpdateFormInputValues) => void;
    onError?: (fields: UserdetailsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserdetailsUpdateFormInputValues) => UserdetailsUpdateFormInputValues;
    onValidate?: UserdetailsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserdetailsUpdateForm(props: UserdetailsUpdateFormProps): React.ReactElement;
