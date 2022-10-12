import React from 'react';
import { Wrap, WrapProps, WrapItem, ButtonProps } from '@chakra-ui/react';
import { SummaryCard } from '@components/profile';

export type SummaryItem = {
  label: string;
  value: string | number;
  actions?: ButtonProps[];
};

export interface SummaryListProps extends WrapProps {
  data: SummaryItem[];
}

export const SummaryList: React.FC<SummaryListProps> = (props) => {
  const { data, ...rest } = props;

  return (
    <Wrap align="stretch" spacing={{ base: 2, sm: 'initial' }} {...rest}>
      {data.map((item, idx) => (
        <WrapItem
          key={idx}
          alignItems="center"
          borderColor="gray.400"
          borderRightWidth="1px"
          borderTopWidth="1px"
          borderBottomWidth="1px"
          borderLeftWidth={{
            base: '1px',
            sm: '0px',
          }}
          borderRadius={{
            base: 'md',
            sm: 'initial',
          }}
          w={{
            base: 'full',
            sm: 'initial',
          }}
          _first={{
            base: {},
            sm: {
              borderLeftWidth: '1px',
              borderTopLeftRadius: 'md',
              borderBottomLeftRadius: 'md',
            },
          }}
          _last={{
            base: {},
            sm: {
              borderTopRightRadius: 'md',
              borderBottomRightRadius: 'md',
            },
          }}
        >
          <SummaryCard
            w={{ base: 'full', sm: 'initial' }}
            label={item.label}
            value={item.value}
            actions={item.actions}
          />
        </WrapItem>
      ))}
    </Wrap>
  );
};
