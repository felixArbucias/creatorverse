import { Card, Button, Form, Container } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import EditCreators from "../pages/EditCreators";

const CreatorCard = (props) => {

    const creator = props.creator;
    const [editing, setEditing] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl ] = useState('');
    const [imageURL, setImageURL] = useState('');
    const cardStyle = {
        backgroundImage: 'url(' + imageURL + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px,'
    };

    const cardBodyStyle ={
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
    };




    return (
        <Card style={{ width: "18rem", height: "250px" }}>
            <Card.Body style = {cardBodyStyle}>
                {editing === false ? (
                    <>
                        <Card.Title>{creator.name}</Card.Title>
                        <Card.Text>{creator.description}</Card.Text>
                        <Button href={creator.url}>link</Button>
                        <Button variant="secondary" onClick={() => setEditing(true)}>Edit</Button>
                    </>
                ) : (
                    <>
                        <EditCreators creator={creator} />
                        <Button variant="secondary" onClick={() => setEditing(false)}>Cancel</Button>
                    </>
                )}
            </Card.Body>
        </Card>


    );
}

export default CreatorCard;