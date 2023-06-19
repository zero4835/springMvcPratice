import React , {Component} from 'react';
import {
    Container, 
    Table
} from 'reactstrap';

import '../../node_modules/bootstrap/dist/css/bootstrap.css';

class Certificate extends Component{

    constructor(props){
        super(props);
        this.state={certificates:[]};
    }

    componentDidMount(){
        fetch('api/certificates').then(response=>response.json())
        .then(data  =>{
            this.setState({certificates:data._embedded.certificates});
            setTimeout(() =>{console.log(this.state.certificates)}, 1000);
        })
        .catch(e => {
            /*發生錯誤時要做的事情*/
            console.log(e);
        })
    }

    render() {
        const { certificates } = this.state;
        console.log(certificates);
        const certificateList = certificates&&certificates.map(certificate => {
            return <tr key={certificate.certificateId}>
                <td>{certificate.name}</td>
                <td>{certificate.skill.name}</td>
                <td>{certificate.company.name}</td>
            </tr>
        });
        return (
            <div>
                <Container fluid>
                    <h3>Certificate</h3>
                    <Table className="mt-3">
                        <thead>
                            <tr>
                                <th>證照名稱</th>
                                <th>技能名稱</th>
                                <th>發照機構</th>
                            </tr>
                        </thead>
                        <tbody>
                            {certificateList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default Certificate;