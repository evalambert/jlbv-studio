// RAMDOM VIDEO ////////////////////////
let lastVideoIndex = -1 // mémorise l'index de la dernière vidéo jouée

function changeVideo () {
  const videos = [
    {
      file: 'jules-bouchier-vegis-stupeur-1.mp4',
      title_en: 'Stupeur bleue',
      title_fr: 'Stupeur bleue',
      size: '35x25cm'
    },
    {
      file: 'jules-bouchier-vegis-stupeur-2.mp4',
      title_en: 'Stupeur Chair',
      title_fr: 'Chaise Stupeur',
      size: '50x17cm'
    },
    {
      file: 'jules-bouchier-vegis-stupeur-3.mp4',
      title_en: 'Stupeur Noire',
      title_fr: 'Stupeur Noire',
      size: '30x20cm'
    },
    {
      file: 'jules-bouchier-vegis-stupeur-4.mp4',
      title_en: 'Stupeur rouge',
      title_fr: 'Stupeur rouge',
      size: '25x25cm'
    }
  ]

  let randomIndex
  do {
    randomIndex = Math.floor(Math.random() * videos.length)
  } while (randomIndex === lastVideoIndex)

  lastVideoIndex = randomIndex

  const randomVideo = videos[randomIndex]
  const target = document.getElementById('target')
  target.src = randomVideo.file

  const videoElem = document.querySelector('video')
  videoElem.load()
  videoElem.play()

  $('.caption > h3.en_lang').html(
    `<span class="title">${randomVideo.title_en}</span>, marble, ${randomVideo.size}, 2023`
  )
  $('.caption > h3.fr_lang').html(
    `<span class="title">${randomVideo.title_fr}</span>, marbre, ${randomVideo.size}, 2023`
  )
}

document.addEventListener('DOMContentLoaded', () => {
  changeVideo()

  $('.wrapper-contact').click(() => {
    changeVideo()
  })
})

//// LANG SWITCH ////////////////////////
$(document).ready(function () {
  // By default
  $('.en_lang').addClass('active-lang')
  $('#lang-switch .en').addClass('active-flag')

  // Function switch
  $(function () {
    // French button
    $('#lang-switch .fr').click(function () {
      // Enable French
      $('.fr_lang').addClass('active-lang')

      // Disable English
      $('.en_lang').removeClass('active-lang')

      // Active or remove the opacity on the flags.
      $('#lang-switch .fr').addClass('active-flag')
      $('#lang-switch .en').removeClass('active-flag')
    })

    // English button
    $('#lang-switch .en').click(function () {
      // Enable English
      $('.en_lang').addClass('active-lang')

      // Disable French
      $('.fr_lang').removeClass('active-lang')

      // Active or remove the opacity on the flags.
      $('#lang-switch .en').addClass('active-flag')
      $('#lang-switch .fr').removeClass('active-flag')
    })
  })
})

$(function () {
  // OPEN-INFOS ////////////////////////
  $(document).ready(function () {
    $('#infos-open').click(function () {
      // openInfos();
      $('body').addClass('info-is-opn')
    })

    $('#infos-close').click(function () {
      // closeInfos();
      $('body').removeClass('info-is-opn')
    })
  })
})
