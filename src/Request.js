
const requests = {
  nowPlaying:`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB}&language=en-US&page=1`,
  popular: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB}&language=en-US&page=1`,
  upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB}&language=en-US&page=1`,
  trending: `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_TMDB}`,
  topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB}&language=en-US&page=1`,
  horror: `https://api.themoviedb.org/3/movie/horror?api_key=${process.env.REACT_APP_TMDB}&language=en-US&page=1`
};

export default requests;
