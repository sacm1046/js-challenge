let condition = true;

const getIdElement = id => {
  const containers = document.getElementsByClassName("container");
  const [currentBody, currentIcon, currentHeader] = manageAccordion(id);

  if (currentBody.classList.contains("show")) {
    if (condition) {
      hideIcon(currentBody, currentIcon);
    }
  } else {
    Object.keys(containers).map(key => {
      const keyId = (parseInt(key) + 1).toString();
      if (keyId === id) {
        const [body, icon] = manageAccordion(id);
        showIcon(body, icon);
      } else {
        const [body, icon] = manageAccordion(keyId);
        hideIcon(body, icon);
      }
    });
  }
};

window.addEventListener("load", () => {
  const elements = document.getElementsByClassName('container');
  const [body, icon] = manageAccordion(elements[0].id);
  showIcon(body, icon);
});

window.addEventListener("mousedown", e => {
  const el = e.target.classList;
  if (el[0] === "body" || el[0] === "body__text") condition = false;
  else condition = true;
});

const manageAccordion = id => {
  const initial = document.getElementById(id);
  const header = initial.getElementsByClassName("header")[0];
  const icon = header.getElementsByClassName("material-icons")[0];
  const body = initial.getElementsByClassName("body")[0];
  return [body, icon, header];
};

const showIcon = (body, icon) => {
  icon.innerText = "keyboard_arrow_down";
  body.classList.add("show");
};

const hideIcon = (body, icon) => {
  icon.innerText = "keyboard_arrow_up";
  body.classList.remove("show");
};
