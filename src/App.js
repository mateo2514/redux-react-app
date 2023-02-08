import React from "react";
import { BrowserRouter as Router, Toute, Routes, Route } from "react-router-dom";
import { Provider} from "react-redux";
import ListConsult from "./compents/ListConsult";
import store from "./store";
import './App.scss';
function App() {

  return (
    <div className="App">
         <Router>
              <Provider store={store}>
                   <Routes>
                        <Route path="/" element={<ListConsult />} />
                   </Routes>
              </Provider>
         </Router>
    </div>
  );
}

export default App;
