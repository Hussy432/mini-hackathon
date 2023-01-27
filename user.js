var Dishes = [
    {
        dish: "Tiki",
        price: 300,
        img: "https://firebasestorage.googleapis.com/v0/b/hack-mini-authon.appspot.com/o/images%2Ftikki.jpg?alt=media&token=4c150b25-56f2-44da-8090-76186195197d",
    },
    {
        dish: "Biryani",
        price: 250,
        img: "https://firebasestorage.googleapis.com/v0/b/hack-mini-authon.appspot.com/o/images%2Fbiryani.jpg?alt=media&token=fbcb9c77-7cd8-4fa7-a542-090c060bc629",
    },
    {
        dish: "chicken karhai ",
        price: 450,
        img: "https://firebasestorage.googleapis.com/v0/b/hack-mini-authon.appspot.com/o/images%2Fchicken%20karhai.jpg?alt=media&token=4222fe0a-a28c-4b9f-b4d8-c030b7b53f58",
    },
    {
        dish: "chicken korma",
        price: 280,
        img: "https://firebasestorage.googleapis.com/v0/b/hack-mini-authon.appspot.com/o/images%2Fchicken%20korma%20with%20chola.jpg?alt=media&token=05b127db-ceba-436f-8e17-56570a720d65",
    }
]

var div = document.getElementsByClassName("container")
for(var i in Dishes){
    // console.log(dishes[i])
    var values =    Object.values(Dishes[i])
    var img = Object.keys(Dishes[i])
    // console.log(values)

    var row = document.createElement("div")
    row.setAttribute("class","row")
    var col = document.createElement("div")
    col.setAttribute("class","col col-lg-3")
    for(var j in values){
        if(img[j]=="img"){
            var img_tag = document.createElement("img")
            img_tag.setAttribute("src",values[j])
            // console.log(img_tag)

            // row.appendChild(img_tag)
            col.appendChild(img_tag)
        }
        else{
            var h1 = document.createElement("h5")
            var textnode = document.createTextNode(values[j])
            h1.appendChild(textnode)
            // console.log(h1)
            col.appendChild(h1)
            // row.appendChild(img_tag)

        }
    }
    row.appendChild(col)
    console.log(row)
    div[0].appendChild(row)

}

