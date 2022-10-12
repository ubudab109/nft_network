import React, { useMemo } from 'react';
import { Stack, Box, Image } from '@chakra-ui/react';
import { Main } from '@components/layout';
import { useNetRef, useWallet } from 'hooks';
import {
  AddressText,
  PetList,
  ProfilePicture,
  SummaryItem,
  SummaryList,
  ShareLinkReferral,
} from '@components/profile';

const Profile = () => {
  const { reward, downlineCount, claimReward, rank, rankRewardEstimation } =
    useNetRef();
  const { address, balance } = useWallet();

  const summaryList = useMemo<SummaryItem[]>(() => {
    const _totalReward = Number(reward);

    return [
      {
        label: 'reward',
        value: `${reward} BNB`,
        actions:
          _totalReward > 0
            ? [
                {
                  children: 'Claim',
                  size: 'xs',
                  onClick: claimReward,
                },
              ]
            : [],
      },
      { label: 'rank reward', value: `${rankRewardEstimation} BNB` },
      { label: 'balance', value: `${balance} BNB` },
      { label: 'downline', value: downlineCount },
      { label: 'Rank', value: rank },
    ];
  }, [reward, balance, downlineCount, claimReward, rank, rankRewardEstimation]);

  return (
    <Box>
      <Image
        src="/author/bg.jpg"
        w={'full'}
        position={'absolute'}
        h={'20rem'}
        objectFit="cover"
        alt="bg-profile"
        loading="lazy"
      />
      <Main>
        <Stack mt="7rem" align="center" spacing={6}>
          <ProfilePicture address={address} rank={rank} />
          <Stack direction="row" align="center" spacing="1rem">
            <AddressText>{address ?? ''}</AddressText>
            <ShareLinkReferral linkShare={address ?? ''} />
          </Stack>
          <SummaryList data={summaryList} />
        </Stack>
        <Box pt={6} pb={12}>
          <PetList address={address ?? ''} />
        </Box>
      </Main>
    </Box>
  );
};

export default Profile;
