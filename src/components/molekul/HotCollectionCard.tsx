import React, { useState } from 'react';
import {
  Box,
  Image,
  Text,
  Heading,
  Avatar,
  Icon,
  Stack,
} from '@chakra-ui/react';
import { FaCheck } from 'react-icons/fa';
import { IHotCollectionCardProps } from '@interfaces';

export const HotCollectionCard: React.FC<IHotCollectionCardProps> = ({
  name,
  info,
  background,
  profileImage,
}) => {
  const [hover, setHover] = useState(false);
  return (
    <Box
      rounded="lg"
      overflow="hidden"
      color="white"
      borderTop="1px solid "
      borderColor="gray.200"
      bg="#212428"
      boxShadow="0 0 8px 0 rgb(0 0 0 / 30%)"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(!hover)}
    >
      <Box overflow="hidden" maxH="7rem">
        <Image
          src={
            background ??
            'http://134.209.110.122:1337/uploads/coll_1_a126dd2884.jpg'
          }
          transition="1s"
          alt={name}
          w="full"
          objectFit="cover"
          loading="lazy"
          transform={hover ? 'perspective(100px) translateZ(10px)' : ''}
        />
      </Box>

      <Box display="flex" justifyContent="center" py="2rem">
        <Box>
          <Box
            display="flex"
            justifyContent="center"
            position="relative"
            top="-4rem"
          >
            <Avatar
              name={name}
              src={profileImage}
              position="absolute"
              border="4px solid white"
              w={hover ? '61px' : '60px'}
              h={hover ? '61px' : '60px'}
              loading="lazy"
              transition="0.5s"
            />

            <Icon
              top="calc(3rem - 5px)"
              right="calc(1rem - 10px)"
              as={FaCheck}
              color="white"
              position="absolute"
              zIndex="1"
              w="18px"
              h="18px"
              bg="red"
              rounded="full"
              p="3px"
            ></Icon>
          </Box>
          <Stack textAlign="center" spacing="0.5rem" mt="0.6rem">
            <Heading size="md" textTransform="capitalize">
              {name ?? 'Name Creator'}
            </Heading>
            <Text textTransform="uppercase" color="gray.500">
              {info ?? 'erc-192'}
            </Text>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
