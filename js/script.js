function openTab(evt, activeTab) {
  localStorage.selectedTab = activeTab + '_button';
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  document.getElementById(activeTab).style.display = 'block';
  evt.currentTarget.className += ' active';
}

const modal_name = document.getElementById('modal-name');
const modal = document.getElementById('exampleModal');
const offline_box = document.getElementById('offline');
var MODAL = new bootstrap.Modal(modal);

function showModal(name) {
  modal_name.innerHTML = name;
  MODAL.show();
}

localStorage.selectedTab = localStorage.selectedTab || 'Tab3_button';

document.getElementById(localStorage.selectedTab).click();

setInterval(function() {
  if (navigator.onLine) offline_box.style.display = 'none';
  else offline_box.style.display = 'flex';
}, 1000);

const modalInputs = modal.getElementsByTagName('input');
function showInputsValue() {
  let result = '';
  for (let i in modalInputs) {
    if (modalInputs[i].type === undefined) continue;
    if (modalInputs[i].type === 'checkbox') {
      if (modalInputs[i].checked) {
        result += modalInputs[i].value.toUpperCase() + ' : Checked' + '\n';
      }
    } else
      result +=
        modalInputs[i].name.toUpperCase() + ' : ' + modalInputs[i].value + '\n';
  }
  alert(result);
}
