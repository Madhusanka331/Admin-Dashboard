import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button} from 'react-bootstrap';

import {
    ToggleButtonGroup,
    ToggleButton,
} from "@mui/material";



import Navbar from "../../components/navbar.component"

const student = props => ( <tr >
    <td > { props.student.firstName } </td> 
    <td > { props.student.lastName } </td>
    <td > { props.student.email } </td> 
    <td > { props.student.mobile } </td> 
    <td > { props.student.dateOfBirth } </td> 
    <td > { props.student.address } </td> 
    <td > { props.student.idNumber } </td> 
    <td > { props.student.gender } </td> 
   
    </tr> 
)


export default class studentList extends Component {
    constructor(props) {
        super(props);


        this.state = {
            student: []
        };
    }



    componentDidMount() {
        axios.get('http://localhost:5000/student/')
            .then(response => {
                this.setState({ student: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getPosts() {
        axios.get('http://localhost:5000/student/')
            .then(response => {
                this.setState({ student: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }


    deletestudent(id) {
        if (window.confirm("Are you sure?")) {
            axios.delete("http://localhost:5000/student/" + id).then((response) => {
                console.log(response.data);
            });

            this.setState({
                student: this.state.student.filter((el) => el._id !== id),
            });
        }
    }


    studentList() {
        return this.state.student.map(currentstudent => {
            return <student student = { currentstudent}
            deletestudent = { this.deletestudent}
            key = { currentstudent._id }
            />;
        })
    }

    studentclick() {window.location = '/student/'}

    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get('http://localhost:5000/student/').then(response => {


            const resultt = response.data
            const result = resultt.filter((props) =>
                props.firstName.includes(searchKey)
            )

            this.setState({ student: result })

        });

    }

    render() {return (
        <div class="lft"> <Navbar/>

                        <ToggleButtonGroup exclusive fullWidth sx={{mb:5}}>
						<ToggleButton> Students </ToggleButton>
						<ToggleButton>Lecturer</ToggleButton>
					    </ToggleButtonGroup>

        <div class="card" >
            <div className = "col-lg-9 mt-2 mb-2" >
            <h4 > Student List  </h4> </div >
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
            <th > Frist Name </th> 
            <th > Last Name </th> 
            <th > Email </th>
            <th > Mobile </th> 
            <th > Death of Birth </th>
            < th > Address </th> 
            <th > ID Number </th> 
            < th > Gender </th> 
            < th > Action </th> 
            </tr >
            </thead> <tbody > {this.state.student.map(props =>
                    <tr key = { props.firstName } >
                    <td > { props.firstName } </td> 
                    <td > { props.lastName } </td> 
                    <td > { props.email } </td> 
                    < td > { props.mobile } </td>  
                    < td > { props.dateOfBirth } </td> 
                    < td > { props.address } </td>  
                    < td > { props.idNumber } </td>
                    < td > { props.gender } </td>  
                   
                     <td >
                        

                     <div className="container">
                     <a className="btn btn-warning" href={ "/student-Edit/" + props._id }>
                      <i className="far fa-edit"></i>&nbsp;Edit</a>  &nbsp;
                 <a className="btn btn-danger" href = "" onClick = {() => {this.deletestudent(props._id);}} ><i className="far fa-trash-alt"></i>Delete</a> </div></td></tr>)

            }

            </tbody> </table >
            <button className="btn btn-success"><a href="/student-add/" style={{textDecoration:'none',color:'white'}}>New Student</a></button>
            
            </div>
        )
    }
}