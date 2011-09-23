if(document.readyState == 'interactive') {
    chrome.extension.sendRequest({'message':'checkHumansTxt', 'url':location.href + 'humans.txt'});
}

