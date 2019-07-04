import PropTypes from 'prop-types'
import React from 'react'
import Head from 'next/head'
import AppLayout from '../components/AppLayout'

const NodeBird = ({ Component }) => {
    return (
        <>  
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.19.0/antd.css" />
            </Head>
            <AppLayout>
                <Component />
            </AppLayout>
        </>
    )
}

NodeBird.propTypes = {
    Component: PropTypes.elementType,
}

export default NodeBird