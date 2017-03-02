// Add your requirements
var restify = require('restify'); 
var builder = require('botbuilder'); 

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.PORT || process.env.port || 3978, function() 
{
   console.log('%s listening to %s', server.name, server.url); 
});

// Create chat bot
var connector = new builder.ChatConnector
({ appId: '', appPassword: '' }); 

var bot = new builder.UniversalBot(connector);
server.post('http://testbot-aj.azurewebsites.net/api/messages', connector.listen());
server.get(/.*/, restify.serveStatic({ 'directory': '.', 'default': 'index.html' }));

// Create bot dialogs
bot.dialog('/', function (session) {
    session.send("Hello Dynatrace");
});