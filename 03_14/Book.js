class Book{
    constructor(
        pages,
        title,
        genre,
        closed
    ) {
        this.pages = pages;
        this.title = title;
        this.genre = genre;
        this.closed = closed;
    }
    closeCover(closeStatus){
        this.closed = closeStatus;
    }
}

export default Book;