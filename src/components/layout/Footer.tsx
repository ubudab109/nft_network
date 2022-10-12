import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import {
  Box,
  Text,
  Container,
  Stack,
  Button,
  Icon,
  Divider,
} from '@chakra-ui/react';
import { SubFooter } from '@components/molekul';

export const Footer: React.FC = (props) => {
  return (
    <Box w="full">
      <Box as="footer" width="full" bg="#26292d">
        <Container maxW="container.xl">
          <Box p={3}>
            <SubFooter />
          </Box>
        </Container>
        <Divider w="full" position="relative" borderBottomColor="gray.500" />
        <Container maxW="container.xl" my="1rem">
          <Stack
            direction={{ xl: 'row', md: 'row', base: 'column' }}
            justify="space-between"
            // align="center"
            p={3}
          >
            <Box>
              <Text fontSize="md" color="gray.500" as="abbr">
                {props.children}
              </Text>
            </Box>
            <Stack direction="row">
              <Button
                size="sm"
                bgColor="#212428"
                color="white"
                _hover={{ bgColor: 'white', color: 'black' }}
              >
                <Icon as={FaFacebookF} />
              </Button>
              <Button
                size="sm"
                bgColor="#212428"
                color="white"
                _hover={{ bgColor: 'white', color: 'black' }}
              >
                <Icon as={FaTwitter} />
              </Button>
              <Button
                size="sm"
                bgColor="#212428"
                color="white"
                _hover={{ bgColor: 'white', color: 'black' }}
              >
                <Icon as={FaLinkedinIn} />
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};
