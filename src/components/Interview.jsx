import React from 'react';
import { Link } from 'react-router-dom';

export default function Interview() {
  return (
    <div>
      <p className='heading'>
      <Link to ='/' className='text'>Home</Link>
      <Link to='/interview' className='text'>REACT-IP DAY2</Link> 
      </p> 
      <h2 style={{textAlign:"center"}}>Interview Preparation Day2</h2>
      <h4>1.What is the Difference between react and react native? Which one is library or framework?</h4>
      <p>React:</p>
      <p>1.The ReactJS initial release was in 2013.</p>
      <p>2.It is used for developing web applications.</p>
      <p>3.It can be executed on all platforms.</p>
      <p>4.It uses a JavaScript library and CSS for animations.</p>
      <p>5.It uses React-router for navigating web pages.</p>
      <p>6.It uses HTML tags.</p>
      <p>7.It can use code components, which saves a lot of valuable time.</p>
      <p>8.It provides high security.</p>
      <p>9.In this, the Virtual DOM renders the browser code.</p>
      <p>React Native:</p>
      <p>1.The React Native initial release was in 2015.</p>
      <p>2.It is used for developing mobile applications.</p>
      <p>3.It is not platform independent. It takes more effort to be executed on all platforms.</p>
      <p>4.It comes with built-in animation libraries.</p>
      <p>5.It has built-in Navigator library for navigating mobile applications.</p>
      <p>6.It does not use HTML tags.</p>
      <p>7.It can reuse React Native UI components & modules which allow hybrid apps to render natively.</p>
      <p>8.It provides low security in comparison to ReactJS.</p>
      <p>9.In this, Native uses its API to render code for mobile applications.</p>
      <h4>2.What is the package name you are using for routing</h4>
      <p>react-router-dom</p>
      <p>React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package.</p>
      <h4>3.Routing Implementation</h4>
      <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.</p>
      <h4>4.How do you switch/navigate form one component to another in React?</h4>
      <p>Step 1: Create a basic react app using the following command in your terminal.</p>
      <p>npx create-react-app prname</p>
      <p>Step 2: Make different pages for routing. Here, We are going to create different components for our react-app. So that we route over them for demonstration.</p>
      <p>Components: Home Page, About Page, ContactUs Page.</p>
      <p>Step 3: Install react-router-dom package.</p>
      <p>npm i react-router-dom</p>
      <p>Step 3: Implement routing using the react-router-dom package. Here, We are going to implement the react-router-dom package in our react-app. To implement this, We have to import some components from the react-router-dom package i.e.  BrowserRouter, Switch, Route, and Redirect.</p>

      <pre>
         import  BrowserRouter , 
          Route, Routes from "react-router-dom";
      </pre>
      <p>BrowserRouter: It uses the HTML5 history API to keep the UI in sync with the URL.</p>
       <p> Route: Its responsibility is to render UI, when its path matches the current URL.</p>
       <p>Step 4: After implementing routing in App.js file, We have to give the routing end points at user side. So, We are going to give the routing endpoints in Home.jsx file.</p>
       <p>Step to run the application: Open the terminal and run the following command.</p>
       <p>npm start</p>
       <h4>5.What is lazy loading in react ?</h4>
       <p>Lazy loading is a strategy that delays the loading of some assets (e.g., images) until they are needed by the user based on the user's activity and navigation pattern. Typically, these assets are only loaded when they are scrolled into view.</p>
       <p>Lazy loading can occur on different moments in the application, but it typically happens on some user interactions such as scrolling and navigation.</p>
       <h4>6.Difference b/w Stateful and stateless Component</h4>
       <p>both types of components can use props.</p>
       <p>Stateful:</p>
       <p>the class component can be stateless or stateful</p>
       <p>Stateful components are those components which have a state. The state gets initialized in the constructor. It stores information about the component's state change in memory. It may get changed depending upon the action of the component or child components.</p>
       <p>stateful component can render both props and state</p>
       <p>stateful components, the props and state are rendered like this.props.name and this.state.name respectively. </p>
       <p>stateful component render depends upon the value of the state</p>
       <p>Stateless:</p>
       <p>A functional component is always a stateless component</p>
       <p>Stateless components are those components which don't have any state at all, which means you can't use this. setState inside these components. It is like a normal function with no render method. It has no lifecycle, so it is not possible to use lifecycle methods such as componentDidMount and other hooks.</p>
       <p>A stateless component can render props</p>
       <p>stateless components, the props are displayed like props.name</p>
       <p>A stateless component renders output which depends upon props value</p>

       
       

    </div>
  )
}
