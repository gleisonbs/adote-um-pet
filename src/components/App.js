import React from 'react';
import About from '../pages/About';
import Auth from '../pages/Auth';
import Home from '../pages/Home';
import Header from './Header';
import Layout from '../hoc/Layout';
import { Route } from 'react-router-dom';
import styles from '../styles/App.module.css';

const app = () => (
  <div className={styles.App}>
    <Layout>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/auth" component={Auth} />
    </Layout>
  </div>
);

export default app;
