/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Signin } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SigninUpdateFormInputValues = {
    Email?: string;
    Password?: string;
};
export declare type SigninUpdateFormValidationValues = {
    Email?: ValidationFunction<string>;
    Password?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SigninUpdateFormOverridesProps = {
    SigninUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
    Password?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SigninUpdateFormProps = React.PropsWithChildren<{
    overrides?: SigninUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    signin?: Signin;
    onSubmit?: (fields: SigninUpdateFormInputValues) => SigninUpdateFormInputValues;
    onSuccess?: (fields: SigninUpdateFormInputValues) => void;
    onError?: (fields: SigninUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SigninUpdateFormInputValues) => SigninUpdateFormInputValues;
    onValidate?: SigninUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SigninUpdateForm(props: SigninUpdateFormProps): React.ReactElement;
