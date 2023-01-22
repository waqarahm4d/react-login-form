import {Flex, Heading, Input, Button, useColorMode, useColorModeValue} from '@chakra-ui/react'

const IndexPage = () => {
  const {toggleColorMode} = useColorMode()
  const formBg = useColorModeValue("gray.100", "gray.700")
  const formClr = useColorModeValue("white.100", "gray.600")
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" bg={formBg} p={12} rounded={6}>
        <Heading mb={6}> Log in </Heading>
        <Input bg={formClr} type="email" placeholder='waqar@email.com' mb={3} variant="filled" />
        <Input bg={formClr} type="password" placeholder='******' mb={6} variant="filled" />
        <Button mb={6} colorScheme="teal">Log in</Button>
        <Button onClick={toggleColorMode}>Toggle Color</Button>
      </Flex>
    </Flex>
  )
}

export default IndexPage
