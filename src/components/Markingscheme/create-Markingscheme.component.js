import React, { Component } from 'react';
import axios from 'axios';
import swal from '@sweetalert/with-react'
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../../components/navbar.component"
export default class CreatMarkingscheme extends Component {
    constructor(props) {
        super(props);


        this.onChangeEvaluationPhase = this.onChangeEvaluationPhase.bind(this);
        this.onChangeTopic = this.onChangeTopic.bind(this);
        this.onChangeMaximumAllocateMarks = this.onChangeMaximumAllocateMarks.bind(this);
        this.onChangeTopic2 = this.onChangeTopic2.bind(this);
        this.onChangeMaximumAllocateMarks2= this.onChangeMaximumAllocateMarks2.bind(this);
        this.onChangeTopic3 = this.onChangeTopic3.bind(this);
        this.onChangeMaximumAllocateMarks3 = this.onChangeMaximumAllocateMarks3.bind(this);
        this.onChangeTopic4 = this.onChangeTopic4.bind(this);
        this.onChangeMaximumAllocateMarks4= this.onChangeMaximumAllocateMarks4.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            EvaluationPhase: '',
            Topic: '',
            MaximumAllocateMarks: '',
            Topic2: '',
            MaximumAllocateMarks2: '',
            Topic3: '',
            MaximumAllocateMarks3: '',
            Topic4: '',
            MaximumAllocateMarks4: '',
            Markingscheme: []
        }
    }


    onChangeEvaluationPhase(e) {
        this.setState({
            EvaluationPhase: e.target.value
        })
    }

   

    onChangeTopic(e) {
            this.setState({
                Topic: e.target.value
            })
        }
        
    onChangeMaximumAllocateMarks(e) {
        this.setState({
            MaximumAllocateMarks: e.target.value
        })
    }

   

    onChangeTopic2(e) {
        this.setState({
            Topic2: e.target.value
        })
    }

    

    onChangeMaximumAllocateMarks2(e) {
        this.setState({
            MaximumAllocateMarks2: e.target.value
        })
    }


    onChangeTopic3(e) {
        this.setState({
            Topic3: e.target.value
        })
    }

    onChangeMaximumAllocateMarks3(e) {
        this.setState({
            MaximumAllocateMarks3: e.target.value
        })
    }







    onChangeMaximumAllocateMarks4(e) {
        this.setState({
            MaximumAllocateMarks4: e.target.value
        })
    }

    

    onChangeTopic4(e) {
        this.setState({
            Topic4: e.target.value
        })
    }



    onSubmit(e) {
        e.preventDefault();

        const Markingscheme = {
            EvaluationPhase: this.state.EvaluationPhase,
            Topic: this.state.Topic,
            MaximumAllocateMarks: this.state.MaximumAllocateMarks,
            Topic2: this.state.Topic2,
            MaximumAllocateMarks2: this.state.MaximumAllocateMarks2,
            Topic3: this.state.Topic3,
            MaximumAllocateMarks3: this.state.MaximumAllocateMarks3,
            Topic4: this.state.Topic4,
            MaximumAllocateMarks4: this.state.MaximumAllocateMarks4
        }

        console.log(Markingscheme);

        axios.post('http://localhost:5000/Markingscheme/add', Markingscheme)
            .then(res => console.log(res.data));


        swal({
                title: "Done!",
                text: "Marking scheme Successfully Added",
                icon: "success",
                button: "Okay!"
            })
            .then((value) => {
                swal(window.location = '/Lec/');
            });

        // window.location = '/create';

    }

    render() {
        return (  <div className = "container">
            <Navbar/>
            <h3 > Create Marking Scheme </h3> <form onSubmit = { this.onSubmit } >
            <div className = "form-group" style = { { marginBottom: '15px' }} >

             

            <label > Evaluation phase  </label> 
            <input type = "text"
            required className = "form-control"
            name = "Evaluation phase "
            placeholder = "Evaluation phase "
            onChange = { this.onChangeEvaluationPhase }/> </div > 
            <div className = "form-group" >

            <label > Topic : </label> 
            <input type = "text"
            required className = "form-control"
            name = "Topic "
            placeholder = "Topic "
            onChange = { this.onChangeTopic }/></div >

             <div className = "form-group" >
            <label > Maximum Allocate Marks :</label>
            <input type = "Text"
            required className = "form-control"
            name = "Maximum Allocate Marks :"
            placeholder = "Maximum Allocate Marks"
            onChange = { this.onChangeMaximumAllocateMarks}/>
             </div >

             <div className = "form-group" >
            <label > Topic : </label>
            <input type = "text"
            required className = "form-control"
            name = "Topic "
            placeholder = "Topic "
            onChange = { this.onChangeTopic2 }/>
             </div >

             

            <div className = "form-group" >
            <label > Maximum Allocate Marks :</label> 
            <input type = "text"
            required className = "form-control"
            name = "Maximum Allocate Marks "
            placeholder = "Maximum Allocate Marks "
            onChange = { this.onChangeMaximumAllocateMarks2 }/> </div >
           

            <div className = "form-group" >
            <label > Topic: </label> 
            <input type = "text"
            required className = "form-control"
            name = "Topic"
            placeholder = "Enter Topic"
            onChange = { this.onChangeTopic3 }/> </div >




            <div className = "form-group" >
            <label > Maximum Allocate Marks: </label> 
            <input type = "text"
            required className = "form-control"
            name = "Maximum Allocate Marks"
            placeholder = "Enter Maximum Allocate Marks"
            onChange = { this.onChangeMaximumAllocateMarks3 }/> </div >



<div className = "form-group" >
            <label > Topic: </label> 
            <input type = "text"
            required className = "form-control"
            name = "Topic"
            placeholder = "Enter Topic"
            onChange = { this.onChangeTopic4 }/> </div >




            <div className = "form-group" >
            <label > Maximum Allocate Marks: </label> 
            <input type = "text"
            required className = "form-control"
            name = "Maximum Allocate Marks"
            placeholder = "Enter Maximum Allocate Marks"
            onChange = { this.onChangeMaximumAllocateMarks4 }/> </div >








            <div className = "form-group" >
            <input type = "submit"
            value = "Create"
            className = "btn btn-primary"/>
            </div>
            
             </form > </div>
        )
    }
}