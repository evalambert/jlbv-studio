
// RAMDOM VIDEO ////////////////////////
document.addEventListener("DOMContentLoaded", () => {
    const log = console.log,
      array = ["jules-bouchier-vegis-stupeur-1", "jules-bouchier-vegis-stupeur-2", "jules-bouchier-vegis-stupeur-3", "jules-bouchier-vegis-stupeur-4"],
      random = Math.floor(Math.random() * array.length),
      videoname = array[random],
      target = document.getElementById("target");
    target.src = `${array[random]}.mp4`;

    log(videoname);
    setTimeout(() => {
        const mediaElem = document.querySelector("video");
        mediaElem.load();
        mediaElem.play();
    }, 500)

    if(videoname == jules-bouchier-vegis-stupeur-1){
        $('.caption > h3.en_lang').html('<span class="title">Stupeur bleue </span>, marble, 35x25cm, 2023');
        $('.caption > h3.fr_lang').html('<span class="title">Stupeur bleue </span>, marbre, 35x25cm, 2023');
    }
    if(videoname == jules-bouchier-vegis-stupeur-2){
        $('.caption > h3.en_lang').html('<span class="title">Stupeur Chair</span>, marble, 50x17cm, 2023');
        $('.caption > h3.fr_lang').html('<span class="title">BONJOUR</span>, marbre, 50x17cm, 2023');
    }
    if(videoname == jules-bouchier-vegis-stupeur-3){
        $('.caption > h3.en_lang').html('<span class="title">Stupeur Noire</span>, marble 30x20cm, 2023');
        $('.caption > h3.fr_lang').html('<span class="title">Stupeur Noire</span>, , marbre 30x20cm, 2023');
    }
    if(videoname == jules-bouchier-vegis-stupeur-4){
        $('.caption > h3.en_lang').html('<span class="title">Stupeur rouge</span>, marble 25x25cm, 2023');
        $('.caption > h3.fr_lang').html('<span class="title">Stupeur rouge</span>, marbre 25x25cm, 2023');
    }

  });

//// LANG SWITCH //////////////////////// 
$(document).ready(function(){
    // By default
    $('.en_lang').addClass("active-lang");
    $('#lang-switch .en').addClass("active-flag");
    
    // Function switch
    $(function() {
      // French button
      $("#lang-switch .fr").click(function() {
        // Enable French
        $('.fr_lang').addClass("active-lang"); 
        
        // Disable English
        $('.en_lang').removeClass("active-lang") 
        
        // Active or remove the opacity on the flags.
        $('#lang-switch .fr').addClass("active-flag");
        $('#lang-switch .en').removeClass("active-flag");
      });
      
      // English button
      $("#lang-switch .en").click(function() {
        
        // Enable English
        $('.en_lang').addClass("active-lang");
        
        // Disable French
        $('.fr_lang').removeClass("active-lang")
        
        // Active or remove the opacity on the flags.
        $('#lang-switch .en').addClass("active-flag");
        $('#lang-switch .fr').removeClass("active-flag");
      });
    });
  });

$(function(){ 
    // OPEN-INFOS ////////////////////////
    $(document).ready(function(){
        $('#infos-open').click(function(){
            // openInfos();
            $('body').addClass('info-is-opn');
        });

        $('#infos-close').click(function(){
            // closeInfos();
            $('body').removeClass('info-is-opn');
        });        
    });

});