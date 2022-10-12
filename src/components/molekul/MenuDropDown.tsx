import React from 'react';
import LinkNext from 'next/link';
import {
  Popover,
  PopoverTrigger,
  Text,
  PopoverContent,
  PopoverBody,
  Stack,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';

interface DropDown {
  href?: string;
  name?: string;
  url?: string;
}

interface MenuDropDownProps {
  dropData?: DropDown[];
  name: string;
}

export const MenuDropDown: React.FC<MenuDropDownProps> = (props) => {
  return (
    <Popover id="dropdown" trigger="hover" {...props}>
      <PopoverTrigger>
        <Text as="a" cursor="pointer">
          {props.name}
        </Text>
      </PopoverTrigger>
      <PopoverContent
        bg="#2124288c"
        border="none"
        left="1rem"
        top="1rem"
        w="10rem"
        _focus={{ boxShadow: '#2124288c' }}
      >
        <PopoverBody py="1rem">
          <Stack as={UnorderedList} spacing="1rem" listStyleType="none">
            {props?.dropData?.map((drop, idx) => {
              return (
                <ListItem as={LinkNext} href={drop.href ?? '#'} key={idx}>
                  <a>{drop.name}</a>
                </ListItem>
              );
            })}
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
