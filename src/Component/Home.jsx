import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import img from "../images/btc.png"
import {motion} from "framer-motion"

const Home = () => {
  return <Box bgColor={'blackAlpha.900'} w={'full'} h={'85vh'} >

    <motion.div 
    style={{
      height: "80vh",

    }}
    animate={{
      translateY: "20px",
    }}

    transition={{
      duration:2,
      repeat: Infinity,
      repeatType: "reverse",
    }}
    >

      <Image w={'full'} h={'full'} src={img} objectFit={'contain'} />
    
    </motion.div>
    <Text fontSize={'6xl'} color={'white'} fontWeight={'thin'} textAlign={'center'} marginTop={'-20'}>Xcrypto</Text>
  
  </Box>
}

export default Home