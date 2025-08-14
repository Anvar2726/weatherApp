import { BrowserRouter, Route, Routes } from "react-router";
import Layout from './components/layout/wrapper/index';
import HomePage from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
