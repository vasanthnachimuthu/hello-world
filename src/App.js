import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import NameList from './components/NameList';

function App() {
  return (
    <div className="App">
      <NameList />
      {/*Hello />*/}
      {/* <Welcome />*/}
      {/*<Greet name="vasanth" heroname="batman" />*/}
      { /* <Greet name="nalan" heroname="spiderman" />*/}
    </div>
  );
}

export default App;
