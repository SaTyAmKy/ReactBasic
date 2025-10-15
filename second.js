function createState(initialValue){
    let value = initialValue;

    function get(){
        return value;
    }

    function set(newValue){
        value = newValue;
        console.log("State updated to :"+ value);

    }
    return [get,set];
}
const [getCount, setCount] = createState(3);
console.log(getCount());
setCount(5);
console.log(getCount());