const tavar =[
    {
        "id":"1",
        "name":"Pasha"
    },
    {
        "id":"2",
        "name":"Thesha"
    },
    {
        "id":"3",
        "name":"chmo"
    }
]
function zakaz(id){
    document.querySelector('.header').style.display='none';
    document.querySelector('.sendb').style.display='block';
    //
    for(let i=0; i<tavar.length; i++){
        if(id == tavar[i].id){
            document.getElementById('name').innerHTML=tavar[i].name;
            localStorage.setItem('name',tavar[i].name)
        }
    }
}

function sendd(){
    var email= document.getElementById('email').value;
    var col=document.getElementById('select').value;
    var telephone = document.getElementById('telephone').value;
    var tovarname = localStorage.getItem('name');
    var message = document.getElementById('message').value;
      console.log(email,col,telephone,tovarname,message);

  var  mmessage=`Email : ${email}%0A Telephone : ${telephone}%0A Имя товара : ${tovarname}%0A количество : ${col}%0A Message : ${message}`;

  const x=new XMLHttpRequest();
  x.open('GET','https://api.telegram.org/bot1834222385:AAHhYVX5ucqbC8dDUfZ9STbfO9_lkOwjDpk/sendMessage?chat_id=1369408018&text='+mmessage,true);
   x.send()
}
