import { Box, Flex, Grid, HStack, Spacer, VStack } from "@chakra-ui/react"
import Image from "next/image"

export const FirstDay = () => {
  return (
    <Flex
      h="lg" justify='center'>
      <Box
        w="750px"
        >
          <Grid templateColumns='repeat(3, 1fr)' gap={6} >
            <Box w='100px' h='100px' bg='gray.300' textAlign="right">
              8:00～
            </Box>
            <Box w='200px' h='100px' bg='gray.300' >
              <p>与野⇒函館</p>
              <p>12:00着予定</p>
            </Box>
            <Box w='400px' h='100px ' bg='gray.300' fontSize="md">
              <p>駅弁</p>
              <p>写真</p>
            </Box>
          </Grid>
          <Box
            backgroundColor="gray.300"
            paddingLeft="5rem"
            >
            
          </Box>
          <Box>
            楽しめるもの
            ・駅弁
          </Box>
            
          観光場所：
          函館牛乳アイス

          宿泊：シェラトン 函館駅前
      </Box>
    </Flex>
  )
}