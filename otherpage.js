document.getElementById('houseBtn').addEventListener('click', function() {
    window.location.href = 'tel:9842761000';
    sendMessage("Someone is in my house");
  });
  
  document.getElementById('followingBtn').addEventListener('click', function() {
    window.location.href = 'tel:9842761000';
    sendMessage("Someone is following me");
  });
  
  document.getElementById('otherBtn').addEventListener('click', function() {
    window.location.href = 'tel:9842761000';
    sendMessage("Other");
  });
  
  function sendMessage(message) {
    // Logic to forward the message to 9842761000
    // For demonstration purposes, leaving this part abstract as it requires server-side logic.
    console.log("Sending message:", message);
  }
  