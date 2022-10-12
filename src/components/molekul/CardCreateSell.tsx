import React, { useState } from 'react';
import { ICardCreateSellProps } from '@interfaces';
import { BiCloudUpload, BiPurchaseTagAlt, BiWallet } from 'react-icons/bi';
import { Box, Text, Icon, Heading, Stack } from '@chakra-ui/react';
import { colorMode } from '@styles';

export const CardCreateSell: React.FC<ICardCreateSellProps> = (props) => {
  const [hover, setHover] = useState(false);

  const iconChanger = () => {
    if (props.icon === 'wallet') return BiWallet;
    if (props.icon === 'upload') return BiCloudUpload;
    if (props.icon === 'tag') return BiPurchaseTagAlt;
  };

  return (
    <Stack
      overflow="hidden"
      p="3rem"
      rounded="lg"
      transition="0.5s"
      boxShadow={hover ? '' : '0 0 8px 0 rgb(0 0 0 / 30%)'}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(!hover)}
      mb="5rem"
      {...props}
    >
      <Box
        bg={colorMode.baseRed}
        w="3rem"
        h="3rem"
        display="flex"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        rounded="lg"
      >
        <Icon as={iconChanger()} w="1.2rem" h="1.2rem"></Icon>
      </Box>
      <Stack zIndex="2">
        <Heading size="md">{props.title ?? 'Setup Your Wallet'}</Heading>
        <Text color="gray.500" noOfLines={4}>
          {props.description ?? ''}
        </Text>
      </Stack>
      <Box position="relative" bottom="10rem" left="5rem" zIndex="1">
        <Icon
          transition="2s"
          as={iconChanger()}
          position="absolute"
          right="0"
          w="18rem"
          h="18rem"
          color="rgba(252,52,63,.1)"
          transform={hover ? 'rotate(-40deg)' : ''}
        ></Icon>
      </Box>
    </Stack>
  );
};
