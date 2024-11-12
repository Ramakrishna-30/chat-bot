let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];
let chatContainer = document.getElementById("chatContainer");
let userInput = document.getElementById("userInput");

document.getElementById("sendMsgBtn").addEventListener("click", () => {
    // Get user input text
    let userMessage = userInput.value.trim();

    // Check if there's any text entered
    if (userMessage !== "") {
        // Display user's message
        let userMsgContainer = document.createElement("div");
        userMsgContainer.className = "msg-to-chatbot-container";
        let userMsg = document.createElement("div");
        userMsg.className = "msg-to-chatbot";
        userMsg.textContent = userMessage;
        userMsgContainer.appendChild(userMsg);
        chatContainer.appendChild(userMsgContainer);

        // Clear the input field
        userInput.value = "";

        // Chatbot response
        setTimeout(() => {
            let botResponseContainer = document.createElement("div");
            botResponseContainer.className = "msg-from-chatbot-container";
            let botResponse = document.createElement("div");
            botResponse.className = "msg-from-chatbot";

            // Get random response from chatbotMsgList
            let randomResponse = chatbotMsgList[Math.floor(Math.random() * chatbotMsgList.length)];
            botResponse.textContent = randomResponse;
            botResponseContainer.appendChild(botResponse);
            chatContainer.appendChild(botResponseContainer);

            // Scroll to the latest message
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }, 500);
    }
});
