import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FormInput from './FormInput';
import { commerce } from '../../lib/commerce';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';

const AddressForm = ({ checkoutToken, next }) => {
    const [ shippingCountries, setShippingCountries ] = useState([]);
    const [ shippingCountry, setShippingCountry ] = useState('');
    const [ shippingProvinces, setShippingProvinces ] = useState([]);
    const [ shippingProvince, setShippingProvince ] = useState('');
    const [ shippingOptions, setShippingOptions ] = useState([]);
    const [ shippingOption, setShippingOption ] = useState('');
    const methods = useForm();

    useEffect( () => {
        fetchShippingCountries( checkoutToken.id );
    }, []);

    const countries = Object.entries( shippingCountries ).map(([ code, name ]) => ({ id: code, label: name }));

    const fetchShippingCountries = async ( checkoutTokenId ) => {
        const { countries } = await commerce.services.localeListShippingCountries( checkoutTokenId );
        setShippingCountries( countries );
        setShippingCountry( Object.keys( countries )[0] );
    }

    useEffect( () => {
        if ( shippingCountry ) {
            fetchSubdivisions( shippingCountry )
        }
    }, [ shippingCountry ]); // Needs to know what shippingCountry will be to cause update

    const provinces = Object.entries( shippingProvinces ).map(([ code, name ]) => ({ id: code, label: name }));

    const fetchSubdivisions = async ( countryCode ) => {
        const { subdivisions } = await commerce.services.localeListSubdivisions( countryCode );

        setShippingProvinces( subdivisions );
        setShippingProvince( Object.keys( subdivisions )[0] );
    };

    useEffect( () => {
        if ( shippingProvince ) {
            fetchShippingOptions( checkoutToken.id, shippingCountry, shippingProvince );
        }
    }, [ shippingProvince ]);

    const options = shippingOptions.map( sO => ({ id: sO.id, label: `${ sO.description } - (${ sO.price.formatted_with_symbol })` }));
    const fetchShippingOptions = async ( checkoutTokenId, country, region = null ) => {
        const response = await commerce.checkout.getShippingOptions( checkoutTokenId, { country, region } );
        setShippingOptions( response );
        // Added this to make sure that response does return something before setting shipping option to the first item in array
        response.length && setShippingOption( response[0].id );
    }

    

    return (
        <>
            <Typography variant="h6" gutterBottom>Shipping Address</Typography>
            <FormProvider { ...methods }>
                <form onSubmit={ methods.handleSubmit( data => next( { ...data, shippingCountry, shippingProvince, shippingOption })) }>
                    <Grid container spacing={3}>
                        <FormInput name="firstName" label="First Name" />
                        <FormInput name="lastName" label="Last Name" />
                        <FormInput name="address" label="Address" />
                        <FormInput name="email" label="Email" />
                        <FormInput name="city" label="City" />
                        <FormInput name="postalCode" label="Postal Code" />
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Country</InputLabel>
                            <Select value={ shippingCountry } fullWidth onChange={ e => setShippingCountry( e.target.value ) }>
                                {
                                    countries.map( country => (
                                        <MenuItem key={ country.id } value={ country.id } >
                                            { country.label }
                                        </MenuItem>
                                    ))
                                }
                                
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Province</InputLabel>
                            <Select value={ shippingProvince } fullWidth onChange={ e => setShippingProvince( e.target.value ) }>
                                {
                                    provinces.map( province => (
                                        <MenuItem key={ province.id } value={ province.id } >
                                            { province.label }
                                        </MenuItem>
                                    ))
                                }
                                
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Options</InputLabel>
                            <Select value={ shippingOption } fullWidth onChange={ e => setShippingOption( e.target.value ) }>
                                {
                                    options.map( option => (
                                        <MenuItem key={ option.id } value={ option.id } >
                                            { option.label }
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </Grid>
                    </Grid>
                    < br />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button component={ Link } to="/cart" variant="outlined">Back to Cart</Button>
                        <Button type="submit" variant="contained" color="primary" >Next</Button>
                    </div>
                </form>
            </FormProvider>
        </>
    )
};

export default AddressForm
