const faqListItems: NodeListOf<HTMLLIElement> =
  document.querySelectorAll(".faq-list li");

for (const faqListItem of faqListItems) {
  const faqListItemHeading: HTMLHeadingElement | null =
    faqListItem.querySelector("h3");
  const faqListItemParagraph: HTMLParagraphElement | null =
    faqListItem.querySelector("p");
  const faqListItemArrow: HTMLImageElement | null =
    faqListItem.querySelector(".arrow");

  faqListItemHeading?.addEventListener("click", () => {
    faqListItemHeading?.classList.toggle("active");
    faqListItemArrow?.classList.toggle("active");
    faqListItemParagraph?.classList.toggle("active");
  });

  faqListItemArrow?.addEventListener("click", () => {
    faqListItemHeading?.classList.toggle("active");
    faqListItemArrow?.classList.toggle("active");
    faqListItemParagraph?.classList.toggle("active");
  });
}
