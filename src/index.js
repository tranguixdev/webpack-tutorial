import _ from "lodash";
function component() {
  const el = document.createElement("div");

  // lodash, now imported by this script
  el.innerHTML = _.join(["Hello", "webpack"], " ");

  return el;
}

document.body.appendChild(component());
