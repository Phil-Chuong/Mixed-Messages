// Javascripts function

const Tops = ['Dress', 'T-Shirt', 'Vest', 'Polo-Neck', 'Naked'];
const Bottoms = ['Skirt', 'Trousers', 'Jeans', 'Leggings', 'Shorts', 'Nothing'];
const Footwear = ['High-Heels', 'Trainers', 'Sandals', 'Boots'];

function handleTops() {

    const randomIndex = Math.floor(Math.random() * Tops.length);

    const randomItem = Tops[randomIndex];

    document.getElementById('results-tops').innerText = `${randomItem}`
};

function handleBottoms() {

    const randomIndex = Math.floor(Math.random() * Bottoms.length);

    const randomItem = Bottoms[randomIndex];

    document.getElementById('results-bottoms').innerText = `${randomItem}`
};

function handleFootwear() {

    const randomIndex = Math.floor(Math.random() * Footwear.length);

    const randomItem = Footwear[randomIndex];

    document.getElementById('results-footwear').innerText = `${randomItem}`
};

// Reset Button

// function handleReset() {
//     // Reset the displayed results or perform other cleanup tasks
//     document.getElementById('results-tops').innerText = '';
//     document.getElementById('results-bottoms').innerText = '';
//     document.getElementById('results-footwear').innerText = '';
// }


// fire all 3 function outfits at the same time.
function handleReset() {
    handleTops()
    handleBottoms()
    handleFootwear()
}