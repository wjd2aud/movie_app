import React from 'react'
import './App.css';
import {HashRouter, Route} from 'react-router-dom'

import Home from './routes/Home';
import About from './routes/About';
import Navigation from './components/Navigation';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />{/* exact={true} 정확하게 /만 해라 */}
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App

// SPA (single page application)
// router라우터는 사용자가 입력한 URL을 통해 특정 컴포넌트를 불러옴
// Route에는 2가지 props를 전달, URL을 위한 path props 와 URL에 맞는 컴포넌트를 불러주기 위한 component props

// Route컴포넌트는 반드시 HashRouter 안에 포함되어야 한다. 

// es7 react다운 받고
// 클래스형 -rcc탭
// 함수형 - rfce탭