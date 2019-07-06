import PropTypes from 'prop-types'
import React from 'react'
import Head from 'next/head'
import AppLayout from '../components/AppLayout'
import withRedux from 'next-redux-wrapper'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers'

const NodeBird = ({ Component, store }) => {
    return (
        <Provider store={store}>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.19.0/antd.css" />
            </Head>
            <AppLayout>
                <Component />
            </AppLayout>
        </Provider>
    )
}

NodeBird.propTypes = {
    Component: PropTypes.elementType,
    store: PropTypes.object,
}

export default withRedux((initalState, options) => {
    const middlewares = []
    const enhancer = compose(applyMiddleware(...middlewares))
    const store = createStore(reducer, initalState)
    return store
})(NodeBird)