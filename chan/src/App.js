import logo from './logo.svg';
import './App.css';
import Header from './component/header/header';
import Body_1 from './component/body/body_1';
import Body_2 from './component/body/body_2';
import Body_3 from './component/body/body_3';
import Body_4 from './component/body/body_4';
import Footer from './component/footer/footer';

function App() {
  return (
    <div className="App">
      <div className="App_container">
        <Header></Header>
        <Body_1></Body_1>
        <Body_2></Body_2>
        <Body_3></Body_3>
        <Body_4></Body_4>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
