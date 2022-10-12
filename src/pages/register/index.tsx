import { Box, Image } from '@chakra-ui/react';
import { FormReferral } from '@components/register/FormReferral';
import { RegisterReferralLayout } from '../../components/register/RegisterReferralLayout';

export const RegisterRefreral = () => {
  return (
    <Box w={'full'} backgroundColor={'#212429'} pos="relative">
      <Image
        p="2rem"
        src="dragon-petmoon-login.png"
        alt="dragon"
        pos={'absolute'}
        objectFit="cover"
        h={'100vh'}
        w={'50%'}
        display={{ base: 'none', md: 'block', lg: 'block' }}
        loading="lazy"
      />
      <Box
        pos={'absolute'}
        left={'0'}
        right={'0'}
        top={'0'}
        bottom={'0'}
        bgGradient="linear(to-r,rgba(33, 35, 41, 0), rgba(33, 35, 41, 1), rgba(33, 35, 41, 1))"
      ></Box>
      <Box
        pos={'absolute'}
        left="0"
        right={'0'}
        top={'0'}
        bottom={'0'}
        w={'full'}
        margin={'auto'}
        width={{ base: 'full', md: 'full', lg: '940px' }}
      >
        <RegisterReferralLayout>
          <FormReferral />
        </RegisterReferralLayout>
      </Box>
      <Box w={'full'} h="100vh" />
    </Box>
  );
};

export default RegisterRefreral;
