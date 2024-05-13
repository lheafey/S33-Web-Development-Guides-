import logo from './logo.svg';
import './App.css';
import GitHub from './GitHub';
import DescriptionCss from './CSS';
import ReactExp from './ReactExp.tsx'


function App() {
  return (
    <div className="App">
     <h1>Github Infomation</h1>
     <GitHub />
     <h1>CSS Information</h1>
     <DescriptionCss />

     <h1>React Information</h1>
     <ReactExp />
    </div>

  );
}

export default App;
