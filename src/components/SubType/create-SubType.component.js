import React, { Component } from 'react';
import axios from 'axios';
import swal from '@sweetalert/with-react'
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../../components/navbar.component"

import { 
    Button, 
    Container, 
    Typography, 
    Box,
    InputLabel,
    MenuItem,
    FormControl,
    Select 
  } from "@mui/material";

export default class CreateSubType extends Component {
    constructor(props) {
        super(props);


        this.onChangeType = this.onChangeType.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Type: '',
            SubType: []
        }
    }


    onChangeType(e) {
        this.setState({
            Type: e.target.value
        })
    }


    onSubmit() {
       

        const SubType = {
            Type: this.state.Type,
           
        }

        console.log(SubType);

        axios.post('http://localhost:5000/SubType/add', SubType)
            .then(res => console.log(res.data));


        swal({
                title: "Done!",
                text: "Submition Type Successfully Added",
                icon: "success",
                button: "Okay!"
            })
            .then((value) => {
              //  swal(window.location = '/Lec/');
            });

        // window.location = '/create';

    }

    render() {
        return (   <Container
           
          ><Navbar/>
            <Typography variant="h4" mb={10} textAlign="center" fontFamily={"areal"}>
              Create Submission Type
            </Typography>
        
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Document Type</InputLabel>
                <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Supervisor"
          onChange = { this.onChangeType }  >
          <MenuItem value={"Final Thesis"}>Final Thesis</MenuItem>
          <MenuItem value={"Proposal Document"}>Proposal Document</MenuItem>
          <MenuItem value={"Topic Assessment forms"}>Topic Assessment forms</MenuItem>
          <MenuItem value={"Presentation slides"}>Presentation slides</MenuItem>
        </Select>
              </FormControl>
              <Box
                sx={{
                  my: 4,
                  px: 30,
                  display: "flex",
                  flexDirection: "column",
                  rowGap: 2,
                }}
              >
                <Button variant="contained" onClick = {() => {this.onSubmit();}}>Submit</Button>
              </Box>
            </Box>
          </Container>)
    }
}