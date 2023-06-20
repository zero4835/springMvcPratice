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

class MyCard extends Component {

    constructor(props) {
        super(props);
        this.state = { exams: [] };
    }

    componentDidMount() {
        fetch('api/exams').then(
            response => response.json()).then(
                data => {this.setState({ exams: data });
                setTimeout(() =>{console.log(this.state.exams)}, 1000);
            });
    }

    render() {
        const { exams } = this.state;

        const examList = exams&&exams.map(exam => {
            return (
                    <CardBody>
                        <CardTitle>�ҷ�: {exam.certificate.name}</CardTitle>
                        <CardSubtitle>�����: {exam.vendor.name}</CardSubtitle>
                        <CardText>�Ҹդ��: {exam.examDate}</CardText>
                        <Button color="outline-primary">learn more</Button>
                    </CardBody>
            )
        });

        return (
            <CardGroup>
                { examList }
            </CardGroup>
        );
    }
}

export default MyCard;