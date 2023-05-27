import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Heading
} from "@chakra-ui/react";

const DestinationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [destination, setDestination] = useState("");
  const [travelers, setTravelers] = useState(1);
  const [budget, setBudget] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Process form submission here
    // You can access the form data in the state variables: name, email, destination, travelers, budget

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
            <option value="India">India</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
          </Select>
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>No. of travellers</FormLabel>
          <Input
            type="number"
            value={travelers}
            onChange={(e) => setTravelers(parseInt(e.target.value))}
            min={1}
            required
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Budget Per Person ($)</FormLabel>
          <Input
            type="number"
            value={budget}
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
