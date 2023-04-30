import { 
  Center,
  ChakraProvider,
  Input,
  Box,
  Button
} from '@chakra-ui/react'
import { login } from './services/login';
import { Header } from './components/Header/Header';
import { CardLogin } from './components/CardLogin';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <CardLogin />
    </ChakraProvider>
  );
}

export default App;
