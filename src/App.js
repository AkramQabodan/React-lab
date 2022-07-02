import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CounterPage from "./pages/CounterPage/CounterPage";
import Shop from "./pages/shop";
import Home from "./pages/home";
import NavBar from "./Components/navBar";
import About from "./pages/about";
import Details from "./pages/details";
import NotFound from "./pages/notFound";
import Todo from "./pages/todo/Todo";
import Register from "./pages/register";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/details/:id" element={<Details />} />
        <Route path="/about" element={<About />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
