import React, { useState, useEffect } from 'react';
import {
    Card,
    CardGroup,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
} from 'reactstrap';

const MyCard = () => {
    const [exams, setExams] = useState([]);

    useEffect(() => {
        fetch('api/exams')
            .then(response => response.json())
            .then(data => {
                setExams(data);
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching exams:', error);
            });
    }, []);

    const examList = exams.map(exam => (
        <Card className='d-flex justify-content-center align-items-center'>
            <CardBody key={exam.examId}>
                <CardTitle>證照: {exam.certificate && exam.certificate.name}</CardTitle>
                <CardSubtitle>協辦單位: {exam.vendor.name}</CardSubtitle>
                <CardText>考試日期: {exam.examDate}</CardText>
                <Button color="outline-primary">learn more</Button>
            </CardBody>
        </Card>
    ));

    return (
        <CardGroup>
            {examList}
        </CardGroup>
    );
};

export default MyCard;
