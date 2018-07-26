import React from 'react';
import ProductLists from './comp-products';
import ProductCarousel from './comp-product-carousel';
import BannerSlider from './comp-carousel-slider';
import {withStyles} from '@material-ui/core/styles';
import TodoList from './comp-todolist.js';

const styles = theme => ({
    root: {
        maxWidth:1500,
        margin:'auto',
    }
});

const ProductContainer = (props) => {
    const {classes} = props;
    return(
        <div className={classes.root}>
            <BannerSlider />
            <ProductCarousel />
            <ProductLists />
        </div>
    );
}

export default withStyles (styles) (ProductContainer);