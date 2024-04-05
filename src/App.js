
import './App.css';
import {Calender,dateFnsLocalizer } from "react-big-calender";
import format from "date-fns/format";
import parse from "date-fns/parse" ;
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calender/lib/css/react-big-calender.css";
import React, {useState} from "react";
import DatePicker from "react-datepicker";


const locals ={
  "en-IND": require("date-fns/locals/en-Ind")
}
const localizer =dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales

})
const events =[
  {
    title:"Big Meeting",
    allDay : true,
    start: new Date(2021,6,0),
    end : new Date(2021,6,0)
  },
  {
    title:"vacation",
    start:new Date(2021,6,0),
    end : new Date(2021,6,0)
  },
  {
    title:"conference",
    start:new Date(2021,6,0),
    end :new Date(2021,6,0),
  },

]

function App() {
  const [newEvent, setNewEvent ] = useState({title : "",start : "",end : ""})
  const [allEvents,setAllEvents] = useState(events)
  function handleAddEvent(){
    setAllEvents([...allEvents,newEvent])
  }
  return (
    <div className="App">
      <h1>Calender</h1>
      <h2>Add New Event</h2>
      <div>
        
        <input type="text" placeholder="Add Title" style={{width:"20%",marginRight:"10px"}}
        value={newEvent.title} onchange={(e)=> setNewEvent({...newEvent,title:e.target.value})}
        />
        <DatePicker placeholderText="Start Date" style={{marginRight:"10px"}}
        selected={newEvent.start} onCharge={(start)=> setNewEvent({...newEvent,start})}/>
        <DatePicker placeholderText="End Date" 
        selected={newEvent.end} onCharge={(end)=> setNewEvent({...newEvent,start})}/>
        <button style={{marginTop:"10px"}}onclick={handleAddEvent}>Add Event</button>

        </div>
      
      <Calender localizer={localizer} events={events} startAccessor="start" 
      endAccessor="end" style={{height:500,margin:"50px"}}/>
   
    </div>
  );
}

export default App;
