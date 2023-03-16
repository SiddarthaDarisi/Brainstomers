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
export declare type CandidateCreateFormInputValues = {
    Name?: string;
    Email?: string;
    Subject?: string;
    Message?: string;
};
export declare type CandidateCreateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Email?: ValidationFunction<string>;
    Subject?: ValidationFunction<string>;
    Message?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CandidateCreateFormOverridesProps = {
    CandidateCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
    Subject?: PrimitiveOverrideProps<TextFieldProps>;
    Message?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CandidateCreateFormProps = React.PropsWithChildren<{
    overrides?: CandidateCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CandidateCreateFormInputValues) => CandidateCreateFormInputValues;
    onSuccess?: (fields: CandidateCreateFormInputValues) => void;
    onError?: (fields: CandidateCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CandidateCreateFormInputValues) => CandidateCreateFormInputValues;
    onValidate?: CandidateCreateFormValidationValues;
} & React.CSSProperties>;
export default function CandidateCreateForm(props: CandidateCreateFormProps): React.ReactElement;
