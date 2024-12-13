// import Button from "./component/ui/Button";
// import Character from "./component/ui/Character";
import Header from "./component/Header";
import NavSideBar from "./component/NavSideBar";

function App() {
  return (
    <div className="min-h-dvh bg-light-background">
      <header>
        <Header />
      </header>
      <section>
        <NavSideBar />
      </section>
      <main>
        <div></div>
      </main>
    </div>
  );
}

export default App;
