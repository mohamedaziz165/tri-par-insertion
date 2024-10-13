function triParInsertion(arr) {

    for (var i = 1; i < arr.length; i++) {
        var tmp = arr[i];  
        var j = i ;     
        
      
        while (j >= 0 && arr[j-1] > tmp) {
            arr[j ] = arr[j-1];  
            j--;                   
        }
        
       
        arr[j] = tmp;
    }
    return arr;  


