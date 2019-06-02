import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import HomePage from './HomePage'
import About from './About'

const PrimaryLayout = () => (
  <div className="primary-layout">
    <PrimaryHeader />
    <main>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={About} />
        <Route path="/users/:userId" component={UserProfilePage} />
        <Route path="/products" exact component={BrowseProductsPage} />
        <Route path="/products/:productId" component={ProductProfilePage} />
        <Redirect to="/" />
      </Switch>
    </main>
  </div>
)

// const HomePage = () => <div>Home Page</div>
// const BrowseUsersPage = () => <div>Users Page</div>
const UserProfilePage = () => <div>Users Page</div>
const BrowseProductsPage = () => <div>Users Page</div>
const ProductProfilePage = () => <div>UserAddPage</div>
const PrimaryHeader = () => <div>Header</div>

const App = () => (
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
)

export default App