function getUrlParameterValue(url, parameter) {
    let param = new URLSearchParams(url);
    output = param.get(parameter);
    console.log(output);
} 

var url ="https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby";
getUrlParameterValue(url, "utm_medium")
getUrlParameterValue(url, "utm_campaign")