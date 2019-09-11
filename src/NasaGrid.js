import React, {useState, useEffect} from "react";
import axios from "axios";

export default NasaGrid() {
    const [grid, setGrid] = useState([]);


    useEffect(() => {
        axios 
            .get(`https://api.nasa.gov/api.html#apod`)
            .then(response => {
                setGrid(response);
            })
            .catch(error => {
                console.log("Sorry, there was an error", error);
            });
    }, []);





}