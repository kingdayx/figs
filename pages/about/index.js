import { Flex, Box, Text, Image, SimpleGrid, Input } from "@chakra-ui/core";

const About = () => {
  return (
    <Flex
      w="100%"
      flexDirection="column"
      fontFamily="Fugaz One"
      p="0 1rem 3rem 1rem"
    >
      <Box p="0 3rem">
        <Text
          textAlign="center"
          fontSize="56px"
          lineHeight="104px"
          mt="50px"
          bg="linear-gradient(to right, #9E00FF , #F10939)"
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Non Figgybles
        </Text>
        <Text
          textAlign="center"
          fontSize="56px"
          lineHeight="104px"
          m="140px 0"
          bg="linear-gradient(to right, #9E00FF , #C418A5)"
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          NFT Market Place
        </Text>
        <Box
          bg="linear-gradient(to right, #9E00FF , #F10939)"
          w="60px"
          h="60px"
          borderRadius="100%"
          p="2px"
          cursor="pointer"
        >
          <Flex bg="#161616" w="56px" h="56px" borderRadius="100%">
            <Image src="/images/down.svg" m="auto" />
          </Flex>
        </Box>
        <Flex flexDirection="row">
          <Text color="#fff" fontSize="30px" mt="7rem">
            0 GAS NFT MARKET PLACE
          </Text>
          <Text color="#fff" w="44%" fontSize="64px" ml="auto">
            Create, sell or collect digital items secured with blockchain
          </Text>
        </Flex>
        <Text
          fontSize="58px"
          lineHeight="104px"
          m="5rem 0 14rem 0"
          bg="linear-gradient(122.04deg, #00A3FF 0%, #9E00FF 50%)"
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Feature Artist
        </Text>
        <Box w="100%" h="30rem" bg="#C4C4C4"></Box>
      </Box>
      <Flex flexDirection="row" mt="20rem" mb="5rem">
        <Text
          fontSize="30px"
          bg="linear-gradient(110.42deg, #9E00FF 0%, #F10939 100%)"
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          mr="3rem"
          cursor="pointer"
          userSelect="none"
        >
          Top Artist
        </Text>
        <Text
          fontSize="30px"
          color="#4d4d4d"
          mr="3rem"
          cursor="pointer"
          userSelect="none"
        >
          Top Artist
        </Text>
        <Text
          fontSize="30px"
          color="#4d4d4d"
          mr="3rem"
          cursor="pointer"
          userSelect="none"
        >
          Largest Collection
        </Text>
      </Flex>
      <Box p="0 3rem">
        <Flex flexDirection="row">
          <SimpleGrid spacing="2rem" w="100%" minChildWidth="250px">
            <Box
              w="100%"
              h="300px"
              bg="#1c1c1c"
              boxShadow="5px 5px 20px rgba(0, 0, 0, 0.2), -5px -5px 20px rgba(0, 0, 0, 0.2)"
              borderRadius="15px"
            />
            <Box
              w="100%"
              h="300px"
              bg="#1c1c1c"
              boxShadow="5px 5px 20px rgba(0, 0, 0, 0.2), -5px -5px 20px rgba(0, 0, 0, 0.2)"
              borderRadius="15px"
            />
            <Box
              w="100%"
              h="300px"
              bg="#1c1c1c"
              boxShadow="5px 5px 20px rgba(0, 0, 0, 0.2), -5px -5px 20px rgba(0, 0, 0, 0.2)"
              borderRadius="15px"
            />
          </SimpleGrid>
        </Flex>
        <Flex flexDirection="row" m="20rem 0 16rem 0">
          <Image src="/images/conflux.svg" mr="6rem" />
          <Image src="/images/superrare.svg" />
        </Flex>
        <Text
          fontSize="50px"
          bg="linear-gradient(93.21deg, #00A3FF 0%, #9E00FF 12%)"
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          mr="3rem"
          cursor="pointer"
          userSelect="none"
        >
          FAQ
        </Text>
      </Box>
      <Flex flexDirection="row" m="3rem 0">
        <Box
          w="50%"
          p="2rem 2rem"
          boxShadow="5px 5px 20px rgba(0, 0, 0, 0.2), -5px -5px 20px rgba(0, 0, 0, 0.2)"
          borderRadius="16px"
          bg="#1c1c1c"
        >
          <Text fontSize="28px" m="1rem 0 2rem 0">
            Whats are NFTS?
          </Text>
          <Text fontSize="16px" maxW="20rem">
            NFT’s are unique in nature in which all NFT’s can be verified on a
            blockchain, NFT’s can offer permanent information where it stores it
            all on the tokens. This can range from text, image, music,
            signature, or anything else. It offers us incredible programming
            capabilities since the NFT is a piece of code on a blockchain,
            bulti-in royalties can be incorporated allowing artists to collect
            revenue. NFT offer individual digital ownership where the NFT itself
            resides in the digital wallets of the individual, thus one has
            complete ownership. Being built on networks such as Etheruem, this
            grants permissionless NFT where they can be programmed to have
            various qualities.
          </Text>
          <Text fontSize="28px" m="1rem 0 2rem 0">
            How does NonFiggybles work?
          </Text>
          <Text fontSize="16px" maxW="20rem">
            NonFiggybles is both a marketplace for assets as well as a
            distributed network built on Conflux Network which enables their
            trade without a middleman.
          </Text>
          <Text fontSize="28px" m="1rem 0 2rem 0">
            Can I change the price of an already created Collectible?
          </Text>
          <Text fontSize="16px" maxW="20rem">
            Yes, you can lower the price-free of transaction costs at any time.
            You just need to sign the signature request via your wallet.
          </Text>
          <Text fontSize="28px" m="1rem 0 2rem 0">
            How can I connect my wallet to NonFiggybles?
          </Text>
          <Text fontSize="16px" maxW="20rem">
            Button on the top right of the browser “ connect wallet “ ( Conflux
            Wallet )
          </Text>
          <Text fontSize="28px" m="1rem 0 2rem 0" mb="7rem">
            Are you a digital creator?
          </Text>
          <Text fontSize="16px" maxW="20rem">
            Leave your email here and we will contact you if you are interested
            in becoming part of the marketplace.
          </Text>
        </Box>
        <Box w="50%" pl="6rem" pt="3rem">
          <Flex flexDirection="row">
            <Text
              fontSize="26px"
              bg="linear-gradient(110.42deg, #9E00FF 0%, #F10939 100%)"
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              m="auto 3rem auto 0"
              cursor="pointer"
              userSelect="none"
            >
              Join us
            </Text>
            <Box
              bg="linear-gradient(110.42deg, #9E00FF 0%, #F10939 100%)"
              p="2px"
              w="8rem"
              borderRadius="30px"
              cursor="pointer"
              userSelect="none"
            >
              <Flex bg="#161616" borderRadius="30px" height="100%">
                <Text
                  fontSize="14px"
                  m="auto"
                  fontFamily="Source Sans Pro"
                  fontWeight="600"
                >
                  Join Us
                </Text>
              </Flex>
            </Box>
          </Flex>
          <Text
            fontSize="22px"
            fontFamily="Source Sans Pro"
            fontWeight="400"
            m="2rem 0 1rem 0"
          >
            Contact us to keep track of weekly news and growth{" "}
          </Text>
          <Flex flexDirection="row" justifyContent="space-between" p="0">
            <Input
              placeholder="Enter your email address"
              fontFamily="Source Sans Pro"
              border="none"
              _focus={{}}
              _active={{}}
            />
            <Image src="/images/right.svg" />
          </Flex>
          <Box
            bg="linear-gradient(110.42deg, #9E00FF 0%, #F10939 100%)"
            w="100%"
            h="2px"
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default About;
