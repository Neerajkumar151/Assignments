
const button = document.querySelector("button");

document.addEventListener("mousemove", (e) => {
    const rect = button.getBoundingClientRect();

    const distance = Math.hypot(
        e.clientX - (rect.left + rect.width / 2),
        e.clientY - (rect.top + rect.height / 2)
    );

    if (distance < 120) {
        const moveX = Math.random() * 300 - 150;
        const moveY = Math.random() * 200 - 100;

        button.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
});