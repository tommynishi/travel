import { Box, Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import {Header} from "../components/organisms/Header";

export default function Okinawa() {
  return (
    <>
    <Header>
      沖縄旅行
    </Header>
    <Flex
      align="center"
      justify="center"
      fontSize="lg">
        2022/10/24～
    </Flex>
    <Tabs
      size='md'
      isFitted
      variant='enclosed'>
      <TabList>
        <Tab>24日</Tab>
        <Tab>25日</Tab>
        <Tab>26日</Tab>
        <Tab>27日</Tab>
        <Tab>28日</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
        <TabPanel>
          <p>four</p>
        </TabPanel>
        <TabPanel>
          <p>five</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
      
    </>
  )
}