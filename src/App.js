import React, { useState, useEffect } from 'react'
 import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Appointment from './components/Appointment'
import Header from './components/Header'
import Maincard from './components/Maincard'
import Layout from './components/Layout'
import Button from './components/Button'
import Service from './components/Services'
import Card from './components/card'
import HowItWork from './components/HowItwork'
import firebase from "firebase";
import cardDetails from './components/CardDeatils'

const Garrage = () => {
  return(
  <div className="cont">
        <h1>Garrages Near You</h1>
        <div className="cont-list">
          <Card
            img="repair-mechanism.png"
            name="Bajaj Auto Mobiles"
            description="Ghaziabad"
            

          />
           <Card
            img="garage.png"
            name="Bajaj Auto Mobiles"
            description="muradnagar"

          />
           <Card
            img="img1.jpg"
            name="Bajaj Auto Mobiles"
            description="morta"

            />
        </div>
    </div>
  )
      
}

const App = () => {
    const firebaseApp = firebase.apps[0];
  return(
    
   
    <Router>
      
      <Layout>
        
       <div className="Top">
        <div className="Top-bg"></div>
        <div className="container">
          <h1 className="Top-title">
            Top notch service is our main moto
          </h1>
          <Button text="MAKE AN APPOINTMENT" />
        </div>
      </div>
      <Switch>
        
        <Route exact path="/" component={Garrage}/>
        
        <Route exact path="/services" component={Service}/>
       
             
          <Route path="/contact" component={Appointment}/>
              
    
        <Route path="/work" component={HowItWork}/>
         <Route  path="/detail" component={cardDetails}/>   
        </Switch>
              </Layout>
        </Router>
  
  )
}

export default App;
