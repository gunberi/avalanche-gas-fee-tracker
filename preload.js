// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const { contextBridge, ipcRenderer } = require('electron')

const Store = require('electron-store');

const schema = {
	apiKey: "yourApiKey",
  target: 0,
  opened: false
};

const store = new Store(schema);

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('statusButton').dataset.value = store.get('opened');
  document.getElementById('feeAmount').value = store.get('target');
  document.getElementById('apiKey').value = store.get('apiKey');
  
  if(store.get('opened') == true) {
    document.getElementById('pause').classList.remove('d-none');
    document.getElementById('play').classList.add('d-none');
} else {    
  document.getElementById('pause').classList.add('d-none');
  document.getElementById('play').classList.remove('d-none');
}
})

contextBridge.exposeInMainWorld('electronAPI', {
  setStatus: (alarmStatus) => {
    ipcRenderer.send('set-status', alarmStatus);
    store.set('opened', alarmStatus)
  },
  setFeeAmount: (amount) => {
    ipcRenderer.send('set-fee-amount', amount);
    store.set('target', amount)
  },
  setApiKey: (apiKey) => {
    ipcRenderer.send('set-api-key', apiKey);
    store.set('apiKey', apiKey)
  }
})