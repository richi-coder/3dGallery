export const fetchData = async() => {
    const res = await fetch(`https://unsplash-api-richi-coder.vercel.app/api/3dgallery?query=paintings`);
    const data = await res.json();
    console.log(data, 'check');
    return data;
}


