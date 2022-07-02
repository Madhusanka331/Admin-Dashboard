import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import main from "./components/login.component";

import  AdminHomePage  from "./components/AdminHomePage/AdminHomePage";

//Lecturer

import EditLec from "./components/Lecturer/edit-Lecturer.component";
import CreateLec from "./components/Lecturer/create-Lecturer.component";
import LecList from "./components/Lecturer/Lecturer-list.component";


//student

import Editstudent from "./components/student/edit-student.component";
import Createstudent from "./components/student/create-student.component";
import studentList from "./components/student/student-list.component";

//Group


import CreateGroup from "./components/Group/create-Group.component";
import GroupList from "./components/Group/Group-list.component";

//AlloCatePanelMembers


import CreateAlloCatePanelMembers from "./components/AlloCatePanelMembers/create-AlloCatePanelMembers.component";
import AlloCatePanelMembersList from "./components/AlloCatePanelMembers/AlloCatePanelMembers-list.component";

//SubType

import CreateSubType from "./components/SubType/create-SubType.component";

//Document

import CreateDocument from "./components/Document/create-Document.component";

//Markingscheme

import CreateMarkingscheme from "./components/Markingscheme/create-Markingscheme.component";









function App() {

    return ( <Router >
        <div className = "container"  >
       
        <br/>
       
        <Route path = "/" exact component = { main}/>

        <Route path = "/Home/" component = { AdminHomePage }/>

        <Route path = "/Lec-add/" component = { CreateLec }/>
        <Route path = "/Lec/" component = { LecList }/> 
        <Route path = "/Lec-Edit/:id" component = { EditLec }/>

        <Route path = "/Group-add/" component = { CreateGroup }/>
        <Route path = "/Group/" component = { GroupList }/> 

        <Route path = "/AlloCatePanelMembers-add/:id" component = { CreateAlloCatePanelMembers }/>
        <Route path = "/AlloCatePanelMembers/" component = { AlloCatePanelMembersList }/> 

        <Route path = "/student-add/" component = { Createstudent }/>
        <Route path = "/student/" component = { studentList }/> 
        <Route path = "/student-Edit/:id" component = { Editstudent }/>


        <Route path = "/SubType-add/" component = { CreateSubType }/>

        <Route path = "/Document-add/" component = { CreateDocument }/>

        <Route path = "/Markingscheme-add/" component = { CreateMarkingscheme }/>
       

      

      
          </div >  </Router>
    );
}

export default App;