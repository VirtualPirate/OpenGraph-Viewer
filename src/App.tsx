import { useContext } from "react";

import NavBar from "../components/NavBar/NavBar";
import SearchOptions from "../components/SearchOptions/SearchOptions";
import OpenGraphView from "../components/OpenGraphView/OpenGraphView";
import Spinner from "../components/Spinner/Spinner";
import { ButtonStateContext } from "../context/buttonstate.context";

const defaultValues = {
  title: "No title",
  url: "No url",
  description: "No description",
  image: "twitter-card.png",
};

function App() {
  const { buttonDisableState } = useContext(ButtonStateContext);

  return (
    <div className="App">
      <NavBar></NavBar>
      <SearchOptions />
      {buttonDisableState ? <Spinner /> : <OpenGraphView />}
    </div>
  );
}

export default App;
