/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Signup } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SignupUpdateFormInputValues = {
    Username?: string;
    Email?: string;
    Password?: string;
};
export declare type SignupUpdateFormValidationValues = {
    Username?: ValidationFunction<string>;
    Email?: ValidationFunction<string>;
    Password?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SignupUpdateFormOverridesProps = {
    SignupUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Username?: PrimitiveOverrideProps<TextFieldProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
    Password?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SignupUpdateFormProps = React.PropsWithChildren<{
    overrides?: SignupUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    signup?: Signup;
    onSubmit?: (fields: SignupUpdateFormInputValues) => SignupUpdateFormInputValues;
    onSuccess?: (fields: SignupUpdateFormInputValues) => void;
    onError?: (fields: SignupUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SignupUpdateFormInputValues) => SignupUpdateFormInputValues;
    onValidate?: SignupUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SignupUpdateForm(props: SignupUpdateFormProps): React.ReactElement;
