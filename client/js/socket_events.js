
// socket init
var socket = io();

// DOM loaded
var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
};
  
ready(() => { 

    // helper selectors
    const $messageForm = document.getElementById('messageForm');
    const $message = document.getElementById('formText');
    const $submit = document.getElementById('formSubmit');
    
    // on form submit
    $messageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // send message to server using socket
        socket.emit('message', $message.value);
        $message.value = ''; // empty message box
    });
});