import React from "react";
import axios from "axios";

const AllContent = () => {

    const getData = () => {
        axios.get('http://localhost:8000/art')
        .then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            <h1>{getData}</h1>
        </div>
    )
}