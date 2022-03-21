import {
  AspectRatio,
  Badge,
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Text,
  ListItem,
  OrderedList,
} from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';

import type { NextPage } from 'next';
import Layout from '../components/Layout';

interface YouTubeVideoProps {
  embedId: String;
  title: string;
}

const items = [
  'Sit the trash out at the contractual times. (Typically after 5pm).',
  'Our uniformed Valet Trashman will then pickup disposables and drop them off at the nearest trash room/chute/dumpster.',
  'Residents will then collect their bins from the door each pickup night (Typically 9pm).',
];

const YouTubeVideo = ({ embedId, title }: YouTubeVideoProps) => {
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${embedId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <Layout>
      <Container maxW="container.lg">
        <Heading textAlign="center">
          What is Butler&apos;s Trash Removal?
        </Heading>
        <Text mt={5} fontSize={{ base: 'md', md: 'xl' }} textAlign="center">
          Butler’s Trash Removal is a Valet Trash Pickup Amenity Service,
          locally owned and operated in the DC Metropolitan Area. We offer a
          seamless door to door trash removal service to Apartment homes,
          Condominiums, Dormitories, Senior Living Homes, Commercial &
          Residential Properties.
        </Text>
        <Text mt={3} fontSize={{ base: 'md', md: 'xl' }} textAlign="center">
          Take pride in knowing you’ll be adding the #1 Amenity that you and
          your residents can enjoy. Keeping your community tidy and clean, so
          your property keeps its value, while adding to it. This is a PERFECT
          amenity for your community. We pride ourselves on delivering your
          disposables, with the care they don’t deserve.
        </Text>
        <Text mt={3} fontSize={{ base: 'md', md: 'xl' }} textAlign="center">
          This is a PERFECT amenity for your community. We pride ourselves on
          delivering your disposables, with the care they don’t deserve.
        </Text>
        <AspectRatio maxW="560px" maxH="315px" mt={10} ml="auto" mr="auto">
          <YouTubeVideo embedId="XVZCiNCn3dk" title="Butler's Trash Removal" />
        </AspectRatio>
        <Box mt={10}>
          <Heading textAlign="center">How It Works</Heading>
          <Text mt={3} fontSize={{ base: 'md', md: 'xl' }} textAlign="center">
            Butler’s Trash Valet Service is very seamleass and easy. Residents
            are given designated times for trash set out and pickup,
            customizable to your community. Enjoy doorside trash removal 3, 5,
            or 7 days a week.
          </Text>
          <Text fontSize={{ base: 'md', md: 'xl' }} mt={4}>
            Your residents will:
          </Text>
          <OrderedList mt={2}>
            {items.map((item, index) => (
              <ListItem key={index}>
                <Text fontSize={{ base: 'md', md: 'xl' }}>{item}</Text>
              </ListItem>
            ))}
          </OrderedList>
        </Box>
        <Center my={10}>
          <Badge fontSize="xl" p={5} colorScheme="red">
            <Text fontSize="sm">
              ASK ABOUT OUR KNOCK & GO SERVICE <ArrowRightIcon ml={4} />
            </Text>
            <Text fontSize="sm" mt={5}>
              <ArrowLeftIcon mr={4} />
              Easy, Convienient and Pain-free
            </Text>
          </Badge>
        </Center>
      </Container>
    </Layout>
  );
};

export default Home;
