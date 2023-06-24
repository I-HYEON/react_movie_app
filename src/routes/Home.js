import {useState, useEffect} from 'react';
import Movie from '../components/Movie'

function Home() {
    const [loading, setLoading] = useState(true); //로딩중 판별 boolean 담아둘 변수
    const [movies, setMovies] = useState([])
    const getMovies = async() => {
      const response = await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
      );
      const json = await response.json();
      setMovies(json.data.movies);  //받아온 movies 데이터를 movies에 넣는다.
      setLoading(false);  //로딩이 끝났기 때문에 상태를 변경해준다.
    }
    useEffect((()=> {  //useEffect를 사용해서 페이지가 렌더될 때 한번만 함수를 실행한다.
      getMovies();
    }),[])
        
    return (
      <div>
  
        {loading ? (<h1>loading...</h1>) : (
          <div>
            {movies.map((movie)=>(
              <Movie
                key={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
  
      </div>
    );
}

export default Home;