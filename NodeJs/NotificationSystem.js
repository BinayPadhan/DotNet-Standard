// Do not make any change in this code template
 
const EventEmitter = require('events');
 
// Initialize the EventEmitter
const messageEmitter = new EventEmitter();
 
// Arrays to store notifications
let mobileAppNotifications = [];
let webAppNotifications = [];
let emailNotifications = [];
 
// Hardcoded message data
const messages = [
    { sender: 'Alice', content: 'Hey, are you coming to the meeting?' },
    { sender: 'Bob', content: 'Don’t forget to submit your report by EOD.' },
    { sender: 'Charlie', content: 'Happy Birthday! Hope you have a great day!' }
];
 
// Registering the subscribers to the 'newMessage' event
messageEmitter.on('newMessage', notifyMobileApp);
messageEmitter.on('newMessage', notifyWebApp);
messageEmitter.on('newMessage', notifyEmail);
 
// Subscriber functions to handle notifications
 
function notifyMobileApp(message) {
    // Format: 'Mobile App Notification: New message from {sender} - "{content}"'
    const notification = `Mobile App Notification: New message from ${message.sender} - "${message.content}"`;
    mobileAppNotifications.push(notification);
}
 
function notifyWebApp(message) {
    // Format: 'Web App Notification: New message from {sender} - "{content}"'
    const notification = `Web App Notification: New message from ${message.sender} - "${message.content}"`;
    webAppNotifications.push(notification);
}
 
function notifyEmail(message) {
    // Format: 'Email Notification: You have a new message from {sender}: "{content}"'
    const notification = `Email Notification: You have a new message from ${message.sender}: "${message.content}"`;
    emailNotifications.push(notification);
}
 
// Publisher function to emit new messages
function publishMessage(sender, content) {
    // This function publishes a message by emitting a 'newMessage' event
    const messageObj = { sender, content };
    messageEmitter.emit('newMessage', messageObj);
}
 
// Publish each hardcoded message
function publishAllMessages() {
    // Reset arrays to ensure they match the specific output for each evaluation run
    mobileAppNotifications.length = 0; 
    webAppNotifications.length = 0;
    emailNotifications.length = 0;
 
    // Iterating through the messages array and calling publishMessage for each
    messages.forEach(msg => {
        publishMessage(msg.sender, msg.content);
    });
 
    // Returns an object containing arrays of notifications
    return {
        mobileAppNotifications,
        webAppNotifications,
        emailNotifications
    };
}
 
// Run the scenario
const notifications = publishAllMessages();
 
module.exports = {
    publishMessage,
    publishAllMessages,
    notifyMobileApp,
    notifyWebApp,
    notifyEmail,
    messageEmitter,
    mobileAppNotifications,
    webAppNotifications,
    emailNotifications
};