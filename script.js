// $('.services-carousel').owlCarousel({
//   autoplay: true,
//   loop: true,
//   margin: 20,
//   dots: true,
//   nav: false,
//   responsiveClass: true,
//   responsive: { 
//     0: { 
//       items: 1
//     },
//     768: { 
//       items: 2
//     },
//     900: {
//       items: 4
//     }
//   }
// });




const getData = () => {
  const name = document.getElementById('name').value;
  console.log(name);
  const email = document.getElementById('email').value;
  console.log(email);
  const message = document.getElementById('message').value;
  console.log(message);
}