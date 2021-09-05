import { Flex, Box, Text, Image, SimpleGrid, Input } from "@chakra-ui/core";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Particles from "react-particles-js";

const Home = () => {
  const features = ["features1.png", "features2.png", "features3.png"];
  const artists = [
    "artist1.png",
    "artist2.png",
    "artist3.png",
    "artist4.png",
    "artist5.png",
    "artist6.png",
    "artist7.png",
    "artist8.png",
  ];
  const collections = [
    "collection1.png",
    "collection2.png",
    "collection3.png",
    "collection4.png",
  ];
  const discovers = [
    "discover1.png",
    "discover2.png",
    "discover3.png",
    "discover4.png",
    "discover5.png",
    "discover6.png",
    "discover7.png",
    "discover8.png",
    "discover9.png",
    "discover10.png",
    "discover11.png",
    "discover12.png",
  ];
  const faqs = [
    {
      question: "What are NFTs or Non-Fungible Tokens?",
      answer: `NFT’s are unique in nature in
     which all NFT’s can be verified on a blockchain, NFT’s can offer permanent
      information where it stores it all on the tokens. This can range from text
      , image, music, signature, or anything else. It offers us incredible programming
       capabilities since the NFT is a piece of code on a blockchain, bulti-in royalties
        can be incorporated allowing artists to collect revenue. NFT offer individual 
        digital ownership where the NFT itself resides in the digital wallets of the individual,
         thus one has complete ownership. Being built on networks such as Etheruem, this grants 
         permissionless NFT where they can be programmed to have various qualities.`,
    },
    {
      question: "How Nonfiggybles work?",
      answer: `NonFiggybles is both a marketplace for assets as well as a distributed network built on Conflux Network which enables their trade without a middleman.`,
    },
    {
      question: "How can i connect a wallet with Nonfiggybles?",
      answer: `Button on the top right of the browser “ connect wallet “ ( Conflux Wallet ) `,
    },
    {
      question: "Can i change the price of an already created Collectible?",
      answer: `Yes, you can lower the price-free of transaction costs at any time. You just need to sign the signature request via your wallet.
    `,
    },
  ];
  const renderTitleContent = () => {
    return (
      <Flex
        w="100%"
        flexDirection="row"
        bg="#121212"
        p="0 10px"
        position="relative"
      >
        <Box
          position="absolute"
          w="calc(100% - 10px)"
          zIndex={0}
          color="#8734DD"
        >
          <Particles
            params={{
              particles: {
                number: {
                  value: 160,
                  density: {
                    enable: false,
                  },
                },
                color: {
                  value: "#8734DD",
                },
                size: {
                  value: 5,
                  random: true,
                  anim: {
                    speed: 4,
                    size_min: 0.3,
                  },
                },
                line_linked: {
                  enable: false,
                },
                move: {
                  random: true,
                  speed: 1,
                  direction: "top",
                  out_mode: "out",
                },
              },
              interactivity: {
                modes: {
                  bubble: {
                    distance: 250,
                    duration: 2,
                    size: 0,
                    opacity: 0,
                  },
                  repulse: {
                    distance: 400,
                    duration: 4,
                  },
                },
              },
            }}
          />
        </Box>
        <Flex
          w="100%"
          maxW="70rem"
          flexDirection="column"
          margin="0 auto"
          position="relative"
          zIndex={1}
        >
          <Flex flexDirection="column" p="8rem 0">
            <Text
              fontFamily="PressStart2PRegular"
              fontSize="60px"
              textAlign="center"
              color="#9E00FF"
            >
              NON FIGGYBLE
            </Text>
            <Text
              fontFamily="PressStart2PRegular"
              fontSize="60px"
              textAlign="center"
              color="#9E00FF"
            >
              NFT MARKETPLACE
            </Text>
            <Text textAlign="center" fontSize="30px">
              Create, sell or collect digital items secured with blockchain
            </Text>
            <Flex flexDirection="row" justifyContent="center" mt="2rem">
              <Flex
                border="1px solid #942DFE"
                borderRadius="30px"
                p=" 0.5rem 1.5rem"
                cursor="pointer"
                mr="2rem"
              >
                <Text fontWeight="500" fontSize="16px">
                  Explore us
                </Text>
              </Flex>
              <Flex
                border="1px solid #942DFE"
                borderRadius="30px"
                p=" 0.5rem 1.5rem"
                cursor="pointer"
              >
                <Text fontWeight="500" fontSize="16px">
                  Create
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    );
  };

  const renderFeatureItems = () => {
    return (
      <Flex
        w="100%"
        flexDirection="row"
        bg="#1E1A21"
        p="0 10px"
        position="relative"
        zIndex={1}
      >
        <Flex w="100%" maxW="70rem" flexDirection="column" margin="0 auto">
          <Flex flexDirection="column" p="3rem 0">
            <Text fontFamily="PressStart2PRegular" fontSize="20px" mb="1rem">
              Feature Items
            </Text>
            <Box w="100%" h="1px" bg="#4d4456" mb="3rem">
              <Box
                w="10%"
                h="3px"
                bg="#942DFE"
                borderRadius="3px"
                mt="-1px"
              ></Box>
            </Box>
            <SimpleGrid spacing="2rem" minChildWidth="20rem" w="100%">
              {features.map((item, key) => {
                return (
                  <Box key={key}>
                    <Flex flexDirection="column" position="relative">
                      <Image src={"/images/homepage/" + item} />
                      <Text
                        position="absolute"
                        bottom="3.5rem"
                        left="1rem"
                        fontWeight="600"
                      >
                        Take My Muffin
                      </Text>
                      <Text
                        position="absolute"
                        bottom="2rem"
                        left="1rem"
                        fontSize="12px"
                        color="#716B78"
                      >
                        ERC - 123
                      </Text>
                    </Flex>
                  </Box>
                );
              })}
            </SimpleGrid>
          </Flex>
        </Flex>
      </Flex>
    );
  };

  const renderTopArtist = () => {
    return (
      <Flex w="100%" flexDirection="row" bg="#1E1A21" p="0 10px">
        <Flex w="100%" maxW="70rem" flexDirection="column" margin="0 auto">
          <Flex flexDirection="column" p="3rem 0">
            <Text fontFamily="PressStart2PRegular" fontSize="20px" mb="1rem">
              Top Artist
            </Text>
            <Box w="100%" h="1px" bg="#4d4456" mb="3rem">
              <Box
                w="5%"
                h="3px"
                bg="#942DFE"
                borderRadius="3px"
                mt="-1px"
              ></Box>
            </Box>
            <SimpleGrid spacing="2rem" minChildWidth="15rem" w="100%">
              {artists.map((item, key) => {
                return (
                  <Flex key={key} flexDirection="row">
                    <Flex flexDirection="column" position="relative">
                      <Image src={"/images/homepage/" + item} />
                      <Image
                        src="/images/homepage/check.svg"
                        w="1rem"
                        position="absolute"
                        right="-0.4rem"
                        top="55%"
                      />
                    </Flex>
                    <Flex flexDirection="column" m="auto 0 auto 1rem">
                      <Text fontWeight="600">Take My Muffin</Text>
                      <Text fontSize="14px" color="#716B78">
                        10 ETH
                      </Text>
                    </Flex>
                  </Flex>
                );
              })}
            </SimpleGrid>
          </Flex>
        </Flex>
      </Flex>
    );
  };

  const renderTopCollections = () => {
    return (
      <Flex w="100%" flexDirection="row" bg="#1E1A21">
        <Flex w="100%" maxW="77rem" flexDirection="row" margin="0 auto">
          <Flex flexDirection="row" w="100%">
            <Flex w="2.5rem" m="auto 1rem auto 0">
              <Flex
                w="2.5rem"
                h="2.5rem"
                border="1px solid #C2C8D6"
                borderRadius="100%"
                cursor="pointer"
                mt="3rem"
              >
                <ChevronLeftIcon fontSize="30px" margin="auto" />
              </Flex>
            </Flex>
            <Flex flexDirection="column" p="3rem 0" maxW="70rem" w="100%">
              <Text fontFamily="PressStart2PRegular" fontSize="20px" mb="1rem">
                Top Collections
              </Text>
              <Box w="100%" h="1px" bg="#4d4456" mb="3rem">
                <Box
                  w="5%"
                  h="3px"
                  bg="#942DFE"
                  borderRadius="3px"
                  mt="-1px"
                ></Box>
              </Box>
              <SimpleGrid spacing="2rem" minChildWidth="15rem" w="100%">
                {collections.map((item, key) => {
                  return (
                    <Box key={key}>
                      <Image src={"/images/homepage/" + item} />
                      <Flex flexDirection="row" mt="1rem">
                        <Flex
                          flexDirection="column"
                          position="relative"
                          m="auto 0"
                        >
                          <Image
                            src={"/images/homepage/artist.png"}
                            w="2rem"
                            h="2rem"
                          />
                          <Image
                            src="/images/homepage/check.svg"
                            w="0.6rem"
                            position="absolute"
                            right="-0.2rem"
                            top="35%"
                          />
                        </Flex>
                        <Flex flexDirection="column" ml="1rem">
                          <Text fontWeight="600">Take My Muffin</Text>
                          <Text fontSize="12px" color="#716B78">
                            ERC - 123
                          </Text>
                        </Flex>
                      </Flex>
                    </Box>
                  );
                })}
              </SimpleGrid>
            </Flex>
            <Flex w="2.5rem" m="auto 0 auto 1rem">
              <Flex
                w="2.5rem"
                h="2.5rem"
                bg="#942DFE"
                borderRadius="100%"
                cursor="pointer"
                mt="3rem"
              >
                <ChevronRightIcon fontSize="30px" margin="auto" />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    );
  };

  const renderDiscover = () => {
    return (
      <Flex w="100%" flexDirection="row" bg="#1E1A21" p="0 10px">
        <Flex w="100%" maxW="70rem" flexDirection="column" margin="0 auto">
          <Flex flexDirection="column" p="3rem 0">
            <Text fontFamily="PressStart2PRegular" fontSize="20px" mb="1rem">
              Discover
            </Text>
            <Box w="100%" h="1px" bg="#4d4456" mb="3rem">
              <Box
                w="5%"
                h="3px"
                bg="#942DFE"
                borderRadius="3px"
                mt="-1px"
              ></Box>
            </Box>
            <Flex flexDirection="row" justifyContent="center">
              <Flex
                border="1px solid #4D4456"
                borderRadius="30px"
                p=" 0.5rem 1.5rem"
                cursor="pointer"
                mr="1rem"
              >
                <Text fontWeight="500" fontSize="16px">
                  Art
                </Text>
              </Flex>
              <Flex
                border="1px solid #4D4456"
                borderRadius="30px"
                p=" 0.5rem 1.5rem"
                cursor="pointer"
                mr="1rem"
              >
                <Text fontWeight="500" fontSize="16px">
                  Photography
                </Text>
              </Flex>
              <Flex
                border="1px solid #4D4456"
                borderRadius="30px"
                p=" 0.5rem 1.5rem"
                cursor="pointer"
                mr="1rem"
              >
                <Text fontWeight="500" fontSize="16px">
                  Games
                </Text>
              </Flex>
              <Flex
                border="1px solid #4D4456"
                borderRadius="30px"
                p=" 0.5rem 1.5rem"
                cursor="pointer"
                mr="1rem"
              >
                <Text fontWeight="500" fontSize="16px">
                  Music
                </Text>
              </Flex>
              <Flex
                border="1px solid #4D4456"
                borderRadius="30px"
                p=" 0.5rem 1.5rem"
                cursor="pointer"
                mr="1rem"
              >
                <Text fontWeight="500" fontSize="16px">
                  Defi
                </Text>
              </Flex>
              <Flex
                bg="#651AB2"
                borderRadius="30px"
                p=" 0.5rem 1.5rem"
                cursor="pointer"
                mr="1rem"
              >
                <Text fontWeight="500" fontSize="16px">
                  All
                </Text>
              </Flex>
            </Flex>
            <SimpleGrid spacing="2rem" minChildWidth="15rem" w="100%" mt="3rem">
              {discovers.map((item, index) => {
                return (
                  <Box
                    p="1rem 1.5rem"
                    bg={index === 0 ? "#651AB2" : "#26212A"}
                    borderRadius="10px"
                    border="1px solid #651AB2"
                    key={index}
                  >
                    <Image src={"/images/homepage/" + item} />
                    <Flex
                      flexDirection="row"
                      mt="1rem"
                      justifyContent="space-between"
                    >
                      <Box>
                        <Text fontSize="16px" fontWeight="500">
                          Galaxian Traveller
                        </Text>
                        <Text fontSize="12px">68.15 ETH</Text>
                      </Box>
                      <Box cursor="pointer" mt="0.5rem">
                        <Image src="/images/homepage/heart.svg" />
                      </Box>
                    </Flex>
                    <Flex
                      flexDirection="row"
                      mt="0.5rem"
                      justifyContent="space-between"
                    >
                      <Flex flexDirection="row">
                        <Image
                          src="/images/homepage/artist1.png"
                          w="1.5rem"
                          h="1.5rem"
                        />
                        <Image
                          src="/images/homepage/artist2.png"
                          w="1.5rem"
                          h="1.5rem"
                          ml="-0.3rem"
                        />
                        <Image
                          src="/images/homepage/artist3.png"
                          w="1.5rem"
                          h="1.5rem"
                          ml="-0.3rem"
                        />
                      </Flex>
                      <Box cursor="pointer">
                        <Image src="/images/homepage/more.svg" />
                      </Box>
                    </Flex>
                  </Box>
                );
              })}
            </SimpleGrid>
            <Flex m="3rem 0 5rem 0">
              <Flex
                bg="#651AB2"
                borderRadius="30px"
                p="0.5rem 3rem"
                cursor="pointer"
                m="0 auto"
              >
                <Text fontWeight="500" fontSize="16px">
                  View more
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    );
  };

  const renderFAQ = () => {
    return (
      <Flex
        w="100%"
        flexDirection="row"
        bg="#1E1A21"
        p="0 10px"
        mb="7rem"
        position="relative"
      >
        <Box
          position="absolute"
          w="calc(100% - 10px)"
          zIndex={0}
          color="#8734DD"
        >
          <Particles
            params={{
              particles: {
                number: {
                  value: 160,
                  density: {
                    enable: false,
                  },
                },
                color: {
                  value: "#8734DD",
                },
                size: {
                  value: 5,
                  random: true,
                  anim: {
                    speed: 4,
                    size_min: 0.3,
                  },
                },
                line_linked: {
                  enable: false,
                },
                move: {
                  random: true,
                  speed: 1,
                  direction: "top",
                  out_mode: "out",
                },
              },
              interactivity: {
                modes: {
                  bubble: {
                    distance: 250,
                    duration: 2,
                    size: 0,
                    opacity: 0,
                  },
                  repulse: {
                    distance: 400,
                    duration: 4,
                  },
                },
              },
            }}
          />
        </Box>
        <Flex
          w="100%"
          maxW="70rem"
          flexDirection="row"
          justifyContent="space-between"
          margin="0 auto"
          position="relative"
          zIndex={1}
        >
          <Box w="45%">
            <Text fontFamily="PressStart2PRegular" fontSize="20px" mb="1rem">
              FAQ
            </Text>
            <Box w="100%" h="1px" bg="#4d4456" mb="3rem">
              <Box
                w="15%"
                h="3px"
                bg="#942DFE"
                borderRadius="3px"
                mt="-1px"
              ></Box>
            </Box>
            {faqs.map((item, index) => {
              return (
                <Box mb="1rem" key={index}>
                  <Flex flexDirection="row" p="1rem 1.5rem" bg="#26212A">
                    <Flex
                      p="0.5rem"
                      bg="#942DFE"
                      cursor="pointer"
                      maxH="31px"
                      m="auto 0"
                    >
                      <Image src="/images/homepage/plus.svg" />
                    </Flex>
                    <Text
                      m="auto 0 auto 1.5rem"
                      fontSize="18px"
                      fontWeight="600"
                    >
                      {item.question}
                    </Text>
                  </Flex>

                  <Flex
                    flexDirection="row"
                    p="1rem 1.5rem"
                    bg="#26212A"
                    mt="1rem"
                  >
                    <Text fontSize="16px">{item.answer}</Text>
                  </Flex>
                </Box>
              );
            })}
          </Box>
          <Box w="46%" mt="4rem">
            <Text
              fontFamily="PressStart2PRegular"
              fontSize="30px"
              color="#9E00FF"
            >
              Are you a digital creator?
            </Text>
            <Text m="2rem 0">
              Leave your email here and we will contact you if you are
              interested in becoming part of the marketplace.
            </Text>
            <Flex border="1px solid #9E00FF" borderRadius="5px" mr="3rem">
              <Input
                border="none"
                placeholder="Enter your email"
                _focus={{}}
                _active={{}}
              ></Input>
            </Flex>
            <Flex
              bg="#651AB2"
              borderRadius="5px"
              p="0.5rem 3rem"
              cursor="pointer"
              mr="3rem"
              mt="2rem"
            >
              <Text
                fontWeight="500"
                fontSize="16px"
                textAlign="center"
                w="100%"
              >
                Submit
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    );
  };

  return (
    <Flex flexDirection="column">
      {renderTitleContent()}
      {renderFeatureItems()}
      {renderTopArtist()}
      {renderTopCollections()}
      {renderDiscover()}
      {renderFAQ()}
    </Flex>
  );
};

export default Home;
