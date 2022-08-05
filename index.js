const getPosts = async () => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=50');
    if (res.status === 200) {
      localStorage.setItem('work', JSON.stringify(res));
    }
  } catch (error) {
    console.log(error);
  }
};
  
  getPosts();
  const data = JSON.parse(localStorage.getItem('work'));

const writeToScreen = (data = []) => { // if data is undefined or null, it will be set to an empty array
  const postContainer = document.querySelector('.posts');
  let elements = '';
  let sayi= 10;
  data.forEach(post => {
    sayi ++;
    elements += `<div class="post" >
                      <img  class="img" src="https://picsum.photos/id/${sayi}/200/150"/>
                      <h3>${post.title}</h3>
                      <p>${post.body}</p>
                      <button class="myBtn"  >Delete</button>
                  </div>`;
  })
  postContainer.innerHTML = elements;
};

writeToScreen(data.data);
  
$(document).ready(function(){
  $(document).on('mouseenter', '.divbutton', function () {
    $(this).find(":button").show();
  }).on('mouseleave', '.divbutton', function () {
    $(this).find(":button").hide();
  }).on('click', ':button', function() {
    $(this).parent().remove();
  });
});


// function myDelete(){
//   let a, i, txtValue, ul, button;
//   ul = document.getElementById("myUL")
//   button = ul.getElementsByTagName('button')

//     for (i = 0; i < button.length; i++) {
//       let parent = button[i].parentNode;
//       parent.innerHTML="";
//       parent.style.display="none";
//       break;
//     }
// }

function myFunction() {
  let input, filter, h3, a, i, txtValue, ul;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL")
  h3 = ul.getElementsByTagName('h3')
  
    for (i = 0; i < h3.length; i++) {
      a = h3[i]?.innerText;
      let parent = h3[i].parentNode;
      txtValue =  a;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        parent.style.display = "";
      } else {
        parent.style.display = "none";
      }
    }
}