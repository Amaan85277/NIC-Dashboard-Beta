import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import React from "react";
// import ReactDOM from "react-dom";
// import { Container, Header, List } from "semantic-ui-react";

// import pkg from 'semantic-ui-react/package.json'
// import Example from "./example";

// const App = ({ children }) => (
//   <Container style={{ margin: 20 }}>
//     <Header as="h3">This example is powered by Semantic UI React {pkg.version} 😊</Header>
//     <List bulleted>
//       <List.Item
//         as="a"
//         content="💌 Official documentation"
//         href="https://react.semantic-ui.com/"
//         target="_blank"
//       />
//       <List.Item
//         as="a"
//         content="💡 StackOverflow"
//         href="https://stackoverflow.com/questions/tagged/semantic-ui-react?sort=frequent"
//         target="_blank"
//       />
//     </List>

//     {children}
//   </Container>
// );

// // TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable
// const styleLink = document.createElement("link");
// styleLink.rel = "stylesheet";
// styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
// document.head.appendChild(styleLink);

// ReactDOM.render(
//   <App>
//     <Example />
//   </App>,
//   document.getElementById("root")
// );
