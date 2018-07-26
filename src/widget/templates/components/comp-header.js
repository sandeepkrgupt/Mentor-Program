import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import compUserLoginDialog from './comp-user-login-dialog';
import compUserSignupDialog from './comp-user-signup-dialog';
import UserLoginDialog from './comp-user-login-dialog';
import UserSignupDialog from './comp-user-signup-dialog';
import TextField from '@material-ui/core/TextField';
import SideNav from './comp-side-nav';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class  Header extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                            <SideNav />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            Go<b>Store</b>Online
                        </Typography>
                        <div>
                        <TextField 
                                    id="txtUserEmail"
                                    autoFocus
                                    margin="dense"
                                    type="email"
                                    label="Search Product"
                                    fullwidth 
                                    color="inherit"
                                />
                        </div>
                        <div>
                            <IconButton color="inherit">
                                <AccountCircle />
                            </IconButton>
                        </div>
                    </Toolbar>
                    <UserLoginDialog />
                </AppBar>
            </div>
          );
    }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);