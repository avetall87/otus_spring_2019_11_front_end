export class BookService {

    _defaultValue = '';

    genreLinearization = (data) => {
        let result;

        if (data !== null) {
            result = data.map(elem => elem.name).join(', ');
        } else {
            result = this._defaultValue;
        }
        return result;
    };

    commentsLinearization = (data) => {
        let result;

        if (data !== null) {
            result = data.map(elem => elem.comment).join('\n ');
        } else {
            result = this._defaultValue;
        }
        return result;
    };

}