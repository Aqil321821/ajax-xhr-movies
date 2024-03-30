const xhr = new XMLHttpRequest();
xhr.open('GET', './movies.json');
xhr.onreadystatechange = function () {


  if (this.readyState === 4 && this.status === 200) {
    // console.log(JSON.parse(this.responseText));
    // console.log(this.status);
    const data = JSON.parse(this.responseText);


    data.forEach(movies => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${movies.title}</strong> Year : ${movies.year}`;
      const list=document.querySelector('#results');
      list.appendChild(li);



    });

  }
};

// Send request
xhr.send();
