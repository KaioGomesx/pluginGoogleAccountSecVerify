const ariaLabel = document
  .querySelector("#i5 > div.uKKLyf > div.BkKHtf")
  .getAttribute("aria-label");

if (ariaLabel === "Problemas encontrados no login e recuperação") {
  alert("Há problemas de segurança em sua conta, resolva-os");
} else if (ariaLabel === "Login and recovery issues") {
  alert("There are security issues with your account, please fix them");
}
/*
HLEawd VfPpkd-ksKsZd-XxIAqe
*/
