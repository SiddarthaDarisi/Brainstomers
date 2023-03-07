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
export declare type SigninCreateFormInputValues = {
    Email?: string;
    Password?: string;
};
export declare type SigninCreateFormValidationValues = {
    Email?: ValidationFunction<string>;
    Password?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SigninCreateFormOverridesProps = {
    SigninCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
    Password?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SigninCreateFormProps = React.PropsWithChildren<{
    overrides?: SigninCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SigninCreateFormInputValues) => SigninCreateFormInputValues;
    onSuccess?: (fields: SigninCreateFormInputValues) => void;
    onError?: (fields: SigninCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SigninCreateFormInputValues) => SigninCreateFormInputValues;
    onValidate?: SigninCreateFormValidationValues;
} & React.CSSProperties>;
export default function SigninCreateForm(props: SigninCreateFormProps): React.ReactElement;
