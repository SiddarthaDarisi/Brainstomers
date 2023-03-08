/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image } from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="20px"
      direction="row"
      width="1440px"
      height="124px"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(40,66,76,1)"
      {...getOverrideProps(overrides, "NavBar")}
      {...rest}
    >
      <Image
        width="340px"
        height="54px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(112,112,112,1)"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "logo2.0")}
      ></Image>
      <Flex
        gap="15px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-end"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Buttons")}
      >
        <Flex
          width="unset"
          height="unset"
          {...getOverrideProps(overrides, "Button42123")}
        ></Flex>
        <Flex
          width="unset"
          height="unset"
          {...getOverrideProps(overrides, "Button43132")}
        ></Flex>
        <Flex
          width="unset"
          height="unset"
          {...getOverrideProps(overrides, "Button42124")}
        ></Flex>
      </Flex>
    </Flex>
  );
}
