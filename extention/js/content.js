console.log('content is loaded');
let button = document.createElement('button');
button.textContent = "Download";
let st = button.style;
st.position = 'absolute';
st.top = '0';
st.left = '0';
st.fontSize = '150%';
st.zIndex = '9999';
document.body.insertBefore(button, null);
button.addEventListener('click', () => {
    let downloads = [];
    let nodes = document.querySelectorAll('img[srcset], video');
    let i = 0;
    for (let node of nodes) downloads.push({
        link: node.src,
        name: (i++).toString(),
        type: node.nodeName === 'IMG' ? 'jpg' : 'webm'
    });
    let postUrl = /\/([\w\d]{2,})\//.exec(location.pathname)[1];
    chrome.runtime.sendMessage({action: 'download', urls: downloads, postUrl: postUrl});
});