function storedata(){
    cname=document.getElementById('cname').value;
    cprice=document.getElementById('cprice').value;
    ckey=document.getElementById('ckey').value;
    
    const car={
        Name: cname,
        Price: cprice
    }

    localStorage.setItem(`${ckey}`,JSON.stringify(car))
    alert("Data Sucessfully Stored")
    document.getElementById('enter').reset();
}

function retrivedata(){
    skey=document.getElementById('search').value;
    if(skey in localStorage){
        cardetails=JSON.parse(localStorage.getItem(`${skey}`));
        carname=cardetails.Name;
        carprice=cardetails.Price;

        display.innerHTML=`<div class="card" style="width: 18rem;">
        <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimages_k%2Fcar-transparent-background%2Fcar-transparent-background-22.png&f=1&nofb=1&ipt=ca884b46f0c187289e98147a270cd9eacad3486f5b57c961e31bc421f2057588&ipo=images" class="card-img-top" alt="...">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">CAR NAME: ${carname}</li>
          <li class="list-group-item">CAR PRICE: ${carprice}</li>
        </ul>
      </div>`
    }
    else{
        display.innerHTML=`<div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Car Not Found :(</li>
        </ul>
      </div>`
    }
    
    

}

function deletedata(){
    cdata=document.getElementById('cdata').value;
    window.localStorage.removeItem(cdata);
    alert("Data Cleared")
    document.getElementById('enter').reset();
}

function cleardata(){
    localStorage.clear();
}