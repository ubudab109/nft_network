import React from "react";
import {
  Box,
  Heading,
  Text,
  Container,
  Button,
  Stack,
  Input,
} from "@chakra-ui/react";
import { useWallet, useNetRef } from "@hooks";

const DevTest = () => {
  const referrerRef = React.useRef<HTMLInputElement>(null);
  const { connect, address, balance } = useWallet();
  const { isRegistered, reward, register, rank, claimReward, downlineCount } =
    useNetRef();

  const handleRegister = () => {
    const referrerVal = referrerRef?.current?.value ?? "";
    if (referrerRef) {
      register(referrerVal);
    }
  };

  return (
    <Container maxW="container.xl">
      <Stack spacing={4}>
        <Box>
          <Heading>Dev Test</Heading>
          <Text>This page only intended for testing purpose</Text>
        </Box>
        {address ? (
          <Stack>
            <Text>{address}</Text>
            <Heading size="sm">{balance} BNB</Heading>
          </Stack>
        ) : (
          <Button onClick={connect}>Connect Wallet</Button>
        )}

        <Stack>
          <Heading size="lg">Network Reference</Heading>
          {isRegistered ? (
            <Box>
              <Text>Rank: {rank}</Text>
              <Text>Reward: {reward} BNB</Text>
              <Text>Downline Count: {downlineCount}</Text>
              {Number(reward) > 0 ? (
                <Button mt="2" onClick={claimReward}>
                  Claim Reward
                </Button>
              ) : null}
            </Box>
          ) : (
            <Box>
              <Input ref={referrerRef} placeholder="referrer" />
              <Button onClick={handleRegister}>Register</Button>
            </Box>
          )}
        </Stack>
      </Stack>
    </Container>
  );
};

export default DevTest;
