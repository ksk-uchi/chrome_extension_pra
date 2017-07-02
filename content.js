chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    // 他のextensionから送られてきたメッセージは無視する
    if (!(request.iam && request.iam == sender.id)) {
        sendResponse({status: 'error', msg: 'I am not for you.'});
    }
    console.log(request);
});

// 拡張効果開始
chrome.runtime.sendMessage({
    func: 'url_match',
});