function singleLetterCount(word,letter){
    let letter_count = 0
    for(let i =0;i < word.length;i++)
    {
        if(word.charAt(i) ===  letter){
            letter_count+=1
        }

    }
    return letter_count
}