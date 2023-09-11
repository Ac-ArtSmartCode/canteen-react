/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,

} from '@chakra-ui/react'
import { ChangeEvent, FormEvent, useState } from 'react';
import { authentication } from '../api/auhentication';
import { sweetalert } from '../utils/sweetAert';
import { useNavigate } from 'react-router-dom';
interface Props {
    isOpen: boolean
    onClose(): void
}
interface Register {
    email: string,
    password: string
}
export default function LoginModals(props: Props) {
    const { isOpen, onClose } = props;
    const [formData, setFormData] = useState<Register>({ email: '', password: '' })
    const { loginApi } = authentication()
    const { success, errors } = sweetalert();
    const nav = useNavigate()
    const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await loginApi(formData);
            onClose()
            if (response.data) {
                localStorage.setItem('token', response.data.access_token)
                success("เข้าสู่ระบบสำเร็จ", "ท่านได้ทำการเข้าสู่ระบบสำเร็จแล้ว")
                setInterval(() => {
                    nav('/')
                }, 1000)
            }
        } catch (e) {
            onClose()
            errors("เข้าสู่ระบบไม่สำเร็จ", "กรุณาตรวจสอบชื่อและอีเมล", "หากท่านยังไม่สมัครสมาชิกกรุณาสมัครก่อนเข้าใช้งาน")

        }
    };
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };


    return (
        <>


            <Modal

                isOpen={isOpen}
                onClose={onClose}

            >
                <ModalOverlay />
                <ModalContent>
                    <form onSubmit={handleLogin}>
                        <ModalHeader>ลงชื่อเข้าใช้</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>


                            <FormControl id="email" isRequired>
                                <FormLabel>Email address</FormLabel>
                                <Input
                                    placeholder="กรอกอีเมล email@example.com"
                                    _placeholder={{ color: 'gray.500' }}
                                    type="email"
                                    name='email'
                                    onChange={handleInputChange}
                                />
                            </FormControl>

                            <FormControl id="password" isRequired>
                                <FormLabel>Password</FormLabel>
                                <Input type="password"
                                    name='password'
                                    placeholder='กรอกรหัสผ่าน'
                                    onChange={handleInputChange}

                                />
                            </FormControl>



                        </ModalBody>

                        <ModalFooter>
                            <Button type='submit' colorScheme='blue' mr={3}>
                                Save
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    )
}