const services = document.querySelectorAll('.service');

services.forEach(service => {
    service.addEventListener('click',function ()  {
        alert('Button was clicked!') 
 = '#e0e0e0';
    });
    service.addEventListener('mouseout', () => {
        service.style.backgroundColor = '#f2f2f2';
    });
});

gsap.from('.service', { duration: 1, opacity: 0, y: 50, stagger: 0.2 });