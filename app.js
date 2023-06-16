const Sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');

function PageTransitions() {
  // Button click active class
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener('click', function () {
      let currentBtn = document.querySelector('.active-btn');
      if (currentBtn) {
        currentBtn.classList.remove('active-btn');
      }
      this.classList.add('active-btn');
    });
  }

  // Add click event listener to each section in allSections
  allSections.forEach(section => {
    section.addEventListener('click', (e) => {
      const id = e.target.dataset.id;
      if (id) {
        sectBtns.forEach((btn) => {
          btn.classList.remove('active');
        });
        e.target.classList.add('active');
        Sections.forEach((section) => {
          section.classList.remove('active');
        });
        const element = document.getElementById(id);
        if (element) {
          element.classList.add('active');
        }
        console.log(e.target);
      }
    });
  });
  const themeBtn = document.querySelector('.theme-btn');
  themeBtn.addEventListener('click',() =>{
    let element = document.body;
    element.classList.toggle('light-mode')
  })
  
}

PageTransitions();
