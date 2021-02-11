function getOccurrence(array, value) {
    var count = 0;
    for(var i = 0; i < array.length; i++) {
        if(array[i] == value) {
            count++;
        }
        if(count > 1) {
            break;
        }
    }
    return count;
}

function findSingleItem(array) {
    var itemsChecked = [];
    for(var i = 0; i < array.length; i++) {
        var index = itemsChecked.findIndex(item => item == array[i]);
        if(index < 0) {
            itemsChecked.push(array[i]);
            var count = getOccurrence(array, array[i]);
            if(count == 1) {
                return array[i];
            }
            
        }
        
    }
}

var array = [1, 1, 0, 1];
console.log("The single item: ",findSingleItem(array));

var array2 = [3, 1, 3, 3, 5, 1, 1];
console.log("The single item: ",findSingleItem(array2));

/*
LOGIC: 
    - Firstly, I create a for loop from the first element to the final element of the array.
    - In each element, I count the occurrence of the element in the array.
    - So if I find the element with them number of occurrence is 1, I return the element.
PERFORMANCE
    - To boost the performance, I create the condtion that the count process of each element 
will stop when count is more than 1 and the finding procees will stop when the single item is found.
    - BigO(n^2) in the worst case
*/
