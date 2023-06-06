import logo from './logo.svg';
import './App.css';
import Header from './component/header/header';
import Body from './component/body/body';
import Body_2 from './component/body/body_2';

function App() {
  return (
    <div className="App">
      <div className="App_container">
        <Header></Header>
        <Body></Body>
        <Body_2></Body_2>
      </div>
    </div>
  );
}

export default App;
