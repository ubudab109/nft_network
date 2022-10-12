import React from 'react';
import {
  Box,
  Text,
  Tooltip,
  useClipboard,
  useDisclosure,
} from '@chakra-ui/react';
import { shorthenAddress } from 'utils/address';

export interface AddressTextProps {
  children: string;
}

export const AddressText = (props: AddressTextProps) => {
  const { children } = props;
  const { onCopy, hasCopied } = useClipboard(children);
  const { onOpen, onClose, isOpen } = useDisclosure();
  return (
    <Tooltip
      label={hasCopied ? 'Copied!' : 'Copy'}
      placement="top"
      isOpen={isOpen}
    >
      <Box
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        onClick={onCopy}
        borderWidth="1px"
        borderColor="gray.500"
        cursor="pointer"
        px={4}
        py={2}
        borderRadius="full"
      >
        <Text
          color="gray.300"
          _hover={{
            color: 'gray.50',
          }}
        >
          {shorthenAddress(children)}
        </Text>
      </Box>
    </Tooltip>
  );
};
