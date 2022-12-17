$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(88) 98888-9999'
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: false
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            email: 'Por favor, insira o seu e-mail',
            mensagem: 'Por favor, insira uma mensagem'
        }
    });
})