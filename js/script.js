var listaSpesa = [
  'acqua',
  'biscotti',
  'latte',
  'mele',
];

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
    var testo = $(this).val();

    if (testo != "") {
      // clono il template
      var template = $('.template li').clone();

      template.prepend(testo);

      $('.todo-list').append(template);
    }
  }



});
