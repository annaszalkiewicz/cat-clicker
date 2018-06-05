const container = document.getElementById('cat-container');
const catImages = document.getElementsByClassName('image');

class Cat {

  constructor(name = '', image= '', count = 0) {
    this.name = name;
    this.image = image;
    this.count = count;
  }

  giveName() {
    const newHeading = document.createElement('h2');
    container.appendChild(newHeading);
    newHeading.classList.add('cat-name');
    newHeading.innerHTML = this.name;
  }

  createImage() {

    const img = document.createElement('img');
    container.appendChild(img);
    img.classList.add('image');
    source = `./img/${this.image}.jpg`;
    img.setAttribute('src', source);
    img.setAttribute('alt', this.name);

  }

  clickerCount() {

    const p = document.createElement('p');
    container.appendChild(p);
    p.classList.add('text');

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
    for (catImage of catImages) {
      catImages.addEventListener('click', this.clickerCount);
    }
  }

}

const cat1 = new Cat('Garfield', 'garfield', 0);
const cat2 = new Cat('Nermal', 'nermal', 0);

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