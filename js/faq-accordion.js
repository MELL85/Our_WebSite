(() => {
    const acc = document.getElementsByClassName('main__faq-accordion-block-button');

    for (let i = 0; i < acc.length; i++) {
        acc[i].onclick = function () {
            let panel = this.nextElementSibling;
            console.log(panel);
            let coursePanel = document.getElementsByClassName('main__faq-accordion-block-text');
            console.log(coursePanel);
            let courseAccordionActive = document.getElementsByClassName('main__faq-accordion-block-button faq__active');

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                this.classList.remove('faq__active');
            } else {
                for (let j = 0; j < courseAccordionActive.length; j++) {
                    courseAccordionActive[j].classList.remove('faq__active');
                }
                for (let t = 0; t < coursePanel.length; t++) {
                    this.classList.remove('faq__active');
                    coursePanel[t].style.maxHeight = null;
                }
                panel.style.maxHeight = panel.scrollHeight + 'px';
                this.classList.add('faq__active');
            }
        }
    }
})();