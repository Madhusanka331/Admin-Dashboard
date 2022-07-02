import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from "../../components/navbar.component"
import {
    ToggleButtonGroup,
    ToggleButton,
} from "@mui/material";
const Lecturer = props => ( <tr >
    <td > { props.Lecturer.firstName } </td> 
    <td > { props.Lecturer.lastName } </td>
    <td > { props.Lecturer.email } </td> 
    <td > { props.Lecturer.mobile } </td> 
    <td > { props.Lecturer.dateOfBirth } </td> 
    <td > { props.Lecturer.address } </td> 
    <td > { props.Lecturer.idNumber } </td> 
    <td > { props.Lecturer.role } </td> 
    <td > { props.Lecturer.gender } </td> 
   
    </tr> 
)


export default class LecturerList extends Component {
    constructor(props) {
        super(props);


        this.state = {
            Lecturer: []
        };
    }



    componentDidMount() {
        axios.get('http://localhost:5000/Lecturer/')
            .then(response => {
                this.setState({ Lecturer: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getPosts() {
        axios.get('http://localhost:5000/Lecturer/')
            .then(response => {
                this.setState({ Lecturer: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }


    deleteLecturer(id) {
        if (window.confirm("Are you sure?")) {
            axios.delete("http://localhost:5000/Lecturer/" + id).then((response) => {
                console.log(response.data);
            });

            this.setState({
                Lecturer: this.state.Lec.filter((el) => el._id !== id),
            });
        }
    }


    LecturerList() {
        return this.state.Lecturer.map(currentLecturer => {
            return <Lecturer Lecturer = { currentLecturer }
            deleteLecturer = { this.deleteLec }
            key = { currentLecturer._id }
            />;
        })
    }

    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get('http://localhost:5000/Lecturer/').then(response => {


            const resultt = response.data
            const result = resultt.filter((props) =>
                props.firstName.includes(searchKey)
            )

            this.setState({ Lecturer: result })

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
            <h4 > Lecture List  </h4> </div >
            <div className = "col-lg-3 mt-2 mb-2" >
            <input className = "form-control" type = "search" placeholder = "Search" name = "searchQuery"
            onChange = { this.handleSearchArea } ></input> 
            </div > 
            </div> 
            
            <table  table class="table table-bordered">
            <thead className = "thead-light" >
            <tr >
            <th > Frist Name </th> 
            <th > Last Name </th> 
            <th > Email </th>
            <th > Mobile </th> 
            <th > Death of Birth </th>
            < th > Address </th> 
            <th > ID Number </th> 
            <th > Role </th>
            < th > Gender </th> 
            < th > Action </th> 
            </tr >
            </thead> <tbody > {this.state.Lecturer.map(props =>
                    <tr key = { props.firstName } >
                    <td > { props.firstName } </td> 
                    <td > { props.lastName } </td> 
                    <td > { props.email } </td> 
                    < td > { props.mobile } </td>  
                    < td > { props.dateOfBirth } </td> 
                    < td > { props.address } </td>  
                    < td > { props.idNumber } </td>
                    < td > { props.role } </td>  
                    < td > { props.gender } </td> 
                   
                     <td >
                        

                     <div className="container">
                     <a className="btn btn-warning" href={ "/Lec-Edit/" + props._id }>
                      <i className="far fa-edit"></i>&nbsp;Edit</a>  &nbsp;
                 <a className="btn btn-danger" href = "" onClick = {() => {this.deleteLecturer(props._id);}} ><i className="far fa-trash-alt"></i>Delete</a> </div></td></tr>)

            }

            </tbody> </table >
            <button className="btn btn-success"><a href="/Lec-add/" style={{textDecoration:'none',color:'white'}}>New Lecture</a></button>
            
            </div>
        )
    }
}