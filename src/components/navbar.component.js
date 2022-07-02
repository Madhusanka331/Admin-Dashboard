import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const TopBar = () => {
    return(
        <Navbar bg="dark" variant="dark" className="Topbar">
            <Container>
                <Navbar.Brand>
                    <h4>
                        <Link to="/Home/" style={{marginRight: "1rem", textDecoration: "none", color: "#92E0FF", fontFamily: "consolas", fontWeight:"bold"}}> <AdminPanelSettingsIcon/>Admin</Link>{' | '}
                       | <Link to="/Lec/" style={{marginLeft: "1rem", textDecoration: "none", color: "white", fontWeight: "400"}}>Users</Link>
                        <Link to="/SubType-add/" style={{marginLeft: "1rem", textDecoration: "none", color: "white", fontWeight: "400"}}>Submission Types</Link>
                        <Link to="/Document-add/" style={{marginLeft: "1rem", textDecoration: "none", color: "white", fontWeight: "400"}}>File</Link>
                        <Link to="/Markingscheme-add/" style={{marginLeft: "1rem", textDecoration: "none", color: "white", fontWeight: "400"}}>Marking schemes</Link>
                        <Link to="/Group/" style={{marginLeft: "1rem", textDecoration: "none", color: "white", fontWeight: "400"}}>Groups</Link>
                    </h4>
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default TopBar;