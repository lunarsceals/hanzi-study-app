// import Button from "./component/ui/Button";

import Header from "./component/ui/Header";
import NavSideBar from "./component/ui/NavSideBar";
import Footer from "./component/ui/Footer";
import Flashcard from "./component/card/Flashcard";

function App() {
  return (
    <div className="min-h-dvh bg-light-background overflow-hidden">
      <header>
        <Header />
      </header>
      <section>
        <NavSideBar />
      </section>
      <main className="flex items-center justify-center">
        <Flashcard />
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
