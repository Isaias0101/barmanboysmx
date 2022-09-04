
import './App.css';

import Inicio from './components/pages/Inicio'
import Items from './components/pages/Items'
import FloatButton from './components/pages/FloatButton'

import { Container } from 'react-bootstrap';







function App() {
  return (
    <div >


   <div className="body1">
   <br>
</br>

<br>
</br>
 <Inicio/>
   <br>
</br>

   </div>
  
<Container>

   <Items/>
   
   </Container>
 

<FloatButton/>



    </div>
  );
}

export default App;
