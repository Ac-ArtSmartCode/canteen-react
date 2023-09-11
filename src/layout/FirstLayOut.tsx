import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Outlet } from 'react-router-dom'
const FirstLayOut: React.FC = () => {

    const images = [
        "https://makaratobago.com/wp-content/uploads/2023/07/%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%81%E0%B9%8B%E0%B8%A7%E0%B8%A2%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B9%8B%E0%B8%A2%E0%B8%A7.jpg",
        "https://www.saphanmai.com/wp-content/uploads/2020/10/122404936_658567631517806_7920890801329408639_n.jpg",
        "https://iameat.blog/wp-content/uploads/2022/06/DSC04749_-scaled.jpg",
    ];
    return (
        <Box w='100%' position='relative' h='100vh' overflow='hidden'>

            <Box position='absolute' top='0' left='0' w='100%' h='100%'>

                <Carousel
                    width='100%'
                    autoPlay={true}
                    infiniteLoop={true}
                    showArrows={false}
                    showIndicators={false}
                    showThumbs={false}
                    showStatus={false}
                    animationHandler='fade'


                    stopOnHover={false}
                >
                    {images.map((URL, index) => (
                        <Box boxSize='full' position='relative'>
                            <Box bg='rgba(0,0,0,0.7)' position='absolute' w='100%' h='100%'></Box>
                            <Image objectFit='cover' w='100%' h='100%' src={URL} key={index} alt='Dan Abramov' />
                        </Box>
                    ))}
                </Carousel>
            </Box>

            <Outlet />

        </Box>
    )
}

export default FirstLayOut