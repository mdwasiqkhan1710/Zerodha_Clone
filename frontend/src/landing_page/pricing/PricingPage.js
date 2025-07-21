import React from 'react';
import Hero from './Hero';
import ChargesExplained from './ChargesExplained';
import ChargesforAccount from './ChargesforAccount';
import EquityTable from './EquityTable';


function PricingPage() {
    return ( 
        <>
        <Hero />
        <EquityTable />
        <ChargesExplained />
        <ChargesforAccount />
        </>
     );
}

export default PricingPage;