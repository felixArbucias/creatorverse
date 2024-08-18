import React, { useState, useEffect } from "react";
import { supabase } from '../client';
import { useParams, useNavigate }  from "react-router-dom";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import {deleteCreator} from './DeleteCreators.js';


function EditCreators(props) {
    const creator = props.creator;
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [url, setUrl] = useState('');

    useEffect(() => {
        if (creator) {
            setName(creator.name);
            setDescription(creator.description);
            setImageURL(creator.imageURL);
            setUrl(creator.url);
        }

    }, [creator]);


    async function handleEditCreators() {
        try{
            const { data, error } = await supabase
                .from("creators")
                .update({
                    name: name,
                    description: description,
                    imageURL : imageURL,
                    url : url
                })
                .eq("id", creator.id)

            if (error) throw error;
            window.location.reload()
        } catch (error){
            alert(error.message);
        }
    }
    return (
        <>
            <Container>
                <Form>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control
                            type="text"
                            value={imageURL}
                            onChange={(e) => setImageURL(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>URL</Form.Label>
                        <Form.Control
                            type="text"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="primary" onClick={handleEditCreators}>
                        Submit
                    </Button>
                    <Button variant={"danger"} onClick={() => deleteCreator(creator.id)}>Delete</Button>
                </Form>
            </Container>
        </>
    )
}
export default EditCreators;