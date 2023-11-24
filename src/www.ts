const urlInput = document.getElementById('urlInput') as HTMLInputElement;
const browserView = document.getElementById('browserView') as HTMLIFrameElement;

function navigate() {
    const url = urlInput.value;
    if (url) {
        browserView.src = url;
    }
}