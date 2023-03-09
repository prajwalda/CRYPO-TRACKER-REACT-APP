import axios from 'axios'
import React, { useState } from 'react'
import { server } from '../index'
import { useEffect } from 'react'
import { Container, HStack, VStack,Image, Heading, Text } from '@chakra-ui/react'
import Loader from './Loader'
import Error from './Error'


const Exchanges = () => {

    const [exchanges,setExchanges] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false)

    useEffect(() => {
       const fetchExchanges = async () => {
        try {   
            const {data} = await axios.get(`${server}/exchanges?per_page=200`)
            setExchanges(data);
            setLoading(false)
          
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
      fetchExchanges();
    }, [])
    
    if(error) return <Error message={"Error while Exchanging Coins"}/>

  return <Container maxW={"container.lg"} >
    { loading? 
        (<Loader />) 
            :  ( 
        <>
        <HStack wrap={"wrap"} justifyContent="center">
            {
                exchanges.map((item,idx) => (
                    <ExchangeCard name={item.name}
                    img={item.image}
                    rank={item.trust_score_rank}
                    url={item.url}
                    key={idx}
                    />
                ))
            }
        </HStack>

        </>
    )}
  </Container>
}


const ExchangeCard = ({name,img,rank,url}) => (
    <a href={url} target={"blank"} >
         
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

        <Heading size={'md'} noOfLines={12}>
            {rank}
        </Heading>

        <Text noOfLines={1}>
            {name}
        </Text>
    </VStack>

    </a>
)


export default Exchanges