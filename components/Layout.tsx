import React, { useRef } from 'react';
import { useRouter } from 'next/router';

import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Heading,
  IconButton,
  Stack,
  ListItem,
  Link as ChakraLink,
  //   Image,
  Text,
  UnorderedList,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import { ConditionalWrapper } from '../utils';
import { HamburgerIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

interface HeaderProps {
  onOpen(event: React.MouseEvent<HTMLButtonElement>): void;
  buttonRef: React.Ref<HTMLInputElement> | null;
}

interface NavItem {
  name: String;
  slug: String;
}

const navItems: NavItem[] = [
  { name: 'Home', slug: '/' },
  { name: 'Our Services', slug: '/services' },
  { name: 'Our Staff', slug: '/staff' },
  { name: 'Contact Us', slug: '/contact' },
];

const Navigation = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const router = useRouter();

  return (
    <nav>
      <UnorderedList styleType="none">
        <Stack direction={{ base: 'column', md: 'row' }} spacing="6">
          {navItems.map(({ name, slug }, index) => (
            <ListItem key={`${slug}-${index}`}>
              <ConditionalWrapper
                condition={!isLargerThan768}
                wrapper={(children) => (
                  <Button
                    variant="link"
                    onClick={() => router.push(`/${slug}`)}
                    w="100%"
                    p={3}
                  >
                    {children}
                  </Button>
                )}
              >
                <Link href={`/${slug}`} passHref>
                  <ChakraLink
                    fontSize={isLargerThan768 ? 17 : 28}
                    fontWeight="normal"
                    color="black"
                  >
                    {name}
                  </ChakraLink>
                </Link>
              </ConditionalWrapper>
            </ListItem>
          ))}
        </Stack>
      </UnorderedList>
    </nav>
  );
};

const Header = ({ onOpen, buttonRef }: HeaderProps) => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  return (
    <Box
      backgroundColor="white"
      boxShadow="base"
      // p={isLargerThan768 ? 2 : 1}
    >
      <header>
        <Container maxW="container.lg">
          <Flex justify="space-between" alignItems="center">
            <Link href="/" passHref>
              <Flex alignItems="center">
                <Box mr={2}>
                  <Image
                    src="/images/butler-icon-2.svg"
                    width={isLargerThan768 ? 75 : 50}
                    height={isLargerThan768 ? 75 : 50}
                    alt="Butler's trash Removal"
                    className="logo"
                  />
                </Box>
                <Heading as="h1">
                  <Text
                    fontSize={['lg', 'xl']}
                    color="black"
                    className="main-title"
                  >
                    Butler&apos;s Trash Removal
                  </Text>
                </Heading>
              </Flex>
            </Link>
            {!isLargerThan768 && (
              <IconButton
                onClick={onOpen}
                ref={buttonRef}
                backgroundColor="transparent"
                icon={<HamburgerIcon w={8} h={8} color="black" />}
              />
            )}
            {isLargerThan768 && <Navigation />}
          </Flex>
        </Container>
      </header>
    </Box>
  );
};

const getFormattedPathName = (path: String) => {
  if (path.slice(1) === '') {
    return 'Home';
  }
  return path.slice(1)[0].toUpperCase() + path.slice(2);
};

const Layout = ({ children }: LayoutProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const buttonRef = useRef<HTMLHeadingElement>(null);
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  return (
    <>
      <Head>
        <title>{getFormattedPathName(router.pathname)}</title>
      </Head>
      <Box backgroundColor="gray.50" height="100vh">
        <Header onOpen={onOpen} buttonRef={buttonRef} />
        {/* <Flex justify="center" mt={2}></Flex> */}
        <Box mt={10}>{children}</Box>
        {!isLargerThan768 && (
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={buttonRef}
            size="xs"
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>
                <Flex direction="column">
                  <Text
                    fontSize={['lg', 'xl']}
                    color="black"
                    className="main-title"
                    textAlign="center"
                  >
                    Butler&apos;s Trash Removal
                  </Text>
                  <Image
                    src="/images/butler-icon-2.svg"
                    width="100"
                    height="100"
                    alt="Butler's trash Removal"
                  />
                </Flex>
              </DrawerHeader>

              <DrawerBody>
                <Navigation />
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        )}
      </Box>
    </>
  );
};

export default Layout;
