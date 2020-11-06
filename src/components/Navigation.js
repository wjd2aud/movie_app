import React from 'react';
import {Link} from 'react-router-dom';

import './Navigation.css';

function Navigation() {
    return (
        <div className="nav"> 
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            {/* <Link to={{pathname:'/about', state: {fromNavigation : true}}}>About</Link> */}
        </div>
    )
}
// a엘리먼트는 페이지 전체를 다시 그린다.그래서 Link컴포넌트 사용.
// Route 컴포넌트는 반드시 HashRouter 안에 포함되어야 한다.
export default Navigation
