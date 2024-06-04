import { useState } from "react";
import { Container, VStack, HStack, Box, Image, Text, Button, IconButton, Heading, StackDivider } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "T-shirt",
    price: 20,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0LXNoaXJ0fGVufDB8fHx8MTcxNzQ5Mjg1NXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Jeans",
    price: 50,
    image: "https://placehold.co/600x400",
  },
  {
    id: 3,
    name: "Jacket",
    price: 100,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxqYWNrZXR8ZW58MHx8fHwxNzE3NDkyODYwfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Container maxW="container.xl" py={10}>
      <HStack justifyContent="space-between" mb={10}>
        <Heading>Online Clothing Store</Heading>
        <IconButton aria-label="Cart" icon={<FaShoppingCart />} size="lg" />
      </HStack>
      <VStack spacing={8} divider={<StackDivider borderColor="gray.200" />}>
        {products.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" width="100%">
            <HStack spacing={4}>
              <Image src={product.image} alt={product.name} boxSize="150px" objectFit="cover" />
              <VStack align="start" spacing={2}>
                <Text fontSize="xl" fontWeight="bold">
                  {product.name}
                </Text>
                <Text fontSize="md">${product.price}</Text>
                <Button colorScheme="teal" onClick={() => addToCart(product)}>
                  Add to Cart
                </Button>
              </VStack>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
