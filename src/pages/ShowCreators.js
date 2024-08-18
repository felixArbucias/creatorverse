import { useState, useEffect } from "react";
import { supabase } from '../client.js';
import CreatorCard from '../components/CreatorCard';
import { Col, Container, Row } from 'react-bootstrap';
import EditCreators from '../pages/EditCreators';

function ShowCreators() {
    const [creators, setCreator] = useState([]);
    const [editingCreator, setEditingCreator] = useState(null);
    useEffect(() => {
        getCreators();
    }, [])


    async function getCreators() {
        try{
            const { data, error } = await supabase
                .from("creators")
                .select("*")
            if (error) throw error;
            if (data != null) {
                setCreator(data);
            }
        } catch (error){
            alert(error.message);
        }
    }





    return (
        <Container style={{maxWidth: '1200', margin: '0 auto', paddingTop: '20px'}}>
            {editingCreator === null ? (
                // Render list of creators when no creator is being edited
                <Row className="g-4 justify-content-center align-items-stretch">
                    {creators.map((creator) => (
                        <Col key={creator.id} xs={12} sm={6} md={4} lg={3} className="d-flex">
                            <CreatorCard creator={creator}/>
                        </Col>
                    ))}
                </Row>
            ) : (
                // Render the edit form for the selected creator
                <Row className="justify-content-center">
                    <Col xs={12} md={8} lg={6}>
                        <EditCreators
                            creator={editingCreator}
                        />
                    </Col>
                </Row>
            )}
        </Container>
    )
}
export default ShowCreators;
