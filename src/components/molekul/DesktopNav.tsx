import React from 'react';
import Link from 'next/link';
import { MenuDropDown, ConnectButton, AccountModal } from '@components/molekul';
import { NavItem } from '@constanta';
import {
  Box,
  Container,
  Stack,
  Image,
  ListItem,
  UnorderedList,
  HStack,
} from '@chakra-ui/react';

export const DesktopNav = ({
  openWM,
  isOpenWM,
  setIsOpen,
}: {
  openWM: Function;
  isOpenWM: Boolean;
  setIsOpen: Function;
}) => {
  return (
    <Container maxW="container.xl" mt="1rem">
      <Stack direction="row" justifyContent="space-between">
        <HStack spacing="1rem">
          <Link href="/">
            <a>
              <Image src="nft-logo.png" alt="image" loading="lazy" w="13rem" />
            </a>
          </Link>
        </HStack>
        <HStack spacing="1rem">
          <Stack
            direction="row"
            justifyContent={'center'}
            as={UnorderedList}
            spacing="1rem"
            w="full"
            listStyleType="none"
            marginInlineStart="0"
            fontWeight="500"
            display={{ base: 'none', xl: 'flex', md: 'flex' }}
            textTransform="capitalize"
          >
            {NavItem.map((item, idx) => {
              if (item.children) {
                return (
                  <MenuDropDown
                    name={item?.label ?? ''}
                    dropData={item.children}
                    key={idx}
                  />
                );
              } else {
                return (
                  <ListItem
                    as={Link}
                    href={item.href ?? '#'}
                    key={idx}
                    cursor="pointer"
                  >
                    <a>{item.label}</a>
                  </ListItem>
                );
              }
            })}
          </Stack>
        </HStack>
        <HStack spacing="1rem">
          <Box display={{ base: 'none', xl: 'flex', lg: 'flex', md: 'flex' }}>
            <ConnectButton handleOpenModal={openWM} />
            <AccountModal isOpenWM={isOpenWM} onCloseWM={setIsOpen} />
          </Box>
        </HStack>
      </Stack>
    </Container>
  );
};
