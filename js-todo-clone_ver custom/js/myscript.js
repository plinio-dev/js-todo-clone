
var listaSpesa = [
  'acqua',
  'biscotti',
  'latte',
  'mele',
];


// all'evento click appare il campo input
$('#add').click(function(){
  $("#aggiungi").show('slow', function(){
  });
});


// ciclo per creare nuovo elementi
for (var i = 0; i < listaSpesa.length; i++) {
  // 1 clono il template
  var template = $('.template li').clone();
  // 2 aggiungo le info al template
  template.prepend(listaSpesa[i]);
  // 3 aggiungo il template alla lista
  $('.todo-list').append(template);
};

// 4 cancello gli elementi della lista
$('.item-delete').click(function() {
  $(this).parent().remove();
});


// 5 aggiungere un elemento alla listaSpesa
$('#aggiungi').keydown(function(e) {
  if (e.which == 13) {
    // all'evento tasto invio nascondere il campo input
    $("#aggiungi").hide('slow', function(){
    });

    var testo = $(this).val();

    if (testo != "") {
      // clono il template
      var template = $('.template li').clone();

      template.prepend(testo);

      $('.todo-list').append(template);
      $(this).val("");
    }
  }

});

$('.todo-list').on('click','.item-delete', function() {
    $(this).parent().remove();
});
