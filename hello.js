let string ='';
    const buttons = document.querySelectorAll(".btn")
     const equal1 = document.getElementsByClassName("btn-green")
     const c= document.querySelectorAll('.btn-red')
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if (e.target.innerText === '=') {
            string = eval(string)
            document.querySelector('input').value = string
        }else if(e.target.innerText === 'C') {
                string = ''
                document.querySelector('input').value = string
        
        } 
        else{
        console.log(e.target);
        string =string.trim()+e.target.innerHTML;
        document.querySelector('input').value = string
        }
    })
})