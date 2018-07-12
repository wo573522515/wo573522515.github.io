var wo573522515 = {
    chunk: function chunk(array,size) {
        let k=[]
        let s=[]
        for(let i = 0;i < array.length;i++){
            k.push(array[i])
            if(i !==0 && (i+1) % size === 0 ||i ==array.length-1){
                s.push(k)
                k = []
            }
        }
        return s
    },
    compact: function compact(array){
        let k=[]
        for(let i=0;i<array.length;i++){
            if(Boolean(array[i]) ==true){
                k.push(array[i])
            }
        }
        return k
    },
    difference: function difference(array, values){
        let k =[]
        for(let i = 1;i<arguments.length;i++){
            k=k.concat(arguments[i])
        }
        for(let j =0;j<array.length;j++){
            if(k.indexOf(array[j]) !== -1){
                array.splice([j],1)
            }
        }
        return array
    },
    differenceBy:function differenceBy(array,values,iteratee){
        let k =[]
        for(let i = 1;i<arguments.length-1;i++){
            for(let p = 0;p<arguments[i].length;p++)
            k=k.concat(iteratee(arguments[i][p]))
        }
        for(let j =0;j<array.length;j++){
            if(k.indexOf(iteratee(array[j])) !== -1){
                array.splice([j],1)
            }
        }
        return array
    },
}