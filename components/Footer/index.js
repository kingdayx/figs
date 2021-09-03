import { Flex, Link, Text, Box, Input, Image } from "@chakra-ui/core";

const Footer = () => {
  return (
    <Flex
      p="10px"
      w="100%"
      flexDirection="row"
      bg="#141216"
      position="relative"
      zIndex={1}
    >
      <Flex
        w="100%"
        maxW="70rem"
        flexDirection="column"
        margin="0 auto"
        pt="3rem"
      >
        <Flex w="100%" flexDirection="row">
          <Flex flexDirection="column" mr="10rem">
            <Image src="/images/header/logo.svg" w="7rem" mb="2rem" />
            <Text color="#942DFE" fontWeight="600" fontSize="20px" mb="1rem">
              About NonFiggybles
            </Text>
            <Text fontSize="16px" maxW="20rem">
              NonFiggybles is software allowing digital artists and creators to
              issue and sell custom crypto assets that represent ownership in
              their digital work.
            </Text>
            <Text fontSize="16px" maxW="20rem">
              NFT’s are unique in nature in which all NFT’s can be verified on a
              blockchain, NFT’s can offer permanent information where it stores
              it all on the tokens. This can range from text, image, music,
              signature, or anything else. It offers us incredible programming
              capabilities since the NFT is a piece of code on a blockchain,
              bulti-in royalties can be incorporated allowing artists to collect
              revenue. NFT offer individual digital ownership where the NFT
              itself resides in the digital wallets of the individual, thus one
              has complete ownership. Being built on networks such as Etheruem,
              this grants permissionless NFT where they can be programmed to
              have various qualities.
            </Text>
            <Flex flexDirection="row" mt="3rem">
              <Box cursor="pointer" mr="1rem">
                <Image src="/images/footer/facebook.svg" />
              </Box>
              <Box cursor="pointer" mr="1rem">
                <Image src="/images/footer/twitter.svg" />
              </Box>
              <Box cursor="pointer" mr="1rem">
                <Image src="/images/footer/linkedin.svg" />
              </Box>
              <Box cursor="pointer" mr="1rem">
                <Image src="/images/footer/instagram.svg" />
              </Box>
            </Flex>
          </Flex>
          <Flex flexDirection="column" mr="5rem">
            <Text fontWeight="600" mb="1rem" fontSize="18px">
              My account
            </Text>
            <Link>
              <Text fontWeight="400">My item</Text>
            </Link>
            <Link>
              <Text fontWeight="400">My activity</Text>
            </Link>
            <Link>
              <Text fontWeight="400">My offers</Text>
            </Link>
            <Link>
              <Text fontWeight="400">My referrals</Text>
            </Link>
            <Link>
              <Text fontWeight="400">Gift item</Text>
            </Link>
          </Flex>
          <Flex flexDirection="column" mr="5rem">
            <Text fontWeight="600" mb="1rem" fontSize="18px">
              Market place
            </Text>
            <Link>
              <Text fontWeight="400">Discover</Text>
            </Link>
            <Link>
              <Text fontWeight="400">Ranking</Text>
            </Link>
            <Link>
              <Text fontWeight="400">Recently sold</Text>
            </Link>
            <Link>
              <Text fontWeight="400">Biggest sales</Text>
            </Link>
            <Link>
              <Text fontWeight="400">Ending soon</Text>
            </Link>
          </Flex>
          <Flex flexDirection="column">
            <Text fontWeight="600" mb="1rem" fontSize="18px">
              Company
            </Text>
            <Link>
              <Text fontWeight="400">About</Text>
            </Link>
            <Link>
              <Text fontWeight="400">Suggestion</Text>
            </Link>
            <Link>
              <Text fontWeight="400">Join with us</Text>
            </Link>
            <Link>
              <Text fontWeight="400">Developers</Text>
            </Link>
            <Link>
              <Text fontWeight="400">FAQ</Text>
            </Link>
          </Flex>
        </Flex>
        <Text fontSize="12px" textAlign="center" m="1rem 0">
          © nonfiggybles.com - All Rights Reserved
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
