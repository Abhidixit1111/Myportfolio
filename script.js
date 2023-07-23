// console.log("hello")
const ob= new IntersectionObserver((e)=>{
    e.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show')
        }
    });
});

const hidden= document.querySelectorAll('.hidden1');
hidden.forEach((e)=>ob.observe(e));