import './App.css';
import Header from './Header';
import RecommendedVideo from './RecommendedVideo';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />

        <div className="app__page">
          {/* sidebar */}
          <Sidebar />

          {/* recommendation */}
          <RecommendedVideo />
        </div>
      </header>
    </div>
  );
}

export default App;
