import { useState } from 'react';
import {
    Flex,
    Image,
    Alert,
    AlertTitle,
    AlertIcon,
    CloseButton,
} from '@chakra-ui/core';
import {AiOutlineCloseCircle} from 'react-icons/ai';

const ImagePreview = (props) => {

    return (
        <Flex 
        margin='auto' 
        w='35rem'  
        h='15rem' 
        flexDir='column'
        border='1px dashed #4D4456'
        position='relative'
        borderRadius='15px'
        >
            <div>
                {props.error && (
                <Alert status="error" justifyContent='center'>
                    <AlertIcon />
                    <AlertTitle mr={2}>Selected file is not supported or too large!</AlertTitle>
                    <CloseButton position="absolute" right="8px" top="8px" onClick={props.setErrorFalse}/>
                  </Alert>
                )}
            </div>
            <div 
            className='imgPreview'
            >
                {props.imgPreview 
                ? <Flex w='100%' h='100%'>
                    <Image w='100%' h='auto' fit='cover' src={props.imgPreview} borderRadius='15px'/>
                </Flex>
                : (
                    <>
                        <label htmlFor='fileUpload' className='customFileUpload' style={{padding: '10px'}}> 
                            Choose File
                        </label>
                        <input type='file' id='fileUpload' onChange={props.handleImageChange}/>
                        <span style={{margin: '1%'}}>JPG, JPEG, PNG, GIF, MP4, MP3 or WEBM.</span>
                        <span>Up to 50MB.</span>
                    </>
                )}
            </div>
            {props.imgPreview && (
                <Flex right='4%' top='4%' position='absolute' _hover={{cursor: 'pointer'}}>
                    <AiOutlineCloseCircle
                    onClick={props.setImgPreviewNull}
                    fontSize='30px'
                    m='1%'/>
                </Flex>               
            )}
        </Flex>
    )
}

export default ImagePreview;
