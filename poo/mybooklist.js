/* 
Exercise #2: The Reading List
Start with an HTML page that has the title: My Book List.
Part 1 Book
In your Javascript file, create a class called Book. 
Each Book should have several properties:
Title
Genre
Author
Read (true or false)
Read date; can be blank, otherwise needs to be a JS Date() object
Add to your HTML page 2 books that reference the Book objects.
*/
class Book {
    constructor(title, genre, author, read, readDate){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.readDate = readDate;
    }
    books(){
        return "Uno de mis libros favoritos es " + this.title;
    }
}



/*
In your Javascript file - create a class BookList.
BookLists should have the following properties:
Number of books marked as read - numbooksr
Number of books marked as not read yet - bnotr
A reference to the next book to read (book object) - nexttbr
A reference to the current book being read (book object) -currentbr
A reference to the last book read (book object) - lastbr
An array of all the Books
*/

class Booklist {
    constructor(){
    this.numbooksr = 0;
    this.bnotr = 0;
    this.nexttbr = null;
    this.currentbr = null;
    this.lastbr = null;
    this.allofthebooks = [];
    this.currentPosition = 0;
    }
    

    add(Book){
        this.allofthebooks.push(Book); // aqui ya esta el arreglo
        if (Book.read){ //libro es leído, lo suma a la cuenta de leídos
            this.numbooksr++; 
        }else{
            this.bnotr++;  //de lo contrario se va a la cuenta de los no leídos
            if (this.currentbr == null){ //si no estoy leyendo ningun libro se hace el libro actual para leer
            this.currentbr = Book;}
            else if (this.nexttbr == null){ //si veo que no hay libro proximo a ser leido después del anterior
                this.nexttbr = Book; //se vuelve el libro que voy a leer cuando acabe el anterior
            }
            
        }
    }

    getUnreadBook(){
        for(let i = this.currentPosition+1; i < this.allofthebooks.length; i++){ // i cuenta desde mi libro actual +1
            if (this.allofthebooks[i].read == false){ 
                return this.allofthebooks[i];
            }
        } return null; // si no encontro ningun libro que no haya sido leído regresa null : no hay
    }

    finishCurrentBook(){
        this.currentbr.read=true; //aqui se indica que el current libro ya se leyó
        this.currentbr.readDate= new Date (Date.now()); //aqui se le agrega la fecha en que fue leído
        this.lastbr = this.currentbr; //agrego a mi ultimo libro leído, el que acabo de terminar
        this.currentbr = this.nexttbr; //hago que mi libro actual sea mi proximo libro con nexttbr
        this.nexttbr = this.getUnreadBook(); 
        this.numbooksr++; // incrementan mis libros leídos 
        this.bnotr--; //decrementan los que no he leído
    } 

    //agregando a mi lista cada titulo de todos mis libros
    showBooks(){
        for(let i =0; i < this.allofthebooks.length; i++){
            var node = document.createElement('li');
            node.appendChild(document.createTextNode(this.allofthebooks[i].title +" " + this.allofthebooks[i].read)); //ta leido o no
            document.getElementById("bookList").appendChild(node);
        
        }
    }
    
}

let firstBook = new Book ("Los cuatro acuerdos","clásico", "Miguel Ruiz", false, null );
let secondBook = new Book ("The Carrie Diaries", "ficción", "Candace Bushnell", false, null);

document.getElementById("book1").innerHTML = firstBook.books();
document.getElementById("book2").innerHTML = secondBook.books();

let bookList = new Booklist();
bookList.add(firstBook);
bookList.add(secondBook);
bookList.finishCurrentBook();
bookList.showBooks();


bookList.finishCurrentBook();
bookList.showBooks();

/*
.finishCurrentBook()
should mark the book that is currently being read as "read"
Give it a read date of new Date(Date.now())
Change the last book read to be the book that just got finished
Change the current book to be the next book to be read
Change the next book to be read property to be the first unread book you find in the list of books
Booklists and Books might need more methods than that. Try to think of more that might be useful.
*/