import {
    Flex, 
    Box,
    Text,
    Image,
    SimpleGrid,
    Input,
  } from "@chakra-ui/core";
  
  const Market = () => {
    const discovers = ["discover1.png", "discover2.png", "discover3.png", "discover4.png", "discover5.png", "discover6.png"
                  , "discover7.png", "discover8.png", "discover9.png", "discover10.png", "discover11.png", "discover12.png"
                  , "discover1.png", "discover2.png", "discover3.png", "discover4.png", "discover5.png", "discover6.png"
                  , "discover7.png", "discover8.png", "discover9.png", "discover10.png", "discover11.png", "discover12.png"]

    const renderTitleContent = () => {
      return (
        <Flex
            w="100%"
            flexDirection="row"
            p="0"
            position="relative"
        >
            <Image src="/images/market/market.png" w="100%"/>
            <Text fontFamily="PressStart2PRegular" fontSize="40px" position="absolute"
                left="50%" top="50%" transform="translate(-50%, -50%)"
            >
              MARKET
            </Text>
        </Flex>
      );
    }

    const renderFilters = () => {
      return (
        <Flex
            w="100%"
            flexDirection="row"
            bg="#1E1A21"
            p="5rem 10px"
            position="relative"
            zIndex={1}
        >
          <Flex
              w="100%"
              maxW="70rem"
              flexDirection="column"
              margin="0 auto"
          >
            <Flex flexDirection="row" borderTop="1px solid #4D4456" borderBottom="1px solid #4D4456" p="1rem 0">
              <Flex border="1px solid #4D4456" borderRadius="30px" p="0.5rem 2rem" cursor="pointer" mr="1rem">
                <Text fontSize="16px">Art</Text>
              </Flex>
              <Flex border="1px solid #4D4456" borderRadius="30px" p="0.5rem 2rem" cursor="pointer" mr="1rem">
                <Text fontSize="16px">Photography</Text>
              </Flex>
              <Flex border="1px solid #4D4456" borderRadius="30px" p="0.5rem 2rem" cursor="pointer" mr="1rem">
                <Text fontSize="16px">Games</Text>
              </Flex>
              <Flex border="1px solid #4D4456" borderRadius="30px" p="0.5rem 2rem" cursor="pointer" mr="1rem">
                <Text fontSize="16px">Music</Text>
              </Flex>
              <Flex border="1px solid #4D4456" borderRadius="30px" p="0.5rem 2rem" cursor="pointer" mr="1rem">
                <Text fontSize="16px">Defi</Text>
              </Flex>
              <Flex bg="#651AB2" borderRadius="30px" p="0.5rem 2rem" cursor="pointer">
                <Text fontSize="16px">All</Text>
              </Flex>
              <Flex bg="#651AB2" borderRadius="30px" p="0.5rem 2rem" cursor="pointer" flexDirection="row" ml="auto">
                <Image src="/images/market/filter.svg" mr="0.5rem"/>
                <Text fontSize="16px">Filter</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      );
    }

    const renderItems = () => {
      return (
        <Flex
            w="100%"
            flexDirection="row"
            bg="#1E1A21"
            p="0 10px"
        >
          <Flex
              w="100%"
              maxW="70rem"
              flexDirection="column"
              margin="0 auto"
          >
            <Flex flexDirection="column">
              <SimpleGrid spacing="2rem" minChildWidth="15rem" w="100%">
                {discovers.map((item, index) => {
                  return (
                    <Box p="1rem 1.5rem" bg={index === 0 ? "#651AB2":"#26212A"} borderRadius="10px" border="1px solid #651AB2" key={index}>
                      <Image src={"/images/homepage/" + item}/>
                      <Flex flexDirection="row" mt="1rem" justifyContent="space-between">
                        <Box>
                          <Text fontSize="16px" fontWeight="500">Galaxian Traveller</Text>
                          <Text fontSize="12px">68.15 ETH</Text>
                        </Box>
                        <Box cursor="pointer" mt="0.5rem">
                          <Image src="/images/homepage/heart.svg"/>
                        </Box>
                      </Flex>
                      <Flex flexDirection="row" mt="0.5rem" justifyContent="space-between">
                        <Flex flexDirection="row">
                          <Image src="/images/homepage/artist1.png" w="1.5rem" h="1.5rem"/>
                          <Image src="/images/homepage/artist2.png" w="1.5rem" h="1.5rem" ml="-0.3rem"/>
                          <Image src="/images/homepage/artist3.png" w="1.5rem" h="1.5rem" ml="-0.3rem"/>
                        </Flex>
                        <Box cursor="pointer">
                          <Image src="/images/homepage/more.svg"/>
                        </Box>
                      </Flex>
                    </Box>
                  )
                })}
              </SimpleGrid>
              <Flex m="3rem 0 6rem 0" flexDirection="row" justifyContent="center">
                <Flex w="2rem" h="2rem" borderRadius="100%" border="1px solid #942DFE" cursor="pointer" mr="0.5rem">
                  <Image src="/images/market/left.svg" w="0.3rem" m="auto 0 auto auto"/>
                  <Image src="/images/market/left.svg" w="0.3rem" m="auto auto auto 0"/>
                </Flex>
                <Flex w="2rem" h="2rem" borderRadius="100%" border="1px solid #942DFE" cursor="pointer" mr="1.5rem">
                  <Image src="/images/market/left.svg" w="0.3rem" m="auto"/>
                </Flex>
                <Flex w="2rem" h="2rem" borderRadius="100%" bg="#942DFE" cursor="pointer">
                  <Text fontSize="14px" m="auto">1</Text>
                </Flex>
                <Flex w="2rem" h="2rem" borderRadius="100%" border="1px solid #942DFE" cursor="pointer" m="0 0.5rem">
                  <Text fontSize="14px" m="auto" color="#942DFE">2</Text>
                </Flex>
                <Flex w="2rem" h="2rem" borderRadius="100%" border="1px solid #942DFE" cursor="pointer">
                  <Text fontSize="14px" m="auto" color="#942DFE">3</Text>
                </Flex>
                <Flex w="2rem" h="2rem" borderRadius="100%" border="1px solid #942DFE" cursor="pointer" ml="1.5rem">
                  <Image src="/images/market/right.svg" w="0.3rem" m="auto"/>
                </Flex>
                <Flex w="2rem" h="2rem" borderRadius="100%" border="1px solid #942DFE" cursor="pointer" ml="0.5rem">
                  <Image src="/images/market/right.svg" w="0.3rem" m="auto 0 auto auto"/>
                  <Image src="/images/market/right.svg" w="0.3rem" m="auto auto auto 0"/>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      );
    }

    const renderSubscription = () => {
      return (
        <Flex
            w="100%"
            flexDirection="row"
            bg="#1E1A21"
            p="0 10px"
            m="7rem 0"
        >
          <Flex
              w="100%"
              maxW="70rem"
              flexDirection="row"
              justifyContent="space-between"
              margin="0 auto"
              position="relative"
              zIndex={1}
          >
            <Box w="48%">
              <Image src="/images/market/frame.png"/>
            </Box>
            <Box w="46%">
              <Text fontFamily="PressStart2PRegular" fontSize="30px"color="#9E00FF">
                Are you a digital creator?
              </Text>
              <Text m="2rem 0">
                Learn how MakersPlace helps you protect and sell your unique digital creations, and join our rapidly growing community of thousands of digital creators.
              </Text>
              <Flex border="1px solid #9E00FF" borderRadius="5px" mr="3rem">
                <Input border="none" placeholder="Enter your email" _focus={{}} _active={{}}></Input>
              </Flex>
              <Flex bg="#651AB2" borderRadius="5px" p="0.5rem 3rem" cursor="pointer" mr="3rem" mt="2rem">
                <Text fontWeight="500" fontSize="16px" textAlign="center" w="100%">Submit</Text>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      );
    }

    return (
      <Flex flexDirection="column">
          {renderTitleContent()}
          {renderFilters()}
          {renderItems()}
          {renderSubscription()}
      </Flex>
    )
  };
  
  export default Market;
  