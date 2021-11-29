import { useState } from 'react';
import data from '../data';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useLocation } from "react-router";
import './quiz.css'

const quizScore = 16.66;

const Quiz = () => {
    const location = useLocation();
    const quizId = Number(location?.pathname?.replaceAll('/Quiz/', ''));
    const quizData = data[quizId];
    const [score, setScore] = useState([]);
    const [showScore, setShowScore] = useState(false);
    const handleForm = ({ target = {} }) => {
        setShowScore(false);
        const { id, value } = target;
        const [index, choice] = id?.split('--');
        console.log(index, choice, value);
        console.log(data?.[quizId]?.[Number(index)]?.answer);
        if (choice === data?.[quizId]?.[Number(index)]?.answer) {
            score[index] = quizScore;
            setScore(score)
        } else if (score !== 0) {
            score[index] = 0;
            setScore(score)
        }
        console.log(score);
    }

    const getScore = () => {
        let sum = score.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue;
        });
        if (sum > 99) {
            sum = 100;
        }
        return sum.toFixed(2);
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <Form className='quiz-form' onChange={(event) => { handleForm(event) }}>
                {quizData.map((item, index) => (
                    <div key={`quiz-${index}}`} className='quiz-card'>
                        <img src={item?.picture} alt='img' />
                        <div key={`inline-radio`} className="quiz-radio">
                            {item?.choices?.map((choice, k) => (
                                <Form.Check
                                    inline
                                    name={`group-${index}`}
                                    label={choice}
                                    type='radio'
                                    id={`${index}--${choice}`}
                                    key={`radio-${choice}-${k}`}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </Form>
            <Button type="primary" className='submit-btn' onClick={() => { setShowScore(true) }}>
                Submit
            </Button>
            {showScore ? <span className='score'>score: {getScore()}</span> : null}
        </div>
    )
};

export default Quiz;