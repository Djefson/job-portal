import '@mantine/core/styles.css';
import './App.css';
import { MantineProvider } from '@mantine/core';
import Homepage from './Pages/Homepage';


function App() {
  return (
    <MantineProvider>
     <Homepage/>
    </MantineProvider>
  );
}

export default App;
 