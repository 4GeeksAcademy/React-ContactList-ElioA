import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Contact =()=>{

    const { store, actions } = useContext(Context);

    return(
        <>
        <div className="container myDiv">
        <Card style={{ width: "400px" }}>
            <Card.Img variant="top" src="https://picsum.photos/id/61/200/200" />
            <Card.Body>
                <Card.Title>{store.contact.name}</Card.Title>
                    <Card.Text>
                        {store.contact.address}<br/>
                        {store.contact.phone}<br/>
                        {store.contact.email}
                    </Card.Text>
            </Card.Body>
    </Card>
    </div>
        </>
    )


}

export default Contact