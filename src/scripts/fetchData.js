export const fetchData = async() => {
    const res = await fetch(`https://api.unsplash.com/search/photos/?per_page=20&query=painting&client_id=${import.meta.env.VITE_TEST_KEY}`);
    const data = await res.json();
    const results = data.results;
    return results;
}


