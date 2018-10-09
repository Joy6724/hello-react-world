import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ArticleList from './components/ArticleList/ArticleList';
import ArticleDetail from './components/ArticleList/ArticleDetail'

const ArticleRoute = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/list">list</Link>
        </li>
      </ul>
      <Route exact path="/" component={App} />
      <Route path="/list" component={ArticleList} />
      <Route path="/list/detail/:id" component={ArticleDetail} />
    </div>
  </Router>
)

ReactDOM.render(<ArticleRoute />, document.getElementById('root'));

registerServiceWorker();
