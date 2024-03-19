import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Github from "./components/Github";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;
