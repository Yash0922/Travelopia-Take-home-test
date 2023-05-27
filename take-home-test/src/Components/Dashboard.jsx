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
    Flex,
    Input
  } from '@chakra-ui/react';
  import {useEffect,useState} from "react";
function Dashboard(){

    const[state,setState]=useState([]);
    const [pagenum,setPage]=useState(1);

    useEffect(()=>{
        getData()
      
    },[])

    const getData = async () => {
        var res = await fetch(`https://travelopia-backend.vercel.app/info`);
        var data = await res.json();
        console.log("data",data);
        setState(data); // Update Phase
      };
    

    return(
        <div>
          
            <Box  m={24}>
               <Box  >
            <Heading mb={7}>DASHBOARD</Heading>
      

       <TableContainer >
  <Table variant='striped' colorScheme='teal'>
    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
   
    <Thead >
      <Tr>
      <Th fontSize='md'>Id</Th>
        <Th fontSize='md'>Name</Th>
        <Th fontSize='md'>E-mail Address</Th>
        <Th fontSize='md'>Destination</Th>
        <Th  fontSize='md' isNumeric>Count</Th>
        <Th fontSize='md' isNumeric>Budget per person</Th>
      </Tr>
    </Thead>
   
  
    <Tbody>
    {state.map((ele)=>{
            return (
                
      <Tr>
     
        <Td>{ele._id}</Td>
        <Td>{ele.name}</Td>
        <Td >{ele.Email}</Td>
        <Td>{ele.Location}</Td>
          <Td isNumeric>{ele.Number_of_touriest}</Td>
        <Td isNumeric>{ele.Budget_per_person}</Td>
     
      </Tr>
            )
    })}
      
    </Tbody>
 
    {/* <Tfoot  border="solid black" w="200px">
       
      
    </Tfoot> */}
  </Table>
</TableContainer>
        </Box>
       <Box   mt={4}> 
       <Flex  justifyContent="space-between">
        <Button colorScheme='teal'>Previous</Button>
        <Button colorScheme='teal'>{pagenum}</Button>
      <Button colorScheme='teal'>Next</Button>
        </Flex>
       </Box>
       </Box>

        
        </div>
        
    )
}
export default Dashboard;