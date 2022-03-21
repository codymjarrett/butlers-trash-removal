import type { NextPage } from 'next';
import {
  Box,
  Container,
  Heading,
  Stack,
  ListItem,
  Text,
  UnorderedList,
  useMediaQuery,
} from '@chakra-ui/react';

import Layout from '../components/Layout';

interface ServiceProps {
  heading: String;
  text: String;
  items: String[];
}

const communityBenefits = {
  text: 'Adding this Top Rated Amenity to your community has many benefits:',
  items: [
    'Spotless Trash Rooms/Chutes/Dumpsters',
    'Added Preventative Measures To Insure Clean Hallways',
    'Increases Property NOI(Net Operating Income',
    'Frequent Trash Pickup & Cleanup Helps Prevents Unwanted Animal Visits',
    'Adds As A Leasing Tool To Potential Residents',
    'Extra Hallway Protection With Uniformed Valet man',
    'Increases Resident Retention',
    'Allows Maintenance Staff More Time For Higher Tasks',
  ],
};

const residentBenefits = {
  text: 'Residents Gain Peace Of Mind By:',
  items: [
    'Removing A Chore From Their Busy Schedules',
    'Very Easy Service For Residents To Enjoy',
    'Avoid Trips To Unsightly Trash Rooms',
    'No More Trash Trips In Inclement Weather Or During A Holiday Season',
    'Transporting Trash Stops At Their Door',
  ],
};

const Service = ({ heading, text, items }: ServiceProps) => {
  return (
    <Box
      borderRadius="lg"
      boxShadow="2xl"
      maxW="md"
      minH="md"
      p={6}
      textAlign="center"
      backgroundColor="white"
    >
      <Heading mt={2} size="md">
        {heading}
      </Heading>
      <Text mt={2} fontSize={{ base: 'md', md: 'xl' }}>
        {text}
      </Text>
      <UnorderedList mt={2}>
        {items.map((item, index) => (
          <ListItem key={index} mt={1} textAlign="left">
            <Text fontSize={{ base: 'md', md: 'xl' }}>{item}</Text>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

const Services: NextPage = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  return (
    <Layout>
      <Container maxW="container.md" mt={6}>
        <Heading textAlign="center">Services</Heading>
      </Container>
      <Container maxW="container.xl">
        <Stack
          direction={{ base: 'column', md: 'row' }}
          justifyContent="space-around"
          alignItems={!isLargerThan768 ? 'center' : 'baseline'}
          mt={4}
        >
          <Box mt={4}>
            <Service
              heading="Community Benefits"
              text={communityBenefits.text}
              items={communityBenefits.items}
            />
          </Box>
          <Box mt={4}>
            <Service
              heading="Resident Benefits"
              text={residentBenefits.text}
              items={residentBenefits.items}
            />
          </Box>
        </Stack>
      </Container>
    </Layout>
  );
};

export default Services;
