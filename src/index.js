import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import 'element-theme-default';
import Index from './js/templates/index';
import Cart from './js/templates/cart';
import Mypage from './js/templates/mypage/index';
import Change from './js/templates/mypage/change';
import Delivery from './js/templates/mypage/delivery';
import Refusal from './js/templates/mypage/refusal';
import ChangeCard from './js/templates/mypage/change_card';
import Login from './js/templates/mypage/login';
import Error from './js/templates/mypage/error';
import Entry from './js/templates/entry/index';
import EntryConfirm from './js/templates/entry/confirm';
import EntryComplete from './js/templates/entry/complete';
import Contact from './js/templates/contact/index';
import ContactConfirm from './js/templates/contact/confirm';
import Privacy from './js/templates/privacy';
import Notice from './js/templates/notice';
import Order from './js/templates/order';
import Faq from './js/templates/faq';
import Archives from './js/templates/archives';
import ProcedureAddress from './js/templates/procedure/address';
import ProcedurePayment from './js/templates/procedure/payment';
import * as serviceWorker from './serviceWorker';

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

ReactDOM.render(
  <BrowserRouter>
    <React.Fragment>
      <Route component={ScrollToTop} />
      <Switch>
        <Route exact path='/' component={Index} />
        <Route path='/cart' component={Cart} />
        <Route path='/mypage/change' component={Change} />
        <Route path='/mypage/delivery' component={Delivery} />
        <Route path='/mypage/refusal' component={Refusal} />
        <Route path='/mypage/change_card' component={ChangeCard} />
        <Route path='/error' component={Error} />
        <Route path='/mypage/login' component={Login} />
        <Route path='/mypage' component={Mypage} />
        <Route path='/entry/complete' component={EntryComplete} />
        <Route path='/entry/confirm' component={EntryConfirm} />
        <Route path='/entry' component={Entry} />
        <Route path='/contact/confirm' component={ContactConfirm} />
        <Route path='/contact' component={Contact} />
        <Route path='/privacy' component={Privacy} />
        <Route path='/notice' component={Notice} />
        <Route path='/order' component={Order} />
        <Route path='/faq' component={Faq} />
        <Route path='/archives' component={Archives} />
        <Route path='/procedure/address' component={ProcedureAddress} />
        <Route path='/procedure/payment' component={ProcedurePayment} />
      </Switch>
    </React.Fragment>
    {/*
    <Route path="/news/:id" component={} /> */}
  </BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
