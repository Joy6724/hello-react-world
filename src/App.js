import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search'
import ArticleTable from './components/ArticleTable'

const articles = [
  {
    id: 'a1',
    title: 'http特性分享',
    author: '叶珊珊',
    content:  '1.输入url到服务器，http的过程\n' +
              '2.http的相关特性（tcp连接等）\n' +
              '3.http简单的缓存原理讲解',
    shared: true
  },
  {
    id: 'a2',
    title: '你不知道的JavaScript--作用域（二）',
    author: '张翔',
    content:  '词法阶段\n' +
              '欺骗词法（两个机制：eval(…)和with）\n' +
              '性能\n' +
              '小结',
    shared: false
  }
]


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-body">
          <Search/>
          <ArticleTable articles={articles}/>
        </div>
      </div>
    );
  }
}

export default App;
