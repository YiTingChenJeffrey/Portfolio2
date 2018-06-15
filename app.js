'use strict';

const Hapi = require('hapi');
const Blipp = require('blipp');
const Path = require('path');
const Inert = require('inert');
const Vision = require('vision');
const Handlebars = require('handlebars');

const server = new Hapi.Server({

    connections:{

        routes:{
            files:{
                relativeTo: Path.join(__dirname, 'public')
            }
        }
    }

});

server.connection({
    port: (process.env.PORT || 3000)
});

server.register([Blipp, Inert, Vision], ()=> {});

server.views({
    engines: {
        html: Handlebars
    },
    path: 'views',
    layoutPath: 'views/layout',
    layout: 'layout',
    helpersPath: 'views/helpers'


});

server.route({
    method: 'GET',
    path: '/{param*}',
    handler:{
        directory:{
            path: './',
            listing: true,
            index: false,
            redirectToSlash: true
        }
    }
});

server.route({
    method: 'GET',
    path: '/',
    handler: {
        view: {
            template: 'index'
        }
    }
});


server.route({
    method: 'GET',
    path: '/specialolympics',
    handler: {
        view: {
            template: 'specialolympics'
        }
    }
});

server.route({
    method: 'GET',
    path: '/datavisualization',
    handler: {
        view: {
            template: 'datavisualization'
        }
    }
});

server.route({
    method: 'GET',
    path: '/3dcharacter',
    handler: {
        view: {
            template: '3dcharacter'
        }
    }
});

server.route({
    method: 'GET',
    path: '/resume',
    handler: {
        view: {
            template: 'resume'
        }
    }
});

server.route({
    method: 'GET',
    path: '/2dcharacter',
    handler: {
        view: {
            template: '2dcharacter'
        }
    }
});

server.route({
    method: 'GET',
    path: '/treasurekey',
    handler: {
        view: {
            template: 'treasurekey'
        }
    }
});

server.route({
    method: 'GET',
    path: '/specialeffects',
    handler: {
        view: {
            template: 'specialeffects'
        }
    }
});


server.route({
    method: 'GET',
    path: '/portfolio',
    handler: {
        view: {
            template: 'portfolio'
        }
    }
});


server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});