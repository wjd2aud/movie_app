import React from 'react';
import Macaron from './Macaron';
import PropTypes from "prop-types";

// function Food(props) { //자식컴포넌트
//   return (
//     <h1>I Like {props.propsName}</h1>
//   );
// }

// function Food(props) { //구조 분해 할당
//   const {propsName} = props;
//   return (
//     <h1>I Like {propsName}</h1>
//   );
// }

// function Food({propsName}) { //구조 분해 할당
//   return (
//     <h1>I Like {propsName}</h1>
//   );
// }

function Food({propsname, propsrating, propsimage}){
  return (
    <div>
      <h1>I Love {propsname}</h1>
      <h2>{propsrating}/5.0</h2>
      <img src={propsimage} alt={propsname}/>
    </div>
  )
}

//서버에서 가져온 데이터를 저장하는 변수
//const foodLike = [];

const foodLike = [
  {
    id:1,
    name: 'macaron1',
    image:'https://i.pinimg.com/236x/b4/5c/34/b45c348539df8ada32d0332b0d4b86ef.jpg',
    rating: 5.0
  },
  {
    id:2,
    name: 'macaron2',
    image:'https://i.pinimg.com/236x/82/2f/93/822f9365ab1c8695765c0b32109bd566.jpg',
    rating: 4.9
  },
  {
    id:3,
    name: 'macaron3',
    image:'https://i.pinimg.com/236x/dc/f4/ec/dcf4ec57a74065c0280afa56634ffe3c.jpg',
    rating: 4.3
  },
  {
    id:4,
    name: 'macaron4',
    image:'https://i.pinimg.com/236x/84/cb/60/84cb60408caaf6aaa2f2aa836fe788d2.jpg',
    rating: 4.7
  },
  {
    id:5,
    name: 'macaron5',
    image:'https://i.pinimg.com/236x/08/b2/34/08b23459dd65af8ac2cce40cc2c4995f.jpg',
    rating: 5.0
  }
];


function Cake({propsname, propsrating, propsimage}){
  return (
    <div>
      <h1>{propsname}</h1>
      <img src={propsimage} alt={propsname}/>
      <h2>{propsrating}/5.0</h2>
    </div>
  )
}

//서버에서 가져온 데이터를 저장하는 변수
//const foodLike = [];

const cakeLike = [
  {
    name: 'Chocolate Cake',
    image:'https://i.pinimg.com/236x/e9/e6/2d/e9e62d1a40932f312dd11e21660c7e28.jpg',
    rating: 5.0
  },
  {
    name: 'Chocolate Cake2',
    image:'https://i.pinimg.com/236x/48/6a/9a/486a9aaab8571b0a9e512c23bab36a68.jpg',
    rating: 4.9
  },
  {
    name: 'Rainbow Cake',
    image:'https://i.pinimg.com/236x/dc/e3/2e/dce32e513ce557a951cbbe7fe15f10cb.jpg',
    rating: 4.3
  }
  
];

function App() {//부모컴포넌트
  return (
    <>
        <div>안녕하세요!!</div>
        <Macaron />
        
        {cakeLike.map(cakes => (
                                <Cake 
                                  propsname={cakes.name} 
                                  propsrating={cakes.rating}
                                  propsimage={cakes.image} 
                                />
                              ))}
        
        {foodLike.map(dish => (
                                <Food 
                                  propsname={dish.name} 
                                  propsrating={dish.rating}
                                  propsimage={dish.image} 
                                />
                              ))}

    </>
  );
}
/* map()함수 - 배열의 모든 원소마다 특정 작업을 하는 함수를 적용하고, 그 함수가 반환한 결과를 모아서 배열로 반환. */





/*부모 컴포넌트(app)에서 자식 컴포넌트(food)에 props 즉 데이터를 전달하면 데이터가 하나의 객체로 변환되어 자식 컴포넌트의 인자로 전달됨.*/

// class App extends React.Component {
//   render() {
//     return (
//       <>
//         <div>안녕하세요!!</div>
//         <Macaron />
//         <Coffee />
//         <Food propsName = {"Coffee"}/>
//         <Food propsName = "tea"/>
//         <Food propsName = "latte"/>
//         <Food propsName = "ice coffee"/>
//         <Food propsName = "cake"/>
//     </>
//     );
//   }
// }



Cake.propTypes = {
  propsrating: PropTypes.number.isRequired,
  propsname: PropTypes.string.isRequired,
  propsimage: PropTypes.string
}



export default App;
