function difference(list1, list2){
    let list3 = []
    for(let i in list1){
        for(let j in list2){
            if(list1[i] == list2[j]){
                list3.push(list1[i])
            }
        }
    }
    return list3
}
console.log(difference([1, 2, 3, 4, 5], [100, 2, 1, 10, 6, 5]));