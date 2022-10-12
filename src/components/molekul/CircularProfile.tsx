import React from "react";
import { ICircularProfile } from "@interfaces";
import { FaCheck } from "react-icons/fa";
import theme from "@styles/theme";
import { Box, Avatar, Icon } from "@chakra-ui/react";

export const CircularProfile: React.FC<ICircularProfile> = (props) => {
    const verFun = () => {
        if (props.verified === true) {
            return "true";
        } else {
            return "false";
        }
    };

    return (
        <Box
            justifyContent="center"
            display={props.centerVerif ? "flex" : "inline"}
            position="relative"
            overflow="hidden"
            px="0.5rem"
            pb="0.5rem"
            {...props.customBoxContainerbecouceserrothefuckingshit}
        >
            <Avatar
                name={props.name}
                src={props.photo}
                position="relative"
                border={props.bordered ? "4px solid white" : 0}
                w="60px"
                h="auto"
                loading="lazy"
                _hover={{ border: "4px", borderColor: theme.baseRed }}
                transition="0.2s"
                {...props.customimg}
            />
            <Icon
                right="20px"
                top="45px"
                opacity={verFun() === "true" ? "1" : "0"}
                bottom="0"
                as={FaCheck}
                color="white"
                position="relative"
                zIndex="1"
                w="18px"
                h="18px"
                bg="red"
                rounded="full"
                p="3px"
                {...props.customverified}
            ></Icon>
        </Box>
    );
};
