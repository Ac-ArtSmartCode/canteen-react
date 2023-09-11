import { ArrowForwardIcon, EmailIcon } from '@chakra-ui/icons'
import { Box, Text, HStack, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import LoginModals from './LoginPage'
import RegisterModals from './RegisterPage'

const WelcomePage: React.FC = () => {
    const [loginIsOpen, setLoginIsOpen] = useState(false)
    const [regisIsOpen, setRegisIsOpen] = useState(false)

    const logInOnClose = () => {
        setLoginIsOpen(false);
    }
    const logInOnOpen = () => {
        setLoginIsOpen(true)
    }
    const regisOnClose = () => {
        setRegisIsOpen(false);
    }
    const regisOnOpen = () => {
        setRegisIsOpen(true)
    }


    return (
        <Box position='absolute' top='35%' left='20%' zIndex='10'>
            <Text fontSize='5xl' color='white'>ยินดีต้อนรับ</Text>
            <Text fontSize='sm' color='white'>บริการหาร้านอากรอันดับ 1 ของไทย มีหลากหลายร้านให้ท่านเลือก <br />
                ไม่ว่าจะเป็นร้านแม่ติ๋มเชียงใหม่ ร้านแม่ใหญ่ลำปาง <br />
                หากท่านต้องการใช้บริการ โปรดสมัครสมาชิก หรือเข้าสู่ระบบ

            </Text>
            <HStack mt='5'>
                <Button leftIcon={<EmailIcon />} colorScheme='teal' variant='solid' onClick={logInOnOpen}>
                    ลงชื่อเข้าใช้
                </Button>
                <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline' onClick={regisOnOpen}>
                    สมัครสมาชิก
                </Button>
            </HStack>
            <LoginModals isOpen={loginIsOpen} onClose={logInOnClose} />
            <RegisterModals isOpen={regisIsOpen} onClose={regisOnClose} />
        </Box>
    )
}

export default WelcomePage