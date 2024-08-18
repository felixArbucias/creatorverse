import React from "react";
import './App.css';

import {Button, Container, Navbar} from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowCreators from './pages/ShowCreators';
import AddCreator from './pages/AddCreators';
// <Route path="/AddCreators" element={<AddCreator/>}/>
function App() {
  return (
      <BrowserRouter >
          <div className="App">
              <Navbar>
                  <Container className="d-flex flex-column align-items-center">
                      <h1 className="bubbly-title" >CREATORVERSE </h1>
                      <br></br>
                        <div className={"mt-4"}>
                          <Link to="/ShowCreators">
                              <Button className={"mx-2"}>View All Creators</Button>
                          </Link>
                          <Link to="/AddCreators">
                              <Button className={"mx-2"}>Add Creator</Button>
                          </Link>
                        </div>
                  </Container>
              </Navbar>
              <Routes>
                  <Route path="/AddCreators" element={<AddCreator/>}/>
                  <Route path="/ShowCreators" element={<ShowCreators/>}/>
              </Routes>

          </div>
      </BrowserRouter>

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from "react-bootstrap";
function App() {
  return (
      <Navbar>
        <Container>
            <Nav.Item>CREATORVERSE</Nav.Item>
        </Container>
      </Navbar>


  );
}

export default App;
