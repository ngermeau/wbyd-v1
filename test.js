let genreList =  [
    { key: 'Crime', value: 'Crime' },
    { key: 'Drama', value: 'Drama' }
];

const genres = genreList.map((el) => { return el.value; }).join(' - ');


let title = "this is a s'uper test";
let out = title.replace(/ |'/g,'-');
console.log(out);