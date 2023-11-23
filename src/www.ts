function submit(): void {
    const iframe = document.getElementById('seuIdDoIframe') as HTMLIFrameElement;
    const submitButton = document.getElementById('seuIdDoSubmitButton') as HTMLButtonElement;
    const urlBox = document.getElementById('seuIdDoUrlBox') as HTMLInputElement;

    iframe.src = urlBox.value;
}