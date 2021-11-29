import { useState } from "react";
import { useLocation } from "react-router-dom";
import data from '../data';
import flowers from '../flowers';
import Card from 'react-bootstrap/Card';
import './home.css';

const Home = () => {
    const [username] = useState('');
    const location = useLocation();
    console.log(flowers);
    console.log(data);
    return (
        <>
            <p>Hello This is home Page!!!logged in customers is </p>
            <div className='pic-container'>
                {flowers.map((item, index) => (
                    <Card cs={6} className='pic-card' onClick={() => { window.location.href = `/#/Quiz/${index}` }}>
                        <div className='card-img-box'>
                            <Card.Img className='card-img' variant="top" src={item?.picture} />
                        </div>
                        <Card.Body className='card-body'>
                            <Card.Title>{item?.name}</Card.Title>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </>
    )
};

export default Home;