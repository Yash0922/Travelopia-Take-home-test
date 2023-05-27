import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Heading,
  useToast 
} from "@chakra-ui/react";
import axios from "axios";
const DestinationForm =  () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [destination, setDestination] = useState("");
  const [travelers, setTravelers] = useState(1);
  const [budget, setBudget] = useState("");
  const toast = useToast();
  const handleSubmit = async(e) => {
    e.preventDefault();

    const data = {
      name: name,
      Email: email,
      Location: destination,
      Number_of_touriest: travelers,
      Budget_per_person: budget
    };
    
    try {
      const response = await axios.post(
        "https://travelopia-backend-git-main-yash0922.vercel.app/addData",
        data
      );
  

     

      if (response.status === 200) {
        // Handle successful response
        let id= response.data._id;
        toast({
          title: "Form submitted successfully",
          status: "success",
          description: `ID: ${id}`,
          duration: 3000,
          isClosable: true
        });
        console.log("Form submitted successfully");
      } else {
        // Handle error response
        toast({
          title: "Form submission failed",
          status: "error",
          duration: 3000,
          isClosable: true
        });
        console.log("Form submission failed");
      }
    } catch (error) {
      // Handle network error
      
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true
      });
      console.log("Error:", error);
    }

    // Reset the form after submission
    setName("");
    setEmail("");
    setDestination("");
    setTravelers(1);
    setBudget("");
  };

  return (
    
    <Box maxWidth="400px" mx="auto">
        <Heading> Travelopia</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl mt={4}>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Where do you want to go?</FormLabel>
          <Select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          >
            <option value="">Select a destination</option>
            <option value="India">India</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
          </Select>
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>No. of travellers</FormLabel>
          <Input
            type="number"
            value={travelers || ''}
            onChange={(e) => setTravelers(parseInt(e.target.value))}
            min={1}
            required
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Budget Per Person ($)</FormLabel>
          <Input
            type="number"
            value={budget || ''}
            onChange={(e) => setBudget(e.target.value)}
            required
          />
        </FormControl>
        

        <Button type="submit" colorScheme="teal" mt={4}>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default DestinationForm;
