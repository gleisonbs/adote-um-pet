import React from 'react';
import Header from '../Header'
import Home from '../../components/Home/Home'
import Layout from '../../hoc/Layout/Layout'
import classes from './App.module.css'

const app = () => (
  <div className={classes.App}>
    <Layout>
      <Header />
      <Home />
    </Layout>
  </div>
);

export default app;