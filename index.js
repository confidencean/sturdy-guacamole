document.getElementById("messageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const message = document.getElementById("messageInput").value;
  if (message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.innerHTML = `
    匿名
    ${message}
    `;
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "删除";
    deleteButton.addEventListener("click", function () {
      messageElement.remove();
    });
    messageElement.appendChild(deleteButton);
    document.getElementById("messages").appendChild(messageElement);
    document.getElementById("messageInput").value = "";
  }
});
