    import validator from './validator.js';

    console.log(validator);

    // let numero = document.getElementById("card").value;
    let submit = document.getElementById("btn-submit");

        submit.addEventListener('click', function(e) {
        e.preventDefault();

        const cartao = document.querySelector("cardnumber").value;
        // const value = cartao.value;

        console.log(cartao);


    }
    )


    // let submit = document.getElementById("btn-submit");

    // submit.addEventListener('click', function(e) {
    //     e.preventDefault();

    //     if {
    //         console.log("funcionou!");

    //     }
    //     }
    // )

