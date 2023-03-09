import React from 'react'
import { Container, HStack, VStack,Image, Heading, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const CoinCard = ({id,img,name,symbol,price,currencySymbol}) => (
    <Link to={`/coin/${id}`}>
    
    <VStack 
        w={'52'} 
        p={'8'} 
        shadow={"lg"} 
        transition={"all 0.3s"}
        m={'4'}
        css={
            {
                "&:hover":{
                    transform: "scale(1.1)"
                }
            }
        }
    >
        <Image 
            src={img} 
            w={'10'} 
            h={'10'}
            alt={"Exchange"}
            objectFit={"contain"}
        />

        <Heading size={'md'} noOfLines={1}>
            {symbol}
        </Heading>

        <Text noOfLines={1}>
            {name}
        </Text>
        <Text noOfLines={1}>
            {currencySymbol}{price}
        </Text>
    </VStack>

    </Link>
)

export default CoinCard;