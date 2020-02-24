export class BookService {

    genreLinearization = (data) => {
        let result;

        if (data !== null) {
            result = data.map(elem => elem.name).join(', ');
        } else {
            result = '-';
        }
        return result;
    };

}