const container = document.getElementById('container');
const catImages = document.getElementsByClassName('image');
let count = 0;

class Cat {

  constructor(name = '', image= '', count = 0, container = '') {
    this.name = name;
    this.image = image;
    this.count = count;
    this.container = container;
  }

  createCatContainer() {
    const div = document.createElement('div');

    container.appendChild(div);
    div.classList.add('cat-container');
    div.setAttribute('id', this.container);
    this.giveName();
  }

  giveName() {
    const newHeading = document.createElement('h2');
    const catContainer = document.getElementById(this.container);

    catContainer.appendChild(newHeading);
    newHeading.classList.add('cat-name');
    newHeading.innerHTML = this.name;
    this.createImage();
  }

  createImage() {

    const img = document.createElement('img');
    const source = `./img/${this.image}.jpg`;
    const catContainer = document.getElementById(this.container);

    catContainer.appendChild(img);
    img.classList.add('image');
    img.setAttribute('src', source);
    img.setAttribute('alt', this.name);
    // img.addEventListener('click', this.clickerCount);
    this.events();

  }

  clickerCount() {

    const p = document.createElement('p');
    const catContainer = this.parentElement;
    let img = document.getElementsByTagName('img');
    
    catContainer.appendChild(p);
    p.classList.add('caption');

    count += 1;

    if (count === 1) {
      p.innerHTML = `You clicked cat ${count} time.`
    } 
    else if (count >= 2) {
      p.previousSibling.style.display = 'none';
      p.innerHTML = `You clicked cat ${count} times.`
    } 

  }

  events() {
    for (let catImage of catImages) {
      catImage.addEventListener('click', this.clickerCount);
    }
  }

}

const cat1 = new Cat('Garfield', 'garfield', 0, 'cat1');
const cat2 = new Cat('Nermal', 'nermal', 0, 'cat2');

cat1.createCatContainer();
cat2.createCatContainer();

// function clickACat() {
//   const p = document.createElement('p');
//   const caption = document.querySelector('.photo-caption');
//   caption.appendChild(p);
//   p.classList.add('text');

//   count += 1;

//   if (count === 1) {
//     p.innerHTML = `You clicked cat ${count} time.`
//   } 
//   else if (count >= 2) {
//     p.previousSibling.style.display = 'none';
//     p.innerHTML = `You clicked cat ${count} times.`
//   }
  
//   console.log(`You clicked cat ${count} times.`);
// }

// for (const allPhoto of allPhotos) {
//   allPhoto.addEventListener('click', clickerCount);
// }