import { HttpResponse, http } from 'msw';
// Mocka en "enkel databas" för att använda i våra tester
const mockedMovies = [
  {
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2NmMjljYmYtYmUwMy00OTk3LTg1ZTgtNmE0ODIxYmY5YWQxXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg',
    Title: 'Pippi in the South Seas',
    Type: 'movie',
    Year: '1970',
    imdbID: 'tt0066227',
  },
  {
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZTk1MWJmMzEtMTkzYi00MjY3LTkxYjMtYTZmMWYyNDQ5MmNiXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg',
    Title: 'Pippi Longstocking',
    Type: 'movie',
    Year: '1969',
    imdbID: 'tt0366905',
  },
];

export const handlers = [
  http.get('http://www.omdbapi.com/?apikey=37fe945a&s=pippi', () => {
    return HttpResponse.json({
      Response: 'True',
      Search: mockedMovies,
      totalResults: '2',
    });
  }),
];
