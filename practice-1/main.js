const modalBtn = document.querySelector('.btn');
const formBtn = document.querySelector('.buttons__cancel');
const modalBackground = document.querySelector('.modal')

modalBtn.addEventListener('click', function(){
    const modalWindow = document.querySelector('.modal');
    modalWindow.style.display = 'flex';
});

formBtn.addEventListener('click', function(){
    const modalWindow = document.querySelector('.modal');
    modalWindow.style.display = 'none';
});

modalBackground.addEventListener('click', function(event) {
    if (event.target === modalBackground) {
        modalBackground.style.display = 'none';
    }
});