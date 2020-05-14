# DWChallenge

This repo features DW Challenge of creating an ISOMORPHIC application using Node.Js, React.Js and Redux.<br/>

<b>INSTRUCTIONS FOR SETUP & LAUNCHING APPLICATION:</b><br/>
★ Download and extract or checkout the repository<br/>
★ Use npm install to download all the dependencies<br/>
★ Once, installed use the command npm start to launch the application<br/>
★ By default, application launches at port 3000<br/>
★ To access the application, open your favourite browser and navigate to http://localhost:3000<br/>
★ Application should be up and running<br/> <b>Note: </b>If not please, restart the server (Re issue the command npm start)<br/>

<b>TOOLS USED:</b><br/>
★ Axios - Thin HTTP Client - used to make http requests to get the product data from PIM<br/>
★ Babel - ES2015 transpiling, JSX to vanilla javascript conversion<br/>
★ Express - WebApplication framework to listen to requests and send the response<br/>
★ NPM RUN ALL - Used to execute more than one command to trigger webpack and start the server in application<br/>
★ React - Used to build front end for server side rendering<br/>
★ Redux - Used for state management in the application<br/>
★ Redux Thunk - Used to handle the asynchronous calls in the application<br/>
★ Serialize Javascript - To mitigate XSS attacks on server<br/>
★ Webpack - webpack both on client and server a module bundler used to create bundles by making use of dependency graph<br/>
★ React Helmet - To add Search Engine Optimization tags to the React Components<br/>

<b>PROJECT STRUCTURE:</b><br/>
★ Server bundle.js is available under build folder<br/>
★ Client bundle.js is available under public folder<br/>
★ The client folder under src directory contains <br/>
    <ul>
   <li>Actions - All the react action creators   used in the challenge.<br/>
    <ul>
    <li>index.js - Actions to get the product data are defined here</li>
    </ul>
    </li>
   <li>components - All the react components used in the challenge.<br/>
    <ul>
    <li>Header.js - Header Component</li>
      <li>ProductDetails.js - To display the product information page</li>
      <li>Products.js - To display the homepage</li>
      <li>NotFound.js - To display 404 error pages</li>
    </ul>
    </li>
  <li>reducers - All the react reducers used in the challenge.<br/>
    <ul>
    <li>index.js - combined reducer</li>
      <li>products.js - Pure function related to the product updates</li>
    </ul>
    </li>
   </ul>
   ★ The helpers folder contains helper functions used through out the challenge.<br/>
    <ul><li>createStore.js - Used for creating the store required for react application</li>
    <li>renderer.js - Used for converting the rendered application to plain html to be sent to the browser</li>
     </ul><br/>
   ★ index.js - Express Server that listens for requests at port 3000 <br/>
   ★ package-lock.json - Dependency locking for the application<br/>
   ★ package.json - List of dependencies and scripts used for the challenge<br/>
   ★ webpack.base.js - Common webpack configuration for both client and server<br/>
   ★ webpack.client.js - Client specific webpack configuration<br/>
   ★ webpack.server.js - Server specific webpack configuration<br/>
