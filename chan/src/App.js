import logo from './logo.svg';
import './App.css';
import Header from './component/header/header';
import Body_1 from './component/body/body_1';
import Body_2 from './component/body/body_2';
import Body_3 from './component/body/body_3';

function App() {
  return (
    <div className="App">
      <div className="App_container">
        <Header></Header>
        <Body_1></Body_1>
        <Body_2></Body_2>
        <Body_3></Body_3>
      </div>
    </div>
  );
}

export default App;
