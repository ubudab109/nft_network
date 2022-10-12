import React, { useEffect } from 'react';
import {
  Text,
  Heading,
  Button,
  Box,
  Stack,
  Image,
  Wrap,
  WrapItem,
  AspectRatio,
} from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import { usePetList } from 'hooks';

export interface PetListProps {
  address: string;
}

const placeholderList = new Array(10).fill(null);

export const PetList = (props: PetListProps) => {
  const { address } = props;
  const { ref, inView } = useInView({
    threshold: 1,
  });
  const { isLoading, list, isHasNext, loadNext, isReady, total } =
    usePetList(address);

  useEffect(() => {
    if (inView && isHasNext && !isLoading) {
      loadNext();
    }
  }, [isHasNext, isLoading, loadNext, inView]);

  if (total === 0 && isReady) {
    return (
      <Stack w="full" py={32} align="center" justify="center">
        <Stack spacing={4}>
          <Image src="/illustration/pet.svg" alt="adopt pet" />
          <Heading size="md">You dont have any pet yet!</Heading>
          <Button
            onClick={() => {
              window.open('https://petmoon.net/', '_blank');
            }}
          >
            Adopt new one
          </Button>
        </Stack>
      </Stack>
    );
  }

  return (
    <>
      <Wrap spacing="0.5rem">
        {list.map((item) => (
          <WrapItem
            w={{
              base: 'calc(50% - 0.5rem)',
              sm: 'calc(33.333% - 0.5rem)',
              md: 'calc(20% - 0.5rem)',
            }}
            key={item.id}
          >
            <Box borderRadius="lg" overflow="hidden" pb={4} w="full">
              <AspectRatio w="100%" ratio={529 / 780}>
                <Image src={item.image ?? ''} alt={item.name} />
              </AspectRatio>
              <Box bg="gray.800" py={2} px={4} pb={6}>
                <Text>{item.name}</Text>
              </Box>
            </Box>
          </WrapItem>
        ))}
        {isLoading || !isReady
          ? placeholderList.map((_, idx) => (
              <WrapItem
                w={{
                  base: 'calc(50% - 0.5rem)',
                  sm: 'calc(33.333% - 0.5rem)',
                  md: 'calc(20% - 0.5rem)',
                }}
                key={idx}
              >
                <Box bg="gray.600" pb={4} w="full">
                  <AspectRatio w="100%" ratio={529 / 780}>
                    <Box />
                  </AspectRatio>
                  <Box py={2} px={4} pb={6}>
                    <Text></Text>
                  </Box>
                </Box>
              </WrapItem>
            ))
          : null}
      </Wrap>
      <Box h="100px" visibility="hidden" ref={ref} />
    </>
  );
};
