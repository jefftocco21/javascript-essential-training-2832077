class Coat{
    constructor(
        pocketNum, 
        hasHood,
        isZipped,
        color,
    ){
        this.pocketNum = pocketNum;
        this.hadHood = hasHood;
        this.isZipped = isZipped
        this.color = color;
    }
    zip(zipUP){
        this.isZipped = zipUp;
    }
}

export default Coat;