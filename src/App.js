// Import data
import { postings } from './postings';

// Import components
import './App.css';
import Searchbar from './Components/searchbar';
import Directory from './Components/directory';
import Gallery from './Components/gallery';
import Sidebar from './Components/sideBar';

const App = () => {
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        {/* Your content will go here! */}
        <Searchbar />
        <Directory />
        <Sidebar />
        <Gallery postings={postings}/>
      </div>
    </div>
  );
}

export default App;
