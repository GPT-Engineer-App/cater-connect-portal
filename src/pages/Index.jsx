import { Box, Flex, Text, Button, Image, VStack, HStack, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { FaUtensils, FaHamburger, FaPizzaSlice, FaInfoCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation */}
      <Flex as="nav" padding="4" bg="tomato" color="white" justifyContent="space-between" alignItems="center">
        <Text fontSize="xl" fontWeight="bold">
          Cater Connect
        </Text>
        <HStack spacing="4">
          <Button leftIcon={<FaInfoCircle />} variant="ghost">
            About
          </Button>
          <Button leftIcon={<FaUtensils />} variant="ghost">
            Services
          </Button>
          <Button leftIcon={<FaHamburger />} variant="ghost">
            Menu
          </Button>
          <Button leftIcon={<FaPizzaSlice />} variant="ghost">
            Contact
          </Button>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Flex bg="gray.100" align="center" justify="center" height="400px">
        <VStack>
          <Heading as="h1" size="2xl" fontWeight="bold">
            Delicious Meals Delivered
          </Heading>
          <Text textAlign="center" maxW="md">
            Experience top-notch catering services for all your events and special occasions.
          </Text>
          <Button colorScheme="red" size="lg" mt="4">
            Get Started
          </Button>
        </VStack>
      </Flex>

      {/* Services Section */}
      <Container maxW="container.xl" py="16">
        <Heading as="h2" size="xl" mb="6">
          Our Services
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing="8">
          <ServiceBox icon={FaUtensils} title="Event Catering" description="Full-service catering for weddings, corporate events, and private parties." />
          <ServiceBox icon={FaHamburger} title="Food Delivery" description="Delicious meals delivered right to your doorstep with care." />
          <ServiceBox icon={FaPizzaSlice} title="Custom Menus" description="Tailored menus to perfectly fit the theme and style of your event." />
        </SimpleGrid>
      </Container>

      {/* Footer */}
      <Box bg="tomato" color="white" py="4" textAlign="center">
        <Text>&copy; {new Date().getFullYear()} Cater Connect. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

const ServiceBox = ({ icon: Icon, title, description }) => (
  <VStack bg="white" p="8" borderRadius="md" boxShadow="md">
    <Icon size="3em" />
    <Text fontWeight="bold" fontSize="lg">
      {title}
    </Text>
    <Text textAlign="center">{description}</Text>
  </VStack>
);

export default Index;
