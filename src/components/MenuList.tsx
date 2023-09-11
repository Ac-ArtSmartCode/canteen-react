import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,

    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
const MenuList: React.FC = () => {
    return (
        <TableContainer>
            <Table variant='simple'>
                <TableCaption>Imperial to metric conversion factors</TableCaption>
                <Thead>
                    <Tr>
                        <Th>รูปเมนู</Th>
                        <Th>ชื่อเมนู</Th>
                        <Th  >ราคา</Th>
                        <Th >ราคารวมภาษี(7%)</Th>
                        <Th isNumeric>สั่งซื้อ</Th>

                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>

                    </Tr>
                    <Tr>

                    </Tr>
                    <Tr>

                    </Tr>
                </Tbody>
                <Tfoot>
                    <Tr>

                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    )
}

export default MenuList