function lastElement(arr){
    let arrCopy = arr.slice()
    let arrCount = []
    for(array of arrCopy){
        if(array === arrCopy.length -1){
            arrCount = array
        }
    }
    return arrCount
   
}