import React, { Component } from 'react';
import Tree, { AnimatedTree } from 'react-tree-graph';
import '../../node_modules/react-tree-graph/dist/style.css'

class SkillTree extends Component {
    constructor(props) {
        super(props);
        this.state = { skills: [] };
    }

    componentDidMount() {
        fetch('api/skills').then(response => response.json())
            .then(data => {
                this.setState({ skills: data});
                console.log(this.state.skills);
            })
            .catch(e => (console.log(e)));
    }

    render() {
        const { skills } = this.state;
        let frontArray = [];
        let backendArray = [];
        let databaseArray = [];
        skills.forEach((skill) => {
            switch (skill.type) {
                case 'Frontend':
                    frontArray.push({ name: skill.name });
                    break;
                case 'Backend':
                    backendArray.push({ name: skill.name });
                    break;
                case 'Database':
                    databaseArray.push({ name: skill.name });
                    break;
                default:
                    break;
            }
        });
        const data = {
            name: 'Skills',
            children: [{
                name: 'Frontend',
                children: frontArray
            },{
                name: 'Backend',
                children: backendArray
            },{
                name: 'Database',
                children: databaseArray
            }]
        }
        return (
            <div >
                <div className="custom-container">
                    <AnimatedTree
                        className="pl-5"
                        data={data}
                        height={400}
                        width={800}
                        svgProps={
                            { className: 'custom' }
                        }
                        animated />
                </div>
            </div>
        )
    }

}

export default SkillTree;