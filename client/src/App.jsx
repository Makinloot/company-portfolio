import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/header/Header";
import { useState } from "react";
import ServicesPage from "./pages/ServicesPage";
function App() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="App h-screen">
      {!showContact && (
        <Header contact={showContact} setContact={setShowContact} />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <Home showContact={showContact} setShowContact={setShowContact} />
          }
        />
        <Route
          path="/about-us"
          element={
            <About showContact={showContact} setShowContact={setShowContact} />
          }
        />
        <Route
          path="/services"
          element={
            <ServicesPage
              showContact={showContact}
              setShowContact={setShowContact}
            />
          }
        />
        <Route path="/email" />
      </Routes>
    </div>
  );
}

export default App;
