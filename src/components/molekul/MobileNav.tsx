import React from 'react';
import Link from 'next/link';
import { MenuDropDown, ConnectButton, AccountModal } from '@components/molekul';
import { NavItem } from '@constanta';
import {
  Box,
  Stack,
  Flex,
  useDisclosure,
  Collapse,
  Text,
  Icon,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { NavItemInterface } from '@interfaces';

export const MobileNav = ({
  scrolled,
  openWM,
  isOpenWM,
  setIsOpen,
}: {
  scrolled: Boolean;
  openWM: Function;
  isOpenWM: Boolean;
  setIsOpen: Function;
}) => {
  return (
    <Box
      transition="0.5s"
      w="full"
      py="1.2rem"
      color="gray.100"
      position="fixed"
      bg={'#212428'}
      boxShadow={scrolled ? 'rgb(10 10 10 / 80%) 0px 4px 20px 0px' : 'none'}
      zIndex="10"
    >
      <Stack p={4} display={{ md: 'none' }}>
        {NavItem.map((item, idx) => {
          return (
            <MobileNavItem
              label={item?.label ?? ''}
              // children={item?.children ?? ''}
              name={item.label}
              // children={item?.children ?? ''}
              href={item.href}
              key={idx}
            />
          );
        })}
        <Box display={{ base: 'flex' }}>
          <ConnectButton handleOpenModal={openWM} />
          <AccountModal isOpenWM={isOpenWM} onCloseWM={setIsOpen} />
        </Box>
      </Stack>
    </Box>
  );
};

const MobileNavItem = ({ name, children, href }: NavItemInterface) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Link href={href ?? '#'} passHref>
          <Text fontWeight={600}>{name}</Text>
        </Link>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      {children && (
        <Collapse
          in={isOpen}
          animateOpacity
          style={{ marginTop: '0!important' }}
        >
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            // borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}
          >
            <MenuDropDown name={name ?? ''} dropData={children} key={name} />
          </Stack>
        </Collapse>
      )}
    </Stack>
  );
};
