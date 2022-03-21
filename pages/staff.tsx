import type { NextPage } from 'next';
import { Container, Heading } from '@chakra-ui/react';

import Layout from '../components/Layout';

const Staff: NextPage = () => {
  return (
    <Layout>
      <Container maxW="container.md" mt={6}>
        <Heading textAlign="center">Our Staff</Heading>
      </Container>
      <Container maxW="container.xl"></Container>
    </Layout>
  );
};

export default Staff;
