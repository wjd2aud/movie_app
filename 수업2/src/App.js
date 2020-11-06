import React from 'react';
import Cake from './Cake';

class App extends React.Component {

  constructor(props) {
    super(props);
    console.log('constructor함수는 클래스형 컴포넌트가 생성할때 호출됨')
  }

  componentDidMount() {
    console.log('componentDidMount함수는 컴포넌트가 처음 화면에 그려지면 실행되는 함수')
  }
  
  componentDidUpdate(){
    console.log('componentDidUpdate함수는 화면이 새로 그려지면 즉 업데이트 되면 실행되는 함수')
  }
  
  componentWillUnmount(){
    console.log('componentWillUnmount함수는 컴포넌트가 죽을때 실행되는 함수')
  }
  
  state={
    count: 0,
    sum:0,
    avg:0,
  };
  
  add = () => {
    console.log('더하기');
    this.setState(
        current => ({ //current는 this.state
          count: current.count + 1,
          sum: current.sum + 1,
          avg: current.avg + 1,
        })
      
      );
  }

  minus = () => {
    console.log('빼기');
    this.setState(
        current => ({
          count: current.count -1
        })
      );
  }
  
  render() {
    return(
      <div>
        <h1>현재 숫자는 {this.state.count} 입니다.</h1>{/* //this.state는 현재클래스에서 선언된 state를 의미함. */}
        <button onClick={this.add}>더하기</button>
        <button onClick={this.minus}>빼기</button>

        <Cake />
      </div>
    );
  }
}

// state: 컴포넌트의 상태state를 저장하고 변경할 수 있는 데이터 동적데이터, 변경될 가능성이 있는 데이터를 다룰때 사용, 클래스형 컴포넌트에서 사용하는 개념, 객체형 데이터
//setState()함수를 사용해서 변경해야함
//setState()함수가 동작ㅎ면 => state가 새로운값으로 바뀌고 -> 이어서 render()함수를 동작시켜 -> 화면을 업데이트 시킴
export default App;
