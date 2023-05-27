import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Box,
    Heading,
    Button,
    Flex
  } from '@chakra-ui/react'
function Dashboard(){
    return(
        <Box  m={24}>
        <Box  >
            <Heading mb={7}>DASHBOARD</Heading>
      

       <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
    <Thead >
      <Tr>
      <Th fontSize='md'>Id</Th>
        <Th fontSize='md'>Name</Th>
        <Th fontSize='md'>E-mail Address</Th>
        <Th fontSize='md'>Destination</Th>
        <Th fontSize='md' isNumeric>Traveller Count</Th>
        <Th fontSize='md' isNumeric>Budget per person</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>aa</Td>
        <Td>Annu</Td>
        <Td >annu@gmail.com</Td>
        <Td>Europe</Td>
     <Td isNumeric>4</Td>
        <Td isNumeric>$2500</Td>
      </Tr>
      <Tr>
     
        <Td>bb</Td>
        <Td>Yash</Td>
        <Td>yash@gmail.com</Td>
        <Td>Africa</Td>
        <Td isNumeric>2</Td>
        <Td isNumeric>$1500</Td>
      </Tr>
      <Tr>
        <Td>cc</Td>
        <Td>Riya</Td>
        <Td>riya@gmail.com</Td>
        <Td>Europe</Td>
        <Td isNumeric>3</Td>
        <Td isNumeric>$2200</Td>
      </Tr>
    </Tbody>
    {/* <Tfoot  border="solid black" w="200px">
        <Flex gap={20}>
        <Button colorScheme='teal'>Previous</Button>
      <Button colorScheme='teal'>Next</Button>
        </Flex>
      
    </Tfoot> */}
  </Table>
</TableContainer>
        </Box>
       <Box   mt={4}> 
       <Flex  justifyContent="space-between">
        <Button colorScheme='teal'>Previous</Button>
      <Button colorScheme='teal'>Next</Button>
        </Flex>
       </Box>
       </Box>
    )
}
export default Dashboard;