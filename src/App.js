import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Paper from 'material-ui/Paper'
import ToDo from './ToDo'

const paperStyles = {
    margin: 20,
    padding: 20,
    textAlign: 'center'
}

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar
                        title="Todo"
                    />
                </div>
                <Paper style={paperStyles}>
                    <ToDo/>
                </Paper>
            </MuiThemeProvider>
        );
    }
}

export default App;
