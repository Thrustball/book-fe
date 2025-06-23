<form method="POST">
  <div class="form-group">
    <label for="title">Book Title</label>
    <input type="text" class="form-control" id="title" name="title" placeholder="Title">
  </div>
  
  <br/> 
  
  <div class="form-group">
    <label for="author">Book Author</label>
    <input type="text" class="form-control" id="author" name="author" placeholder="Author">
  </div>

  <br/>

  <div class="form-group">
    <label for="publishingdate">Publishing Date</label>
    <input type="date" class="form-control" id="publishingdate" name="publishingdate">
  </div>

  <br/>

  <div class="form-group">
    <label for="purchaseddate">Purchased Date</label>
    <input type="date" class="form-control" id="purchaseddate" name="purchaseddate">
  </div>

  <br/>

  <div class="form-group">
    <label for="publisher">Publisher</label>
    <input type="text" class="form-control" id="publisher" name="publisher" placeholder="Publisher">
  </div>

  <br/>

  <div class="form-group">
    <label for="isbn">ISBN</label>
    <input type="text" class="form-control" id="isbn" name="isbn" placeholder="ISBN">
  </div>

  <br/>

  <div class="form-group">
    <label for="priceNewInput">Price (new)</label>
    <div class="input-group">
      <span class="input-group-text">€</span>
      <input type="number" class="form-control" id="priceNewInput" name="price_new" placeholder="Enter price" min="0" step="0.01">
    </div>
  </div>

  <br />

  <div class="form-group">
    <label for="priceBoughtInput">Price (bought for)</label>
    <div class="input-group">
      <span class="input-group-text">€</span>
      <input type="number" class="form-control" id="priceBoughtInput" name="price_bought" placeholder="Enter price" min="0" step="0.01">
    </div>
  </div>

  <br />

  <div class="form-check">
    <input class="form-check-input" type="radio" name="newused" id="new" value="new">
    <label class="form-check-label" for="new">
      New
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="newused" id="used" value="used" checked>
    <label class="form-check-label" for="used">
      Used
    </label>
  </div>

  <br />

  <div class="form-group">
    <label for="pages">Pages</label>
    <div class="input-group">
      <span class="input-group-text">&#128214;</span>
      <input type="number" class="form-control" id="pages" name="pages" placeholder="Pages" min="0" step="1">
    </div>
  </div>

  <br/>

  <div class="form-group">
    <label for="genres">Genres</label>
    <select class="form-select" id="genres" name="genres" multiple>
      <option value="fantasy">Fantasy</option>
      <option value="sci-fi">Science Fiction</option>
      <option value="dystopian">Dystopian</option>
      <option value="action-adventure">Action & Adventure</option>
      <option value="mystery">Mystery</option>
      <option value="horror">Horror</option>
      <option value="thriller">Thriller & Suspense</option>
      <option value="historical-fiction">Historical Fiction</option>
      <option value="romance">Romance</option>
      <option value="literary">Literary Fiction</option>
      <option value="realistic">Realistic Fiction</option>
      <option value="biography">Biography</option>
      <option value="memoir">Memoir</option>
      <option value="essay">Essay</option>
      <option value="true-crime">True Crime</option>
      <option value="travel">Travel</option>
      <option value="history">History</option>
      <option value="business">Business</option>
      <option value="health-lifestyle">Health & Lifestyle</option>
      <option value="food-drink">Food & Drink</option>
      <option value="sports">Sports</option>
    </select>
  </div>

  <br/>

  <div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3">Add Book</button>
  </div>
</form>
