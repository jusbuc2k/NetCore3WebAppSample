// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

(function () {

    window.sendEchoRequest = function (message) {
        return new Promise(function (resolve, reject) {
            var request = new XMLHttpRequest();
            request.open("post", "/api/Echo", true);

            request.onreadystatechange = function () {
                if (request.readyState === XMLHttpRequest.DONE) {
                    var status = request.status;
                    if (status === 0 || (status >= 200 && status < 400)) {
                        resolve(request.responseText)
                    } else {
                        reject(request);
                    }
                }
            };    

            request.send(message);
        });
    };

})()