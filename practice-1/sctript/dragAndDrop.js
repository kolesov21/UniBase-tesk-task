const dropArea = document.querySelector('.file-drop-area');
const fileInput = document.querySelector('#file');
const labelText = document.querySelector('.file-drop-area__text');
const clearIcon = document.querySelector('.file-drop-area__icon');

function preventDefaultBehavior(event) {
    event.preventDefault();
    event.stopPropagation();
}

dropArea.addEventListener('dragenter', preventDefaultBehavior);
dropArea.addEventListener('dragover', preventDefaultBehavior);

dropArea.addEventListener('drop', function(event) {
    preventDefaultBehavior(event);
    const file = event.dataTransfer.files[0];
});

fileInput.addEventListener('click', function(event) {
    preventDefaultBehavior(event);
    const imageURL = prompt('Укажите ссылку на картинку');
    isImageURL(imageURL);

    function isImageURL(url) {
        const img = new Image();

        img.onload = function() {
          if (img.width > 0 && img.height > 0) {
            dropArea.style.backgroundImage = `url(${imageURL})`;
          } else {
            alert("Ссылка не ведет на изображение.");
          }
        };
      
        img.onerror = function() {
          alert("Ошибка при загрузке изображения.");
        };

        img.src = url;
    }
});

clearIcon.addEventListener('click', function(){
    dropArea.style.backgroundImage = "url(./img/image-example.png)";
})