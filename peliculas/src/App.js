import './App.css';
import Blog from './Blog'
import MovieList from './MovieList';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {

  return (
    <Router>
			<Routes>
				<Route path="/" element={<MovieList/>}/>
				<Route path="/blog" element={<Blog/>}/>
			</Routes>
		</Router>
  );
}

export default App;
