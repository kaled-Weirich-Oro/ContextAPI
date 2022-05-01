import Index from './components/index';
import {CounterProvider} from './components/context/counter';

function App() {
  return (
    <CounterProvider>
      <Index /> 
    </CounterProvider>
  )
}

export default App;
