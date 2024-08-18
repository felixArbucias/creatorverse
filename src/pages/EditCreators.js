import React, { useState, useEffect } from "react";
import { supabase } from '../client';
import { useParams, useNavigate }  from "react-router-dom";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';



function EditCreators(props) {
    const creator = props.creator;
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [url, setUrl] = useState('');


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
                .eq(creator, creator.id)

            if (error) throw error;
            window.location.reload()
        } catch (error){
            alert(error.message);
        }
    }
    return (
        <>
        </>
    )
}
export default EditCreators;