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

interface Props {
  isOpen: boolean
  onClose(): void
}

interface Register {
  name: string,
  email: string,
  password: string
}
export default function RegisterModals(props: Props) {

  const { isOpen, onClose } = props;
  const [formData, setFormData] = useState<Register>({ email: '', name: '', password: '' })
  const { registerApi } = authentication()
  const { success, errors } = sweetalert()
  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await registerApi(formData)
      onClose()
      if (response.data) {
        success("สมัครสมาชิกสำเร็จ", 'ท่านได้สมัครสมาชิกสำเร็จแล้วสามารถเข้าสู่ระบบได้')
      }
    } catch (e) {
      errors("สมัครสมาชิกไม่สำเร็จ", "กรุณาตรวจสอบข้อมูลที่ม่านกรอกหรือชื่อผู้ใช้มีอยู่แล้ว", "")
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
            <ModalHeader>สมัครสมาชิก</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>

              <FormControl id="name" isRequired>
                <FormLabel>First Name</FormLabel>
                <Input
                  placeholder="กรอกชื่อของคุณ"
                  _placeholder={{ color: 'gray.500' }}
                  type="text"
                  name='name'
                  onChange={handleInputChange}
                />
              </FormControl>
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