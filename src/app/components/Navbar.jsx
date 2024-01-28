import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  Spacer,
  Text,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Container maxWidth="100%" borderWidth="1px" >
      <Flex justify="space-evenly" align="center">
        <Box>
          <Heading >Logo</Heading>
        </Box>
        <Spacer />
        <Box>
          <Flex gap="10">
            <Text>
              <Link href="/">Home</Link>
            </Text>
            <Text>
              <Link href="/Shopping">Shopping</Link>
            </Text>
            <Text>
              <Link href="/Cart">Cart</Link>
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Navbar;
