import { Flex, Heading, Image } from "@chakra-ui/react";
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
            <Image
              src='https://img.pokemondb.net/artwork/large/scizor.jpg'
              alt={`pikachu image`}
              width="20px"
              height="20px"/>
            <Heading
              as="h1"
              fontSize={{ base: "md", md: "lg" }}>
                {prop.children}
            </Heading>
            <Image
              src='https://img.pokemondb.net/artwork/large/pikachu.jpg'
              alt={`pikachu image`}
              width="20px"
              height="20px"/>
          </Flex>
    </Flex>
  );
}