import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

import { menu } from './content';

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Header arr={menu} />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
