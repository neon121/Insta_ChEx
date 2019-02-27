chrome.runtime.onMessage.addListener(request => {
    for (let obj of request.urls) {
        chrome.downloads.download({
            url: obj.link,
            filename: `${request.postUrl}/` + obj.name + '.' + obj.type
        });
    }
});