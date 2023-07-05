gsap.fromTo('.main__pic',{opacity: 0, y:20},{opacity:1,y:0,duration:1})

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});
const appearOptions = {
    threshold:0,
    rootMargin: "0px 0px -250px 0px"
};
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);
const sliders = document.querySelectorAll(".slide-in");

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
  });