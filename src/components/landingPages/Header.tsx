import React from "react";
import { settings } from "@constanta/slideSetting";
import Slider from "react-slick";
import {
  Box,
  Grid,
  GridItem,
  Stack,
  Text,
  Heading,
  Button,
  Image,
} from "@chakra-ui/react";
import { useWallet } from "@hooks/useWallet";

export const Header: React.FC = () => {
  const { address } = useWallet();
  return (
    <Box h="100vh" display="flex" justifyContent="center">
      <Grid templateColumns="repeat(12,1fr)">
        <GridItem colSpan={12} rowSpan={1}>
          <Stack direction={{ xl: "row", md: "column", base: "column" }}>
            <Box
              justifyContent="center"
              mt={{ xl: "10rem", md: "5rem", base: "0" }}
              w={{ xl: "50%", md: "100%" }}
            >
              <Text
                fontSize={{ xl: "lg", md: "md", base: "md" }}
                color="red"
                fontWeight="bold"
              >
                Petmoon Market
              </Text>
              <Heading color="white" fontSize="5xl" my="1rem">
                Create, Sell or Collect digital items
              </Heading>
              <Text color="gray.100" mb="1rem">
                Unit of data stored on a digital ledger, called a blockchain,
                that certifies a digital asset to be unique and therefore not
                interchangeable
              </Text>
              {!address ? (
                <Button
                  p={{ xl: "1rem", md: "1rem", base: "0.8rem" }}
                  h="0"
                  bg="red"
                  color="white"
                  rounded="full"
                  fontSize="14px"
                  _hover={{ boxShadow: "2px 2px 20px 0 #ff343f" }}
                >
                  Connect Wallet
                </Button>
              ) : null}
            </Box>
            <Box
              w={{ xl: "50%", md: "100%" }}
              p={{ xl: "1rem", base: "3rem" }}
              display={{ xl: "inline-block", md: "inline-block", base: "none" }}
            >
              <Slider {...settings}>
                <Box rounded="xl" overflow="hidden">
                  <Image
                    src="/dragon-petmoon-login.png"
                    alt="image"
                    loading="lazy"
                    // w="100%"
                  />
                </Box>
                <Box rounded="xl" overflow="hidden">
                  <Image
                    src="/dragon-petmoon-login.png"
                    alt="image"
                    loading="lazy"
                    // w="100%"
                  />
                </Box>
              </Slider>
            </Box>
          </Stack>
        </GridItem>
      </Grid>
      {/* <Stack direction="row" align="center"></Stack> */}
    </Box>
  );
};
