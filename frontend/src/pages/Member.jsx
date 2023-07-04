import React, {Component} from 'react';
import { Button, ButtonGroup,ButtonToggle,Container, Table} from 'reactstrap';
import { Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'


class Member extends Component {

	constructor(props) {
		super(props);
		this.state = { members: [] };
	}

	componentDidMount() {
		fetch('api/members').then(response => response.json())
			.then(data => {
				this.setState({ members: data});
				setTimeout(() =>{console.log(this.state.members)}, 1000);
			})
			.catch(e => {
				/*發生錯誤時要做的事情*/
				console.log(e);
			})
	}

	render() {
		const { members } = this.state;

		const memberList = members&&members.map(member => {
			return <tr key={member.mid}>
				<td>{member.mid}</td>
                <td>{member.email}</td>
                <td>{member.password}</td>
                <td>{member.firstName}</td>
                <td>{member.lastName}</td>
				<td>{member.imgUrl}</td>
			</tr>
		});

		return (
			<div>
				<Container fluid>
					<div className="d-flex mt-3 mb-2 justify-content-center ">
						<Button color="success" tag={Link} to="/members/new">Add Member</Button>
                    </div>
					<h3>Member</h3>
					<Table className="mt-4">
						<thead>
							<tr>
								<th>Mid</th>
								<th>Email</th>
								<th>Password</th>
								<th>FirstName</th>
								<th>LastName</th>
								<th>ImgUrl</th>
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