
import { Box, Flex, Grid, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";


type Props = {
  time: string,
  title: string,
  list: string[],
  type: string,
}

export const DayFlex = (children: Props) => {
  const titleImg = (children.type==='shinkansen')
                    ? (<Image
                      src='/img/shinkansen.png'
                      alt='shinkansen'
                      width="20px"
                      height="20px"
                      layout='fixed' />)
                    : (children.type==='hotel')
                      ? (<Image
                          src='/img/hotel.png'
                          alt='hotel'
                          width="20px"
                          height="20px"
                          layout='fixed' />)
                      : null;
  return (
    <Flex mt="1rem" justify='center' ml='auto' mr='auto'>
      <Grid templateColumns='repeat(2, 0.5fr)'>
        <Box
          w='5.4rem'
          h='50px'
          textAlign="center"
          border="solid"
          borderColor="blue.700"
          borderRadius="800px"
          bgColor='whiteAlpha.800'>
           {children.time}
        </Box>  
        <Box
          w={{base:"300px", md:"500px"}}
          minH='50px'
          maxH='150px'
          border="solid"
          borderColor="blue.700"
          bgColor='whiteAlpha.800'
          pl="0.5rem"
          pt="0.1rem">
            <Text color="red" fontStyle="bold" fontSize="lg">{children.title}{titleImg}</Text>
            <UnorderedList>
              {children.list.map((listItem) => 
                <ListItem key={listItem}>{listItem}</ListItem>
              )}
            </UnorderedList>
        </Box>
      </Grid>
    </Flex>
  )
}