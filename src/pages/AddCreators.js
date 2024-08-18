import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import {supabase} from "../client";
import {useNavigate, useNavigation} from 'react-router-dom';

function AddCreators() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [url, setUrl] = useState('');
    const navigate = useNavigate();

    async function handleSubmit() {
        try{
            const { data, error } = await supabase
                .from("creators")
                .insert({
                    name: name,
                    description: description,
                    imageURL : imageURL,
                    url : url
                })
                .single()
            if (error) throw error;
            window.location.reload()
            navigate('/ShowCreators');
        } catch (error){
            alert(error.message);
        }
    }
    return (

        <Container>
            <Row>
                <Col xs={12} md={8} >
                    <Form.Label>NAME GOES HERE</Form.Label>
                    <Form.Control
                        type={"text"}
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        type={"text"}
                        id="imageURL"
                        onChange={(e) => setImageURL(e.target.value)}
                    />
                    <Form.Label>description</Form.Label>
                    <Form.Control
                        type={"text"}
                        id="description"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <Form.Label>Social Media Link</Form.Label>
                    <Form.Control
                        type={"text"}
                        id="url"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <br></br>
                    <Button onClick={() => handleSubmit()}>Submit</Button>

                </Col>
            </Row>
        </Container>
    );
}
export default AddCreators;