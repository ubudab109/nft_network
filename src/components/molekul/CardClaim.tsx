import React from "react";
import { Box, Button, Flex, Image, Text, VStack, ButtonProps } from "@chakra-ui/react";

interface CardClaimProps {
    title: string;
    value: string;
    onClick: () => void;
    buttonProps?: ButtonProps;
}

export const CardClaim: React.FC<CardClaimProps> = (props) => {
    const { title, value, onClick,children,buttonProps } = props;
    return (
        <VStack
            height={"100%"}
            justifyContent={"center"}
            flex={1}
            mx={"0.5rem"}
            spacing={"1.5rem"}
            px={"2.5rem"}
            bgGradient="linear-gradient(140.48deg, rgba(86, 114, 168, 0.4) 1.11%, rgba(204, 151, 203, 0.4) 70.93%);"
            py={"2rem"}
            borderRadius={"10px"}
            boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
        >
            <Text opacity={"0.5"} textAlign={"center"}>{title}</Text>
            <Text fontSize={"30px"} textAlign={"center"}>{value}</Text>

            <Button
                {...buttonProps}
                w={"full"}
                onClick={onClick}
                backgroundColor={"#C18BB2"}
                mt={"2rem"}
                _hover={{
                    boxShadow: "2px 2px 20px 0 #212428",
                    backgroundColor: "#C18BB2",
                }}
                _focus={{
                    backgroundColor: "#C18BB2",
                }}
            >
                Claim
            </Button>
            {children}
        </VStack>
    );
};
