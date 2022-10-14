
import './App.css';
import Card from './components/card/Card';
import {languages} from './components/helper/data';

function App() {
  return (
    <div className="container">
      {languages.map((item,index)=>(<Card {...item} key={index}/>))}
    
    </div>
  );
}

export default App;
