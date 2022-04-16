console.log("hello world!");

function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// .no-flexbox-gap .about-huddle img {
//   margin-top: 9rem;
// }

// .no-flexbox-gap .conversation {
//   margin-top: 6rem;
// }

// .no-flexbox-gap .conversation h2 {
//   margin-bottom: 0.7rem;
// }
// .no-flexbox-gap .footer-cont section:not(:last-child) {
//   margin-bottom: 7rem;
// }
// .no-flexbox-gap .icons-block div:not(:last-child),
// .no-flexbox-gap .links-block a:not(:last-child),
// .no-flexbox-gap .links-2-block a:not(:last-child) {
//   margin-bottom: 2rem;
// }
// .no-flexbox-gap .location-text p,
// .no-flexbox-gap .phone-text p,
// .no-flexbox-gap .email-text p {
//   margin-left: 20px;
// }

// .no-flexbox-gap .ion-ico:not(:last-child) {
//   margin-right: 3rem;
// }

// .no-flexbox-gap .test small {
//   margin-top: 4rem;
// }
