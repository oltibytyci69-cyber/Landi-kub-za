document.getElementById("year").textContent = new Date().getFullYear();
const menu = document.querySelector(".menu");
const nav = document.querySelector(".header nav");
menu?.addEventListener("click", () => {
  const open = nav.dataset.open === "1";
  nav.dataset.open = open ? "0" : "1";
  nav.style.display = open ? "" : "flex";
  if (!open) {
    nav.style.position="absolute"; nav.style.top="86px"; nav.style.left="0"; nav.style.right="0";
    nav.style.padding="20px 5vw"; nav.style.background="#f5f6f1";
    nav.style.flexDirection="column"; nav.style.alignItems="flex-start";
    nav.style.boxShadow="0 20px 30px rgba(0,0,0,.08)";
  }
});
