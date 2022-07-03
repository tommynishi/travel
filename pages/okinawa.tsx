import { Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import {Header} from "../components/organisms/Header";
import {FirstDay} from "../components/okinawa/FirstDay";
import {SecondDay} from "../components/okinawa/SecondDay";
import {ThirdDay} from "../components/okinawa/ThirdDay";
import {FourthDay} from "../components/okinawa/FourthDay";
import {FifthDay} from "../components/okinawa/FifthDay";
import {SixthDay} from "../components/okinawa/SixthDay";
import styled from 'styled-components';
import frstJpg from '../public/img/hokkaido_bg.jpg';
import scndJpg from "../public/img/sapporo.jpg";
import thrdJpg from "../public/img/sapporo2.jpg";
import frthJpg from "../public/img/hurano.jpg";
import Image from "next/image";

export default function Okinawa() {
  return (
    <div>
      <Header>
        沖縄旅行
      </Header>
      <Flex
        align="center"
        justify="center"
        fontSize="lg">
          2022/10/22～10/28 
      </Flex>
      <Tabs isFitted variant='enclosed'>
        <TabList>
          <Tab>22日</Tab>
          <Tab>23日</Tab>
          <Tab>24日</Tab>
          <Tab>25日</Tab>
          <Tab>26日</Tab>
          <Tab>27日</Tab>
          <Tab>28日</Tab>
        </TabList>
        <TabPanels>
          <STabPanel
            bgColor='black'
            bgImg={frstJpg.src}
            bgSize={{base:"700px", md:"800px"}}
            bgRepeat="no-repeat"
            bgPosition="top"
            minH='450px'>
            <FirstDay />
          </STabPanel >
          <STabPanel
            bgColor='black'
            bgImg={scndJpg.src}
            bgSize={{base:"800px", md:"800px"}}
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