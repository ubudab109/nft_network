import { Box, Flex, propNames, Text, Image, VStack } from "@chakra-ui/react";
import Link from "next/link";

interface RegisterReferralLayoutProps {
    img?:string
}

export const RegisterReferralLayout: React.FC<RegisterReferralLayoutProps> = (
    props
) => {
    
    const { children, img } = props;

    return (
        <Flex color={"white"} h={"full"}>
            {children}
            {/* ----------------- Left Side ------------------------- */}
            <Flex
                align={"center"}
                flex="1"
                display={{ base: "none", md: "flex", lg: "flex" }}
            >
                <VStack>
                    <Text textAlign={"center"} maxW={"60%"}>
                        If you dont have any
                        referral just leave it empty
                    </Text>
                    <Image
                        src={img}
                        h="200px"
                        my="1.5rem"
                        alt="bg"
                        loading="lazy"
                    ></Image>
                    <Text
                        color="#955d94"
                        textAlign="center"
                        maxW="60%"
                        fontWeight="600"
                        mt="1rem"
                        _hover={{
                            color: "#FFFF",
                        }}
                    >
                    </Text>
                </VStack>
            </Flex>
        </Flex>
    );
};


RegisterReferralLayout.defaultProps = {
    img:"img-register.svg"
}


