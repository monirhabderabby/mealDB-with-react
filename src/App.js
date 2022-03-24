import './App.css';
import Header from './components/Header/Header';
import Foods from './components/Foods/Foods';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const searchFood = () =>{
    console.log('clicked');
  }
  return (
    <div className="App">
      <Header searchFood={searchFood}></Header>
      <Foods></Foods>
    </div>
  );
}

export default App;
