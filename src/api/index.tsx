import axios from "axios";

export const searchHero = async (name: string) => {
    try {
        const response = await axios.get(
            `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${name}&ts=1&apikey=06ead66137452ef75685fcdc895a6c0b&hash=2774d42849c52a2ec23f9b2298e41e7a&limit=100`
        );
        
        return response.data.data.results;
    } catch (error) {
        console.error('Erro na buscar do heróis:', error);
        throw error;
    }
};

export const searchId = async (id: string) => {
    try {
        const response = await axios.get(
            `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=06ead66137452ef75685fcdc895a6c0b&hash=2774d42849c52a2ec23f9b2298e41e7a`);
        return response.data;
    } catch (error) {
        console.error('Erro na busca do herói:', error);
        throw error;
    }
};

export const comicsId = async (id: string) => {
    try {
        const response = await axios.get(
            `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?apikey=06ead66137452ef75685fcdc895a6c0b&hash=2774d42849c52a2ec23f9b2298e41e7a&limit=50&ts=1`
            );            
        return response.data;
    } catch (error) {
        console.error("Erro na busca de HQ's:", error);
        throw error;
    }
};

export const eventsId = async (id: string) => {
    try {
        const response = await axios.get(
            `https://gateway.marvel.com:443/v1/public/characters/${id}/events?apikey=06ead66137452ef75685fcdc895a6c0b&hash=2774d42849c52a2ec23f9b2298e41e7a&limit=50&ts=1`
        );
        return response.data;
    } catch (error) {
        console.error("Erro na busca de HQ's:", error);
        throw error;
    }
};