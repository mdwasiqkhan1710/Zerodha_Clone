import React from 'react';
import Hero from './Hero'
import InvestmentOptions from './InvestmentOptions';
import StepsAccountOpen from './StepsAccountOpen';
import AccountOptions from './AccountOptions';
import InputForm from './InputForm';

function SignUp() {
    return ( 
        <div>
        <Hero />
        <InvestmentOptions />
        <StepsAccountOpen />
        <AccountOptions />
        <InputForm />
        </div>
     );
}

export default SignUp;