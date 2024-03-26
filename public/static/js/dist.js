function timeDifference(current, previous) {
    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
        return Math.round(elapsed / 1000) + ' seconds ago';
    } else if (elapsed < msPerHour) {
        if (Math.round(elapsed / msPerMinute) == 1) {
            return Math.round(elapsed / msPerMinute) + ` minute ago`
        } else {
            return Math.round(elapsed / msPerMinute) + ` minutes ago`
        }
    } else if (elapsed < msPerDay) {
        if (Math.round(elapsed / msPerHour) == 1) {
            return Math.round(elapsed / msPerHour) + ` hour ago`
        } else {
            return Math.round(elapsed / msPerHour) + ` hours ago`
        }
    } else if (elapsed < msPerMonth) {
        if (Math.round(elapsed / msPerDay) == 1) {
            return Math.round(elapsed / msPerDay) + ` day ago`
        } else {
            return Math.round(elapsed / msPerDay) + ` days ago`
        }
    } else if (elapsed < msPerYear) {
        if (Math.round(elapsed / msPerMonth) == 1) {
            return Math.round(elapsed / msPerMonth) + ` month ago`
        } else {
            return Math.round(elapsed / msPerMonth) + ` months ago`
        }
    } else {
        if (Math.round(elapsed / msPerYear) == 1) {
            return 'about ' + Math.round(elapsed / msPerYear) + ` year ago`
        } else {
            return 'about ' + Math.round(elapsed / msPerYear) + ` years ago`
        }
    }
}

function getFaceStr(data,href) {

    let name

    let face

    if (href) {
        name = `<a href="/search/${data.identity}">${data.name}</a>`
    } else {
        name = data.name
    }
    //set name and face if exists
    if (data.data.advertisement) {
                if (data.data.advertisement.face.includes("/custom-faces/")) {
                    face = " \| ( ⚆_⚆)";
                } else {
                    if (data.data.advertisement.face) {
                        face =  " \| "+ data.data.advertisement.face
                    } else {
                        face = ""
                    }
                }
    } else {
        face = ""
    }
    return `${name}${face}`
}

function selectElement(id, valueToSelect) {    
    let element = document.getElementById(id);
    element.value = valueToSelect;
}