// extract value
function extractValue(array, key) {
    
    return array.reduce(function(accum, next) {
        accum.push(next[key]);
        return accum;
    }, [])
}

// vowel count
function vowelCount(string) {
    let arrayString = string.split('')
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0
    
    return arrayString.reduce(function(accum, next) {
        let lowerCased = next.toLowerCase();
        // if vowel found
        if (vowels.indexOf(lowerCased) !== -1) {
            // if vowel already exists in object
            if (accum[lowerCased]) {
                accum[lowerCased] ++;
            } else accum[lowerCased] = 1;
        }
        return accum
    }, {})
}

// add key and value
function addKeyAndValue(array, key, value) {
    return array.reduce(function(accum, next, index) {
        accum[index][key] === value;
        return accum;
    }, array)
}

// partition
function partition(array, callback) {
    return array.reduce(function(accum, next) {
        // if first item fits callback function, add it to first array
        if (callback(next)) {
            accum[0].push(next)
        // if first item does not fit callback function (it is false), add it to the second array
        } else {
            accum[1].push(next);
        }
        // set accum to be an array of 2 empty arrays
    }, [[],[]])
}


