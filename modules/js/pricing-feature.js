document.addEventListener("DOMContentLoaded", () => {
    const bookButtons = document.querySelectorAll(".pricing-card-button");
    const planSelect = document.getElementById("planSelect");

    if (!bookButtons.length || !planSelect) {
        console.error("Кнопки 'BOOK NOW' або селектор планів не знайдені!");
        return;
    }
    const toTitleCase = (text) =>
        text
            .toLowerCase()
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

    bookButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();

            const card = button.closest(".pricing-card, .highlight-wrapper .highlight");
            if (!card) {
                console.error("Картка для кнопки не знайдена");
                return;
            }
            const planName = toTitleCase(card.querySelector(".pricing-card-header").textContent.trim());

            let found = false;
            [...planSelect.options].forEach((option) => {
                if (option.textContent.trim() === planName) {
                    option.selected = true;
                    found = true;
                }
            });
            if (!found) {
                console.warn(`План "${planName}" не знайдено в селекторі`);
            }
            document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" });
        });
    });
});
