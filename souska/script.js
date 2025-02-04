document.getElementById("confessButton").addEventListener("click", function() {
  const responseMessage = document.getElementById("responseMessage");
  responseMessage.textContent = "I’m so happy you feel the same way! ❤️";
  responseMessage.classList.remove("hidden");
});