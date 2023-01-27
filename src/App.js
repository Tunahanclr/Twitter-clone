import './App.css';
import Content from './layout/Content';
import Sidebar from './layout/Sidebar';
import Widget from './layout/Widget';

function App() {
  return (
    <div className=' mx-auto w-1265 flex justify-between border min-h-screen'>
      <Sidebar/>
     <Content/>
     <Widget/>
    </div>
  );
}

export default App;
