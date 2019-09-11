import React, { useState, useEffect } from "react";
import NasaCard from "./NasaCard";
import axios from "axios";

export default function NasaGrid() {
    const [data, setGrid] = useState([]);


    useEffect(() => {
        axios 
            .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
            .then(response => {
                const grid = response.data;
                console.log(grid);
                setGrid(grid);
            })
            .catch(error => {
                console.log("Sorry, there was an error", error);
            });
    }, []);

    return (
        <div className="container">
            <NasaCard 
            key={data.index}
            title={data.title}
            img={data.hdurl}
            copyright={data.copyright}
            date={data.date}
            description={data.explanation}/> 
        </div>
    )
}
