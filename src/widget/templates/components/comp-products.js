import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia/CardMedia';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography/Typography';
import image from '../../../images/iphone_x.png';
import TodoList from './comp-todolist';
import Table from '@material-ui/core/Table/Table';

const styles = {
    card: {
        maxWidth: 345,
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
}

const ProductLists = (props) => {
    const {classes} = props;
    const path = "img/iphone_x.png";
    return(
        <div>
            <Grid container>
                {/* <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Card className={classes.card}>
                        <CardMedia className={classes.media} title="Product1" image="src/images/iphone_x.png"/>
                        <CardContent>
                            <Typography gutterButton varient="headline" component="h2" >
                                Lizard
                            </Typography>
                            <Typography component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">view</Button>
                        </CardActions>
                    </Card>
                </Grid> */}

                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Card className={classes.card}>
                        <CardMedia className={classes.media} title="Product1" image="src/images/iphone_x.png"/>
                        <CardContent>
                            <Typography gutterButton varient="headline" component="h2" >
                            {/* Todo List Component */}
                                <TodoList aria-label="Todo List" />
                            </Typography>
                            <br/>
                            <Typography component="p">
                               
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}
ProductLists.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles() (ProductLists);
