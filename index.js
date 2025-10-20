const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("open"); // <-- aktiverar X-animationen
});

const questions = document.querySelectorAll('.faq-question');

questions.forEach(q => {
  q.addEventListener('click', () => {
    const answer = q.nextElementSibling;
    const isOpen = answer.style.maxHeight; 

    questions.forEach(otherQ => {
      if (otherQ !== q) {
        otherQ.classList.remove('active');
        otherQ.nextElementSibling.style.maxHeight = null;
      }
    });

    if (isOpen) {
      answer.style.maxHeight = null;
      q.classList.remove('active');
    } else {
      answer.style.maxHeight = answer.scrollHeight + 'px';
      q.classList.add('active');
    }
  });
});