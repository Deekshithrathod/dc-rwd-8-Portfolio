import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div className="home">
        <div className="button-container">
          <Link to={"/v1"}>
            <button className="btn">Layout 1</button>
          </Link>
          <Link to={"/v2"}>
            <button className="button-special btn">Layout 2</button>
          </Link>
        </div>
      </div>
      {/* <AllComponents /> */}
    </>
  );
}

export default App;
