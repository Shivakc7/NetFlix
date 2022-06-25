const key = "f7c220ed5f7c946194deb1732cc39f1d";

// https://api.themoviedb.org/3/movie/550?api_key=f7c220ed5f7c946194deb1732cc39f1d

const requests = {
  nowPlaying:`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
  popular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  trending: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
  topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  horror: `https://api.themoviedb.org/3/movie/horror?api_key=${key}&language=en-US&page=1`
};

export default requests;
