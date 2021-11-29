import { useState } from "react";
import { useLocation } from "react-router-dom";
import data from '../data';
import Card from 'react-bootstrap/Card';
import './home.css';
const Home = () => {
    const [username] = useState('');
    const location = useLocation();
    return (
        <><p>Hello This is home Page!logged in customers is </p>
            <div className='pic-container'>
                {data.map(item => (
                    <Card cs={6} className='pic-card'>
                        <div className='card-img-box'>
                            <Card.Img className='card-img' variant="top" src={item?.picture} />
                        </div>
                        <Card.Body className='card-body'>
                            <Card.Title>{item?.name}</Card.Title>
                        </Card.Body>
                    </Card>
                ))}
            </div></>
    )
};

export default Home;