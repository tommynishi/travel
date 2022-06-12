import { Flex, Heading } from "@chakra-ui/react";
import { Children, memo } from "react";

type Props = {
  children: string,
}

export const Header = (prop:Props) => {
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      shadow="md"
      padding={{ base: 3, md: 5}}>
        <Flex
            align="center"
            as="a"
            mr={8}
            _hover={{cursor: "pointer"}}
            >
            <Heading
              as="h1"
              fontSize={{ base: "md", md: "lg" }}>
                {prop.children}
            </Heading>
          </Flex>
    </Flex>
  );
}