let searchInput = document.querySelector('#searchUser')
let searchBtn = document.querySelector('#searchBtn');
let ui = new UI();

searchBtn.addEventListener('click', (e) =>{
    let userText = searchInput.value;
    if(userText != ''){
        fetch(`https://api.github.com/users/${userText}`)
            .then(res => res.json())
            .then(data =>{
                
                if(data.message == 'Not Found'){
                    //show alert
                    ui.showAlert('User Not found !!', 'alert alert-danger');
                }else{
                    //show profile
                    ui.clearAlert();
                    ui.showProfile(data);
                }
            })

    }else{
        ui.clearProfile();
    }
})