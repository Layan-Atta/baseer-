// تعريف المتغيرات
const sendButton = document.getElementById('send-btn');
const chatInput = document.getElementById('chat-input');
const chatBox = document.getElementById('chat-box');

// إضافة حدث للزر عند النقر
sendButton.addEventListener('click', function() {
    const message = chatInput.value.trim();

    // تحقق إذا كانت الرسالة ليست فارغة
    if (message) {
        // إضافة رسالة المستخدم
        addMessageToChatBox('user', message);

        // تنظيف حقل الإدخال بعد الإرسال
        chatInput.value = '';

        // التمرير إلى الأسفل تلقائياً لرؤية الرسالة الجديدة
        chatBox.scrollTop = chatBox.scrollHeight;

        // إضافة رد تلقائي بعد إرسال رسالة المستخدم
        setTimeout(function() {
            addMessageToChatBox('bot', 'شكرًا لرسالتك! كيف يمكنني مساعدتك أكثر؟');
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 1000); // تأخير لمدة 1 ثانية قبل إرسال الرد التلقائي
    }
});

// يمكن إرسال الرسالة بالضغط على "Enter"
chatInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendButton.click();
    }
});

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

    chatBox.appendChild(newMessage);
}
