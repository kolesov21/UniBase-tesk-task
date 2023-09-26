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
    updateBackgroundImage(event.dataTransfer.files[0]);
});

fileInput.addEventListener('change', function(event) {
    preventDefaultBehavior(event);
    updateBackgroundImage(event.target.files[0]);
});

function updateBackgroundImage(file){
  const reader = new FileReader();

  reader.onload = function(event) {
  const imageURL = event.target.result;
  dropArea.style.backgroundImage = `url(${imageURL})`;
  }

  reader.readAsDataURL(file);
}

clearIcon.addEventListener('click', function(){
    dropArea.style.backgroundImage = "url(./img/image-example.png)";
})