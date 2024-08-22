import { Card, Button, Form, Container } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import EditCreators from "../pages/EditCreators";
import editCreators from "../pages/EditCreators";
import showCreators from "../pages/ShowCreators";
const CreatorCard = (props) => {

    const { creator, onEditClick } = props;
    const cardBodyStyle ={
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
    };




    return (
        <Card style={{ width: "18rem", height: "250px" }}>
            <Card.Body style = {cardBodyStyle}>

                    <>
                        <Card.Title>{creator.name}</Card.Title>
                        <Card.Text>{creator.description}</Card.Text>
                        <Button href={creator.url}>link</Button>
                        <Button variant="secondary" onClick={onEditClick}>Edit</Button>
                    </>

            </Card.Body>
        </Card>


    );
}

export default CreatorCard;