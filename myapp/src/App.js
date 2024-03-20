import "./App.css";
import Increment from "./Pages/Increment";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import ProductGallary from "./Pages/ProductGallary.jsx";
import Conditional from "./Pages/Conditional.jsx";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Componants/Navbar.jsx";
import Passport from "./Pages/Passport.jsx";
import Regular from "./Componants/Regular.jsx";
import Tatkal from "./Componants/Tatkal.jsx";
import ProductDetail from "./Pages/ProductDetail.jsx";
import ClassComp from "./Pages/ClassComp.jsx";
import LifeCycle from "./Pages/LifeCycle.jsx";
import Forms from "./Pages/Forms.jsx";
import TodoList from "./Pages/TodoList.jsx";
import TodoForm from "./Pages/TodoForm.jsx";
import Redux from "./Pages/Redux.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductGallary />} />
        <Route path="/productgallary" element={<ProductGallary />} />
        <Route path="/increment" element={<Increment />} />
        <Route path="/conditional" element={<Conditional />} />
        <Route path="/passport" element={<Passport />}>
          <Route path="/passport/regular" element={<Regular />} />
          <Route path="/passport/tatkal" element={<Tatkal />} />
        </Route>
        <Route path="/productdetail/:prodid" element={<ProductDetail />} />
        <Route path="/classcomp" element={<ClassComp />} />
        <Route path="/lifecycle" element={<LifeCycle />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/todoform" element={<TodoForm />} />
        <Route path="/redux" element={<Redux />} />
      </Routes>
    </div>
  );
}

export default App;
