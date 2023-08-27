const localVideo = document.getElementById('localVideo');
const remoteVideo = document.getElementById('remoteVideo');
const chatLog = document.getElementById('chatLog');
const chatInput = document.getElementById('chatInput');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

// Function to display chat messages
function displayChatMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.textContent = message;
  chatLog.appendChild(messageElement);
  chatLog.scrollTop = chatLog.scrollHeight;
}

// Event listeners for chat input
chatInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    const message = chatInput.value;
    displayChatMessage(`You: ${message}`);
    chatInput.value = '';
  }
});

// Event listeners for start and stop buttons (mocking video stream)
startButton.addEventListener('click', () => {
  navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then((stream) => {
      localVideo.srcObject = stream;
    });
});

stopButton.addEventListener('click', () => {
  const stream = localVideo.srcObject;
  if (stream) {
    const tracks = stream.getTracks();
    tracks.forEach(track => track.stop());
    localVideo.srcObject = null;
  }
});
