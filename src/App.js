import './App.css';
import First from './component/First';
import Second from './component/Second';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useReducer, createContext } from "react"
import { initialState, reducer } from './reducer/UserReducer';


export const UserContext = createContext();

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<First />} />
        <Route path='/second' element={<Second />} />
      </Routes>
    </BrowserRouter>
  )
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }} >
        <Routing />
      </UserContext.Provider>
    </>
  );
}

export default App;
