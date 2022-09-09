import { Header, MainContainer } from "./components";


function App() {
  return (
    <div className="App">
      <div className="w-screen h-auto flex flex-col bg-bckGroundColor">
        <Header />
        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full border-2">
          <MainContainer />
        </main>
      </div>
    </div>
  );
}

export default App;
