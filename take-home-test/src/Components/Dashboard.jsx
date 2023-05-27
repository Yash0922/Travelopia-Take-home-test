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
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    useEffect(()=>{
        getData()
      
    },[currentPage])

    const getData = async () => {
        var res = await fetch(`https://travelopia-backend.vercel.app/info`);
        var data = await res.json();
        console.log("data",data);
        setState(data); // Update Phase
       
      };
      const totalPages = Math.ceil(state.length / itemsPerPage);

  const handlePrevious = () => {
    setCurrentPage((prevPage) => (prevPage === 1 ? prevPage : prevPage - 1));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage === totalPages ? prevPage : prevPage + 1));
  };

    return(
        <div>
          
            <Box  m={24}>
               <Box  >
            <Heading mb={7}>DASHBOARD</Heading>
      

       <TableContainer >
  <Table variant='striped' colorScheme='teal' >
    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
   
    <Thead >
      <Tr>
      <Th fontSize='md'>Id</Th>
        <Th fontSize='md'>Name</Th>
        <Th fontSize='md'>E-mail Address</Th>
        <Th fontSize='md'>Destination</Th>
        <Th style={{textAlign:"center"}}  fontSize='md' isNumeric> Traveller Count</Th>
        <Th style={{textAlign:"center"}}  fontSize='md' isNumeric>Budget per person</Th>
      </Tr>
    </Thead>
   
  
    <Tbody>
    {state.slice(currentPage * itemsPerPage - itemsPerPage, currentPage * itemsPerPage).map((ele)=>{
            return (
                
      <Tr>
     
        <Td>{ele._id}</Td>
        <Td>{ele.name}</Td>
        <Td >{ele.Email}</Td>
        <Td>{ele.Location}</Td>
          <Td style={{textAlign:"center"}} isNumeric>{ele.Number_of_touriest}</Td>
        <Td style={{textAlign:"center"}} isNumeric>{ele.Budget_per_person}</Td>
     
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
        <Button colorScheme='teal' onClick={handlePrevious} disabled={currentPage === 1}>Previous</Button>
        <Button colorScheme='teal'>{currentPage}</Button>
      <Button colorScheme='teal' onClick={handleNext} disabled={currentPage === totalPages}>Next</Button>
        </Flex>
       </Box>
       </Box>

        
        </div>
        
    )
}
export default Dashboard;