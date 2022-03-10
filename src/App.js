// Import data
import { postings } from './postings';

// Import components
import './App.css';
import Searchbar from './Components/Searchbar';
import Directory from './Components/Directory';
import Gallery from './Components/Gallery';
import Sidebar from './Components/SideBar';

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
