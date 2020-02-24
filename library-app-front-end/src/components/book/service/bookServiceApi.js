export default class BookServiceApi {
    _apiBase = 'http://localhost:8080/api/v1/book';

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
}