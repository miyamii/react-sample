import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom'
import './index.css';
import Index from './js/templates/index';
import Privacy from './js/templates/privacy';
import Notice from './js/templates/notice';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
  <switch>
    <Route exact path='/' component={Index} />
    <Route path='/privacy' component={Privacy} />
    <Route path='/notice' component={Notice} />
  </switch>
    {/* <Route path='/cart' component={Cart} />
    <Route path='/mypage' component={Mypage} />
    <Route path='/entry' component={Entry} />
    <Route path='/login' component={Login} />
    <Route path='/faq' component={Faq} />
    <Route path='/privacy' component={Privacy} />
    <Route path='/contact' component={Contact} />
    <Route path='/notice' component={Notice} />
    <Route path='/order' component={Order} />
    <Route path="/news/:id" component={} /> */}
  </BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
