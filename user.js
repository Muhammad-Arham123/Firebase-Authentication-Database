var nameh=document.getElementById('hname')
var container = document.getElementsByClassName("row")



var data = localStorage.getItem("uid")//get current user 
console.log(data)//current user uid 


firebase.database().ref(`users/${data}`).once("value", (data1) => {
    console.log(data1.toJSON())

    var data = data1.toJSON()

    var name1 = data["name"]
  
    nameh.innerText += `: ${name1}`

})



firebase.database().ref("Dishes").once("value", (snapshot) => {
    // console.log(snapshot.toJSON())
    var data = Object.values(snapshot.toJSON())//object to array 
    console.log(data)

    data.map((v, i) => {
        // console.log(v)
        container[0].innerHTML += `
    <div class="col col-lg-3 col-md-4 col-sm-6 col-12 mt-5">
    <div class="card" style="height:350px;border=10px solid black">
        <img   src=${v.imgUrl} class="card-img-top" alt="..." style="width:100%;height:170px; text-align: center; ">        
        <hr>
        <div class="card-body">
          <h5 class="card-title">${v.Dish_Name==''?'No Title':v.Dish_Name }
          
          </h5>
          <p class="card-text">${v.Dish_Name==''?'No Price':v.Price}</p>
          <a href="#" class="btn btn-primary">Order</a>
        </div>
      </div>
</div>
    `

    })
})
