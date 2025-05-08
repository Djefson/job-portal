
import './App.css';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <MantineProvider>
     <Homepage/>
    </MantineProvider>
  );
}

export default App;
 