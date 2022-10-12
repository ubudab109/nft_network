import React from 'react';
import { CardCreateSell } from '@components/molekul';
import { ICardCreateSellProps } from '@interfaces';
import { Box, Heading, Wrap, WrapItem } from '@chakra-ui/react';

interface CardCreateSellListProps {
  data: ICardCreateSellProps[];
  section: string;
}

export const CardCreateSellList: React.FC<CardCreateSellListProps> = (
  props
) => {
  return (
    <Box>
      <Box py="2rem">
        <Heading size="lg">
          {props.section ?? 'Did u place the attribute section ?'}
        </Heading>
      </Box>
      <Wrap align="center" justify="space-between">
        {props.data?.map((item, idx) => {
          return (
            <WrapItem w={{ xl: '30%', md: '48%', base: '100%' }} key={idx}>
              <CardCreateSell
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            </WrapItem>
          );
        })}
      </Wrap>
    </Box>
  );
};
