


const gallery = document.querySelector(".gallery");
const form = document.getElementById("add-book-form");


let books = [];


function displayBooks() {
    gallery.innerHTML = "";  // Limpiar la galería
    books.forEach((book, index) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${book.image}" alt="${book.title}" class="imagen">
            <div class="card-container--info">
                <p>${book.title}</p>
                <p>${book.author}</p>
                <div class="card-container--value">
                    <p>$${book.price}</p>
                    <a href="#" onclick="deleteBook(${index})"><i class="bi bi-trash"></i></a>
                    <a href="#" onclick="editBook(${index})"><i class="bi bi-pencil"></i></a>
                </div>
            </div>
        `;
        gallery.appendChild(card);
    });
}


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const newBook = {
        title: document.getElementById("titulo").value,
        author: document.getElementById("autor").value,
        price: document.getElementById("precio").value,
        image: document.getElementById("image").value 
    };

    
    books.push(newBook);
    displayBooks();
    form.reset();
});


function deleteBook(index) {
    books.splice(index, 1); // Eliminar el libro
    displayBooks();
}


function editBook(index) {
    const bookToEdit = books[index];

    
    document.getElementById("titulo").value = bookToEdit.title;
    document.getElementById("autor").value = bookToEdit.author;
    document.getElementById("precio").value = bookToEdit.price;
    document.getElementById("image").value = bookToEdit.image;

    
    form.onsubmit = (e) => {
        e.preventDefault();

        
        books[index] = {
            title: document.getElementById("titulo").value,
            author: document.getElementById("autor").value,
            price: document.getElementById("precio").value,
            image: document.getElementById("image").value
        };

        displayBooks();
        form.reset();
        form.onsubmit = null; 
    };
}


displayBooks();
