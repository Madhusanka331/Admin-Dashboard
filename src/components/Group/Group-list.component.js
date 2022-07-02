import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button} from 'react-bootstrap';
import AddAlarmSharpIcon from '@mui/icons-material/AddAlarmSharp';

import {
    ToggleButtonGroup,
    ToggleButton,
} from "@mui/material";



import Navbar from "../../components/navbar.component"

const Group = props => ( <tr >
    <td > { props.Group.GID } </td> 
    <td > { props.Group.ResearchField } </td>
    
   
    </tr> 
)


export default class GroupList extends Component {
    constructor(props) {
        super(props);


        this.state = {
            Group: []
        };
    }



    componentDidMount() {
        axios.get('http://localhost:5000/Group/')
            .then(response => {
                this.setState({ Group: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getPosts() {
        axios.get('http://localhost:5000/Group/')
            .then(response => {
                this.setState({ Group: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }



    GroupList() {
        return this.state.Group.map(currentGroup => {
            return <Group Group = { currentGroup}
            deleteGroup = { this.deleteGroup}
            key = { currentGroup._id }
            />;
        })
    }

   



    render() {return (
        <div class="lft"> <Navbar/>

                      

        <div class="card" >
            <div className = "col-lg-9 mt-2 mb-2" >
            <h4 > Group List  </h4> </div >
            <div className = "col-lg-3 mt-2 mb-2" >
            <input className = "form-control" type = "search" placeholder = "Search" name = "searchQuery"
            onChange = { this.handleSearchArea } ></input> 
            </div > 
            </div> 
            
            <table  table class="table table-bordered">
            <thead className = "thead-light" >
            <tr sx={{
							backgroundColor: "palette.common.black",
						}} >
            <th > GID </th> 
            <th > Research Field </th> 
            <th > AlloCate Panel Members </th> 
           
            </tr >
            </thead> <tbody > {this.state.Group.map(props =>
                    <tr key = { props.ID } >
                    <td > { props.GID } </td> 
                    <td > { props.ResearchField } </td> 
                   
                    <td >
                        

                     <div className="container">
                     <a className="fa-solid fa-plus-minus" href={ "/AlloCatePanelMembers-add/" + props._id }>
                      < i class="fa-solid fa-plus-minus"></i>&nbsp; <AddAlarmSharpIcon/></a>  &nbsp;
                </div></td>
                   </tr>)

            }

            </tbody> </table >
            <button className="btn btn-success"><a href="/Group-add/" style={{textDecoration:'none',color:'white'}}>New Group</a></button>
            
            </div>
        )
    }
}