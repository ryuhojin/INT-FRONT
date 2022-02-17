export const cookie = {
    getCookie: (name: string) => {
        if (!process.browser) return;
        let value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
        return value ? value[2] : null;
    },
    setCookie: (name: string, value: string, day: number = 1) => {
        let date = new Date();
        date.setTime(date.getTime() + day * 60 * 60 * 24 * 1000);
        document.cookie =
            name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
    },
    delCookie: (name: string) => {
        let date = new Date();
        document.cookie =
            name + "= " + "; expires=" + date.toUTCString() + "; path=/";
    }
}

export const convert12H = (value: string | String) => {
    var time = value;
    var getTime = time.substring(0, 2);
    var intTime = parseInt(getTime);
    if (intTime < 12) {
        var str = "오전 ";
    } else {
        var str = "오후 ";
    }
    if (intTime == 12) {
        var cvHour = intTime;
    } else {
        var cvHour = intTime % 12;
    }
    var res = str + ("0" + cvHour).slice(-2) + time.slice(-3);
    return res;
};
