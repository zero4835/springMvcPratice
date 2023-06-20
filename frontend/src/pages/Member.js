import React, {Component} from 'react';
import {Container, Table} from 'reactstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

class Member extends Component {

	constructor(props) {
		super(props);
		this.state = { members: [] };
	}

	componentDidMount() {
		fetch('api/members').then(response => response.json())
			.then(data => {
				this.setState({ members: data._embedded.members});
				setTimeout(() =>{console.log(this.state.members)}, 1000);
			})
			.catch(e => {
				/*�o�Ϳ��~�ɭn�����Ʊ�*/
				console.log(e);
			})
	}

	render() {
		const { members } = this.state;

		const memberList = members&&members.map(member => {
			return <tr key={member.mid}>
                <td>{member.email}</td>
                <td>{member.password}</td>
                <td>{member.firstName}</td>
                <td>{member.lastName}</td>
			</tr>
		});

		return (
			<div>
				<Container fluid>
					<h3>Member</h3>
					<Table className="mt-4">
						<thead>
							<tr>
								<th>Email</th>
								<th>Password</th>
								<th>FirstName</th>
								<th>LastName</th>
							</tr>
						</thead>
						<tbody>
							{memberList}
						</tbody>
					</Table>
				</Container>
			</div>
		);
	}

}
export default Member;