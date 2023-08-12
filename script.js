const openPopupBtn = document.getElementById('openPopupBtn');
const popupContainer = document.getElementById('popupContainer');

openPopupBtn.addEventListener('click', (event) => {
    event.preventDefault(); 
    popupContainer.style.display = 'flex';
});

popupContainer.addEventListener('click', (event) => {
    if (event.target === popupContainer) {
        popupContainer.style.display = 'none';
    }
});



