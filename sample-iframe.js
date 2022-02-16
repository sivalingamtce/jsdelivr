function zcClose() {
  let overLayDiv = document.getElementsByClassName('zc-backdrop')[0];
  let iframeContainer = document.getElementsByClassName('zc-container')[0];
  iframeContainer.remove();
  overLayDiv.remove();
}

function zcOpen(hpUrl = '') {
  let overLayDiv = document.createElement('div');
  overLayDiv.classList.add('zc-backdrop');

  let iframeContainer = document.createElement('div');
  let iframeTag = document.createElement('iframe');
  iframeContainer.classList.add('zc-container');
  iframeTag.classList.add('zc-frame');
  iframeTag.src = hpUrl;
  iframeContainer.appendChild(iframeTag);

  let closeHpBtn = document.createElement('button');
  closeHpBtn.innerHTML = 'Close';
  closeHpBtn.classList.add('zc-close-btn')
  closeHpBtn.onclick = removeHp;
  iframeContainer.appendChild(closeHpBtn);



  document.body.appendChild(overLayDiv);
  document.body.appendChild(iframeContainer);
}
