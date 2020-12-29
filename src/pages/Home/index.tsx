import React from 'react';
import Layout from '../Layout';
import Premium from './Premium';
import Retrospective from './Retrospective';
import Free from './Free';

const Home: React.FC = () => {
    return (
        <Layout>
            <Premium />
            <Retrospective />
            <Free />
        </Layout>
    );
};

export default Home;
