import "animate.css";
import { useEffect, useState } from "react";
import "./App.css";
import Preloading from "./Pages/ComonComponent/Preloading";
import Routed from "./Pages/Routed/Routed";

function App() {
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    setSpinner(true);

    setTimeout(() => {
      setSpinner(false);
    }, 1000);
  }, []);

  return (
    <div className="App">{spinner ? <Preloading /> : <Routed></Routed>}</div>
  );
}

export default App;
