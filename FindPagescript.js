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