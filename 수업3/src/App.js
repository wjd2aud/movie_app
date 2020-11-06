import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component {
  state = {
    isLoading:true,
    movies: [],
  }

  getMovies = async () => {
    const {
      data:{
        data:{movies},
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count');
    // console.log(movies.data.data.movies);
    this.setState({movies, isLoading: false});//키:키값 이름이 동일하면 하나만 써도 됨
  }
  //axios는 네트워크를 사용함으로 느리다.
  //그래서 axios를 별도의 함수로 만들어서
  //자바스크립트에게 이 함수는 시간이 필요하고(async) 즉 이 함수는 동기이다,
  //axios.get()의 실행 완료를 기다려달라고 (await)알려줘야함
  
  
  componentDidMount(){
    // setTimeout(() => {
    //   this.setState({isLoading : false});
    // },6000)
    this.getMovies();
  }
  //axios로 영화 api를 가져오겠다.
  
  render() {
    const {isLoading, movies} = this.state;//구조 분해 할당
    return(
     <div>{isLoading ? 'Loading...' : 
      movies.map(movie => ( <Movie 
                              id={movie.id}
                              year={movie.year}
                              title={movie.title}
                              summary={movie.summary}
                              poster={movie.medium_cover_image}
                              genre={movie.genres}
      />))
     }</div>//삼항연산자
    );
  }
}

export default App;

//영화데이터를 가져오려면 axios사용
//npm install axios