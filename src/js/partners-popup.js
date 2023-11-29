// Selecting the preview container and preview cards
let previewContainer = document.querySelector('.partners__preview');
let previewBoxes = previewContainer.querySelectorAll('.partners__previewcard');

// Selecting all logo elements
document.querySelectorAll('.partners__logo').forEach(logo => {
    logo.onclick = () => {
        // Hiding all preview cards
        previewBoxes.forEach(preview => {
            preview.classList.remove('active');
        });

        // Displaying only the corresponding preview card
        let name = logo.getAttribute('data-name');
        let correspondingPreview = document.querySelector(`[data-target="${name}"]`);

        if (correspondingPreview) {
            correspondingPreview.classList.add('active');
            previewContainer.style.display = 'flex';
        }
    };
});

// Handling close button click for each preview card
previewBoxes.forEach(close => {
    close.querySelector('.fa-times').onclick = () => {
        close.classList.remove('active');
        previewContainer.style.display = 'none';
    };
});
