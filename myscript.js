    
    document.addEventListener('DOMContentLoaded', function() 
    {
    
    let books=[];
   
    

    function Book(bookId, title, author, pages, status) {

        this.bookId = bookId;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this. status= status;
    }

    function addBook(bookId,bookName, authorName, pages, status)
    {
        const book = new Book(bookId,bookName, authorName, pages, status);
        books.push(book);

    }
    
    const id1 = generateRandomId();
    const book1 = new Book(id1,"Fifty Shades of Grey", "E.L. James", "200",true);
    books.push(book1);
    const id2 = generateRandomId();
    const book2 = new Book(id2,"Wurthering Heights", "Emily Bronte", "500",false);
    books.push(book2);
    
    if(books!==null)
    {
        
renderTable(books);

    } 

    const showButton = document.getElementById("showDialog");
    const formDialog = document.getElementById("formDialog");
    const confirmBtn = document.getElementById("confirmBtn");

    //Show the "Add the Book" form Dialog

    showButton.addEventListener("click", () => {

        formDialog.showModal();

    });

    confirmBtn.addEventListener("click",(e) => {
        e.preventDefault();
        const bookId = generateRandomId();
         const bookName = document.getElementById("bookName").value;
        const authorName = document.getElementById("authorName").value;
        const pages = document.getElementById("pages").value;
        const read_status_check = document.getElementById("readStatus").checked;
        const status = read_status_check === true ? true : false ;
        if(bookName!==null && authorName!==null && pages!==null)
    {
        
        addBook(bookId,bookName, authorName, pages, status)
        renderTable();

    }

    else{
        alert("Please fill in all the mandatory details.");
    }
        formDialog.close();
    });

   
    

//Generate random ID
function generateRandomId() {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return 'id-' + array[0].toString(36); // Converts number to a base-36 string
}





function renderTable() 
{
    const table = document.getElementById("bookTable");
    
   table.innerHTML = "";
    table.setAttribute("border", "1"); // Optional: add a border for visibility

    // Create table header
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    let titleofTable = ["ID","Title", "Author","Pages","Read Yet?"];

        const th5 = document.createElement("th");
        th5.textContent = "ID" ;
        headerRow.appendChild(th5);
        const th1 = document.createElement("th");
        th1.textContent = "Title" ;
        headerRow.appendChild(th1);
          const th2 = document.createElement("th");
        th2.textContent = "Author" ;
        headerRow.appendChild(th2);
          const th3 = document.createElement("th");
        th3.textContent = "Pages" ;
        headerRow.appendChild(th3);
          const th4 = document.createElement("th");
        th4.textContent = "Read Yet?" ;
        headerRow.appendChild(th4);
        const th6 = document.createElement("th");
        th6.textContent="Actions";
        headerRow.appendChild(th6);

    
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create table body
    const tbody = document.createElement("tbody");
    books.forEach(book => {
        const row = document.createElement("tr");
            const td5 = document.createElement("td");
            td5.textContent = book.bookId;
            row.appendChild(td5);
            const td1 = document.createElement("td");
            td1.textContent = book.title;
            row.appendChild(td1);
            const td2 = document.createElement("td");
            td2.textContent = book.author;
            row.appendChild(td2);
            const td3 = document.createElement("td");
            td3.textContent = book.pages;
            row.appendChild(td3);
            const td4 = document.createElement("td");
            const checkBox1 = document.createElement("input");
            checkBox1.type="checkbox";
            checkBox1.checked=book.status;
            td4.appendChild(checkBox1);
            row.appendChild(td4);
            const td6 = document.createElement("td");
            const delButton = document.createElement("button");
             delButton.classList.add("delBtn");
            delButton.dataset.id =book.bookId;
            delButton.innerText="Delete";
    
            td6.appendChild(delButton);
            row.appendChild(td6);


        
        tbody.appendChild(row);
    });
    table.appendChild(tbody);


    //return table;
}



 document.getElementById("bookTable").addEventListener("click", (e) => {
    if (e.target.classList.contains("delBtn")) {
        const id = e.target.dataset.id;
        removeBook(id);
        renderTable();
    }
}); 

function removeBook(id){
    
    books = books.filter(book=> book.bookId !== id);
}




    });