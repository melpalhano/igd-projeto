window.onload = function() {

    let testForm = document.querySelector("form");
    let inputs = document.querySelectorAll("input");
    let textArea = document.querySelector("textarea");

    testForm.addEventListener('submit', e => {
        e.preventDefault();

        const formData = new FormData(testForm);
        fetch(testForm.getAttribute('action'), {
            method: 'POST',
            headers: {
                'Accept': 'application/x-www-form-urlencoded;charset=UTF-8',
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: new URLSearchParams(formData).toString()
        })
        .then(res => {
            if(res) {  
                console.log(res);              
                inputs.forEach(input => input.value = '');
                textArea.value = '';
                Swal.fire(
                    "Mensagem enviada!", 
                    "Agradecemos o contato", 
                    "success"
                );
            }            
        });
    });
};


