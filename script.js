function setAvatar() {
    const html = document.documentElement
    const img = document.querySelector('#profile-avatar')
    const src = html.classList.contains('light')
        ? 'assets/avatar-light.png'
        : 'assets/avatar.png'
    img.setAttribute('src', src)
}

function toggleMode() {
    document.documentElement.classList.toggle('light')
    setAvatar()
}

window.addEventListener('DOMContentLoaded', setAvatar)
