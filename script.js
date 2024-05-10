let toastBox = document.getElementById("toastBox");
    let successMsg = '<i class="fa-solid fa-circle-check"></i>Successfully change';
    let errorMsg = '<i class="fa-solid fa-circle-xmark"></i>There is an Error. Please correction 🛠️';
    let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i>Invalid input';
    function showToast(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);
    if(msg.includes('Error')){
        toast.classList.add('error');
    }
    if(msg.includes('Invalid')){
        toast.classList.add('invalid');
    }
    
    setTimeout(()=>{
        toast.remove();
    },1000);
  }