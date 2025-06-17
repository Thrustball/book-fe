<div class="container my-3">
    <h3>
      Books!
      <small class="text-body-secondary">Shows Your Current Book Collection</small>
    </h3>
</div>


<div class='container my-3'>
    <ul class="list-group">Current Book Collection
        {#each books as book}
                <li class="list-group-item">
                    <strong>{book.title}</strong> by <strong>{book.author}</strong>
                </li>
        {/each}
    </ul>
</div>

<div class="container w-50">
    <div class="input-group mb-3">
        <input type="text" class="form-control" required placeholder="Title" bind:value="{newTitle}" />
        <input type="text" class="form-control" required placeholder="Author" bind:value="{newAuthor}" />
        <button class="btn btn-primary" onclick="{AddBook}">Add</button>
    </div>
</div>

<script lang="ts">
    import Book from "$lib/models/book";
    let books: Book[] = $state([]);
    let newTitle = "";
    let newAuthor = "";

    async function AddBook() {
        console.log("The Input is: " + newTitle + " from " + newAuthor);
        let newBook = new Book(newTitle, newAuthor);
        books.push(newBook);
        await PutBook(newBook);
    }

    async function PutBook(book: Book) {
        const url = "http://backend:8000/book"; 

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(book)
        };

        var request = new Request(url, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(book)
        })

        fetch(request)
            .then(r => console.log("Status of request: " + r.status));
    }

</script>