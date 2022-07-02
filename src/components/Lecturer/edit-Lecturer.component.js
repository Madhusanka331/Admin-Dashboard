import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import swal from '@sweetalert/with-react'
import Navbar from "../../components/navbar.component"
export default class EditLec extends Component {
    constructor(props) {
        super(props);


        this.onChangefirstName = this.onChangefirstName.bind(this);
        this.onChangelastName = this.onChangelastName.bind(this);
        this.onChangeemail = this.onChangeemail.bind(this);
        this.onChangemobile = this.onChangemobile.bind(this);
        this.onChangedateOfBirth= this.onChangedateOfBirth.bind(this);
        this.onChangepassword = this.onChangepassword.bind(this);
        this.onChangeaddress = this.onChangeaddress.bind(this);
        this.onChangeidNumber = this.onChangeidNumber.bind(this);
        this.onChangerole= this.onChangerole.bind(this);
        this.onChangegender = this.onChangegender.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            mobile: '',
            dateOfBirth: '',
            password: '',
            address: '',
            idNumber: '',
            role: 'Supervisor',
            gender: '',
            Lec: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/Lecturer/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    email: response.data.email,
                    mobile: response.data.mobile,
                    dateOfBirth: response.data.dateOfBirth,
                    password: response.data.password,
                    address: response.data.address,
                    idNumber: response.data.idNumber,
                    role: response.data.role,
                    gender: response.data.gender,
                })
            })
            .catch(function(error) {
                console.log(error);
            })

        axios.get('http://localhost:5000/Lecturer/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        Lec: response.data.map(Lec => Lec.AssigmentID),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }

    onChangefirstName(e) {
        this.setState({
            firstName: e.target.value
        })
    }

   

    onChangelastName(e) {
            this.setState({
                lastName: e.target.value
            })
        }
        
    onChangeemail(e) {
        this.setState({
            email: e.target.value
        })
    }

   

    onChangemobile(e) {
        this.setState({
            mobile: e.target.value
        })
    }

    

    onChangedateOfBirth(e) {
        this.setState({
            dateOfBirth: e.target.value
        })
    }


    onChangepassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    onChangeaddress(e) {
        this.setState({
            address: e.target.value
        })
    }







    onChangeidNumber(e) {
        this.setState({
            idNumber: e.target.value
        })
    }

    

    onChangerole(e) {
        this.setState({
            role: e.target.value
        })
    }


    onChangegender(e) {
        this.setState({
            gender: e.target.value
        })
    }

  
    

    onSubmit(e) {
        e.preventDefault();

        const Lec = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            mobile: this.state.mobile,
            dateOfBirth: this.state.dateOfBirth,
            password: this.state.password,
            address: this.state.address,
            idNumber: this.state.idNumber,
            role: this.state.role,
            gender: this.state.gender,
        }

        console.log(Lec);

        axios.post('http://localhost:5000/Lecturer/update/' + this.props.match.params.id, Lec)
            .then(res => console.log(res.data));

        swal({
                title: "Done!",
                text: "Lec Successfully Update",
                icon: "success",
                button: "Okay!"
            })
            .then((value) => {
                swal(window.location = '/Lec/');
            });

    }

    render() {
        return ( <div ><Navbar/>
            <h3 > Edit Lecture </h3> <form onSubmit = { this.onSubmit } >
            <div className = "form-group" style = { { marginBottom: '15px' }} >

             

            <label > First Name: </label> 
            <input type = "text"
            required className = "form-control"
            name = "First Name"
            placeholder = "First Name"
            value = { this.state.firstName }
            onChange = { this.onChangefirstName }/> </div > 
            <div className = "form-group" >

            <label > Last Name: </label> 
            <input type = "text"
            required className = "form-control"
            name = "Last Name"
            placeholder = "Enter Last Name"
            value = { this.state.lastName }
            onChange = { this.onChangelastName }/></div >

             <div className = "form-group" >
            <label > Email: </label>
            <input type = "email"
            required className = "form-control"
            name = "Email"
            placeholder = "Enter Email"
            value = { this.state.email }
            onChange = { this.onChangeemail }/>
             </div >

             <div className = "form-group" >
            <label > Mobile: </label>
            <input type = "Number"
            required className = "form-control"
            name = "mobile"
            placeholder = "Enter mobile"
            value = { this.state.mobile }
            onChange = { this.onChangemobile }/>
             </div >

             

            <div className = "form-group" >
            <label > Date Of Birth: </label> 
            <input type = "date"
            required className = "form-control"
            name = "Date Of Birth"
            placeholder = "Enter Date Of Birth"
            value = { this.state.dateOfBirth }
            onChange = { this.onChangedateOfBirth }/> </div >
           

            <div className = "form-group" >
            <label > Password: </label> 
            <input type = "password"
            required className = "form-control"
            name = "Password"
            placeholder = "Enter Password"
            value = { this.state.password }
            onChange = { this.onChangepassword }/> </div >


            <div className = "form-group" >
            <label > address: </label> 
            <input type = "text"
            required className = "form-control"
            name = "Address"
            placeholder = "Enter Address"
            value = { this.state.address }
            onChange = { this.onChangeaddress }/> </div >




            <div className = "form-group" >
            <label > Id Number: </label> 
            <input type = "text"
            required className = "form-control"
            name = "ID Number"
            placeholder = "Enter ID Number"
            value = { this.state.idNumber }
            onChange = { this.onChangeidNumber }/> </div >


            <div className = "form-group" >
            <label > Role: </label> 
            <select ref = "Role"
            placeholder = "Role"
            required className = "form-control"
            value = { this.state.Role }
            onChange = { this.onChangeRole } >
            <option value = "Supervisor" > Supervisor </option> 
            <option value = "Co-Supervisor " > Co-Supervisor </option>
            </select > </div >


        <div className = "form-group" >
            <label > Gender: </label> 
            <select ref = "Genderinput"
            placeholder = "Gender"
            required className = "form-control"
            value = { this.state.gender }
            onChange = { this.onChangegender } >
            <option value = "Male" > Male </option> 
            <option value = "Female " > Female </option>
            </select > </div>

            <div className = "form-group" >
            <input type = "submit"
            value = "Update"
            className = "btn btn-primary"/>
            </div>
            
             </form > </div>
        )
    }
}