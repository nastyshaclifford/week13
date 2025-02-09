document.getElementById('commentForm').addEventListener('submit', function(event) {

    event.preventDefault();  

    const name = document.getElementById('name').value.trim();
    const avatar = document.getElementById('avatar').value;
    const message = document.getElementById('message').value.trim();
    const showName = document.getElementById('showName').checked;
    const processedName = processName(name, showName);
    const processedMessage = checkSpam(message);
    const avatarToUse = avatar === '' ? getRandomAvatar() : avatar;

    displayComment(processedName, avatarToUse, processedMessage);

    document.getElementById('name').value = '';
    document.getElementById('avatar').value = '';
    document.getElementById('message').value = '';
});

function processName(name, showName) {
    if (!showName || name.trim() === '') {
        return 'username';
    }
    return name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

function checkSpam(str) {
    return str.replace(/viagra|xxx/gi, '***');
}

function getRandomAvatar() {
    const defAvatar = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfiLzQiXP3zoV-YqptDgH3SgQ81gdr-HkJRA&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmty8iy3Z8Avc6s9mCCWS3bl6Qui7uN1s3zQ&s',
        'https://avatars.dzeninfra.ru/get-zen_doc/5022901/pub_641724349eb89c7edab1341f_641726aedac81b380e0876b2/scale_1200',
        'https://runews24.ru/assets/images/uploads/pictures/2018/09/%D0%B6%D0%B8%D0%B2%D0%BE%D1%82%D0%BD%D1%8B%D0%B5_1.jpg',
        'https://avatars.dzeninfra.ru/get-zen_doc/1574327/pub_5da44d7c3639e600ae1ad4d9_5da44d95c7e50c00af78ebd8/scale_1200',
    ];
    return defAvatar[Math.floor(Math.random() * defAvatar.length)];
}

function displayComment(name, avatar, message) {
    const commentSection = document.getElementById('commentsSection');

    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    commentDiv.innerHTML = `
        <div class="comment-header">
            <img src="${avatar}" alt="Avatar">
            <strong>${name}</strong>
            <span class="comment-date">${formattedDate}</span>
        </div>
        <div class="comment-body">${message}</div>
    `;

    commentSection.appendChild(commentDiv);
}