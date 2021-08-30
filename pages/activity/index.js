import { useState } from 'react';
import {
    Avatar,
    Flex, 
    Box,
    Button,
    Text,
    Textarea,
    Image,
    Input,
    Stack,
    VStack,
    HStack,
    FormControl,
    FormLabel,
    Switch,
    SwitchProps,
    InputGroup,
    FormErrorMessage,
    FormHelperText,
    NumberInput,
    NumberInputField,
    InputRightElement,
    Divider,
    Wrap,
    WrapItem,
  } from "@chakra-ui/core";

const Activity = () => {
  const [activeFilter, setActiveFilter] = useState(()=>'All');
  const [activeTopic, setActiveTopic] = useState(()=>'Empty');

  const handleFilterClick = (e) => {
    setActiveFilter(e.target.value)
  }
  const handleTopicClick = (e) => {
    setActiveTopic(e.target.value)
  }
  const filterTags = ['Listings', 'Sales', 'Bids', 'Transfer', 'All'];
  const topicTags = ['NFTs', 'DeFi', 'Games', 'Music', 'Art', 'Domains', 'Memes', 'Metaverses'];

  const renderActivityPanel = () => {
    return (
      <Flex
            w="100%"
            flexDirection="row"
            p="0"
            position="relative"
        >
            <Image src="/images/activity/activity.png" w="100%"/>
            <Text fontFamily="PressStart2PRegular" fontSize="40px" position="absolute"
                left="50%" top="50%" transform="translate(-50%, -50%)"
            >
              ACTIVITY
            </Text>
      </Flex>
    );
  }

  const tempIndexForManyItems = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18'];

  const renderActivityItems = (temp) => {

    return (
      <Flex flexDir='column'>
        <Box position='relative' top='12' h='5px' w='5rem' bgColor='#942DFE'/>
        <Text borderBottom='1px solid #4D4456' fontFamily="PressStart2PRegular" fontSize='20px' pb='1rem' marginBottom='2rem'>
          Trading History
        </Text>
        <VStack spacing={10} maxH='180vh' overflow='auto' overflowX='hidden' pr='2rem'>
          {temp.map((currNumber) => {
            return (
          <HStack spacing={8} align p='1rem' border='1px solid #4D4456' borderRadius='15px' w='42rem' key={currNumber}>
            <Image src='images/activity/FlowerNFT.png'/>
              <VStack spacing={3} align>
              <Text fontSize='20px' fontWeight='700'>
                29-kid America + {currNumber}
              </Text>
              <HStack>
                <Text fontSize='18px'>
                  Purchased by
                </Text>
                <Avatar size='sm' src='images/homepage/artist1.png'/>
                <Text fontSize='18px' fontWeight='700'>
                  WonderKid07
                </Text>
                <Text fontSize='18px'>
                  for
                </Text>
                <Text fontSize='18px' fontWeight='700'>
                  0.045 ETH
                </Text>
              </HStack>
              <HStack>
                <Text fontSize='18px'>
                  From
                </Text>
                <Avatar size='sm' src='images/homepage/artist2.png'/>
                <Text fontSize='18px' fontWeight='700'>
                  KidWonder08
                </Text>
              </HStack>
              <Text fontSize='16px' opacity='0.7'>
                5 minutes ago
              </Text>
            </VStack>
          </HStack>
          )})}
        </VStack>
      </Flex>
    )
  }

  const renderFilterSection = (title, filters, onClickFunction, selectState) => {
    return (
      <Flex flexDir='column'>
        <Text borderBottom='1px solid #4D4456' fontFamily="PressStart2PRegular" fontSize='20px' pb='1rem' mb='2rem'>
          {title}
        </Text>
        <Box position='relative' top='-9' h='5px' w='5rem' bgColor='#942DFE'/> 
        <Wrap>
        {filters.map((currFilter) => {
          return (
            <WrapItem key={currFilter}>
              <Button border="1px solid #4D4456" borderRadius="30px" p="0.5rem 2rem" cursor="pointer" mr="1rem"
              justifyContent='center'
              onClick={(e) => onClickFunction(e)} value={currFilter} backgroundColor={ selectState === currFilter ? '#942DFE' : ''}>
                {currFilter}
              </Button>
            </WrapItem>
            )
          }) 
        }
        </Wrap>
      </Flex>
    )
  }

   return(
       <Flex flexDir='column' marginBottom='3rem'>
         {renderActivityPanel()}
         <HStack spacing={20} margin='auto' align pt='3rem'>
            {renderActivityItems(tempIndexForManyItems)}
            <VStack spacing={10} maxW='30rem'>
              {renderFilterSection('Filter by', filterTags, handleFilterClick, activeFilter)}
              {renderFilterSection('Topics', topicTags, handleTopicClick, activeTopic)}
            </VStack>
         </HStack>
       </Flex>
   )
    
}

export default Activity
