document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('cardForm');
    const templates = document.querySelectorAll('.template');

    let selectedTemplate = null;
    let selectedMessage = null;
    let senderName = null;
    let receiverName = null;

    // Handle template selection
    templates.forEach(template => {
        template.addEventListener('click', function () {
            templates.forEach(t => t.classList.remove('selected'));
            this.classList.add('selected');
            selectedTemplate = this.dataset.template;
        });
    });

    // Handle form submission
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission

        selectedMessage = document.getElementById('messageSelect').value;
        senderName = document.getElementById('nameFrom').value;
        receiverName = document.getElementById('nameTo').value;

        if (!selectedTemplate || !selectedMessage || !senderName || !receiverName) {
            alert("Please select a template, choose a message, and provide names.");
            return;
        }

        // Define messages
        const messages = {
            brother_to_sister: `Dear ${receiverName} 👩<br><br>Wishing you a joyous Raksha Bandhan. You have always been a source of inspiration and strength to me. May our bond continue to grow stronger with each passing year. Happy Raksha Bandhan!<br><br>With love,<br>${senderName} <br>❤️🤜🏻🤛🏻❤️`,
            sister_to_brother: `Dear  ${receiverName}👦<br><br>Happy Raksha Bandhan! I am so grateful to have you as my brother. Your support and love mean the world to me. May our bond be filled with happiness and joy. Enjoy this special day!<br><br>With love,<br>${senderName}<br> ❤️🤜🏻🤛🏻❤️`
        };

        const message = messages[selectedMessage];

        // Create a new window for the card
        const cardWindow = window.open('', '_blank');
        cardWindow.document.open();
        cardWindow.document.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Raksha Bandhan Card</title>
                <style>
                    body {
                        font-family: 'Arial', sans-serif;
                        background-color: #926060;
                        margin: 0;
                        padding: 0;
                        display:flex;
                        justify-content: center;
                        align-items: center;
                        height: 150vh;
                    }
                    .card-box {
                        padding: 30px;
                        border: 2px solid #d63384;
                        border-radius: 12px;
                        background: white;
                        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
                        max-width: 500px;
                        width: 100%;
                        position: relative;
                        text-align: center;
                    }
                    .card-box::before {
                        content: "";
                        position: absolute;
                        top: -10px;
                        left: -10px;
                        right: -10px;
                        bottom: -10px;
                        border-radius: 12px;
                        border: 4px solid #d63384;
                        z-index: -1;
                    }
                    .template-container, .message-container {
                        margin-bottom: 20px;
                    }
                    .template {
                        width: 100%;
                        max-width: 600px;
                        border-radius: 10px;
                    }
                    .message {
                        font-family:'Times New Roman', Times, serif;
                        font-size: 22px;
                        color: #black;
                        line-height: 1.6;
                        margin-top: 20px;
                        text-align: center;
                    }
                    .message p {
                        margin: 0;
                    }
                </style>
            </head>
            <body>
                <div class="card-box">
                    <div class="template-container">
                        <img class="template" src="Templates_${selectedTemplate}.png" alt="Selected Template">
                    </div>
                    <div class="message-container">
                        <div class="message">
                            <p>${message}</p>
                        </div>
                    </div>
                </div>
            </body>
            </html>
        `);
        cardWindow.document.close();
    });
});
