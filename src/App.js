import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDescription from './MovieDescription';



const App = () => {
  const [movies, setMovies] = useState([]);
  const [newMovie, setnewMovie] = useState({
    title:"",
    description:"",
    posterURL:"",
    rating:"",
  });
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

 const  handleChange = (event) =>{
    event.preventDefault();
    const textInput = event.target.value;
    setnewMovie({
      title:textInput,
      description:"descriptiondescription",
      posterURL:'https://www.youtube.com/watch?v=mCVXJ5Lzu8E&t=5s',
      rating:"3.5",
    });
}

  const addMovie = () => {
    setMovies([...movies, newMovie]);
  };

  const filterMovies = () => {
    return movies.filter(
      movie =>
        movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
        (!ratingFilter || movie.rating >= parseFloat(ratingFilter))
    );
  };

  return (
    <div className="container">

<h1>Movie List</h1>
<Filter
        titleFilter={titleFilter}
        ratingFilter={ratingFilter}
        onTitleChange={e => setTitleFilter(e.target.value)}
        onRatingChange={e => setRatingFilter(e.target.value)}
      />

  <BrowserRouter>
      <Routes>
          <Route path="/" element={<MovieList movies={filterMovies()} />} />
          <Route path="/movie/:title" element={<MovieDescription movies={movies} />} />
      </Routes>
    </BrowserRouter>

      <div className="add-movie">
        <h2>Add a New Movie</h2>
        <input type="text" name="name"   onChange={handleChange} />
         <button  onClick={addMovie}   >Add a movie</button>
      </div>
    </div>
  );
};

export default App;