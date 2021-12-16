import React from "react";
import { Provider } from "react-redux";
import SideBar from "./components/SideBar";
import Video from "./components/VIdeo";
import store from "./store";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Video />
          <SideBar />
        </Provider>
      </div>
    );
  }
}

export default App;
