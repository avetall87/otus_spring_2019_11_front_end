export default class BookServiceApi {
    _apiBase = 'http://localhost:8080/book/get';

    _apiDelete = 'http://localhost:8080/book/delete';

    async getBookResponse(url) {
        const response = await fetch(`${this._apiBase}/${url}`);

        if (!response.ok) {
            throw new Error(`Could not fetch ${url} , received ${response.status}`);
        }

        return await response.json();
    }

    async getAllBooks() {
        return await this.getBookResponse('all');
    }

    async getBookById(bookId) {
        return await this.getBookResponse('one/' + bookId);
    }


    async removeBook(bookId) {
        return await fetch(this._apiDelete + '/' +bookId, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            cache: 'no-cache' // *default, no-cache, reload, force-cache, only-if-cached
        });
    }
}