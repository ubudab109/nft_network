import { Box, Grid, GridItem, Heading, Image, SimpleGrid, Stack } from '@chakra-ui/react';
import { colorMode } from '@styles';
import React from 'react';

const Partnership = () => {
  return (
    <Box
      min={'100vh'}
      mb={35}
      display="flex"
      mx="5px"
      my="3rem"
      w="full"
      backgroundColor={colorMode.greySoft}
      borderRadius="lg"
      boxShadow="lg"
      borderTop="1px"
      borderColor="rgba(255, 255, 255, 0.1)"
      p="1.5rem"
      alignItems="center"
      color="white"
    >
      <Stack spacing={4} width={'100%'} direction={'column'}>
        <Stack
          p={5}
          alignItems={'center'}
          justifyContent={{
            base: 'flex-start',
            md: 'space-around',
          }}
          direction={{
            base: 'column',
            md: 'row',
          }}>
          <Stack
            width={{
              base: '100%',
              md: '40%',
            }}
            textAlign={'center'}>
            <Heading size={'lg'}>
              Partnership
            </Heading>
          </Stack>
        </Stack>
        <Stack direction='row' justifyContent={'center'} spacing={10}>
          <Box
            cursor={'pointer'}
            bg={'red'}
          >
            <Image
              boxSize={'150px'}
              objectFit='cover'
              src='/partnership/coinmarketcap.png'
              alt=''
            />
          </Box>

          <Box
            cursor={'pointer'}

          >
            <Image
              boxSize={'150px'}
              objectFit='cover'
              src='/partnership/solidproofv2.png'
              alt=''
            />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Partnership;
