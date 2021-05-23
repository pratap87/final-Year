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

const Garrage = () => {
  return(
  <div className="cont">
        <h1>Garrages Near You</h1>
        <div className="cont-list">
          <Card
            img="repair-mechanism.png"
            name="Bajaj Auto Mobiles"
            description="lorem"

          />
           <Card
            img="garage.png"
            name="Bajaj Auto Mobiles"
            description="lorem"

          />
           <Card
            img="img1.jpg"
            name="Bajaj Auto Mobiles"
            description="lorem"

            />
        </div>
    </div>
  )
      
}

const  App=()=> {
  return(
    
   
      <Router>
      <Switch>
        
        <Route exact path="/">
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
            <Garrage />
             </Layout>
          </Route>
        <Route exact path="/services">
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
            <Service />
             </Layout>
          </Route>
          <Route path="/contact">
             <Appointment />   
          </Route>
    
        <Route path="/work">
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
            <HowItWork />
            </Layout>
        </Route>


        </Switch>
        </Router>
  
  )
}

export default App;
