

$( document ).ready(function() {
    console.log( "ready!" );
    $("#"+id+"lista-link-estados ul").hide();
    $("#estado-selecionado").on("change",mostrarLinksCertidoesOnChangeEvento);
});


var mostrarLinksCertidoesOnChangeEvento = function(e){
    console.log(this);
    var valor = $(this).val();
    var id=  $(this).attr("id");
    $("#"+id+"lista-link-estados ul").hide();
    $("#"+id+"lista-link-estados ul#link-"+valor).show();
}

