import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import HookCakeContainer from "./components/HookCakeContainer";
import CreamContainer from "./components/CreamContainer";
import HookCreamContainer from "./components/HookCreamContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <CreamContainer />
        <HookCakeContainer />
        <HookCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
