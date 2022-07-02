import React, { Component } from 'react';
import axios from 'axios';
import swal from '@sweetalert/with-react'
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../../components/navbar.component"
export default class CreateGroup extends Component {
    constructor(props) {
        super(props);


        this.onChangeResearchField= this.onChangeResearchField.bind(this);
        this.onChangeGID = this.onChangeGID.bind(this);
       
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            ResearchField: '',
            GID: '',
            Group: []
        }
    }


   


    onChangeGID(e) {
        this.setState({
            GID: e.target.value
        })
    }

    

 


    onChangeResearchField(e) {
        this.setState({
            ResearchField: e.target.value
        })
    }


    onSubmit(e) {
        e.preventDefault();

        const Group = {
            GID: this.state.GID,
            ResearchField: this.state.ResearchField
           
        }

        console.log(Group);

        axios.post('http://localhost:5000/Group/add', Group)
            .then(res => console.log(res.data));


        swal({
                title: "Done!",
                text: "Group Successfully Added",
                icon: "success",
                button: "Okay!"
            })
            .then((value) => {
                swal(window.location = '/Group/');
            });

        // window.location = '/create';

    }

    render() {
        return (  <div className = "container">
            <Navbar/>
            <h3 > New Group </h3> <form onSubmit = { this.onSubmit } >
            <div className = "form-group" style = { { marginBottom: '15px' }} >

             

            <label > GID: </label> 
            <input type = "text"
            required className = "form-control"
            name = "GID"
            placeholder = "GID"
            value = { this.state.GID }
            onChange = { this.onChangeGID }/> </div > 
            <div className = "form-group" >

            <label > Research Field: </label> 
            <input type = "text"
            required className = "form-control"
            name = "Research Field"
            placeholder = "Research Field"
            onChange = { this.onChangeResearchField}/></div >

            

            <div className = "form-group" >
            <input type = "submit"
            value = "Create"
            className = "btn btn-primary"/>
            </div>
            
             </form > </div>
        )
    }
}