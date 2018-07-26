import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';

const banners = [
  {
    label: 'Daily Offers :)',
    imgPath: 'https://storiesflistgv2.blob.core.windows.net/stories/2016/09/daily_offers_banner_Final.jpg ',
  },
  {
    label: '1. 40% Off Season',
    imgPath: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/806fe417784937.5676ca4a7b59a.jpg',
  },
  {
    label: 'Honor 9 Lite',
    imgPath: 'http://st1.bgr.in/wp-content/uploads/2018/02/Honor-9-Lite-Flipkart-banner.png',
  },
  {
    label: 'Exchange Offers',
    imgPath: 'https://stories.flipkart.com/wp-content/uploads/2016/02/productexchange_adbanner4.png',
  },
];

const styles = theme => ({
  root: {
    maxWidth: 1500,
    flexGrow: 1,
    margin:'auto',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    marginBottom: 20,
    backgroundColor: theme.palette.background.default,
    position:'absolute',
    top:'22%',
    zIndex:999,
    right:'20%',
    width:'20%',
  },
  img: {
    height: 380,
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
    maxWidth:1500,
  },
  strip:{   
      backgroundColor:'#f1b507',
      width:'100%',
      height:5,
  }
});

class BannerSlider extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;

    const maxSteps = banners.length;

    return (
      <div className={classes.root}>
        <Paper square elevation={0} className={classes.header}>
          <Typography>{banners[activeStep].label}</Typography>
        </Paper>
        <div className={classes.strip}></div>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {banners.map(step => (
            <img key={step.label} className={classes.img} src={step.imgPath} alt={step.label} />
          ))}
        </SwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
        />
      </div>
    );
  }
}

BannerSlider.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(BannerSlider);