import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
      const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': '39b5e37d83mshe5cb859b1d9b95ep187df2jsn1bbf19fd9d08'
          }
      });

      return data;
  }