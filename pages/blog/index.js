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
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
    Icon,
  } from "@chakra-ui/core";
  import { SiFacebook} from 'react-icons/si';
  import { AiFillTwitterCircle } from 'react-icons/ai';
  import { FiInstagram } from 'react-icons/fi';
  import { ImPinterest } from 'react-icons/im';
  import { TiChevronRight } from 'react-icons/ti';
  import { BiChevronRight,BiChevronsRight,BiChevronLeft, BiChevronsLeft } from 'react-icons/bi';


  
  
  const Blog = () => {

    const renderBlogPanel = () => {
        return (
          <Flex
                w="100%"
                flexDirection="row"
                p="0"
                position="relative"
                marginBottom='1rem'
            >
                <Image src="/images/blog/blog.png" w="100%"/>
                <Text fontFamily="PressStart2PRegular" fontSize="40px" position="absolute"
                    left="50%" top="50%" transform="translate(-50%, -50%)"
                >
                  BLOG
                </Text>
          </Flex>
        );
      }

      //To be deleted
      const tempIndexForLatestItems = ['1','2','3','4'];

      const renderLatestItems = (temp) => {
        const [activeKey, setActiveKey] = useState('1');

        const handleClick = (e) => {
          setActiveKey(e.target.value)
          console.log(e.currentTarget.value)
        }
        return (
          <Flex flexDir='column'>
            <Box position='relative' top='12' h='5px' w='5rem' bgColor='#942DFE'/>
            <Text borderBottom='1px solid #4D4456' fontFamily="PressStart2PRegular" fontSize='20px' pb='1rem' marginBottom='2rem'>
              Latest Posts
            </Text>
            <VStack spacing={2} maxH='220vh' overflow='auto' overflowX='hidden' pr='2rem'>
              {temp.map((currNumber) => {
                return (
              <HStack spacing={9} align  w='50rem' key={currNumber}>
                <Image src='images/blog/pacman.png' w='23rem' h='16rem'/>
                <VStack spacing={6} align>
                    <Text fontSize='15px' opacity='0.5'>
                        23 April 2021
                    </Text>
                    <Text fontSize='25px' fontWeight='700' >
                        EXAMPLE OF A RANDOM TITLE FOR THE BLOG POST TO INDICATE THE LAYOUT OF THIS ELEMENT. 
                        + {currNumber}
                    </Text>
                    <Button 
                    border="1px solid #4D4456" 
                    borderRadius="30px" 
                    bg="linear-gradient(180deg, #FE852D 0%, #D16415 100%)" 
                    p="0.5rem 2rem" 
                    cursor="pointer" 
                    mr="1rem"
                    w='50%'
                    >
                         Read More
                    </Button>
                    <Icon as={TiChevronRight} position='relative' bottom='50' left='140' boxSize='1rem'/>
                </VStack>
              </HStack>
              )})}
              <HStack spacing={10}>
                <HStack>
                  <Icon boxSize='2rem' as={BiChevronsLeft} color='#942DFE' border='1px solid' borderColor='#942DFE' borderRadius='full'/>
                  <Icon boxSize='2rem' as={BiChevronLeft} color='#942DFE' border='1px solid' borderColor='#942DFE' borderRadius='full'/>
                </HStack>
                <HStack spacing={2}>
                  <Button
                  color={activeKey==='1' ? 'white':'#942DFE' }  
                  background={activeKey==='1' ? '#942DFE':'transparent' }
                  border='1px solid' 
                  borderColor='#942DFE' 
                  borderRadius='full'
                  value={'1'}
                  onClick={(e)=>handleClick(e)}
                  >
                    1
                  </Button>
                  <Button
                  color={activeKey==='2' ? 'white':'#942DFE' } 
                  background={activeKey==='2' ? '#942DFE':'transparent' }
                  border='1px solid' 
                  borderColor='#942DFE' 
                  borderRadius='full'
                  value='2'
                  onClick={(e)=>handleClick(e)}
                  >
                    2
                  </Button>
                  <Button
                  color={activeKey==='3' ? 'white':'#942DFE' } 
                  background={activeKey==='3' ? '#942DFE':'transparent' }
                  border='1px solid' 
                  borderColor='#942DFE' 
                  borderRadius='full'
                  value='3'
                  onClick={(e)=>handleClick(e)}
                  >
                    3
                  </Button>
                </HStack>
                <HStack>
                  <Icon boxSize='2rem' as={BiChevronRight} color='#942DFE' border='1px solid' borderColor='#942DFE' borderRadius='full'/>
                  <Icon boxSize='2rem' as={BiChevronsRight} color='#942DFE' border='1px solid' borderColor='#942DFE' borderRadius='full'/>
                </HStack>
              </HStack>
            </VStack>
          </Flex>
        )
      }
      
      //To be deleted
      const tempIndexForRecentItems = ['1','2','3','4','5'];

      const renderRecentItems = (temp) => {
        return (
            <Flex flexDir='column' w='30rem'>
              <Box position='relative' top='12' h='5px' w='5rem' bgColor='#942DFE'/>
              <Text borderBottom='1px solid #4D4456' fontFamily="PressStart2PRegular" fontSize='20px' pb='1rem' marginBottom='2rem'>
                Recent Posts
              </Text>
              <VStack spacing={4} maxH='90vh' overflow='auto' overflowX='hidden' pr='2rem' >
                {temp.map((currNumber) => {
                  return (
                <HStack spacing={4} key={currNumber}>
                    <Image src='images/blog/yellowfun.png' w='8rem' h='5rem'/>
                    <Text fontSize='18px' fontWeight='600'>
                      EXAMPLE OF A RANDOM TITLE FOR THE BLOG POST TO INDICATE THE LAYOUT OF THIS ELEMENT. 
                      + {currNumber}
                    </Text>
                </HStack>
                )})}
              </VStack>
            </Flex>
          )
      }

      //To be deleted
      const monthsForManyAccordionItems = ['May 2021', 'April 2021', 'March 2021','February 2021','January 2021', 'December 2020', 'November 2020', 'October 2020'];
      
      const renderArchives = (months) => {
        return(
          <Flex flexDir='column' w='30rem'>
            <Box position='relative' top='12' h='5px' w='5rem' bgColor='#942DFE'/>
            <Text borderBottom='1px solid #4D4456' fontFamily="PressStart2PRegular" fontSize='20px' pb='1rem' marginBottom='2rem'>
              Archives
            </Text>
            <Accordion defaultIndex={[]} allowMultiple overflow='visible'>
              {months.map((month) => {
                return (
                  <AccordionItem borderBottom=' 1px dashed #4D4456' borderTop='none' w='50%' key={month}>
                    <h2>
                      <AccordionButton>
                        <AccordionIcon/>
                        <Box flex='1' textAlign='left'>
                          {month}
                        </Box>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                        This will be different for each month; must receive data to display accordingly.
                    </AccordionPanel>
                  </AccordionItem>
                )
              })}
            </Accordion>
          </Flex>
        )
      }
      
      const renderKeepInTouch = () => {
        return (
          <Flex flexDir='column' w='30rem'>
            <Box position='relative' top='12' h='5px' w='5rem' bgColor='#942DFE'/>
            <Text borderBottom='1px solid #4D4456' fontFamily="PressStart2PRegular" fontSize='20px' pb='1rem' marginBottom='2rem'>
              Keep In Touch
            </Text>
            <HStack spacing={10}  justify='center'>
              <Icon as={SiFacebook} boxSize='3rem' _hover={{cursor: 'pointer'}}/>
              <Icon as={AiFillTwitterCircle} boxSize='3.5rem' _hover={{cursor: 'pointer'}}/>
              <Icon as={FiInstagram} boxSize='3rem' _hover={{cursor: 'pointer'}}/>
              <Icon as={ImPinterest} boxSize='3.5rem' _hover={{cursor: 'pointer'}}/>
            </HStack>
          </Flex>
        )
      }

      //To be deleted
      const tempForPopular = ['1', '2', '3']

      const renderPopularItems = (temp) => {
        return (
          <Flex flexDir='column'>
            <Box position='relative' top='12' h='5px' w='5rem' bgColor='#942DFE'/>
            <Text borderBottom='1px solid #4D4456' fontFamily="PressStart2PRegular" fontSize='20px' pb='1rem' marginBottom='2rem'>
              Popular Posts
            </Text>
            <HStack spacing={20}  overflow='auto'  justifyContent='center' overflowX='hidden' w='90rem'>
              {temp.map((currNumber) => {
                return (
              <VStack spacing={5} align p='1rem' key={currNumber}>
                <Image src='images/blog/pacman.png' w='22rem' h='16rem'/>
                    <Text fontSize='16px' opacity='0.5' w='22rem'>
                        23 April 2021
                    </Text>
                    <Text fontSize='25px' fontWeight='700' w='22rem'>
                        EXAMPLE OF A RANDOM TITLE FOR THE BLOG POST TO INDICATE THE LAYOUT OF THIS ELEMENT. 
                        + {currNumber}
                    </Text>
                    <Button w='60%' border="1px solid #4D4456" borderRadius="30px" bg="linear-gradient(180deg, #FE852D 0%, #D16415 100%)" p="0.5rem 2rem" cursor="pointer" mr="1rem">
                         Read More
                    </Button>
                    <Icon as={TiChevronRight} position='relative' bottom='45' left='150' boxSize='1rem'/>
              </VStack>
              )})}
            </HStack>
          </Flex>
        )
      }

      return (
          <Flex flexDir='column' marginBottom='3rem' alignItems='center'>
              {renderBlogPanel()}
              <VStack spacing={5} marginTop='3rem' marginBottom='3rem'>
                <HStack spacing={20} align>
                      {renderLatestItems(tempIndexForLatestItems)}
                    <VStack align spacing={32}>
                      {renderRecentItems(tempIndexForRecentItems)}
                      {renderArchives(monthsForManyAccordionItems)}
                      {renderKeepInTouch()}
                    </VStack>
                </HStack>
                {renderPopularItems(tempForPopular)}
              </VStack>
          </Flex>
      )
  }
  
  export default Blog
  