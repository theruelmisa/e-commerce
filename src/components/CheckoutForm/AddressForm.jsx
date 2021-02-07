import React, { useState } from 'react';
import FormInput from './FormInput';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';

const AddressForm = () => {
    const [ shippingCountries, setShippingCountries ] = useState([]);
    const [ shippingCountry, setShippingCountry ] = useState('');
    const [ shippingProvinces, setShippingProvinces ] = useState([]);
    const [ shippingProvince, setShippingProvince ] = useState('');
    const [ shippingOptions, setShippingOptions ] = useState([]);
    const [ shippingOption, setShippingOption ] = useState('');
    const methods = useForm();

    return (
        <>
            <Typography variant="h6" gutterBottom>Shipping Address</Typography>
            <FormProvider { ...methods }>
                <form onSubmit=''>
                    <Grid container spacing={3}>
                        <FormInput required name="firstName" label="First Name" />
                        <FormInput required name="lastName" label="Last Name" />
                        <FormInput required name="address" label="Address" />
                        <FormInput required name="email" label="Email" />
                        <FormInput required name="city" label="City" />
                        <FormInput required name="postalCode" label="Postal Code" />
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Country</InputLabel>
                            <Select value="" fullWidth onChange="">
                                <MenuItem key="" value="" >
                                    Select Me
                                </MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Province</InputLabel>
                            <Select value="" fullWidth onChange="">
                                <MenuItem key="" value="" >
                                    Select Me
                                </MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Options</InputLabel>
                            <Select value="" fullWidth onChange="">
                                <MenuItem key="" value="" >
                                    Select Me
                                </MenuItem>
                            </Select>
                        </Grid>
                    </Grid>
                </form>
            </FormProvider>
        </>
    )
};

export default AddressForm
