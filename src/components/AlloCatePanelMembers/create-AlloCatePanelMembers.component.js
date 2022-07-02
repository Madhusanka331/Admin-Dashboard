import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import swal from '@sweetalert/with-react'
import Navbar from "../../components/navbar.component"
export default class EditAlloCatePanelMembers extends Component {
    constructor(props) {
        super(props);


        this.onChangePanelMember1 = this.onChangePanelMember1.bind(this);
        this.onChangePanelMember2 = this.onChangePanelMember2.bind(this);
        this.onChangePanelMember3 = this.onChangePanelMember3.bind(this);
       
       

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            GID: '',
            ResearchField: '',
            PanelMember1: 'MR Silva',
            PanelMember2: 'MS Perera',
            PanelMember3: 'MS Dilani Fonseka',
            AlloCatePanelMembers: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/Group/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    GID: response.data.GID,
                    ResearchField: response.data.ResearchField,
                   
                })
            })
            .catch(function(error) {
                console.log(error);
            })

        axios.get('http://localhost:5000/Group/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        Group: response.data.map(Group => Group.AssigmentID),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }


   


        
 

   

    onChangePanelMember1(e) {
        this.setState({
            PanelMember1: e.target.value
        })
    }

    

    onChangePanelMember2(e) {
        this.setState({
            PanelMember2: e.target.value
        })
    }


    onChangePanelMember3(e) {
        this.setState({
            PanelMember3: e.target.value
        })
    }


    onSubmit(e) {
        e.preventDefault();

        const AlloCatePanelMembers = {
            GID: this.state.GID,
            ResearchField: this.state.ResearchField,
            PanelMember1: this.state.PanelMember1,
            PanelMember2: this.state.PanelMember2,
            PanelMember3: this.state.PanelMember3,
           
        }

        console.log(AlloCatePanelMembers);

        axios.post('http://localhost:5000/AlloCatePanelMembers/add/' , AlloCatePanelMembers)
            .then(res => console.log(res.data));

        swal({
                title: "Done!",
                text: "Lec Successfully Update",
                icon: "success",
                button: "Okay!"
            })
            .then((value) => {
                swal(window.location = '/AlloCatePanelMembers/');
            });

    }

    render() {
        return ( <div ><Navbar/>
            <h3 > AlloCate Panel Members </h3> <form onSubmit = { this.onSubmit } >
            <div className = "form-group" style = { { marginBottom: '15px' }} >

             

            <label > GID: </label> 
            <input type = "text" disabled={true}
            required className = "form-control"
            name = "First Name"
            value = { this.state.GID }
           /> </div > 
            <div className = "form-group" >

            <label > Research Field: </label> 
            <input type = "text" disabled={true}
            required className = "form-control"
            name = "Last Name"
           
            value = { this.state.ResearchField }
           /></div >

             <div className = "form-group" >
            <label > Panel Member1: </label>
            <select ref = "Genderinput"
            placeholder = "Gender"
            required className = "form-control"
          
            onChange = { this.onChangePanelMember1} >
            <option value = "MR Silva" > MR Silva </option> 
            <option value = "MS Perera" > MS Perera </option> 
            <option value = "MS Dilani Fonseka " > MS Dilani Fonseka </option>
            </select >
             </div >

             <div className = "form-group" >
            <label > PanelMember2: </label>
            <select ref = "Genderinput"
            placeholder = "Gender"
            required className = "form-control"
          
            onChange = { this.onChangePanelMember2} >
            <option value = "MR Silva" > MR Silva </option> 
            <option value = "MS Perera" > MS Perera </option> 
            <option value = "MS Dilani Fonseka " > MS Dilani Fonseka </option>
            </select >
             </div >

             

            
           

          


            <div className = "form-group" >
            <label > PanelMember3: </label> 
            <select ref = "Genderinput"
            placeholder = "Gender"
            required className = "form-control"
           
            onChange = { this.onChangePanelMember3 } >
            <option value = "MR Silva" > MR Silva </option> 
            <option value = "MS Perera" > MS Perera </option> 
            <option value = "MS Dilani Fonseka " > MS Dilani Fonseka </option>
            </select > </div >




          


           



            <div className = "form-group" >
            <input type = "submit"
            value = "Update"
            className = "btn btn-primary"/>
            </div>
            
             </form > </div>
        )
    }
}