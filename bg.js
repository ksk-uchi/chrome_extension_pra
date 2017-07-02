chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    const func_pair = {
        url_match: checkUrlMatched,
    };
    if (sender.id == chrome.runtime.id && request.func) {
        console.log(sender.tab.url)
        func_pair[request.func](request);
    }
});

function checkRunnable() {
    chrome.storage.local.get('on_off', function (data) {
        if (data.on_off !== 'off') {
            return true;
        } else {
            return false;
        }
    });
}

function checkUrlMatched(request) {
    // chrome.tabs.getSelected(null, function (tab) {
    //     // URL が登録されている正規表現のうち、どれかとマッチするなら
    //     // マッチしたことを述べるステータスと、色、テキスト情報を返す
    //     chrome.tabs.sendMessage(tab.id, {
    //         iam: chrome.runtime.id,
    //         url: tab.url,
    //         status: 'matched',
    //         color: '#ff0000',
    //         text: 'testtesttest',
    //     });
    // });
    if (checkRunnable()) {

    }
}
