import logo from './logo.svg';
import 'antd/dist/reset.css';
import './App.css';
import Left from './Components/Left';
import Right from './Components/Right';
import Bottom from './Components/Bottom';

function App() {
  return (
    <div className="App">
      <div className='center'>
        <div className='container'>
          <div className='d-flex'>
            <Left />
            <Right />
          </div>
          <Bottom />
        </div>
      </div>
    </div>
  );
}

export default App;
