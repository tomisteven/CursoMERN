import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"



import "./App.scss"

//importamos las rutas
import routes from './config/routes';




function App() {
  return (
    <Router>
      <Routes>
        
            {routes.map((route, index) => (
              <Route path={route.path} key={index} element={<RouteWithSubRoutes route={route} />} />
            ))}
              
        
      </Routes>  
    </Router>
    

  );
}

function RouteWithSubRoutes(route) {
  console.log(route)
  return (
    <Routes>
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.component {...props} routes={route.routes} />}   
    />
    </Routes>
  )
}



export default App;
