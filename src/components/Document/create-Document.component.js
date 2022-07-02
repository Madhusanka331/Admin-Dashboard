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

export default class CreateDocument extends Component {
    constructor(props) {
        super(props);


        this.onChangeFile = this.onChangeFile.bind(this);
       
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            File: '',
            Document: []
        }
    }


    onChangeFile(e) {
        this.setState({
            File: e.target.value
        })
    }

   



    onSubmit() {
        const Document = {
            File: this.state.File,
        }

        console.log(Document);

        axios.post('http://localhost:5000/Document/add', Document)
            .then(res => console.log(res.data));


        swal({
                title: "Done!",
                text: "File Successfully Added",
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
              Upload Document
            </Typography>
      
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <input type = "File"
            required className = "form-control"   
            onChange = { this.onChangeFile }/> 
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
                <Button variant="contained" onClick = {() => {this.onSubmit();}} >Submit</Button>
              </Box>
            </Box>
          </Container>
        )
    }
}