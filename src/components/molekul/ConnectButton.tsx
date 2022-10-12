import React, { useEffect, useState } from "react";
import { useEtherBalance, useEthers, useLookupAddress } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import { SiBinance } from "react-icons/si";
import { Identicon } from ".";
import { Box, Text, Button, Icon } from "@chakra-ui/react";
import { useWallet } from "@hooks/useWallet";

interface connectButton {
    handleOpenModal: any;
}

export const ConnectButton: React.FC<connectButton> = (props) => {
    const { activateBrowserWallet, account, chainId, error } = useEthers();
    const etherBalance = useEtherBalance(account);
    const { connect, address, isLoading } = useWallet();

    return address ? (
        <>
            <Box
                display="flex"
                alignItems="center"
                background="gray.700"
                borderRadius="xl"
                py="0"
            >
                {/* balance saldo */}
                <Box px="3" display="flex" alignItems="center">
                    <Text
                        color="white"
                        fontSize="md"
                        fontWeight="bold"
                        mx="0.5rem"
                    >
                        {etherBalance &&
                            parseFloat(formatEther(etherBalance)).toFixed(3)}
                    </Text>

                    {chainId === 56 ? (
                        <Icon as={SiBinance} color="yellow" />
                    ) : (
                        "ETH"
                    )}
                </Box>

                {/* address user */}
                <Button
                    isLoading={isLoading}
                    onClick={props.handleOpenModal}
                    backgroundColor="#955d94"
                    border="1px solid transparent"
                    _hover={{
                        border: "1px",
                        borderStyle: "solid",
                        borderColor: "blue.400",
                        backgroundColor: "gray.700",
                    }}
                    borderRadius="xl"
                    m="1px"
                    px={3}
                    height="38px"
                >
                    <Text
                        color="white"
                        fontSize="md"
                        fontWeight="medium"
                        mr="2"
                    >
                        {address &&
                            `${address.slice(0, 6)}...${address.slice(
                                address.length - 4,
                                address.length
                            )}`}
                    </Text>
                    {/* <Identicon /> */}
                </Button>
            </Box>
        </>
    ) : (
        <Button
            isLoading={isLoading}
            onClick={connect}
            p={{ xl: "1rem", md: "1rem", base: ".8rem" }}
            h="0"
            backgroundColor="#955d94"
            rounded="full"
            fontSize="14px"
            _hover={{ boxShadow: "2px 2px 20px 0 white" }}
            display={{
                xl: "inline-flex",
                md: "inline-flex",
                base: "inline-flex"
                // base: "none",
            }}
        >
            Connect Wallet
        </Button>
    );
};
