import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Image
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const NavLink = ({ children, to }: { children: ReactNode, to: string }) => (
  <Link
    to={to}
    style={{
      textDecoration: 'none',
      padding: '0.5rem 1rem',
      borderRadius: '0.375rem',
      display: 'inline-block',
      transition: 'background-color 0.3s ease',
      backgroundColor: useColorModeValue('gray.200', 'gray.700'),
      color: 'inherit',
    }}
    _hover={{
      backgroundColor: useColorModeValue('gray.300', 'gray.600'),
    }}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>  < img src="https://www.linkpicture.com/q/logo-color_18.png" alt="Travelopia" style={{ width:"30%"
  }}/></Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
            <NavLink  to="/dashboard">Dashboard</NavLink>
              <NavLink to="/">Form</NavLink>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.githubusercontent.com/u/117393667?v=4'}
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink to="/">Form</NavLink>
                  </MenuItem>
                  
              
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}