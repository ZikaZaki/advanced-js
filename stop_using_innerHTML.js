/**********************************************FIRST REASON/**********************************************
* The use of innerHTML results in a very SLOW performance and that becuase, it has 
to parse the input text everytime there's a change, and this process is time-consuming.
Therefore, use FRAGMENT instead, which is much more faster.
*********************************************************************************************************/
const initApp = async () => {
  const button1 = document.getElementById('1');
  button1.addEventListener('click', createParas1);
  
  const button2 = document.getElementById('2');
  button2.addEventListener('click', createParas2);
}

document.addEventListener("DOMContentLoaded", initApp);

const createParas1 = () => {
  const start = Date.now();
  
  const main = document.querySelector('main');
  
  let i = 0;
  while(i < 500) {
    main.innerHTML += `<p>My Value is ${i}</p>`;
    i++;
  }
  
  const duration = Date.now() - start;
  console.log(`InnerHTML Duration: ${duration}`);
}

const createParas2 = () => {
  const start = Date.now();
  
  const main = document.querySelector('main');
  const fragment = document.createDocumentFragment();
  let i = 0;
  while(i < 1000) {
    const p = document.createElement('p');
    p.textContent = `My Value is ${i}`;
    fragment.append(p);
    i++;
  }
  main.append(fragment);
  
  const duration = Date.now() - start;
  console.log(`Fragment Duration: ${duration}`);
}
