import { Card, Button, Form, Container } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';


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




    return (
            <Card style = {{width:"18rem"}}>
                <Card.Body>
                    { editing === false ?
                        <>
                        <Card.Title>{creator.name}</Card.Title>
                        <Card.Text>{creator.description}</Card.Text>
                        <Card.Link href={creator.url}></Card.Link>
                        <Button variant="secondary" onClick={() => setEditing(true)}>Edit</Button>
                        </>
                :
                        <>
                            <Button onClick={() => setEditing(false)}> Submit </Button>
                            <Button variant="danger" className={"mx-3"}> Delete </Button>
                            <br />
                            <Form.Label>NAME GOES HERE</Form.Label>
                            <Form.Control
                                type={"text"}
                                id="name"
                                defaultValue={creator.name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <Form.Label>imgURL</Form.Label>
                            <Form.Control
                                type={"text"}
                                id="url"
                                defaultValue={creator.url}
                                onChange={(e) => setUrl(e.target.value)}
                            />
                            <Form.Label>description</Form.Label>
                            <Form.Control
                                type={"text"}
                                id="description"
                                defaultValue={creator.description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                                type={"text"}
                                id="imageURL"
                                defaultValue={creator.imageURL}
                                onChange={(e) => setDescription(e.target.value)}
                            />

                        </>
                    }
                </Card.Body>

            </Card>


    );
}

export default CreatorCard;