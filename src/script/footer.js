export function initFooterAccordion() {
    var toggles = document.querySelectorAll('.footer__toggle');

    toggles.forEach(function (toggle) {
        toggle.addEventListener('click', function () {
            var expanded = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', String(!expanded));

            var panelId = toggle.getAttribute('aria-controls');
            var panel = document.getElementById(panelId);
            if (panel) {
                panel.classList.toggle('is-open', !expanded);
            }
            toggle.classList.toggle('is-open', !expanded);
        });
    });
}
