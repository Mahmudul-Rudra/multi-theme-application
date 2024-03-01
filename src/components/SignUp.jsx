import React from 'react';
import {
  Avatar,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'5'}
          overflow={'auto'}
        >
          <Heading textAlign={'center'} textTransform={'uppercase'}>
            Video Hub
          </Heading>
          <Text
            textTransform={'uppercase'}
            textAlign={'center'}
            fontSize={'20'}
          >
            Be One of Us
          </Text>
          <Avatar alignSelf={'center'} boxSize={'32'} />
          <Input
            placeholder={'Please enter your name'}
            type={'text'}
            required
            focusBorderColor={'purple.500'}
          />
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
          <Input
            placeholder={'Retype your password'}
            type={'password'}
            required
            focusBorderColor={'purple.500'}
          />

          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forgetpassword'}>Forget Password?</Link>
          </Button>

          <Button colorScheme="purple" type="submit">
            Sign Up
          </Button>

          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/login'}>Already a Member</Link>
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default SignUp;
