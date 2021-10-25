import { api } from "./AxiosService";

class TriviaService {
    constructor() {
        console.log('T Serve loaded');
    }

    async getTrivia(url = '') {
        const response = await api.get(url)
        console.log('the response', response);

    }
}