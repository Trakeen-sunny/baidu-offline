let basrUrl = 'http://t032.baguatan.cn'

function httpRequest(url, data = {}, method = "post", async = true) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: basrUrl + url,
            data,
            type: method,
            dataType: "json",
            timeout: 5000,
            async,
            headers: {
                'content-type': 'application/json'
            },
            success: function (response) {
                resolve(response)
            },
            error: function (error) {
                reject(error)
            }
        });
    })
}