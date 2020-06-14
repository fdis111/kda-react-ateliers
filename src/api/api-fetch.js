
 const api = {
    liste :  async (url) => {
        const response = await fetch(url);
        return await response.json() 
    }  
 }

export default api