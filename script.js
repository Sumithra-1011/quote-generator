let change_quote=document.querySelector('.card-text')
let author=document.querySelector('.author')
let button=document.querySelector('.btn')
let heading=document.querySelector(".heading")

const url="https://api.quotable.io/random"
async function quote(newurl) {
    const data = await fetch(newurl);
    let res = await data.json()
    // console.log(res)
    change_quote.innerHTML='"'+res.content+'"';
    author.innerHTML="-"+res.author
    let rantem=(Math.floor(Math.random()*16777216)).toString(16);
    change_quote.style.color="#"+rantem
    author.style.color="#"+rantem
    document.body.style.backgroundColor = "#"+rantem;
    button.style.backgroundColor="#"+rantem
    button.style.color="white"
    heading.style.color="white"
    
}

document.querySelector('.btn').addEventListener('click',()=>{
    quote(url)

})
