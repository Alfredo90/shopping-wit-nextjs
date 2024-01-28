'use client'

import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'

import {CartContext} from '../providers'
import { useContext } from 'react';
import useData from '../useData';

const Shopping = () => {
  const { data, error, isLoading } = useData();
  const {cartItems, setCartItems} = useContext(CartContext)
  // console.log(data)



  const addToCart = (product) => {
    const productExist = cartItems?.map((item) => item?.id === product.id)
    console.log(productExist)
    if(productExist){
      setCartItems({...cartItems})
    }else{
      setCartItems({...cartItems, product})
    }
  }

  // const addItem = () => addToCart(data?.id)

  // console.log(addToCart(data?.id))

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  // console.log(data);
  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
    >
      {data?.map((item) => (
        <Card key={item.id}>
          <CardHeader>
            <Heading size="md" noOfLines={1}> {item.title}</Heading>
          </CardHeader>
          <CardBody>
            <Image boxSize="100px" objectFit="fit" src={item.image} />
          </CardBody>
          <CardFooter>
            <Button onClick={() => addToCart(data?.id)} >Add To Cart</Button>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default Shopping;
