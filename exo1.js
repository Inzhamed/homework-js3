const Obj1 = {
    property1 : "property value 1",
    property2 : "property value 2"
}

const Obj2 = {
    property1 : "property value 1",
    property2 : "property value 3"
}
let x = 1

for(let i in Obj1){
    if(Obj1[i] == Obj2[i]){
        x *= 1
    }else{
        x *= 0
    }
}
if(x == 1){
    console.log("the two objects are identical")
}else{
    console.log("the two objects are deffirent")
}
