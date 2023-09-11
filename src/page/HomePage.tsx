import { Box, Grid, GridItem, } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { shopApi } from '../api/shopApi'
import CardShop from '../components/CardShop'
interface ResPonse {
  id: string,
  name: string,
  photo: string,
  location: {
    lat: number,
    lgn: number
  }
}
const HomePage: React.FC = () => {


  const [shopData, setShopData] = useState<ResPonse[]>([])
  const { canteen } = shopApi()
  const fetchData = async () => {
    await canteen().then((value) => {
      setShopData(value.data.data)
      console.log(value.data.data)

    }).catch((e) => console.log(e))
  }
  useEffect(() => {
    fetchData()


  }, [])


  return (
    <Box p={8} bg='#e5e5e5'>
      <Grid gap={5} justifyContent='center' templateColumns={{ base: "repeat(2,1fr)", xl: "repeat(4,1fr)", '2xl': "repeat(5,1fr)" }}>
        {shopData.map((items) => {
          return <GridItem mx='auto' key={items.id} colSpan={1}>
            <CardShop id={items.id} name={items.name} photo={items.photo} location={items.location} />
          </GridItem>
        })}
      </Grid>
    </Box>
  )
}

export default HomePage

