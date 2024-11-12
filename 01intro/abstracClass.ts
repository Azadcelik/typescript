//abstract classes can not create their object on their own
//but they help class who are inheriting them
//if you want method to be compulsory you need to put abstract key at the beginning 

abstract class TakePhoto
{   
    constructor (
    public photoMode: string,
    public filter: string,
    public burst: number
    ) {}

    abstract getReels(): void

    getPicture(): number {
        return 6
    }
}


class InstagramPhoto extends TakePhoto 
{
    constructor (
        public photoMode: string,
        public filter: string,
        public burst: number,
        private newMode: string
    )
    {
        super(photoMode,filter,burst)
    }
    getReels(): void {
        console.log("this is overiding abstract classses abstract method")
    }
}

const firstPhoto = new InstagramPhoto("test", "ANOTHERTEST",5,"123");



console.log(firstPhoto.getPicture())