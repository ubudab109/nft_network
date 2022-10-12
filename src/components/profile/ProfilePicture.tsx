import React, { useMemo } from 'react';
import { AspectRatio, AspectRatioProps, Box, Image } from '@chakra-ui/react';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import { NIL_ADDRESS } from 'constant/address';

interface ProfilePictureProps extends AspectRatioProps {
  address?: string | null;
  rank?: any;
}

const RankAssetMap = {
  Newbie: 'newbie.png',
  Rare: 'rare.png',
  SuperRare: 'super-rare.png',
  Epic: 'epic.png',
  Legend: 'legend.png',
  SuperLegend: 'super-legend.png',
};

export const ProfilePicture: React.FC<ProfilePictureProps> = (props) => {
  const { address, rank, ...rest } = props;
  const usedAddress = props.address ?? NIL_ADDRESS;

  const rankAsset = useMemo(() => {
    return RankAssetMap[rank as 'Newbie'] ?? RankAssetMap.Newbie;
  }, [rank]);

  return (
    <Box position="relative">
      <AspectRatio
        ratio={1}
        w="110px"
        position="absolute"
        top="-7px"
        right="-53px"
        zIndex={2}
      >
        <Box
          p={2}
          bg="radial-gradient(ellipse at center, rgba(241,111,92,1) 0%, rgba(149,93,148,1) 0%, rgba(149,93,148,0) 64%, rgba(149,93,148,0) 100%)"
          borderRadius="full"
        >
          <Image src={`/rank/${rankAsset}`} alt={rank} loading="lazy" />
        </Box>
      </AspectRatio>
      <AspectRatio
        borderRadius="full"
        overflow="hidden"
        ratio={1}
        w="150px"
        {...rest}
      >
        <Jazzicon diameter={150} seed={jsNumberForAddress(usedAddress)} />
      </AspectRatio>
    </Box>
  );
};
