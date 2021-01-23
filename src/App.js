import React from 'react';
import GlobalStyles from './globalStyles';
import { 
    Navbar, 
    Products 
} from './components';

const App = () => {
    return (
        <>
            <GlobalStyles />
            <div>
                <Navbar />
                <Products />
            </div>
        </>
    )
}

export default App;
