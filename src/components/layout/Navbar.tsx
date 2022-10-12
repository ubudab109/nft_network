import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  Collapse,
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { DesktopNav, MobileNav } from '../molekul';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isOpenWM, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setScrolled(prevScrollPos > 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    if (prevScrollPos === 0) {
      setScrolled(false);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, scrolled]);

  const openWM = () => {
    setIsOpen(true);
  };

  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      transition="0.5s"
      w="full"
      py="1.2rem"
      color="gray.100"
      position="fixed"
      bg={isOpen ? '#212428' : (scrolled ? '#212428' : '#2124282e')}
      boxShadow={scrolled ? 'rgb(10 10 10 / 80%) 0px 4px 20px 0px' : 'none'}
      zIndex="10"
    >
      <Flex
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          bg={'transparent'}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            background={'transparent'}
            _hover={{
              background: 'transparent'
            }}
            icon={
              isOpen ?
                <CloseIcon w={3} h={3} color={'#FFF'} /> :
                <HamburgerIcon w={5} h={5} color={'#FFF'} />
            }
            aria-label={'Toggle Navigation'}
          />
        </Flex>

        <DesktopNav
          openWM={openWM}
          isOpenWM={isOpenWM}
          setIsOpen={() => setIsOpen(false)}
        />
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav
          scrolled={scrolled} 
          openWM={openWM} 
          isOpenWM={isOpenWM} 
          setIsOpen={() => setIsOpen(false)}        
        />
      </Collapse>
    </Box>
  );
};



