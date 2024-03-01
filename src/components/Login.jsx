import React from 'react';
import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading textAlign={'center'}>Welcome Back</Heading>
          <Input
            placeholder={'email'}
            type={'email'}
            required
            focusBorderColor={'purple.500'}
          />
          <Input
            placeholder={'password'}
            type={'password'}
            required
            focusBorderColor={'purple.500'}
          />

          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forgetpassword'}>Forget Password?</Link>
          </Button>

          <Button colorScheme="purple" type="submit">
            Log In
          </Button>

          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/signup'}>Click me if You are a NewBie</Link>
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
