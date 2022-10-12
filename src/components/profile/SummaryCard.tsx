import React from 'react';
import {
  Stack,
  Button,
  Box,
  BoxProps,
  Heading,
  Text,
  ButtonProps,
} from '@chakra-ui/react';

export interface SummaryCardProps extends BoxProps {
  label: string;
  value: string | number;
  actions?: ButtonProps[];
}

export const SummaryCard: React.FC<SummaryCardProps> = (props) => {
  const { value, label, actions = [], ...rest } = props;
  return (
    <Box textAlign="center" px={8} py={4} {...rest}>
      <Heading fontSize="1.5rem">{value}</Heading>
      <Text textTransform="capitalize" color="gray.400">
        {label}
      </Text>
      {actions.length > 0 ? (
        <Stack mt={2}>
          {actions.map((item, idx) => (
            <Button key={idx} {...item} />
          ))}
        </Stack>
      ) : null}
    </Box>
  );
};
