//Rather than hardcoding, we make use of renderer to return the html
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/Routes';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript';

export default (req, store) => {
    const content = renderToString(<Provider store={store}><StaticRouter location={req.path} context={{}}><div>{renderRoutes(Routes)}</div></StaticRouter></Provider>);
    return `<html><head>
    <style>html,body{padding:0;margin:0;font-family:DWFutura,sans-serif;}.listItems:hover{ box-shadow: 0 0 17px rgba(33,33,33,.2)}</style></head><body><script>window.INITIAL_STATE = ${serialize(store.getState())}</script><div id="root">${content}</div><script src="bundle.js"></script></body></html>`;
}