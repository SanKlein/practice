downloadAsync("http://example.com/file.txt", function(text) {
    console.log(text);
});


function onError(error) {
    console.log("Error: " + error);
}

downloadAsync("a.txt", function(a) {
    downloadAsync("b.txt", function(b) {
        downloadAsync("c.txt", function(c) {
            console.log("Contents: " + a + b + c);
        }, onError);
    }, onError);
}, onError);


function onError(error) {
    console.log("Error: " + error);
}

downloadAsync("a.txt", function(error, a) {
    if (error) return onError(error);

    downloadAsync("b.txt", function(error, b) {
        if (error) return onError(error);

        downloadAsync(url3, function(error, c) {
            if (error) return onError(error);

            console.log("Contents: " + a + b + c);
        });
    });
});


function downloadOneAsync(urls, onsuccess, onfailure) {
    var n = urls.length;

    function tryNextURL(i) {
        if (i >= n) {
            onfailure("all downloads failed");
            return;
        }
        downloadAsync(urls[i], onsuccess, function() {
            tryNextURL(i + 1);
        });
    }

    tryNextURL(0);
}


function downloadAllAsync(urls, onsuccess, onerror) {
    var length = urls.length;
    var result = [];

    if (length === 0) {
        setTimeout(onsuccess.bind(null, result), 0);
        return;
    }

    urls.forEach(function(url, i) {
        downloadAsync(url, function(text) {
            if (result) {
                result[i] = text; // store at fixed index

                // race condition
                if (result.length === urls.length) {
                    onsuccess(result);
                }
            }
        }, function(error) {
            if (result) {
                result = null;
                onerror(error);
            }
        });
    });
}


function downloadAllAsync(urls, onsuccess, onerror) {
    var pending = urls.length;
    var result = [];

    if (pending === 0) {
        setTimeout(onsuccess.bind(null, result), 0);
        return;
    }

    urls.forEach(function(url, i) {
        downloadAsync(url, function(text) {
            if (result) {
                result[i] = text; // store at fixed index
                pending--;        // register the success
                if (pending === 0) {
                    onsuccess(result);
                }
            }
        }, function(error) {
            if (result) {
                result = null;
                onerror(error);
            }
        });
    });
}


var fileP = downloadP("file.txt");

var lengthP = fileP.then(function(file) {
    return file.length;
});

lengthP.then(function(length) {
    console.log("length: " + length);
});
