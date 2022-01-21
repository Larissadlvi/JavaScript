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
    constructor(Title, Genre, Author, Read, Readdate){
        this.Title = Title;
        this.Genre = Genre;
        this.Author = Author;
        this.Read = Read;
        this.Readdate = Readdate;
    }
    books(){
        return "Uno de mis libros favoritos es " + this.Title;
    }
}

let firstBook = new Book ("Los cuatro acuerdos de Miguel Ruiz");
let secondBook = new Book ("The Carrie Diaries de Candace Bushnell");

document.getElementById("book1").innerHTML = firstBook.books();
document.getElementById("book2").innerHTML = secondBook.books();

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

class Booklist extends Book{
    constructor(Title, numbooksr, bnotr, nexttbr, currentbr, lastbr, allofthebooks){
    super(Title)
    this.numbooksr = 4;
    this.bnotr = 2;
    this.nexttbr = 1;
    this.currentbr = "El arte de amar";
    this.lastbr = "El Alquimista";
    this.allofthebooks = ["El diario de Anna Frank", "El Principito", "La Sonata del Nomeolvides", "Persona Normal", "Norwegian Wood", "El Alquimista", "El arte de amar"];
    }
    

    libroextra1(){
        return "El próximo libro que voy a agregar a mi lista es: " + this.numbooksr;
    }
}

let Booklist1 = new Book("Memorias de una Geisha");

document.getElementById("bookList").innerHTML=Booklist1.libroextra1();




//Getter, tiene el método calcarea
/*
get area () {
    return this.calcArea();
}

//Method

calcArea (){
    return this.height*this.width;
}*/
/*
Every Booklist should have a few methods:
.add(book)
should add a book to the books list.
.finishCurrentBook()
should mark the book that is currently being read as "read"
Give it a read date of new Date(Date.now())
Change the last book read to be the book that just got finished
Change the current book to be the next book to be read
Change the next book to be read property to be the first unread book you find in the list of books
Booklists and Books might need more methods than that. Try to think of more that might be useful.
*/