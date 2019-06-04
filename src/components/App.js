import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import HomePage from './HomePage'
import Demo1 from './Demo1'
import Demo2 from './Demo2'
import Demo3 from './Demo3'

const PrimaryLayout = () => (
  <div className="primary-layout">
    <PrimaryHeader />
    <main>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/demo1" exact component={Demo1} />
        <Route path="/demo2" component={Demo2} />
        <Route path="/demo3" exact component={Demo3} />
        <Redirect to="/" />
      </Switch>
    </main>
  </div>
)

const PrimaryHeader = () => <div>Header</div>

const App = () => (
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
)

export default App