import { Box, Flex, Grid, ListItem, UnorderedList } from "@chakra-ui/react"
import Image from "next/image"
import React from "react"

type Props = {
  time: string,
  item: string[],
  list: string[],
  type: string,
}

export const DayFlex = (children: Props) => {
  const shinkansen = (<Image
                        src='/img/shinkansen.png'
                        alt='shinkansen'
                        width="20px"
                        height="20px"
                        layout='fixed' />);
  const hotel = (<Image
                        src='/img/hotel.png'
                        alt='hotel'
                        width="20px"
                        height="20px"
                        layout='fixed' />);
  return (
    <Flex mt="1rem" justify='center'>
      <Box w="700px">
        <Grid templateColumns='repeat(3, 1fr)' gap={6} >
          <Box w='100px' minH='50px' maxH='100px' bg='gray.300' textAlign="left">
            {children.time}
          </Box>
          <Box w='200px' minH='50px' maxH='100px' bg='gray.300' >
            {children.item.map((itm: string) => 
              <div key={itm}>
                {children.type === "shinkansen" 
                  ? shinkansen
                  : children.type === "hotel"
                      ? hotel
                      : null}
                {itm}
              </div>
            )}
          </Box>
          <Box w='300px' minH='50px' maxH='100px' bg='gray.300' fontSize="md" pl="0.6rem">
            <UnorderedList>
              {children.list.map((listItem) => 
                <ListItem key={listItem}>{listItem}</ListItem>
              )}
            </UnorderedList>
          </Box>
        </Grid>
      </Box>
    </Flex>
  )
}