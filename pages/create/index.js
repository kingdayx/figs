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
    InputRightElement
  } from "@chakra-ui/core";
import ImagePreview from '../../lib/ImagePreview';
import {AiOutlinePlusCircle} from 'react-icons/ai';

const Create = () => {
    const [imgPreview, setImgPreview] = useState(null);
    const [error, setError] = useState(false)
    const [active, setActive] = useState('figgyCollect')

    const handleImageChange = (e) => {
        setError(false);
        const selected = e.target.files[0];
        const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg", "image/webp"];

        if (selected && ALLOWED_TYPES.includes(selected.type)) {
            let reader = new FileReader();
            reader.onloadend = () => {
               setImgPreview(reader.result); 
            }
            reader.readAsDataURL(selected);
        } else {
            setError(true);
        }
    }

    const setErrorFalse = () => {
        setError(false)
    }

    const setImgPreviewNull = () => {
        setImgPreview(null)
    }

    return (
        <Flex w='70%' flexDir='column' margin='auto'>
            <Flex flexDir='row' justifyContent='center' marginTop='5rem' marginBottom='5rem'>
                <VStack spacing={7} align maxW='43%' marginRight='15%'>
                    <Text fontFamily="PressStart2PRegular" fontSize="20px">
                        Create Collectibles
                    </Text>
                    <ImagePreview
                    handleImageChange={handleImageChange}
                    imgPreview={imgPreview}
                    error={error}
                    setErrorFalse={setErrorFalse}
                    setImgPreviewNull={setImgPreviewNull}
                    />
                    <Flex flexDir='column' justifyContent='flex-start'>
                        <Text fontSize='15px'>
                            Choose Collection
                        </Text>
                        <HStack mt='1rem' spacing={10}>
                            <Flex
                            _hover={{cursor: 'pointer'}}
                            border={active === 'customCollect'? '2px solid #651AB2' : '1px solid #4D4456'} 
                            borderRadius='15px' h='10rem' w='10rem' flexDir='column'
                            justifyContent='center'
                            alignItems='center'
                            onClick={() => setActive('customCollect')}
                            >
                                    <AiOutlinePlusCircle fontSize='2rem'/>
                                    <Text maxW='50%' textAlign='center'>
                                        Create Collection
                                    </Text>
                            </Flex>
                            <Flex
                            _hover={{cursor: 'pointer'}}
                            border={active === 'figgyCollect'? '2px solid #651AB2' : '1px solid #4D4456'} 
                            borderRadius='15px' h='10rem' w='10rem' flexDir='column'
                            justifyContent='center'
                            alignItems='center'
                            onClick={() => setActive('figgyCollect')}
                            >
                                <Avatar size='sm'/>
                                <Text>
                                    NFiggybles
                                </Text>
                                <Text opacity='0.7'>
                                    NFG
                                </Text>
                            </Flex>
                        </HStack>
                    </Flex>
                    <FormControl id='nftDetails'>
                        <FormLabel fontSize='15px'>Name</FormLabel>
                        <Input placeholder='Enter the title of your NFT...'/>
                    </FormControl>
                    <FormControl id='nftDetails'>
                        <FormLabel fontSize='15px'>Description (optional)</FormLabel>
                        <Textarea form='nftDetails' rows='5' placeholder='Enter description...'/>
                    </FormControl>
                    <HStack spacing={100}>
                        <FormControl id='nftDetails'>
                            <FormLabel fontSize='15px'>Number of Copies </FormLabel>
                            <NumberInput>
                                <NumberInputField></NumberInputField>
                            </NumberInput>
                        </FormControl>
                        <FormControl id='nftDetails'>
                            <FormLabel fontSize='15px'>Royalties</FormLabel>
                            <NumberInput>
                                <InputRightElement children={'%'}/>
                                <NumberInputField></NumberInputField>
                            </NumberInput>
                        </FormControl>
                    </HStack>   
                    <FormControl id='nftDetails'>
                        <FormLabel fontSize='15px'>Properties</FormLabel>
                        <HStack spacing={105}>
                            <Input placeholder='Enter key'/>
                            <Input placeholder='Enter values'/>
                        </HStack>   
                    </FormControl>
                    <FormControl id='nftDetails'>
                        <Flex flexDir='row' alignItems='center'>
                        <FormLabel fontSize='15px'>Set Price</FormLabel>
                            <Switch id='askPrice' color='#651AB2'/>
                        </Flex>
                        <NumberInput maxW='45%'>
                            <NumberInputField></NumberInputField>
                        </NumberInput>
                        <FormHelperText>
                            Service fee 2.5%. <br/>
                            You will receive Price * 0.98.
                        </FormHelperText>
                    </FormControl>
                    <FormControl id='nftDetails'>
                        <Flex flexDir='row' alignItems='center'>
                        <FormLabel fontSize='15px'>Unlock once Purchased</FormLabel>
                            <Switch id='askPrice' color='#651AB2'/>
                        </Flex>
                        <FormHelperText maxW='60%'>
                            Content below will be unlocked after successful transaction. <br/>
                            Lorem ipsum dolor sit ament, consectetur adipiscing elit, sed do eiusmod asodifjaosidjfalskdfmaesijfoasi
                            asdfijaoijtp9woeijeq juap9werj o9aw8urp9 wjf aosdijpaisundf oiasuhefo aisjd ;fasdf asf.
                        </FormHelperText>
                    </FormControl>
                    <Flex
                    bg="linear-gradient(180deg, #942DFE 0%, #5A189C 100%)"
                    p="0.5rem 1.5rem"
                    borderRadius="30px"
                    cursor="pointer"
                    w='30%'
                    justifyContent='center'
                    >
                        <Text fontWeight="500" fontSize="14px">Create</Text>
                    </Flex>                              
                </VStack>
                <Flex flexDir='column'>
                    <Box p="1rem 1.5rem" borderRadius="10px" border="1px solid #651AB2" h='25rem' w='25rem' marginBottom='2rem' 
                    >
                      <Image src={imgPreview}/>
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
                    <Textarea rows={5}/>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Create
