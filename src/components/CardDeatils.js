import React,{useState,useEffect} from 'react'
import './card-details.css'
 import { Select} from 'antd';
import image from '../photos/19396.jpg';
 
import 'antd/dist/antd.css';
import db from '../firebase.config';
const CardDeatils = () => {
  const shopdetail = db.ref('Shop-detail')
  const Bikeref = db.ref('Bike')
  const [bname,setbname]=useState('')
  const [data, setData] = useState([])
  const [service,setservice]=useState([])
  const [bikeData,setBikeData]=useState([])
  

   useEffect( () => {
    shopdetail.on('value',(snapshot) => {
      if (snapshot.exists()) {
        
        setData(snapshot.val())
      }
      else {
        console.log("no data")
      }
    })
     
     Bikeref.on('value', (snapshot) => {
       if (snapshot.exists())
       {
          
         setBikeData(snapshot.val())
       }
       else {
               console.log("no data")
       }
   })  
    }, [])

  function onChange(value) {
    setbname(value)
   const arr= bikeData.filter(item=>item.Bikename==value)
    setservice(arr);
    
  
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}
  const { Option } = Select;
  console.log(service)
    return (
        <div className="detail-cont">
            <h1>Shop Details</h1>
            <div className="boxxx">
            <div className="leftbox">
            <img src={image}/>

            </div>
            <div className="rightbox">
                <h1>shop Name - Bajaj service center</h1>
                <h2>Full Address - shop no 15 near lajpatnagar delhi</h2>
                <h3>owner-Rajesh</h3>
                <h3>Contact details:9756523412</h3>
                <h3></h3>

                </div>
        </div>

        <h1>Select Bike</h1>
        <Select
    showSearch
    style={{ width: 500 }}
    placeholder="Select Your Bike"
    optionFilterProp="children"
          onChange={onChange}
          
    onFocus={onFocus}
    onBlur={onBlur}
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
          {
             
            bikeData.map((item, index) => {
               return(
               <Option value={item.Bikename}>{item.Bikename}</Option>
              )
            })
            
            
          }
          

   
     
  
        </Select>
        <br/>
        <h1>Select Services</h1><h2>bike Comapany :{ service[0].company}</h2>
        <div className="pricing">
          
          <div className="cardprice">
            
          </div>
        </div>
        
      </div>
      
        
    )
}

export default CardDeatils
