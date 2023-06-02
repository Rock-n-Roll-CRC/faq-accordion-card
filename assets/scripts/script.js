"use strict";
const faqListItems = document.querySelectorAll(".faq-list li");
for (const faqListItem of faqListItems) {
    const faqListItemHeading = faqListItem.querySelector("h3");
    const faqListItemParagraph = faqListItem.querySelector("p");
    const faqListItemArrow = faqListItem.querySelector(".arrow");
    faqListItemHeading === null || faqListItemHeading === void 0 ? void 0 : faqListItemHeading.addEventListener("click", () => {
        faqListItemHeading === null || faqListItemHeading === void 0 ? void 0 : faqListItemHeading.classList.toggle("active");
        faqListItemArrow === null || faqListItemArrow === void 0 ? void 0 : faqListItemArrow.classList.toggle("active");
        faqListItemParagraph === null || faqListItemParagraph === void 0 ? void 0 : faqListItemParagraph.classList.toggle("active");
    });
    faqListItemArrow === null || faqListItemArrow === void 0 ? void 0 : faqListItemArrow.addEventListener("click", () => {
        faqListItemHeading === null || faqListItemHeading === void 0 ? void 0 : faqListItemHeading.classList.toggle("active");
        faqListItemArrow === null || faqListItemArrow === void 0 ? void 0 : faqListItemArrow.classList.toggle("active");
        faqListItemParagraph === null || faqListItemParagraph === void 0 ? void 0 : faqListItemParagraph.classList.toggle("active");
    });
}
