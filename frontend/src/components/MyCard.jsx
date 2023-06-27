import React, { Component } from 'react';
import {
    Card,
    CardGroup,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
} from 'reactstrap';

const items = [
    {
        id: 1,
        certificate : "A",
        vendor : "D",
        Date : "1",
        caption: 'Slide A'
    },
    {
        id: 2,
        certificate : "B",
        vendor : "E",
        Date : "2",
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        id: 3,
        certificate : "C",
        vendor : "F",
        Date : "3",
        altText: 'Slide 3',
        caption: 'Slide 3'
    }
];

class MyCard extends Component {

    constructor(props) {
        super(props);
        this.state = { exams: [] };
    }

    /*componentDidMount() {
        fetch('api/exams').then(
            response => response.json()).then(
                data => {this.setState({ exams: data });
                setTimeout(() =>{console.log(this.state.exams)}, 1000);
            });
    }*/

    render() {
        /*const { exams } = this.state;

        const examList = exams&&exams.map(exam => {
            return (
                    <CardBody>
                        <CardTitle>證照: {exam.certificate.name}</CardTitle>
                        <CardSubtitle>協辦單位: {exam.vendor.name}</CardSubtitle>
                        <CardText>考試日期: {exam.examDate}</CardText>
                        <Button color="outline-primary">learn more</Button>
                    </CardBody>
            )
        });*/

        const examList = items.map(item => {
            return (
                <Card className='d-flex justify-content-center align-items-center'>
                    <CardBody>
                        <CardTitle>證照: {item.certificate}</CardTitle>
                        <CardSubtitle>協辦單位: {item.vendor}</CardSubtitle>
                        <CardText>考試日期: {item.Date}</CardText>
                        <Button color="outline-primary">learn more</Button>
                    </CardBody>
                </Card>
    )})

        return (
            <CardGroup>
                { examList }
            </CardGroup>
        );
    }
}

export default MyCard;