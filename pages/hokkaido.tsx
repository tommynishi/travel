import { Box, Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import {Header} from "../components/organisms/Header";
import {FirstDay} from "../components/hokkaido/FirstDay";

export default function Hokkaido() {
  return (
    <>
      <Header>
        北海道旅行
      </Header>
      <Flex
        align="center"
        justify="center"
        fontSize="lg">
          2022/9/18～
      </Flex>
      <Tabs size='md' isFitted variant='enclosed'>
        <TabList>
          <Tab>18日</Tab>
          <Tab>19日</Tab>
          <Tab>20日</Tab>
          <Tab>21日</Tab>
          <Tab>22日</Tab>
          <Tab>23日</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <FirstDay />
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
          <TabPanel>
            <p>six</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}