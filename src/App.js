import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>LETS BUILD NETFLIX CLONE</h1>
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
