function obterMensagens() {
    var retorno = [];
    var consulta = $.ajax({
      url: 'https://app-p2-aab7c7fdddb8.herokuapp.com/mensagens',
      method: 'GET',
      dataType: 'json',
      async: false,
    }).fail(function () {
      return retorno;
    });
  
    consulta.done(function (data) {
      retorno = data;
    });
  
    return retorno;
  }
  
  function inserirMensagem(mensagem) {
    $.ajax({
      url: 'https://app-p2-aab7c7fdddb8.herokuapp.com/mensagens',
      method: 'POST',
      data: JSON.stringify(mensagem),
      dataType: 'json',
      contentType: 'application/json',
      async: false,
    });
  }
  
  function validarUsuario(objLoginSenha) {
    var retorno = false;
    var validacao = $.ajax({
      url: 'https://app-p2-aab7c7fdddb8.herokuapp.com/usuarios/validar',
      method: 'POST',
      data: JSON.stringify(objLoginSenha),
      dataType: 'json',
      contentType: 'application/json',
      async: false,
    }).fail(function () {
      return retorno;
    });
  
    validacao.done(function (data) {
      retorno = data;
    });
  
    return retorno;
  }
  