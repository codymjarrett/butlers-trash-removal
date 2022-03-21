import {
  AspectRatio,
  Container,
  Heading,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import Layout from '../components/Layout';

interface YouTubeVideoProps {
  embedId: String;
  title: string;
}

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
      <Container maxW="container.sm">
        <Heading textAlign="center">
          What is Butler&apos;s Trash Removal?
        </Heading>
        <Text mt={3}>
          Butler’s Trash Removal is a Valet Trash Pickup Amenity Service,
          locally owned and operated in the DC Metropolitan Area. We offer a
          seamless door to door trash removal service to Apartment homes,
          Condominiums, Dormitories, Senior Living Homes, Commercial &
          Residential Properties.
        </Text>
        <Text mt={3}>
          Take pride in knowing you’ll be adding the #1 Amenity that you and
          your residents can enjoy. Keeping your community tidy and clean, so
          your property keeps its value, while adding to it. This is a PERFECT
          amenity for your community. We pride ourselves on delivering your
          disposables, with the care they don’t deserve.
        </Text>
        <Text mt={3}>
          This is a PERFECT amenity for your community. We pride ourselves on
          delivering your disposables, with the care they don’t deserve.
        </Text>
        <AspectRatio maxW="560px" maxH="315px" mt={3}>
          <YouTubeVideo embedId="XVZCiNCn3dk" title="Butler's Trash Removal" />
        </AspectRatio>
      </Container>
    </Layout>
  );
};

export default Home;
