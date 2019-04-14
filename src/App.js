import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import AntD from './antd'
import MaterialUI from './mui'
import Navbar from './Navbar'
import { multiply } from 'workspace-b'
import sum from 'workspace-a'

const App = () => (
  <Router>
    <Navbar />
    {sum(2, 5)}
    {multiply(2, 5)}
    <Route path="/" exact component={() => <Redirect to="/material" />} />
    <Route path="/material" exact component={MaterialUI} />
    <Route path="/ant" exact component={AntD} />
  </Router>
)

export default App
