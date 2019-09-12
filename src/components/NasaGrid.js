import React, { useState, useEffect } from "react";
import NasaCard from "./NasaCard";
import axios from "axios";
import { Container, Row } from "reactstrap";
import styled from "styled-components";

export const BlueButton = styled.button`
    width: 250px;
    height: 100px;
    background: darkblue;
    color: red;
`;

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
        <Container>
            <Row>
            <NasaCard
            key={data.index}
            title={data.title}
            img={data.hdurl}
            copyright={data.copyright}
            date={data.date}
            description={data.explanation}/> 
            <BlueButton>Welcome Space Explorer!</BlueButton>
            </Row>
        </Container>
    );
}
