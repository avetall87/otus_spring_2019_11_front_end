export default class BookServiceApi {
    _apiBase = 'http://localhost:8080/book';

    _apiDelete = 'http://localhost:8080/book/delete';

    _apiSave = 'http://localhost:8080/book/update';

    async getBookResponse(url) {
        const response = await fetch(`${this._apiBase}/${url}`, {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Credentials' : 'true',
        });

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

    async saveBook(book) {

        console.log("book data:" + JSON.stringify(book));

        return await fetch(this._apiSave, {
            method: 'PUT',
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            body: JSON.stringify(book),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        });
    }
}