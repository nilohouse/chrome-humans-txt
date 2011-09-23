(function ($) {
  $.parseText = function(data) {
    var lines = data.match(/(.*:.*)\n?/g);
    var humansData = {};
    for(line in lines) {
        var splited = lines[line].split(':');
        humansData[slugifyKey(splited[0])] = slugifyData(splited[1].replace('\n',''));
    }

    return humansData;
  };
})(jQuery);


function slugifyKey(key) {
    var keyArray = key.split(' ');
    for(item in keyArray) {
        if(item == 0) {
            keyArray[item] = keyArray[item].toLowerCase();
        }
    }

    return keyArray.join('');
};

function slugifyData(data) {
    return data.replace('\n','').trim();
}

