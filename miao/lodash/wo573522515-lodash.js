var wo573522515 = {
    chunk:  function chunk(array,size) {
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
    }
}