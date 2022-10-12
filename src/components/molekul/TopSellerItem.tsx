import React from 'react';
import { ITopSellerItem } from '@interfaces';
import { CircularProfile } from '@components/molekul';
import { Box, Flex, Text } from '@chakra-ui/react';

export const TopSellerItem: React.FC<ITopSellerItem> = (props) => {
  return (
    <Box display="block" mb="20px">
      <Flex>
        <Text>{props.index + 1}</Text>
        <Flex align="center">
          <CircularProfile
            name={props.name}
            photo={props.photo}
            verified={props.verified}
          />
          <Box as="span">
            <Text fontWeight="600">{props.name}</Text>
            <Text>
              {props.earning} {props.currency}
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
