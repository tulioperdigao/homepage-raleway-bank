import { Flex, Box, Center, Input, Button } from "@chakra-ui/react"
import { login } from "../services/login"

export const Card = () => {
    return (
        <Flex justify='center' align='center' h='100vh'>
          <Box backgroundColor='#ffffff' borderRadius='25px' padding='15px' maxWidth='500px'>
            <Center fontWeight='bold' marginBottom='15px'>
              <h1>Faça o Login</h1>
            </Center>
            <Input placeholder="email" marginBottom='5px' />
            <Input placeholder="password" />
            <Center>
              <Button onClick={login} colorScheme='teal' size='sm' width='100%' marginTop='15px'>
                Entrar
              </Button>
            </Center>
          </Box>
        </Flex>
    )
}