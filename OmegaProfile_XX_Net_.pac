var FindProxyForURL = function (init, profiles) {
    return function (url, host) {
        "use strict";
        var result = init,
            scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+XX-Net\u81ea\u52a8\u5207\u6362", {
    "+XX-Net\u81ea\u52a8\u5207\u6362": function (url, host, scheme) {
        "use strict";
        if (/(?:^|\.)qq\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)hortorgames\.com$/.test(host)) return "+ydcs";
        if (/(?:^|\.)37\.com\.cn$/.test(host)) return "+ydcs";
        if (/(?:^|\.)t5game\.5jli\.com$/.test(host)) return "+ydcs";
        return "DIRECT";
    },
    "+ydcs": function (url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host)) return "DIRECT";
        return "PROXY 118.126.112.177:8899";
    }
});