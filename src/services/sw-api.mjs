import axios, { all } from 'axios';

async function getAllStarships(){
try {
    let url = "https://swapi.dev/api/starships/";

      let res = await axios.get(url);
      let allStarships = res.data.results

      return allStarships
} catch (error) {
    console.error(error)
}

}

export { getAllStarships };