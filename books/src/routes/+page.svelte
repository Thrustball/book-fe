<div class="container my-3">
    <h3>
      Books!
      <small class="text-body-secondary">Shows Your Current Book Collection</small>
    </h3>
</div>

<div class='container'>
    <button class='btn' onclick="{GetBooks}">Load</button>
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
        
        var request = new Request("/api/book", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBook)
        });

        var response = await fetch(request);
        alert(response.status);
    }

    async function GetBooks() {
        var request = new Request("/api/book", {
            method: "GET",
            headers: { 'Content-Type': 'application/json' }
        });

        var response = await fetch(request);
        books = await response.json();
    }

    // GetBooks().then(_ => console.log("Loaded"));
</script>