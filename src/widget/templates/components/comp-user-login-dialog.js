import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class UserLoginDialog extends Component {
    state = {
        open: false,
    };

    OpenLoginDialog = () => {
        this.setState({
            open: true,
        });
    }
    closeLoginDialog = () => {
        this.setState({
            open: false,
        });
    }
    
    render() {
        return(
            <div>
                <Button onClick={this.OpenLoginDialog}>Login Dialog</Button>
                <Dialog open={this.state.open} onClose={this.state.close} aria-labelledby="form-dialog-title">
                    <b onClick={this.closeLoginDialog} className="btnClose">X</b>
                    <DialogTitle id="form-dialog-title">Login</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please Provide Your Login Credentials.
                        </DialogContentText>
                        <TextField 
                            id="txtUserEmail"
                            autoFocus
                            margin="dense"
                            type="email"
                            label="EMail Address"
                            fullwidth 
                        />
                        <TextField 
                            id="txtUserPassword"
                            margin="dense"
                            type="password"
                            label="Password"
                            fullwidth 
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button>Log-in</Button>
                        <Button>Sign-Up</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    };
}

export default UserLoginDialog;