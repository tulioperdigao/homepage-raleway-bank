import { Box, ChakraProvider } from '@chakra-ui/react';
import { Header } from './components/Header/header';
import { Footer } from './components/Footer/footer';
import { Card } from './components/card';

function App() {
  return (
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='#23a25a'>
        <Header></Header>
        <Card></Card>
        <Footer></Footer>
      </Box>
    </ChakraProvider>
  );
}

export default App;
