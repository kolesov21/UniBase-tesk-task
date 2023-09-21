const dropArea = document.querySelector('.file-drop-area');
const fileInput = document.querySelector('#file');
const labelText = document.querySelector('.file-drop-area__text');

function preventDefaultBehavior(event) {
    event.preventDefault();
    event.stopPropagation();
}

dropArea.addEventListener('dragenter', preventDefaultBehavior);
dropArea.addEventListener('dragover', preventDefaultBehavior);

dropArea.addEventListener('drop', function(event) {
    preventDefaultBehavior(event);
    const file = event.dataTransfer.files[0];
    labelText.textContent = 'Успешно! Другой?';
});

fileInput.addEventListener('change', function() {
    const file = this.files[0];
    labelText.textContent = 'Успешно! Другой?';
});