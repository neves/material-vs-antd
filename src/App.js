import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import AntD from './antd'
import MaterialUI from './mui'
import Navbar from './Navbar'

const App = () => (
  <Router>
    <Navbar />
    <Route path="/" exact component={() => <Redirect to="/material" />} />
    <Route path="/material" exact component={MaterialUI} />
    <Route path="/ant" exact component={AntD} />
  </Router>
)

export default App
