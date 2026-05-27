function getNewId(prefix, list){
    let number = list.length +1;
    let numberText = String(number).padStart(3,"0");
    return prefix + numberText;
}