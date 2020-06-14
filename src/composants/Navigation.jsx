import React from 'react';
import { Link } from "react-router-dom"
import Input from "./Input"




const Navigation = (props) => {
    return(
        <div className="nav-container">
            <div className="conataineur">
                <div className="nav">
                    <div>
                        <Link to="/">
                            <h1>MON FAUX SITE</h1>
                        </Link>
                        
                    </div>
                    <div>
                        <Input type={props.type} value={props.value} onChange={props.onChange} placeholder={"Rechercher"} />
                    </div>
                    <div>
                        <Link to="/amis">
                            <a>MES AMIS</a>
                        </Link>
                        <Link to="/employes">
                            <a>EMPLOYÉS</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation