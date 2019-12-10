import { retrieveAllMovies } from './fetchCalls';



describe('retrieveAllMovies', () => {
    let mockResponse = [
        {
            id: 55,
            title: "Sweaters for pugs",
            description: "To keep them warm"
        }
    ];

    beforeEach(() => {
        window.fetch = jest.fn().mockImplementation(() => {
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockResponse)
          });
        });
    });
    
    it('should be passed the correct url', () => {
        retrieveAllMovies()

        expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/films/');
    })

    // it('should return an array of ideas', () => {
    //     expect(retrieveAllMovies()).resolves.toEqual(mockResponse);
    // })

    // it('should return an error for response that is not ok', () => {
    //     window.fetch = jest.fn().mockImplementation(() => {
    //         return Promise.resolve({
    //           ok: false,
    //         });
    //       });
    //     expect(getIdeas()).rejects.toEqual(Error('Error fetching ideas'))
        
    // })
})