import React from 'react';
import Slider from 'react-slick';
import { IHotCollectionListProps } from '@interfaces';
import { HotCollectionCard } from '@components/molekul';
import { HotCollectionSlide } from '@constanta';
import { Box, Heading } from '@chakra-ui/react';

export const HotCollectionList: React.FC<IHotCollectionListProps> = ({
  slideData,
  sectionName,
}) => {
  return (
    <Box py="1rem">
      <Box py="2rem">
        <Heading size="lg" textTransform="capitalize" color="white">
          {sectionName}
        </Heading>
      </Box>
      <Slider {...HotCollectionSlide}>
        {slideData?.map((item, idx) => {
          return (
            <Box px="0.5rem" key={idx}>
              <HotCollectionCard
                name={item.name}
                profileImage={item.profileImage}
                background={item.background}
                info={item.info}
              />
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
};
