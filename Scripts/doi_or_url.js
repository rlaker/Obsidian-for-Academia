



function my_function (doi, url) {
    if (doi) {
        return '[doi](https://doi.org/' + doi + ')'
    }
    else if (url) {
        return '[Link](' + url + ')'
    }
    else {
        return ''
    }
}

module.exports = my_function;
