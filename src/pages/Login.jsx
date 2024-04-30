import React from 'react';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

function Login() {
  return (
    <Box p={4}>
      <FormControl>
        <FormLabel htmlFor='email'>Email address</FormLabel>
        <Input id='email' type='email' />
        <FormLabel htmlFor='password'>Password</FormLabel>
        <Input id='password' type='password' />
        <Button mt={4} colorScheme='teal' type='submit'>
          Login
        </Button>
      </FormControl>
    </Box>
  );
}

export default Login;