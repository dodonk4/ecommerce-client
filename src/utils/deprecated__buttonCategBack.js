const buttonCategBack = (numCateg, arrayOfCategs, setNumCateg, setCateg) => {
    if(numCateg === 0){
        setNumCateg(arrayOfCategs.length - 1)
        setCateg(arrayOfCategs[arrayOfCategs.length - 1])
    }else{
        setNumCateg(numCateg - 1)
        setCateg(arrayOfCategs[numCateg - 1])
    }
}

export default buttonCategBack;