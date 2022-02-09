export const setCookie = (name: string, value: string, day: number = 1) => {
    let date = new Date();
    date.setTime(date.getTime() + day * 60 * 60 * 24 * 1000);
    document.cookie =
        name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
};

export const getCookie = (name: string) => {
    let value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
    return value ? value[2] : null;
};

export const delCookie = (name: string) => {
    let date = new Date();
    document.cookie =
        name + "= " + "; expires=" + date.toUTCString() + "; path=/";
};

export const noData = [{
    id: 0,
    title: "로딩중",
    content: "로딩중",
    docType: "",
    hits: 0,
    recommendationCount: 0,
    developer: "ISNOTWORKING",
    modifiedDate: "0000-00-00T00:00:00",
    solutionCount: 0,
    hashtags: [],
    adobtYN: false
},{
    id: 1,
    title: "로딩중",
    content: "로딩중",
    docType: "",
    hits: 0,
    recommendationCount: 0,
    developer: "ISNOTWORKING",
    modifiedDate: "0000-00-00T00:00:00",
    solutionCount: 0,
    hashtags: [],
    adobtYN: false
},{
    id: 2,
    title: "로딩중",
    content: "로딩중",
    docType: "",
    hits: 0,
    recommendationCount: 0,
    developer: "ISNOTWORKING",
    modifiedDate: "0000-00-00T00:00:00",
    solutionCount: 0,
    hashtags: [],
    adobtYN: false
}]