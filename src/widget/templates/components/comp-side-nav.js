import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

const styles = {
    list: {
        width:250,
    },
    fullList: {
        width:'auto',
    }   
};

class SideNav extends Component {
    state = {
        left:false,
    }

    ToggleSideNav = (side, open) => () => {
        this.setState({
          [side]: open,
        });
      };

    render() {
        const {classes} = this.props;
        return(
            <div>
                <Button onClick={this.ToggleSideNav('left', true)}>Open Left</Button>
                <Drawer open={this.state.left} onClose={this.ToggleSideNav('left', false)}>
                    <div className={classes.list}>
                        <List>Electornics</List>
                        <Divider />
                        <List>Men Wear</List>
                    </div>
                </Drawer>
            </div>
        );
    }
}

SideNav.PropTypes = {
    classes: PropTypes.object.isRequired,
}
export default withStyles (styles) (SideNav);