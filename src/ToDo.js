import React from 'react'
import {database} from './firebase'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {List, ListItem} from 'material-ui/List';
import ActionDelete from 'material-ui/svg-icons/action/delete';



const Task = (props) => (
    <ListItem
        primaryText={props.taskName}
        rightIcon={<ActionDelete onClick={()=>props.deleteTask(props.taskId)}/>}
    />
)

class Todo extends React.Component {
    state = {
        tasks: null,
        textFromInput: '',
    }

    componentWillMount() {
        database.ref('/Todo')
            .on('value', (snapshot) => {
                    const arrTasks = Object.entries(
                        snapshot.val() || {}).map(([key,value])=>{value.key = key; return value})
                    this.setState({tasks: arrTasks})
                }
            )
    }

    deleteTask = (taskId) => {
        database.ref('/Todo/'+taskId)
            .remove()
    }

    // handleTextFromInput = (e, val) => {
    //     this.setState({textFromInput: e.target.value})
    // }

    handleAddTask = () => {
        if (!this.state.textFromInput){
            alert('empty input');
            return
        }

        database.ref('/Todo')
            .push({name: this.state.textFromInput})
        this.setState({textFromInput : ''})
    }

    render() {
        return (
            <div>
                <TextField
                    hintText={"Do something nice..."}
                    fullWidth={true}

                    value={this.state.textFromInput}
                    onChange={(e,value)=> this.setState({textFromInput: value})} // onChange={this.handleTextFromInput}
                />
                <RaisedButton
                    label={"add"}
                    primary={true}
                    fullWidth={true}
                    onClick={this.handleAddTask}
                />

                <List style={{textAlign:'left'}}>
                    {
                        this.state.tasks
                        &&
                        this.state.tasks.map((el) => (
                            <Task
                                taskName = {el.name}
                                taskId = {el.key}
                                deleteTask = {this.deleteTask}
                                key = {el.key}
                            />
                        ))
                    }
                </List>
            </div>
        )
    }
}

export default Todo