document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.boxes-container');
    const boxes = document.querySelectorAll('.box');

    // Calculate the width to scroll to the middle box ("Projects")
    const middleBoxIndex = 1; // Assuming "Projects" is the second box (index starts from 0)
    const boxWidth = boxes[0].offsetWidth + 20; // Box width + margin

    // Scroll to the position where the "Projects" box is centered
    container.scrollLeft = middleBoxIndex * boxWidth - container.clientWidth / 2 + boxWidth / 2;
});
