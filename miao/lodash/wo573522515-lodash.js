var wo573522515 = {
    chunk: function chunk(array, size) {
        let k = []
        let s = []
        for (let i = 0; i < array.length; i++) {
            k.push(array[i])
            if (i !== 0 && (i + 1) % size === 0 || i == array.length - 1) {
                s.push(k)
                k = []
            }
        }
        return s
    },
    compact: function compact(array) {
        let k = []
        for (let i = 0; i < array.length; i++) {
            if (Boolean(array[i]) == true) {
                k.push(array[i])
            }
        }
        return k
    },
    difference: function difference(array, values) {
        let k = []
        for (let i = 1; i < arguments.length; i++) {
            k = k.concat(arguments[i])
        }
        for (let j = 0; j < array.length; j++) {
            if (k.indexOf(array[j]) !== -1) {
                array.splice([j], 1)
                j--
            }
        }
        return array
    },
    differenceBy: function differenceBy(array, values, iteratee) {
        let k = []
        for (let i = 1; i < arguments.length - 1; i++) {
            for (let p = 0; p < arguments[i].length; p++)
                k = k.concat(iteratee(arguments[i][p]))
        }
        for (let j = 0; j < array.length; j++) {
            if (k.indexOf(iteratee(array[j])) !== -1) {
                array.splice([j], 1)
            }
        }
        return array
    },
    drop: function drop(array, n) {
        if (n === 0) {
            return array
        }
        n = n || 1
        array.splice(0, n)
        return array
    },
    dropRight: function dropRight(array, n) {
        if (n === 0) {
            return array
        }
        n = n || 1
        k = n < array.length ? array.length - n : 0
        array.splice(k, n)

        return array
    },
    fill: function fill(array, value, start, end = array.length) {
        start = start | 0
        for (let i = start; i < end; i++) {
            array[i] = value
        }
        return array
    },
    flatten: function flatten(array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].constructor == Array) {
                let b = array[i].splice(0, array[i].length)
                array.splice(i, 1)
                array = array.concat(b)
                return array
            }
        }
        return array
    },
    flattenDeep: function flattenDeep(array) {
        if (array.some(item => item.constructor == Array)) {
            return flattenDeep([].concat(...array))
        }
        return array
    },
    flattenDepth: function flattenDepth(array, n = 1) {
        if (array.some(item => item.constructor == Array) && n > 0) {
            return flattenDepth([].concat(...array), n - 1)
        }
        return array
    },
    fromPairs: function fromPairs(array) {
        var list = {}
        for (var i = 0; i < array.length; i++) {
            for (var j = 0; j < array[i].length; j++) {
                list[array[i][j]] = array[i][j + 1]
                j++
            }
        }
        return list
    },
    head: function head(array) {
        if (array.length === 0) {
            return undefined
        }
        if (array.length > 0) {
            return array[0]
        }
    },
    indexOf: function indexOf(array, value, fromIndex) {
        var fromIndex = fromIndex || 0
        for (var i = fromIndex; i < array.length; i++) {
            if (array[i] == value) {
                return i
            }
        }
        return -1
    },
    initial: function initial(array) {
        array.pop()
        return array
    },
    intersection: function intersection(arrays) {
        let k = []
        let b = []
        for (let i = 1; i < arguments.length; i++) {
            k = k.concat(arguments[i])
        }
        for (let j = 0; j < arguments[0].length; j++) {
            if (k.indexOf(arguments[0][j]) !== -1) {
                b = b.concat(arguments[0].splice(j, 1))
                j--
            }
        }
        return b
    },
    join: function join(array, separator) {
        var a = ""
        for (var i = 0; i < array.length; i++) {
            a += array[i]
            if (i === array.length - 1) {
                return a
            } else {
                a += separator
            }
        }
    },
    last: function last(array) {
        return array.pop()
    },
    lastIndexOf: function lastIndexOf(array, value, fromIndex) {
        var fromIndex = fromIndex || 0
        if (fromIndex < 0 || fromIndex > array.length) {
            return -1
        }
        for (var i = array.length - 1; i > 0; i--) {
            if (array[i] == value) {
                return i - fromIndex
            }
        }
        return -1
    },
    nth: function nth(array, n = 0) {
        if (n >= 0) {
            return array[n]
        } else if (n < 0) {
            return array[n + array.length]
        }
    },
    pull:function pull(array, values){
        var val=[]
        for(var i = 1;i<arguments.length;i++){
            val.push(arguments[i])
        }
        var newAry = []
        array.filter(item =>{
           if(val.indexOf(item) === -1){
               newAry.push(item)
           }
            return newAry
        })
        return newAry 
    },
    pullAll:function pullAll(array, values){
        var newAry = []
        array.filter(item =>{
           if(values.indexOf(item) === -1){
               newAry.push(item)
           }
            return newAry
        })
        return newAry 
    },
    pullAllBy:function pullAllBy(array, values,iteratee){
        var val = []
        for(var i = 0;i<values.length;i++){
            val.push(values[i][iteratee])
        }
        var newAry = []
        array.filter(item =>{
                if(!val.find(s =>s === item[iteratee])){
                    newAry.push(item)
                }
        })
        return newAry 
    },
    reverse: function reverse(array) {
        var result = []
        for (var i = array.length - 1; i >= 0; i--) {
            result.push(array[i])
        }

        return result
    },
}