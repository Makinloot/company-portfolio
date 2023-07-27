import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <div className="App font-circular text-blackPrimary">
      <Header />
      <Hero />
      <div className="h-[100vh] bg-red-400"></div>
    </div>
  );
}

export default App;
