//Cake 클래스형 컴포넌트
// <h1>케이크 가격<h1>
// <버튼>누르면 할인 가격 나오도록 30%할인

import React from 'react'

class Cake extends React.Component{

    state = {
        cake :23400,
        sale : 0,
    }
    sale = () =>{
        this.setState(
            current =>({
                sale : Math.floor(current.cake*0.7)
            })
        )
    }
    
 render() {
    return(

        <div>
            <h1>Cake 가격 : {this.state.cake}</h1>
            <h2>할인 가격 : {this.state.sale}</h2>
            <button onClick={this.sale}>30%할인</button>
        </div>
    );
 }
}

export default Cake;