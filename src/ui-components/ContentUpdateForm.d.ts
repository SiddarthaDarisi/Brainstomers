/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Content } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ContentUpdateFormInputValues = {
    Class_link?: string;
    Homework?: string;
};
export declare type ContentUpdateFormValidationValues = {
    Class_link?: ValidationFunction<string>;
    Homework?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContentUpdateFormOverridesProps = {
    ContentUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Class_link?: PrimitiveOverrideProps<TextFieldProps>;
    Homework?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContentUpdateFormProps = React.PropsWithChildren<{
    overrides?: ContentUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    content?: Content;
    onSubmit?: (fields: ContentUpdateFormInputValues) => ContentUpdateFormInputValues;
    onSuccess?: (fields: ContentUpdateFormInputValues) => void;
    onError?: (fields: ContentUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContentUpdateFormInputValues) => ContentUpdateFormInputValues;
    onValidate?: ContentUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ContentUpdateForm(props: ContentUpdateFormProps): React.ReactElement;
