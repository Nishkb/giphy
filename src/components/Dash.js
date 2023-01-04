import ReactGiphySearchbox from 'react-giphy-searchbox'

function App() {
  return (
    <div className="App">
      <header>
        <h1>React Giphy Searchbox</h1>
      </header>

      <div className = 'searchboxWeapper'>
        <ReactGiphySearchbox

        api key = "4zAxQA26s1TWqifZlk1haOUF8up1wB6I"
        onSelect = {(item) => console.log(item)}
        mansoryConfig = {[
          {columns: 2, imageWidth: 110, gutter: 5},
          {mq: "700px", columns: 3, imageWidth: 120, gutter: 5}
        ]}
      />
        
    </div>
    </div>
  );
}

export default App;