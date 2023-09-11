import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/header/Header";
import { useState } from "react";
import ServicesPage from "./pages/ServicesPage";
import Auth from "./pages/Auth";
import ControlPanel from "./pages/ControlPanel";
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
        <Route path="/auth" element={<Auth />} />
        <Route path="/panel" element={<ControlPanel />} />
        <Route
          path="*"
          element={
            <Home showContact={showContact} setShowContact={setShowContact} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
