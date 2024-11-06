import Home from "./pages/home";
import "./App.css";

function App() {
  return (
    <div className={"global-layout"}>
      <header>
        <img
          className="h-6"
          src="https://mainder.ai/wp-content/uploads/2023/04/Mainder_logo_black_wide.png"
          alt="Mainder"
        />
      </header>
      <main>
        <Home />
      </main>
      <footer>@MainderAI</footer>
    </div>
  );
}

export default App;
