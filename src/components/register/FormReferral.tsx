import {
  Box,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  useToast,
} from '@chakra-ui/react';
import { AccountModal, ConnectButton } from '@components/molekul';
import { useNetRef, useWallet } from '@hooks';
import { utils } from 'ethers';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const DEFAULT_REFERRER = process.env.NEXT_PUBLIC_DEFAULT_REFERRER ?? '';

type FormRegister = {
  addressReferral: string;
};

export const FormReferral = () => {
  const toast = useToast();
  const router = useRouter();
  const { ref } = router.query;
  const [referal, setreferral] = useState<string>('');
  const [isOpenWM, setIsOpenWM] = useState(false);
  const [err, setErr] = useState({ status: false, message: '' });
  const { isRegistered, register: registerAddress } = useNetRef();
  const [loading, setLoading] = useState(false);

  const WMOpen = () => {
    setIsOpenWM(true);
  };

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<FormRegister>();

  const onSubmit = async (data: FormRegister) => {
    setLoading(true);
    setErr({ status: false, message: '' });
    try {
      if (isRegistered === false) {
        if (data.addressReferral) {
          const isValidAddress = utils.isAddress(data.addressReferral);
          if (isValidAddress === false) {
            setError('addressReferral', {
              type: 'manual',
              message:
                'Referrer address not valid. Please provide a valid address',
            });
            toast({
              title: `Referrer address not valid. Please provide a valid address`,
              status: 'error',
              isClosable: true,
              position: 'top',
            });
          } else {
            const rest = await registerAddress(data.addressReferral);
            if (rest?.data) {
              toast({
                title: `Success register with referral ${data.addressReferral}`,
                status: 'success',
                isClosable: true,
                position: 'top',
              });
              setTimeout(() => {
                router.replace('/');
              }, 5000);
            }
          }
        } else {
          const rest = await registerAddress(DEFAULT_REFERRER);
          if (rest?.data) {
            toast({
              title: `Succes register with referral to Admin`,
              status: 'success',
              isClosable: true,
              position: 'top',
            });
            setTimeout(() => {
              router.replace('/');
            }, 5000);
          }
        }
      }
    } catch (error: any) {
      if (error.data) {
        if (error.data.code === -32603) {
          setErr({
            status: true,
            message: 'Referrer should be registered',
          });
          toast({
            title: `Referrer should be registered`,
            status: 'error',
            isClosable: true,
            position: 'top',
          });
        } else {
          setErr({ status: true, message: error.data.message });
          toast({
            title: error.data.message,
            status: 'error',
            isClosable: true,
            position: 'top',
          });
        }
      } else {
        setErr({
          status: true,
          message: error.message,
        });
        toast({
          title: error.message,
          status: 'error',
          isClosable: true,
          position: 'top',
        });
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (ref) {
      setreferral(ref as string);
      setValue('addressReferral', referal);
    }
  }, [ref, referal, setValue]);

  return (
    <Flex
      padding={'1rem'}
      flex={'2'}
      background="radial-gradient(60.12% 60.12% at 104.83% -0.03%, rgb(74, 81, 92, 0.3) 0%, rgba(74, 81, 92, 0) 100%)"
      align="center"
    >
      {/* ----------------- Right Side ------------------------- */}
      <Box
        w={{ base: '70%', sm: '50%', md: '50%', lg: '50%' }}
        ml="auto"
        mr="auto"
        alignItems="center"
      >
        <Heading as="h2" size={'xl'} textAlign="center" mb={'1rem'}>
          Register
        </Heading>
        <Heading as="h2" size={'xl'} textAlign="center" mb={'3rem'}>
          NFT Network
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl id="address-referral">
            <FormLabel>Referral Address</FormLabel>
            <Input
              backgroundColor="#37383a"
              focusBorderColor="#955d94"
              borderColor="#955d94"
              type="text"
              placeholder="0x0. . . ."
              disabled={isRegistered}
              {...register('addressReferral')}
            />
            {errors.addressReferral?.type === 'manual' && (
              <FormHelperText color={'red.400'}>
                {errors.addressReferral.message}
              </FormHelperText>
            )}
            {err.status === true && (
              <FormHelperText color={'red.400'}>{err.message}</FormHelperText>
            )}
            <FormHelperText>Enter Correct Wallet Address</FormHelperText>
            {isRegistered === true && (
              <FormHelperText color={'red.400'}>
                You&apos;r address is already registered. . . !
              </FormHelperText>
            )}
          </FormControl>
          <Flex justifyContent={'right'} mt={'0.3rem'}>
            <ConnectButton handleOpenModal={WMOpen} />
            <AccountModal
              isOpenWM={isOpenWM}
              onCloseWM={() => setIsOpenWM(false)}
            />
          </Flex>
          <Button
            type="submit"
            isDisabled={isRegistered}
            backgroundColor="#955d94"
            variant="solid"
            mt="1rem"
            size="sm"
            w="100%"
            _hover={{
              bg: '#724771',
            }}
            isLoading={loading}
          >
            Register
          </Button>
          {isRegistered === true && (
            <Button
              type="button"
              variant="ghost"
              mt="1rem"
              size="sm"
              w="100%"
              onClick={() => router.replace('/')}
              color="gray.500"
              _hover={{
                bg: '#724775',
                color: 'gray.300',
              }}
            >
              Back to Home Page
            </Button>
          )}
        </form>
      </Box>
    </Flex>
  );
};
