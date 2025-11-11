import './App.css';
import { Button, HStack } from "@chakra-ui/react"

function App() {
  return (
    <div className="App">
        <h1>Hola!</h1>
        <HStack>
      <Button>Click me</Button>
      <Button>Click me2</Button>
    </HStack>
    </div>
  );
}

export default App;
