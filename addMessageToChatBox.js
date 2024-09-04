// دالة لإضافة رسالة إلى نافذة الدردشة
function addMessageToChatBox(sender, message) {
    const newMessage = document.createElement('p');
    newMessage.textContent = message;

    if (sender === 'user') {
        newMessage.style.textAlign = 'right'; // تنسيق رسالة المستخدم
        newMessage.style.backgroundColor = '#dcf8c6';
        newMessage.style.borderRadius = '10px';
        newMessage.style.padding = '5px 10px';
    } else if (sender === 'bot') {
        newMessage.style.textAlign = 'left'; // تنسيق رسالة البوت
        newMessage.style.backgroundColor = '#f1f0f0';
        newMessage.style.borderRadius = '10px';
        newMessage.style.padding = '5px 10px';
    }

    if (sender === 'user') {
        if ('user ' === 'مرحبا') {
            'bot' === 'اهلا';
        }
    }


    chatBox.appendChild(newMessage);
}
