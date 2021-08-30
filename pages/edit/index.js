import {
    Flex,
    Box,
    Text,
    Image,
    SimpleGrid,
    Input,
    Link,
} from "@chakra-ui/core";
  
const Edit = () => {
    const renderTitleContent = () => {
        return (
            <Flex
                w="100%"
                flexDirection="column"
                p="5rem 0"
                borderBottom="1px solid #651AB2"
                bg="#1E1A21"
            >
                <Text fontFamily="PressStart2PRegular" fontSize="40px" textAlign="center">
                    Edit Profile
                </Text>
                <Text textAlign="center" m="1rem">You can set preferred display name, create your branded profile <br/> URL and manage other personal settings</Text>
            </Flex>
        );
    }

    const renderForm = () => {
        return (
            <Flex
                w="100%"
                flexDirection="column"
                p="7rem 0"
                bg="#1E1A21"
            >
                <Flex
                    w="100%"
                    maxW="70rem"
                    flexDirection="column"
                    margin="0 auto"
                    p="0 10px"
                >
                    <Flex m="0 auto" flexDirection="column">
                        <Image src="/images/edit/avatar.png" w="5rem" border="2px solid white" borderRadius="100%" m="0 auto"/>
                        <Text fontSize="14px" m="2rem 0" textAlign="center">We recommend an image of at lest 400x400.<br/> Gifs work too.</Text>
                        <Flex border="1px solid #942DFE" borderRadius="30px" p="0.5rem 1.5rem" cursor="pointer" m="0 auto">
                            <Text fontWeight="500" fontSize="16px">Upload profile picture</Text>
                        </Flex>
                    </Flex>
                    <Flex m="0 auto" flexDirection="column" mt="5rem">
                        <Text fontSize="18px" fontWeight="600">Display Name</Text>
                        <Input border="none" placeholder="Enter your display name" _focus={{}} _active={{}} mb="2rem"
                            borderBottom="1px solid #8E8C90" borderRadius="0" w="30rem" p="0" fontSize="14px"></Input>
                        <Text fontSize="18px" fontWeight="600">Custom URL</Text>
                        <Input border="none" placeholder="Enter your custom URL" _focus={{}} _active={{}} mb="2rem"
                            borderBottom="1px solid #8E8C90" borderRadius="0" w="30rem" p="0" fontSize="14px"></Input>
                        <Text fontSize="18px" fontWeight="600">Bio</Text>
                        <Input border="none" placeholder="Tell about yourself in a few words" _focus={{}} _active={{}} mb="2rem"
                            borderBottom="1px solid #8E8C90" borderRadius="0" w="30rem" p="0" fontSize="14px"></Input>
                        <Text fontSize="18px" fontWeight="600">Twitter Username</Text>
                        <Input border="none" placeholder="Link your Twitter account to gain more trust on the marketplace" _focus={{}} _active={{}} mb="2rem"
                            borderBottom="1px solid #8E8C90" borderRadius="0" w="30rem" p="0" fontSize="14px"></Input>
                        <Text fontSize="18px" fontWeight="600">Personal Site or Portfolio</Text>
                        <Input border="none" placeholder="Https://" _focus={{}} _active={{}} mb="2rem"
                            borderBottom="1px solid #8E8C90" borderRadius="0" w="30rem" p="0" fontSize="14px"></Input>
                        <Text fontSize="18px" fontWeight="600">Email</Text>
                        <Input border="none" placeholder="Your email for marketplace notification" _focus={{}} _active={{}} mb="1rem"
                            borderBottom="1px solid #8E8C90" borderRadius="0" w="30rem" p="0" fontSize="14px"></Input>
                        <Flex flexDirection="row" mb="3rem">
                            <Text fontSize="13px">You must sign message to view or manage your email. </Text>
                            <Text fontSize="13px" ml="0.5rem" color="#9E00FF">sign message</Text>
                        </Flex>
                        <Text fontSize="18px" fontWeight="600">Verificataion</Text>
                        <Text fontSize="14px" maxW="27rem" m="1rem 0" opacity="0.3">Procceed with verification  proccess to get more visibility and gain trust on Non Fuggybles Marketplace. Please allow up to several weeks for the process.</Text>
                        <Flex border="1px solid #942DFE" borderRadius="30px" p="0.5rem 1.5rem" cursor="pointer" mr="auto" >
                            <Text fontWeight="500" fontSize="16px">Get verified</Text>
                        </Flex>
                        <Flex bg=" linear-gradient(180deg, #942DFE 0%, #5A189C 100%);" borderRadius="30px" p="0.5rem 1.5rem" cursor="pointer" m="3rem 1rem 0 1rem">
                            <Text fontWeight="500" fontSize="16px" w="100%" textAlign="center">Update profile</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        );
    }

    return (
      <Flex flexDirection="column">
          {renderTitleContent()}
          {renderForm()}
      </Flex>
    )
  };
  
  export default Edit;
  