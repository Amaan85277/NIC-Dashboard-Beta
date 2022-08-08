import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import { Form, Button, Carousel, InputGroup } from "react-bootstrap";
import { User, Lock, LogIn, LogOut, Calendar } from 'react-feather';
import DatePicker from "react-datepicker";
import "../node_modules/react-datepicker/dist/react-datepicker.css";
import faker from 'faker';
import _ from 'lodash';
import { Dropdown } from 'semantic-ui-react';
import "./containers/Login.css";
import Routes from "./Routes";
import logo_1 from './images/logo-123.png';
import logo_2 from './images/logo-2.png';
import logo_3 from './images/onorc.png';
import slide_1 from './images/slider/slide-1.jpg';
import slide_2 from './images/slider/slide-2.jpg';
import slide_3 from './images/slider/slide-3.jpg';
import slide_4 from './images/slider/slide-4.jpg';
import slide_5 from './images/slider/slide-5.jpg';
import './App.css';
//import './Semantic.css';

const addressDefinitions = faker.definitions.address
const stateOptions = _.map(addressDefinitions.state, (state, index) => ({
  key: addressDefinitions.state_abbr[index],
  text: state,
  value: addressDefinitions.state_abbr[index],
}))

//var Select = require('react-select');
const countryOptions = [
  { key: 'af', value: 'af', text: 'Afghanistan' },
  { key: 'ax', value: 'ax', text: 'Aland Islands' },
  { key: 'al', value: 'al', text: 'Albania' },
  { key: 'dz', value: 'dz', text: 'Algeria' },
  { key: 'as', value: 'as', text: 'American Samoa' },
  { key: 'ad', value: 'ad', text: 'Andorra' },
  { key: 'ao', value: 'ao', text: 'Angola' },
  { key: 'ai', value: 'ai', text: 'Anguilla' },
  { key: 'ag', value: 'ag', text: 'Antigua' },
  { key: 'ar', value: 'ar', text: 'Argentina' },
  { key: 'am', value: 'am', text: 'Armenia' },
  { key: 'aw', value: 'aw', text: 'Aruba' },
  { key: 'au', value: 'au', text: 'Australia' },
  { key: 'at', value: 'at', text: 'Austria' },
  { key: 'az', value: 'az', text: 'Azerbaijan' },
  { key: 'bs', value: 'bs', text: 'Bahamas' },
  { key: 'bh', value: 'bh', text: 'Bahrain' },
  { key: 'bd', value: 'bd', text: 'Bangladesh' },
  { key: 'bb', value: 'bb', text: 'Barbados' },
  { key: 'by', value: 'by', text: 'Belarus' },
  { key: 'be', value: 'be', text: 'Belgium' },
  { key: 'bz', value: 'bz', text: 'Belize' },
  { key: 'bj', value: 'bj', text: 'Benin' },
];

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

function App() {

  var username = "";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useHistory();
  let [isLoggedIn, setIsLoggedIn] = useState(checkLogin);
  let [isState, setState] = useState("none");
  let [isStateSelected, setStateSelected] = useState(true);
  let [isDestrict, setDistrict] = useState("none");
  const [startDate, setStartDate] = useState(new Date());
  //this.handleAll = this.handleAll.bind(this);
  //let [username, setUsername] = useState("");

  function gotoInterState(){
    navigate.push('/interstate');
  }

  function gotoRationCard(){
    navigate.push('/rationcard')
  }
  function gotoIntraState(){
    navigate.push('/intrastate')
  }
  function gotoAllIndia(){
    navigate.push('/allindia')
  }

  function checkLogin() {
    var login = false;

    if (window.sessionStorage.getItem("email")) {
      login = true;
    } else {
      login = false;
    }
    console.log(login);
    return login;
  }

  const handleLogout = () => {
    window.localStorage.clear();
    window.sessionStorage.clear();
    setIsLoggedIn(false);
    navigate.push('/');
  };

  const showState = () => {
    setState("inline-block");
    setDistrict("inline-block");
    setStateSelected(false);
  }

  // this.handleAll = (evt) => {
  //   alert("Clicked: ", evt);
  //   //this.setState({ checkboxChecked: evt.target.checked });
  // }

  const showDistrict = () => {
    setState("inline-block");
    setDistrict("inline-block");
  }

  const showAll = (e) => {
    setState("none");
    setDistrict("none");
    setStateSelected(true);
  }

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem("loggedIn", true);
    sessionStorage.setItem("email", email);
    setIsLoggedIn(true);
    navigate.push('Charts');
  }


  if (isLoggedIn === true) {
    if (username.length <= 0) {
      var param = window.sessionStorage.getItem("email").split("@");
      username = param[0].charAt(0).toUpperCase() + param[0].slice(1);;
    }
    console.log("Login true: ", isLoggedIn);
    return (
      <>
        <div className="App">

          <div className="row m-0">
            <div className="col-md-12">
              <div className="d-flex justify-center align-center">
                <div>
                  <img src={logo_1} alt="logo 1" title="logo 1" />
                </div>
                <div>
                  <img src={logo_2} alt="logo 2" title="logo 2" />
                </div>
                <div>
                  <img src={logo_3} alt="logo 3" title="logo 3" />
                </div>
              </div>
            </div>
            <div className="menu">
              <Navbar collapseOnSelect expand="md" className="navbar-dark">
                <LinkContainer to="/charts">
                  <Navbar.Brand>
                    Home
                  </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                  <Nav activeKey={window.location.pathname}>
                    <LinkContainer to="/example">
                      <Nav.Link>Example</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/states">
                      <Nav.Link>States</Nav.Link>
                    </LinkContainer>
                    <Nav.Link>Welcome {username}</Nav.Link>
                    <Nav.Link onClick={handleLogout}><LogOut width="16px" /> logout</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </div>

          <div className="container mt-3 mb-3">
            <div className="row mx-0 my-3">
              <div className="col-md-3">
                <div class="d-grid mx-auto">
                  <button onClick={gotoInterState} className="btn btn-lg btn-success">Inter State Portability Analysis</button>
                </div>
              </div>
              <div className="col-md-3">
                <div class="d-grid mx-auto">
                  <button onClick={gotoIntraState} className="btn btn-lg btn-success">Intra State Portability Analysis</button>
                </div>
              </div>
              <div className="col-md-3">
                <div class="d-grid mx-auto">
                  <button className="btn btn-lg btn-success">Other Sale Analysis</button>
                </div>
              </div>
              <div className="col-md-3">
                <div class="d-grid mx-auto">
                  <button onClick={gotoRationCard} className="btn btn-lg btn-success">Ration Card Analysis</button>
                </div>
              </div>

              <div className="col-md-12">
                <div className="bg-light w-100 mt-3">
                  <div className="row m-0">
                    <div className="col-md-12 d-flex justify-content-start myOptions">
                      <div>
                        <input type="radio" id="name_1" onChange={showAll} name="drop" value="1" /> <label for="name_1">All India</label>
                      </div>
                      <div>
                        <input type="radio" id="name_2" onChange={showState} name="dropState" value="2" /> <label for="name_2">States</label>
                        <Dropdown placeholder='State' style={{ display: isState, marginLeft: "10px", minHeight: "0.5em" }} search selection options={stateOptions} />
                      </div>
                      <div>
                        <input type="radio" id="name_3" disabled={isStateSelected} onChange={showDistrict} name="dropDistrict" value="3" /> <label for="name_3">District</label>
                        <Dropdown placeholder='District' style={{ display: isDestrict, marginLeft: "10px", minHeight: "0.5em" }} search selection options={countryOptions} />
                      </div>
                      <div>
                        <Calendar /><DatePicker style={{display:'none'}} selected={startDate} onChange={(date: Date) => setStartDate(date)} />
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Routes />
          </div>
        </div>
      </>
    );
  } else {
    console.log("Login false: ", isLoggedIn);
    return (
      <div className="App">
        {/* <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
          <LinkContainer to="/">
            <Navbar.Brand className="font-weight-bold text-muted">
              <img src={logo} alt="logo" title="logo" /> Home
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav activeKey={window.location.pathname}>
              <LinkContainer to="/signup">
                <Nav.Link>Signup</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes /> */}

        <div className="row m-0">
          <div className="col-md-12">
            <div className="d-flex justify-center align-center">
              <div>
                <img src={logo_1} alt="logo 1" title="logo 1" />
              </div>
              <div>
                <img src={logo_2} alt="logo 2" title="logo 2" />
              </div>
              <div>
                <img src={logo_3} alt="logo 3" title="logo 3" />
              </div>
            </div>
          </div>
          <div className="menu">
            <div className="menu-left"></div>
            <div className="menu-right"></div>
          </div>
        </div>

        <div className="d-flex border-bottom bg-light">
          <div className="col-md-8">
            <Carousel variant="dark">
              <Carousel.Item>
                <img className="d-block w-100" src={slide_1} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={slide_2} alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={slide_3} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={slide_4} alt="Fourth slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={slide_5} alt="Fifth slide" />
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="Login col-md-4">

            <div class="row m-0 text-start">
              <div class="col-md-12 p-5">
                <h2><User /> Login</h2>
                <Form onSubmit={handleSubmit}>
                  <InputGroup className="mb-3" size="lg" controlId="email">
                    <InputGroup.Text id="basic-addon1">
                      <User />
                    </InputGroup.Text>
                    <Form.Control
                      autoFocus
                      type="email"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </InputGroup>

                  <InputGroup className="mb-3" size="lg" controlId="password">
                    <InputGroup.Text id="basic-addon2">
                      <Lock />
                    </InputGroup.Text>
                    <Form.Control
                      type="password"
                      value={password}
                      placeholder="Password"
                      aria-label="Password"
                      aria-describedby="basic-addon2"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </InputGroup>

                  <Button block size="lg" type="submit" disabled={!validateForm()}>
                    <LogIn /> Login
                  </Button>
                </Form>
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default App;
