function saveText() {
  var title = document.getElementById('title-input').value;
  var text = document.getElementById('text-input').value;
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', title + '.txt');
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

function saveWord() {
  var title = document.getElementById('title-input').value;
  var text = document.getElementById('text-input').value;
  var element = document.createElement('a');
  element.setAttribute('href', "data:application/msword;charset=utf-8," + encodeURIComponent(text));
  element.setAttribute('download', title + '.doc');
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

function saveGoogleDocs() {
  var title = document.getElementById('title-input').value;
  var text = document.getElementById('text-input').value;
  var googleDocURL = "https://docs.google.com/document/u/0/?tgif=d&pli=1";
  var newWindow = window.open(googleDocURL, '_blank');
  newWindow.onload = function() {
    newWindow.document.body.innerHTML = text;
    newWindow.document.title = title;
  };
}

function changeTheme() {
  var body = document.body;
  var themeSwitch = document.getElementById('theme-switch');
  if (themeSwitch.checked) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
}