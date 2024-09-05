
function toggleSelection(element) {
    element.classList.toggle('selected');
}

document.addEventListener('DOMContentLoaded', function() {
    const captchaImages = document.querySelectorAll('.captcha-image');
    const verifyButton = document.getElementById('verify-button');


    captchaImages.forEach(image => {
        image.addEventListener('click', function() {
           
            if (this.getAttribute('data-image').startsWith('cat')) {
                toggleSelection(this);
            }
        });
    });
});
