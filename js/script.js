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
}
