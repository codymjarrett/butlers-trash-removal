import type { NextPage } from 'next';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Heading,
  Input,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Stack,
  ListItem,
  Link as ChakraLink,
  //   Image,
  Text,
  UnorderedList,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';

import Layout from '../components/Layout';

const Staff: NextPage = () => {
  return (
    <Layout>
      <Container maxW="container.md" mt={6}>
        <Heading textAlign="center">Our Staff</Heading>
      </Container>
      <Container maxW="container.xl">
        <FormControl>
          <Input id="name" type="text" />
        </FormControl>
      </Container>
    </Layout>
  );
};

export default Staff;
