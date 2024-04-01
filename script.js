window.onscroll = function() {myFunction()};
function myFunction() {
  if (document.documentElement.scrollTop > 90) {
    document.getElementById("header").classList.add("scroll_header")
  } else {
    document.getElementById("header").classList.add("home_header")
    document.getElementById("header").classList.remove("scroll_header")
  }
}

const type_heading = async () => {
    let heading = "Empowering Humanity through Compassion"
    let letters = heading.split("")
    let i = 0
    while (i < letters.length) {
        await waitForMs(75);
        document.getElementById("typing-text").append(letters[i])
        i++
    }
    return
}

function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

type_heading()

document.getElementById("about").addEventListener('click',()=>{
    document.documentElement.scrollTo(0,750)
})

document.getElementById("scrolldown").addEventListener('click',()=>{
    document.documentElement.scrollTo(0,750)
})

function changedata(parameter){
    if(parameter==0){
        document.getElementById('step_find').style.display = 'none';
        document.getElementById('find').style.background = '#751127';
        document.getElementById('step_donate').style.display = 'flex';
        document.getElementById('donate').style.background = 'red';
    }
    else{
        document.getElementById('step_donate').style.display = 'none';
          document.getElementById('donate').style.background = '#751127';
        document.getElementById('step_find').style.display = 'flex'; 
          document.getElementById('find').style.background = 'red';
    }
}