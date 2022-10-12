import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Navbar, Footer } from '.';
import { Box, Flex, Stack, Container, Image } from '@chakra-ui/react';

interface MainProps {
  title?: string;
  imgHeader?: string;
  children: ReactNode;
}

export const Main: React.FC<MainProps> = ({ title, imgHeader, children }) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} | Petmoon-Market` : 'Petmoon-Market'}</title>
      </Head>

      <Flex h="100vh" flex={1} as="main" direction="column">
        <Stack direction="row" align="center" shadow="sm" minH="60px">
          <Navbar />
        </Stack>

        {imgHeader ? (
          <Box
            position="absolute"
            top={{ xl: '-9rem', md: '-9rem', base: '0' }}
            w="100%"
          >
            <Image
              src={imgHeader}
              alt="image"
              objectFit="cover"
              loading="lazy"
              w="100%"
              height="100vh"
            />
          </Box>
        ) : null}

        <Stack position="relative" flex={1} pt="10">
          <Container maxW="container.xl">{children}</Container>
        </Stack>
        <Footer>&copy; Copyright {new Date().getFullYear()} - Petmoon</Footer>
      </Flex>
    </>
  );
};
