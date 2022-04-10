
export const getGifs = async (category) => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=UfWkMBcZclH36rO3rGx1O100TLaw6o2s`;
        const resp = await fetch(url);
        const {data} = await resp.json();
        const gifs = data.map( ({id,title,images}) => { 
                return {
                    id: id,
                    title: title,
                    url: images?.downsized_medium.url
                }
            });
        return gifs;
    }