// Material's mobile drawer sometimes opens with the nested "lifted" nav
// panel scrolled out of view (its internal scrollwrap left at a stale
// scroll position), rendering the menu blank until the user scrolls or
// taps around. This has been observed after an instant-loading (SPA-style)
// navigation lands on the drawer. Force the scroll position back to the
// start every time the drawer is opened, so the active section is always
// visible immediately.
document.addEventListener("change", function (event) {
  if (event.target && event.target.id === "__drawer" && event.target.checked) {
    var scrollwrap = document.querySelector(".md-sidebar--primary .md-sidebar__scrollwrap");
    if (scrollwrap) {
      scrollwrap.scrollLeft = 0;
    }
  }
});

// The back-arrow shown when a nested section is expanded in the sidebar
// (mobile drill-down menu) only displays that section's own name, e.g.
// "GENis" — it's not obvious it's a back button that returns you to the
// full list of tabs. Prefix it with an explicit "Volver al menú principal"
// / "Back to main menu" for top-level sections (id like "__nav_1"), or a
// plain "Volver" / "Back" for deeper nested ones (id like "__nav_2_3",
// which return to their own parent section, not the main menu).
function addBackHints() {
  var isEnglish = document.documentElement.lang.indexOf("en") === 0;
  var titles = document.querySelectorAll(
    '.md-nav__title[for^="__nav_"]:not([data-back-hint-added])'
  );
  titles.forEach(function (title) {
    var isTopLevel = /^__nav_\d+$/.test(title.getAttribute("for"));
    var text = isTopLevel
      ? (isEnglish ? "Back to main menu" : "Volver al menú principal")
      : (isEnglish ? "Back" : "Volver");
    var icon = title.querySelector(".md-nav__icon");
    var hint = document.createElement("span");
    hint.className = "md-nav__back-hint";
    hint.textContent = text + " — ";
    if (icon) {
      icon.insertAdjacentElement("afterend", hint);
    } else {
      title.insertBefore(hint, title.firstChild);
    }
    title.setAttribute("data-back-hint-added", "true");
  });
}

addBackHints();
new MutationObserver(addBackHints).observe(document.body, {
  childList: true,
  subtree: true,
});
