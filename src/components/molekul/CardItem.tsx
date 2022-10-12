import { Box, Flex, Image, Text, VStack, Stack } from '@chakra-ui/react';
import React from 'react';
// import { TiTick } from 'react-icons/ti';
import { colorMode } from '@styles';
// import { Countdown } from '@components/landing/Countdown';
import Link from 'next/link';
import { ICardItem } from '@interfaces';

export const CardItem: React.FC<ICardItem> = (props) => {
  const { imageProfile, currency, title, stock, price, imageContent } = props;
  return (
    <Box
      display="flex"
      mx="5px"
      my="0.5rem"
      w="full"
      backgroundColor={colorMode.greySoft}
      borderRadius="lg"
      boxShadow="lg"
      // _hover={{ cursor: "pointer" }}
      borderTop="1px"
      borderColor="rgba(255, 255, 255, 0.1)"
      p="1.5rem"
      alignItems="center"
      color="white"
    >
      <Box w="full">
        <Flex justify="space-between" position="relative">
          {/* <Box position="absolute">
            <CircularProfile  name={name} photo={imageProfile} verified={verified}
            customBoxContainerbecouceserrothefuckingshit={{ w:"50px" }}
            />
          </Box> */}

          <Box as="span" position="absolute">
            <Image
              borderColor={colorMode.baseRed}
              _hover={{ border: '4px', borderColor: colorMode.baseRed }}
              transition="0.2s"
              h="50px"
              objectFit="cover"
              src={imageProfile}
              borderRadius="50%"
              alt={imageProfile}
              loading="lazy"
            />
            {/* {verified ? (
              <Box position="absolute" top="2rem" left="2.2rem">
                <Box
                  p="2px"
                  backgroundColor={colorMode.baseRed}
                  borderRadius="50%"
                >
                  <TiTick />
                </Box>
              </Box>
            ) : null} */}
          </Box>

          {/* <Box></Box>

          {countDown ? (
            <Countdown countDown={countDown} />
          ) : (
            <Box mb="2.5rem"></Box>
          )} */}
        </Flex>
        <Flex
          overflow="hidden"
          height={{ base: '350px', sm: '250px', md: '250px', lg: '250px' }}
          borderRadius="lg"
          w="full"
        >
          <Image
            src={imageContent}
            m="auto"
            w="full"
            maxH={{ base: '350px', sm: '250px', md: '250px', lg: '250px' }}
            align="center"
            objectFit="cover"
            borderRadius="lg"
            alt={title}
          />
        </Flex>
        <VStack mt="1rem" align="left">
          <Link href="/details">
            <a>
              <Text
                fontWeight="600"
                _hover={{ fontSize: 'lg', cursor: 'pointer' }}
                transition="0.2s"
                textTransform="capitalize"
              >
                {title}
              </Text>
            </a>
          </Link>
          <Stack
            direction="row"
            justify="space-between"
            textAlign="center"
            align="center"
          >
            <Text fontWeight="bold" color="gray.500" fontSize="sm">
              Price
            </Text>
            <Stack
              direction="row"
              textAlign="center"
              p="5px"
              border="1px #780206 solid"
              bgGradient="linear(to-l, #780206, #061161)"
              rounded="xl"
              boxShadow="2px 2px 20px 0 red"
            >
              <Text fontWeight="bold" fontSize="sm">
                {price}
              </Text>
              <Text fontWeight="bold" fontSize="sm" color="gray.300">
                {currency}
              </Text>
            </Stack>
          </Stack>
          {/* <Text>
            <Box as="span" color="grey">
              {price} {currency}
            </Box>
            {stock}
          </Text> */}
          {/* <Flex justify="space-between">
            <Text fontWeight="600" color={colorMode.baseRed}>
              Place a bid
            </Text>
            <Flex align="center">
              <Text _hover={{ color: 'pink' }}>
                <AiFillHeart />
              </Text>
              <Text ml="0.5rem">{numOfLike}</Text>
            </Flex>
          </Flex> */}
        </VStack>
      </Box>
    </Box>
  );
};
