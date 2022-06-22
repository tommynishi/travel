import { Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import {Header} from "../components/organisms/Header";
import {FirstDay} from "../components/hokkaido/FirstDay";
import {SecondDay} from "../components/hokkaido/SecondDay";
import {ThirdDay} from "../components/hokkaido/ThirdDay";
import {FourthDay} from "../components/hokkaido/FourthDay";
import {FifthDay} from "../components/hokkaido/FifthDay";
import {SixthDay} from "../components/hokkaido/SixthDay";
import styled from 'styled-components';
import frstJpg from '../public/img/hokkaido_bg.jpg';
import scndJpg from "../public/img/sapporo.jpg";
import thrdJpg from "../public/img/sapporo2.jpg";
import frthJpg from "../public/img/hurano.jpg";

export default function Hokkaido() {
  return (
    <div>
      <Header>
        北海道旅行
      </Header>
      <Flex
        align="center"
        justify="center"
        fontSize="lg">
          2022/9/18～
      </Flex>
      <Tabs isFitted variant='enclosed'>
        <TabList>
          <Tab>18日</Tab>
          <Tab>19日</Tab>
          <Tab>20日</Tab>
          <Tab>21日</Tab>
          <Tab>22日</Tab>
          <Tab>23日</Tab>
        </TabList>
        <TabPanels>
          <STabPanel
            bgColor='black'
            bgImg={frstJpg.src}
            bgSize={{base:"600px", md:"800px"}}
            bgRepeat="no-repeat"
            bgPosition="top"
            minH='450px'>
            <FirstDay />
          </STabPanel >
          <STabPanel
            bgColor='black'
            bgImg={scndJpg.src}
            bgSize={{base:"600px", md:"800px"}}
            bgRepeat="no-repeat"
            bgPosition="top"
            h='420px'>
            <SecondDay />
          </STabPanel>
          <STabPanel
            bgColor='black'
            bgImg={thrdJpg.src}
            bgSize={{base:"600px", md:"800px"}}
            bgRepeat="no-repeat"
            bgPosition="top"
            h={{base:"500px", md:"700px"}}>
            <ThirdDay />
          </STabPanel>
          <STabPanel
            bgColor='black'
            bgImg={frthJpg.src}
            bgSize={{base:"600px", md:"700px"}}
            bgRepeat="no-repeat"
            bgPosition="top"
            h='550px'>
            <FourthDay />
          </STabPanel>
          <STabPanel
            bgColor='black'
            bgImg={frstJpg.src}
            bgSize={{base:"600px", md:"700px"}}
            bgRepeat="no-repeat"
            bgPosition="top"
            maxH='800px'>
            <FifthDay />
          </STabPanel>
          <STabPanel
            bgColor='black'
            bgImg={frstJpg.src}
            bgSize="800px"
            bgRepeat="no-repeat"
            bgPosition="top"
            maxH='800px'>
            <SixthDay />
          </STabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
};

const STabPanel = styled(TabPanel)`
  bg: 'gray.300';
  ml: "auto";
  mr:"auto";
`;