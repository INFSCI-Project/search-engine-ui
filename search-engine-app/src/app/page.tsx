"use client";
import { InputGroup } from "@/components/ui/input-group";
import { Flex, Input, Text, InputElement } from "@chakra-ui/react";

const Home = () => {
  return (
    <Flex w="full" h="vh" justify="center" align="center">
      <InputGroup>
        <Input bg="white" maxW={600} px={5} size="xs" />
      </InputGroup>
    </Flex>
  );
};

export default Home;
