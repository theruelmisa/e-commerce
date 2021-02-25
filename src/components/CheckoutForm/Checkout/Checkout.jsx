import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { commerce } from '../../../lib/commerce';
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button, CssBaseline } from '@material-ui/core';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import useStyles from './styles';

// NOTE: CssBaseline is a quickfix for narrowly misaligned elements on mobile provided by material ui

const steps = ['Shipping Address', 'Payment Details'];

const Checkout = ({ cart, order, onCaptureCheckout, error  }) => {
    const [ activeStep, setActiveStep ] = useState(0);
    const [ checkoutToken, setCheckoutToken ] = useState(null);
    const [ shippingData, setShippingData ] = useState({});
    const [ isDone, setIsDone ] = useState(false);
    const classes = useStyles();
    const history = useHistory();

    useEffect( () => {
        
        generateToken();
    }, [cart]);

    const generateToken = async () => {
        try {
            const token = await commerce.checkout.generateToken( cart.id, { type: 'cart' } );
            setCheckoutToken( token );
        } catch ( error ) {
            // go back to home page if you are in the checkout and you encounter an error
            history.pushState('/');
        }
    };

    

    const nextStep = () => setActiveStep( prevActiveStep => prevActiveStep + 1);
    const prevStep = () => setActiveStep( prevActiveStep => prevActiveStep - 1);

    const next = data => {
        setShippingData( data );
        nextStep();
    }

    const timeout = () => {
        setTimeout( () => {
            setIsDone( true );
        }, 3000);
    }

    let Confirmation = () => order.customer ? (
        <>
            <div>
                <Typography variant="h5">
                    Thank you for shopping with us, { order.customer.firstname } { order.customer.lastname }
                </Typography>
                <Divider className={ classes.divider } />
                <Typography variant="subtitle2">Order ref: { order.customer_reference } </Typography>
            </div>
            <br />
            <Button component={ Link } to="/" variant="outlined" type="button">Return to Home Page</Button>
        </>
    ) : isDone ? (
        <>
            <div>
                <Typography variant="h5">
                    Thank you for shopping with us.
                </Typography>
                <Divider className={ classes.divider } />
            </div>
            <br />
            <Button component={ Link } to="/" variant="outlined" type="button">Return to Home Page</Button>
        </>
    ) : (
        <div className={ classes.spinner }>
            <CircularProgress />
        </div>
    );

    if ( error ) {
        <>
            <Typography variant="h5">Error: { error }</Typography>
            <br />
            <Button component={ Link } to="/" variant="outlined" type="button">Return to Home Page</Button>
        </>
    }

    const Form = () => activeStep === 0
        ? <AddressForm checkoutToken={ checkoutToken } next={ next }/>
        : <PaymentForm 
            checkoutToken={ checkoutToken } 
            shippingData={ shippingData } 
            prevStep={ prevStep } 
            nextStep={ nextStep } 
            onCaptureCheckout={ onCaptureCheckout }
            timeout={ timeout }
        />

    return (  
        <>
        <CssBaseline />
            <div className={ classes.toolbar } />
            <main className={ classes.layout }>
                <Paper className={ classes.paper }>
                    <Typography variant="h4" align="center">Checkout</Typography>
                    <Stepper activeStep={ activeStep } className={ classes.stepper }>
                        { steps.map( step => (
                            <Step key={ step }>
                                <StepLabel>{ step }</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    { activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form /> }
                </Paper>
            </main>
        </>
    );
};


export default Checkout;