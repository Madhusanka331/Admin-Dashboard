import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from "../../components/navbar.component"
import {
    ToggleButtonGroup,
    ToggleButton,
} from "@mui/material";

const AlloCatePanelMembers = props => ( <tr >
    <td > { props.AlloCatePanelMembers.firstName } </td> 
    <td > { props.AlloCatePanelMembers.lastName } </td>
    <td > { props.AlloCatePanelMembers.email } </td> 
    <td > { props.AlloCatePanelMembers.mobile } </td> 
    <td > { props.AlloCatePanelMembers.dateOfBirth } </td> 
   
   
    </tr> 
)


export default class AlloCatePanelMembersList extends Component {
    constructor(props) {
        super(props);


        this.state = {
            AlloCatePanelMembers: []
        };
    }



    componentDidMount() {
        axios.get('http://localhost:5000/AlloCatePanelMembers/')
            .then(response => {
                this.setState({ AlloCatePanelMembers: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getPosts() {
        axios.get('http://localhost:5000/AlloCatePanelMembers/')
            .then(response => {
                this.setState({ AlloCatePanelMembers: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }




    AlloCatePanelMembersList() {
        return this.state.AlloCatePanelMembers.map(currentAlloCatePanelMembers => {
            return <AlloCatePanelMembers AlloCatePanelMembers = { currentAlloCatePanelMembers }
            deleteAlloCatePanelMembers = { this.deleteAlloCatePanelMembers }
            key = { currentAlloCatePanelMembers._id }
            />;
        })
    }

 

    render() {return (
        <div class="lft"> <Navbar/>
         
        <div class="card" >
            <div className = "col-lg-9 mt-2 mb-2" >
            <h4 > AlloCate Panel Members List  </h4> </div >
            
            </div> 
            
            <table  table class="table table-bordered">
            <thead className = "thead-light" >
            <tr >
            <th > GID </th> 
            <th >Research Field </th> 
            <th > Pane Member1 </th>
            <th > Panel Member2</th> 
            <th >Panel Member3 </th>
           
            </tr >
            </thead> <tbody > {this.state.AlloCatePanelMembers.map(props =>
                    <tr key = { props.GID } >
                    <td > { props.GID } </td> 
                    <td > { props.ResearchField } </td> 
                    <td > { props.PanelMember1 } </td> 
                    < td > { props.PanelMember2 } </td>  
                    < td > { props.PanelMember3 } </td> 
                   
                   
                    </tr>)

            }

            </tbody> </table >
            
            
            </div>
        )
    }
}