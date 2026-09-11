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
