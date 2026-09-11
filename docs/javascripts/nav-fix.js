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

// The back-arrow shown for a top-level tab section in the sidebar (mobile
// drill-down menu) only displays that section's own name, e.g. "GENis" -
// it's not obvious it's a back button that returns to the full tab list.
// Pin a short "Inicio" / "Home" caption right next to the arrow icon
// (positioned via CSS, see .md-nav__home-hint) so it never shares a line
// with, or wraps against, the section name below it. Only applied to
// top-level sections (id like "__nav_1"); deeper nested ones (id like
// "__nav_2_3") return to their own parent section, not the main menu, so
// they are left as-is.
function addHomeHints() {
  var isEnglish = document.documentElement.lang.indexOf("en") === 0;
  var text = isEnglish ? "Back to Main Menu" : "Volver a Menú Principal";
  var titles = document.querySelectorAll(
    '.md-nav__title:not([data-home-hint-added])'
  );
  titles.forEach(function (title) {
    var forAttr = title.getAttribute("for");
    if (!forAttr || !/^__nav_\d+$/.test(forAttr)) {
      return;
    }
    var icon = title.querySelector(".md-nav__icon");
    var hint = document.createElement("span");
    hint.className = "md-nav__home-hint";
    hint.textContent = text;
    if (icon) {
      icon.insertAdjacentElement("afterend", hint);
    } else {
      title.insertBefore(hint, title.firstChild);
    }
    title.setAttribute("data-home-hint-added", "true");
  });
}

addHomeHints();
new MutationObserver(addHomeHints).observe(document.body, {
  childList: true,
  subtree: true,
});
