import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Welcome from "./pages/Welcome";
import Documentation from "./pages/Documentation";
import Contact from "./pages/Contact";
import Tutorials from "./pages/Tutorials";
import NotFound from "./pages/NotFound";

// Using the 'React Router' in your app allows you to navigate between
// different pages or components in React. In fact, it can also handle
// more complex functionalities, like passing data between pages through
// queries and nested routes.

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
