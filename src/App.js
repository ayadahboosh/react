import './App.css';
import Buttons from './Buttons';
import Header from './Header';
import Posts from './Posts';

function App() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", width: "60%" }}>
          <div style={{ width: "70%" }}>
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
          </div>
          <div style={{ width: "30%" }}>
            <Buttons />
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;