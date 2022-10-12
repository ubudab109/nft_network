import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { ITopSellerItem } from '@interfaces';
import { TopSellerItem } from '@components/molekul/TopSellerItem';

interface data extends Omit<ITopSellerItem, 'index'> {}

interface TopSellerListProps {
  dataList: data[];
}

export const TopSellerList: React.FC<TopSellerListProps> = (props) => {
  return (
    <Box mt="1rem">
      <Heading as="h2" size="xl" isTruncated color="white" mb="2rem">
        Top Seller
      </Heading>

      <Flex
        p="1rem"
        direction={{ lg: 'column', md: 'row', sm: 'row', base: 'row' }}
        display={{ base: 'block', sm: 'block', md: 'block', lg: 'flex' }}
        color="white"
        h={{ lg: '400px', md: 'full', sm: 'full', base: 'full' }}
        wrap="wrap"
        justify="center"
        transition="0.3s"
      >
        {props.dataList?.map((data, index) => {
          return <TopSellerItem {...data} index={index} key={index} />;
        })}
      </Flex>
    </Box>
  );
};
