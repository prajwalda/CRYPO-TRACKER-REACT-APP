import axios from 'axios'
import React, { useState } from 'react'
import { server } from '../index'
import { useEffect } from 'react'
import { Container, HStack, VStack,Image, Heading, Text, RadioGroup, Radio, Button } from '@chakra-ui/react'
import Loader from './Loader'
import Error from './Error'
import CoinCard from './CoinCard'

const Coins = () => {

    const [coins,setCoins] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false)
    const [currency,setCurrency] = useState("inr");
    const [page,setPage] = useState(1);

    const currencySymbol = 
        currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";


    const changePage = (page) => {
        setPage(page);
        setLoading(true)
    }

    const btns = new Array(132).fill(1)

    useEffect(() => {
       const fetchCoins = async () => {
        try {   
            const {data} = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`)
            setCoins(data);
            setLoading(false)
          
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
      fetchCoins();
    }, [currency,page])
    
    if(error) return <Error message={"Error while Exchanging Coins"}/>

  return <Container maxW={"container.lg"} >
    { loading? 
        (<Loader />) 
            :  ( 
        <>
        <RadioGroup value={currency} onChange={setCurrency} p={'4'}>
            <Radio value={'inr'} m={'4'}>INR</Radio>
            <Radio value={'usd'} m={'4'}>USD</Radio>
            <Radio value={'eur'} m={'4'}>EUR</Radio>
        </RadioGroup>
        
        
        <HStack wrap={"wrap"} justifyContent={'space-evenly'}>
            {
                coins.map((i)=> (
                    <CoinCard 
                    id={i.id}
                    name={i.name}
                    img={i.image}
                    symbol={i.symbol}
                    currencySymbol={currencySymbol}
                    price={i.current_price}
                    key={i.id}
                    />
                ))
            }
        </HStack>

        <HStack overflowX={"auto"} p={'4'}>
            {btns.map((item,index) => (
              <Button bgColor={'blackAlpha.900'} color={'whiteAlpha.800'} onClick={() => changePage(index+1)} >{index+1}</Button>
            ))}
        </HStack>
        </>
    )}
  </Container>
}




export default Coins;