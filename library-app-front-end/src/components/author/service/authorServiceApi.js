export default class AuthorServiceApi {
    _apiBase = 'http://localhost:8080/author/get';

    async getAuthorResponse(url) {
        const response = await fetch(`${this._apiBase}/${url}`);

        if (!response.ok) {
            throw new Error(`Could not fetch ${url} , received ${response.status}`);
        }

        return await response.json();
    }

    async getAllAuthors() {
        return await this.getAuthorResponse('all');
    }
}