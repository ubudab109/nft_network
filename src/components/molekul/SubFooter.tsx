import React from 'react';
import {
  Box,
  Text,
  InputGroup,
  Input,
  Button,
  Icon,
  Wrap,
  ListItem,
  UnorderedList,
  WrapItem,
} from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';

export const SubFooter: React.FC = () => {
  return (
    <Wrap justify="space-between" color="gray.500" my="80px">
      <WrapItem w={{ xl: '23%', md: '47%', base: '100%' }}>
        <Box>
          <Text fontSize="xl" color="white" fontWeight="bold" mb="30px">
            Marketplace
          </Text>
          <UnorderedList listStyleType="none" marginStart="none">
            <ListItem cursor="pointer" _hover={{ color: 'red' }}>
              All NFTs
            </ListItem>
            <ListItem cursor="pointer" _hover={{ color: 'red' }}>
              Art
            </ListItem>
            <ListItem cursor="pointer" _hover={{ color: 'red' }}>
              Music
            </ListItem>
            <ListItem cursor="pointer" _hover={{ color: 'red' }}>
              Domain Names
            </ListItem>
            <ListItem cursor="pointer" _hover={{ color: 'red' }}>
              Virtual World
            </ListItem>
            <ListItem cursor="pointer" _hover={{ color: 'red' }}>
              Collectibles
            </ListItem>
          </UnorderedList>
        </Box>
      </WrapItem>
      <WrapItem w={{ xl: '23%', md: '47%', base: '100%' }}>
        <Box>
          <Text fontSize="xl" color="white" fontWeight="bold" mb="30px">
            Resources
          </Text>
          <UnorderedList listStyleType="none" marginStart="none">
            <ListItem cursor="pointer" _hover={{ color: 'red' }}>
              Help Center
            </ListItem>
            <ListItem cursor="pointer" _hover={{ color: 'red' }}>
              Partners
            </ListItem>
            <ListItem cursor="pointer" _hover={{ color: 'red' }}>
              Suggestions
            </ListItem>
            <ListItem cursor="pointer" _hover={{ color: 'red' }}>
              Discord
            </ListItem>
            <ListItem cursor="pointer" _hover={{ color: 'red' }}>
              Docs
            </ListItem>
            <ListItem cursor="pointer" _hover={{ color: 'red' }}>
              Newsletter
            </ListItem>
          </UnorderedList>
        </Box>
      </WrapItem>
      <WrapItem w={{ xl: '23%', md: '47%', base: '100%' }}>
        <Box>
          <Text fontSize="xl" color="white" fontWeight="bold" mb="30px">
            Community
          </Text>
          <UnorderedList listStyleType="none" marginStart="none">
            <ListItem cursor="pointer" _hover={{ color: 'red' }}>
              Community
            </ListItem>
            <ListItem cursor="pointer" _hover={{ color: 'red' }}>
              Docummentation
            </ListItem>
            <ListItem cursor="pointer" _hover={{ color: 'red' }}>
              Brand Assets
            </ListItem>
            <ListItem cursor="pointer" _hover={{ color: 'red' }}>
              Blog
            </ListItem>
            <ListItem cursor="pointer" _hover={{ color: 'red' }}>
              Forum
            </ListItem>
            <ListItem cursor="pointer" _hover={{ color: 'red' }}>
              Mailing List
            </ListItem>
          </UnorderedList>
        </Box>
      </WrapItem>
      <WrapItem w={{ xl: '23%', md: '47%', base: '100%' }}>
        <Box>
          <Text fontSize="xl" color="white" fontWeight="bold" mb="30px">
            Newsletter
          </Text>
          <Text>
            Signup for our newsletter to get the latest news in your inbox.
          </Text>
          <InputGroup my="10px">
            <Input
              roundedLeft="full"
              transition="0.5s"
              placeholder="search item here..."
              border="none"
              bg="#ffffff1a"
              color="white"
              fontSize="15px"
              _placeholder={{ color: 'gray.500' }}
              _focus={{ border: 'none' }}
            />
            <Button
              bg="red"
              roundedRight="full"
              width="20%"
              _hover={{ boxShadow: '2px 2px 20px 0 #ff343f' }}
            >
              <Icon as={FaArrowRight} width="full" color="white" />
            </Button>
          </InputGroup>
          <Text>Your email is safe with us. We dont spam.</Text>
        </Box>
      </WrapItem>
    </Wrap>
  );
};
