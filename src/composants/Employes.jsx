import React, {useState, useEffect} from "react";
import Navigation from "./Navigation"
import Api from "../api/api-fetch"
import Tableau from "./Table"
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Loader from 'react-loader-spinner'

const Employes = () => {

    useEffect(()=> {
        liste()
    }, [])
    useEffect(() => {
        setLoading(true)
    }, [])
    const [employes, setEmployes] = useState([]);
    const [loading, setLoading] = useState(true)

    const liste = () => {
        Api.liste("http://167.71.45.243:4000/api/employes?api_key=kewilah").then(data => {
            setEmployes(data)
            setLoading(false)
        });
    }

    const tableCols = ["Nom", "Prenom", "Statut marital", "Pays d'origine", "Télephone", "Email", "Post"]

    return (
        <>
            <Navigation />
                <div className="conataineur">
                    <Typography>
                        <Box fontSize={50} textAlign="center">
                            Liste d'employes
                        </Box>
                    </Typography>
                    <Button variant="contained" color="primary">Ajouter</Button>
                    { loading ? <Loader className="loader" type="TailSpin" color="#00BFFF" height={100} width={100} /> : 
                        <Tableau className={"ui single line table"} tabCol={tableCols} employes={employes} />
                    }
                </div>
        </>
        
    )
}

export default Employes;