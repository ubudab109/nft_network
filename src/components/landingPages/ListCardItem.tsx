import { Box, Wrap, WrapItem } from '@chakra-ui/react';
import { CardItem } from '@components/molekul';
import { ICardItem } from '@interfaces';

interface ListCardItemProps {
  dataCardItem: ICardItem[];
}

export const ListCardItem: React.FC<ListCardItemProps> = (props) => {
  const { dataCardItem } = props;

  return (
    <Box mt={{ xl: '1px', md: '29rem', base: '0' }}>
      <Wrap justify="center">
        {dataCardItem?.map((data, index) => {
          return (
            <WrapItem
              key={index}
              w={{ lg: '300px', md: '280px', sm: 'full', base: 'full' }}
            >
              <CardItem
                imageProfile={data.imageProfile ?? ''}
                imageContent={data.imageContent ?? ''}
                title={data.title ?? 'unknown'}
                currency={data.currency ?? 'PTM'}
                stock={data.stock ?? ''}
                price={data.price ?? ''}
              />
            </WrapItem>
          );
        })}
      </Wrap>
    </Box>
  );
};
