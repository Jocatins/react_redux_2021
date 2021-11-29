import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import HookCakeContainer from "./components/HookCakeContainer";
import CreamContainer from "./components/CreamContainer";
import HookCreamContainer from "./components/HookCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer />
        <ItemContainer />
        <CakeContainer />
        <CreamContainer />
        <HookCakeContainer />
        <HookCreamContainer />
        <NewCakeContainer />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
