function toggleSidenavState() {
  document.getElementById("sidenav").classList.toggle("sidenav-closed");
  document.getElementById("sidenav").classList.toggle("sidenav-opened");
  document.getElementById("layout").classList.toggle("sidenav-closed-layout");
  document.getElementById("layout").classList.toggle("sidenav-opened-layout");
  document.getElementById("sidenavToggleIcon").classList.toggle("change");
}