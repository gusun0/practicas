class Book{
 constructor(title, author, isbn){
	 this.title = title;
	 this.author = author;
	 this.isbn = isbn;
 }

}


class UI {

 // Method 
 addBookToList(book){ 
	
 const list = document.getElementById('book-list');
 const row = document.createElement('tr');
 row.innerHTML = `
	<td>${book.title}</td>
	<td>${book.author}</td>
	<td>${book.isbn}</td>
	<td><a href="#" class="delete">X</a></td>
	`;

	list.appendChild(row);
	}



	showAlert(message, className){
		const div = document.createElement('div');

		// Add clasName
		div.className = `alert ${className}`;
		
		div.appendChild(document.createTextNode(message));

		const container = document.querySelector('#container');

		//Get form
		const form = document.querySelector('#book.form');


		// Insert alert
		container.insertBefore(div,form);

		// Timeout after 3 sec
		setTimeout(() => {

			document.querySelector('.alert').remove();
		},3000);

	}


	deleteBook(target){
		if(target.className === 'delete'){
			target.parentElement.parentElement.remove();
		}
	}


	clearFields(){
		document.getElementById('title').value = '';
		document.getElementById('author').value = '';
		document.getElementById('isbn').value = '';
	}

}



// Event Listengin
document.getElementById('book-form').addEventListener('submit', function (e){

	e.preventDefault();

	// Get form values
	const title = document.getElementById('title').value;
	const author = document.getElementById('author').value;
	const isbn = document.getElementById('isbn').value;



	// Instantiate Book 
	const book = new Book(title, author, isbn);

	// Instantiate UI
	const ui = new UI();

	// Validate
	if(title === '' || author === '' || isbn === ''){
		// error alert
		ui.showAlert('please fill in all fields','alert');
	}else{
		// add book to list
		ui.addBookToList(book);

		// show success
		ui.showAlert('Book added','success');

		// clear fields
		ui.clearFields();
	}

})


// event listener for delete
document.getElementById('book-list').addEventListener('click',function(e){

 e.preventDefault();

 // instantiate ui
 const ui = new UI();

 // delete book
 ui.deleteBook(e.target);


 // show message
 ui.showAlert('Book removed','error');


})







