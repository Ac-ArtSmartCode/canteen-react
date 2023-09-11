import { Box, Card, CardBody, CardFooter, Heading, Stack, Text, Image, Button } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
    id: string,
    name: string,
    photo: string,
    location: {
        lat: number,
        lgn: number
    }
}

const CardShop: React.FC<Props> = (props: Props) => {

    const { id, name, photo } = props
    const navi = useNavigate()
    return (
        <>
            <Card shadow='lg'>
                <CardBody>
                    <Box h={{ base: "100", lg: "200" }} w={{ base: 130, lg: 230 }}>
                        <Image borderRadius={10} shadow='lg' src={photo} objectFit='cover' w='100%' h='100%' crossOrigin='anonymous'></Image>
                    </Box>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{name}</Heading>
                        <Text>

                        </Text>

                    </Stack>
                </CardBody>
                <Button
                    w={100}
                    mx={5}
                    variant='solid' colorScheme='teal'
                    onClick={() => {
                        navi(`canteen/${id}`)
                    }}>
                    เยี่ยมชมร้าน

                </Button>
                <CardFooter>
                </CardFooter>
            </Card>
        </>
    )
}


export default CardShop