'use client'

import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Image, SimpleGrid } from '@chakra-ui/react'

import useData from '../useData';

const Shopping = () => {
  const { data, error, isLoading } = useData();


  // const addToCart = (product) => {
  //   const productExist = data?.find((item) => item?.id === product.id)
  //   console.log(productExist)
  //   if(productExist){
  //     setCartItems({...cartItems})
  //   }else{
  //     setCartItems({...cartItems, product})
  //   }
  // }

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
            <Image boxSize="100px" objectFit="fit" src={item.images[1]} />
          </CardBody>
          <CardFooter>
            <Button >Add To Cart</Button>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default Shopping;
