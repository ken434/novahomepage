'use strict';
{
  const menu=document.getElementById('open');
  const close=document.getElementById('close');
  const overlay=document.querySelector('.overlay');

  menu.addEventListener('click',()=>{
overlay.classList.add('show');
menu.classList.add('hide');
  })

close.addEventListener('click',()=>{
  overlay.classList.remove('show');
  menu.classList.remove('hide');
})

const dts=document.querySelectorAll('dt');

dts.forEach(dt=>{
  dt.addEventListener('click',()=>{
    dt.parentNode.classList.toggle('result');
  })
})


}







