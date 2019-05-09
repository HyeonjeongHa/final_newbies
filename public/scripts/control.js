const btn_load = document.getElementById('btn_load');
const list_div = document.getElementById('basketlist');
const formsLength = document.getElementsByClassName('first').length;
const formsLength2 = document.getElementsByClassName('second').length;
for (let i=0; i < formsLength; i++)    {
    document.getElementsByClassName('first').item(i).addEventListener('submit', e => {
        const list = e.srcElement
        axios({
            method: "POST",
            url: "http://localhost:8000/basket",
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                title: list[0],
                src: list[1],
                price: list[2]
            }
        }).then(res => console.log(res))
        .catch(err => console.log(err))
        e.preventDefault();
    })
}
for (let i=0; i < formsLength2; i++)    {
    document.getElementsByClassName('second').item(i).addEventListener('submit', e => {
        const list = e.srcElement
        axios({
            method: "POST",
            url: "http://localhost:8000/basket",
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                title: list[0],
                src: list[1],
                price: list[2]
            }
        }).then(res => console.log(res))
        .catch(err => console.log(err))
        e.preventDefault();
    })
}

btn_load.addEventListener('click', ()=>{
    axios.get('http://localhost:8000/basket')
    .then(function(response){
        while(list_div.hasChildNodes()){
            list_div.removeChild(list_div.firstChild);

        }

        const item = response.item;
        for(let i=0; i<data.length; i++){
            let new_div = document.createElement('div');
            new_div.textContent = `${item[i].src2} ${item[i].title} ${item[i].price}`
            list_div.appendChild(new_div);
            //console.log("testpoint");
        }
    }).catch(function(error){
        console.log(error);
    })
})