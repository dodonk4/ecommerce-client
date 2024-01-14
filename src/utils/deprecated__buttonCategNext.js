const buttonCategNext = (numCateg, arrayOfCategs, setNumCateg, setCateg) => { 
    if(numCateg === arrayOfCategs.length - 1){
        setNumCateg(0)
        setCateg(arrayOfCategs[0])
    }else{
        setNumCateg(numCateg + 1)
        setCateg(arrayOfCategs[numCateg + 1])
    }
}

export default buttonCategNext;