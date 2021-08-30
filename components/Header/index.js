import {
    Flex,
    Link,
    Text,
    Box,
    Input,
    Image
} from "@chakra-ui/core";

const Header = () => {
    return (
        <Flex
            p="10px"
            w="100%"
            flexDirection="row"
            borderBottom="1px solid #62269F"
            bg="#161616"
            position="sticky"
            zIndex={10}
            top="0"
        >
            <Flex
                w="100%"
                maxW="70rem"
                flexDirection="column"
                margin="0 auto"
            >
                <Flex w="100%">
                    <Link m="auto 0" href="/" _active={{}} _focus={{}}>
                        <Image src="/images/header/logo.svg" w="4rem"/>
                    </Link>
                    <Box h="3rem" m="auto 0">
                        <Flex
                            bg="#0f0d11"
                            p="0.3rem 1rem"
                            borderRadius="30px"
                            ml="2rem"
                            flexDirection="row"
                            h="100%"
                            w="20rem"
                        >
                            <Input border="none" placeholder="Search NFT here" _focus={{}} _active={{}}></Input>
                            <Image src="/images/header/search.svg" w="1rem"/>
                        </Flex>
                    </Box>
                    <Flex flexDirection="row" m="auto 0 auto auto">
                        <Link m="auto 0" _active={{}} _focus={{}}>
                            <Text mr="1.5rem" fontWeight="600" fontSize="14px">About</Text>
                        </Link>
                        <Link m="auto 0" href="/market" _active={{}} _focus={{}}>
                            <Text mr="1.5rem" fontWeight="600" fontSize="14px">Market</Text>
                        </Link>
                        <Link m="auto 0" _active={{}} _focus={{}}>
                            <Text mr="1.5rem" fontWeight="600" fontSize="14px">Discover</Text>
                        </Link>
                        <Link m="auto 0" href='activity' _active={{}} _focus={{}}>
                            <Text mr="1.5rem" fontWeight="600" fontSize="14px">Activity</Text>
                        </Link>
                        <Link m="auto 0" href='blog' _active={{}} _focus={{}}>
                            <Text mr="1.5rem" fontWeight="600" fontSize="14px">Blog</Text>
                        </Link>
                        <Link m="auto 0" _active={{}} _focus={{}} href="/vaults" >
                            <Text mr="1.5rem" fontWeight="600" fontSize="14px">Vaults</Text>
                        </Link>
                        <Link href="create">
                            <Flex
                                bg="linear-gradient(180deg, #942DFE 0%, #5A189C 100%)"
                                p="0.5rem 1.5rem"
                                borderRadius="30px"
                                cursor="pointer"
                            >
                                <Text fontWeight="500" fontSize="14px">Create</Text>
                            </Flex>
                        </Link>                        
                        <Link _hover={{}} href="connect" _active={{}} _focus={{}}>
                            <Flex
                                border="1px solid white"
                                p="0.5rem 1.5rem"
                                borderRadius="30px"
                                cursor="pointer"
                                ml="1.5rem"
                            >
                                <Text fontWeight="500" fontSize="14px">Connect wallet</Text>
                            </Flex>
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Header;