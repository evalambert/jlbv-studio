// RAMDOM VIDEO ////////////////////////
let lastMediaIndex = -1 // mémorise l'index de la dernière vidéo jouée

function changeMedia () {
  const media = [
    {
      type: 'video',
      file: 'jules-bouchier-vegis-stupeur-1.mp4',
      title_en: 'Stupeur bleue',
      title_fr: 'Stupeur bleue',
      material_en: 'marble',
      material_fr: 'marble',
      size: '35x25cm',
      date: '2023'
    },
    {
      type: 'video',
      file: 'jules-bouchier-vegis-stupeur-2.mp4',
      title_en: 'Stupeur Chair',
      title_fr: 'Chaise Stupeur',
      material_en: 'marble',
      material_fr: 'marble',
      size: '50x17cm',
      date: '2023'
    },
    {
      type: 'video',
      file: 'jules-bouchier-vegis-stupeur-3.mp4',
      title_en: 'Stupeur Noire',
      title_fr: 'Stupeur Noire',
      material_en: 'marble',
      material_fr: 'marble',
      size: '30x20cm',
      date: '2023'
    },
    {
      type: 'video',
      file: 'jules-bouchier-vegis-stupeur-4.mp4',
      title_en: 'Stupeur rouge',
      title_fr: 'Stupeur rouge',
      material_en: 'marble',
      material_fr: 'marble',
      size: '25x25cm',
      date: '2023'
    },
    {
      type: 'image',
      file: 'jules-bouchier-vegis--balaguere--1.jpg',
      title_en: 'Balaguere',
      title_fr: 'Balaguere',
      material_en: 'marble',
      material_fr: 'marble',
      size: '',
      date: '2023'
    },
    {
      type: 'image',
      file: 'jules-bouchier-vegis--bureau-01--1.jpg',
      title_en: 'Bureau-01',
      title_fr: 'Desk-01',
      material_en: 'marble',
      material_fr: 'marble',
      size: '',
      date: '2023'
    },
    {
      type: 'image',
      file: 'jules-bouchier-vegis--bureau-01--2.jpg',
      title_en: 'Bureau-01',
      title_fr: 'Desk-01',
      material_en: 'marble',
      material_fr: 'marble',
      size: '',
      date: '2023'
    },
    {
      type: 'image',
      file: 'jules-bouchier-vegis--extravaganza-suspiria-1.png',
      title_en: 'Extravagenza Suspiria',
      title_fr: 'Extravagenza Suspiria',
      material_en: 'marble',
      material_fr: 'marble',
      size: '',
      date: '2023'
    },
    {
      type: 'image',
      file: 'jules-bouchier-vegis--extravaganza-suspiria-2.png',
      title_en: 'Extravagenza Suspiria',
      title_fr: 'Extravagenza Suspiria',
      material_en: 'marble',
      material_fr: 'marble',
      size: '',
      date: '2023'
    },
    {
      type: 'image',
      file: 'jules-bouchier-vegis--extravaganza-suspiria-3.jpg',
      title_en: 'Extravagenza Suspiria',
      title_fr: 'Extravagenza Suspiria',
      material_en: 'marble',
      material_fr: 'marble',
      size: '',
      date: '2023'
    },
    {
      type: 'image',
      file: 'jules-bouchier-vegis--la-banquise-de-notos--1.jpg',
      title_en: 'La banquise de Notos',
      title_fr: 'La banquise de Notos',
      material_en: 'marble',
      material_fr: 'marble',
      size: '',
      date: '2023'
    },
    {
      type: 'image',
      file: 'jules-bouchier-vegis--la-banquise-de-notos--2.jpg',
      title_en: 'La banquise de Notos',
      title_fr: 'La banquise de Notos',
      material_en: 'marble',
      material_fr: 'marble',
      size: '',
      date: '2023'
    },
    {
      type: 'image',
      file: 'jules-bouchier-vegis--la-banquise-de-notos--3.jpg',
      title_en: 'La banquise de Notos',
      title_fr: 'La banquise de Notos',
      material_en: 'marble',
      material_fr: 'marble',
      size: '',
      date: '2023'
    }
  ]

  let randomIndex
  do {
    randomIndex = Math.floor(Math.random() * media.length)
  } while (randomIndex === lastMediaIndex)

  lastMediaIndex = randomIndex

  const randomMedia = media[randomIndex]

  const videoElem = document.querySelector('video')
  const imageElem = document.getElementById('media-image')

  if (randomMedia.type === 'video') {
    imageElem.style.display = 'none'
    videoElem.style.display = 'block'
    const target = document.getElementById('target')
    target.src = randomMedia.file
    videoElem.load()
    videoElem.play()
  } else {
    videoElem.style.display = 'none'
    imageElem.style.display = 'block'
    imageElem.src = randomMedia.file
  }

  // Update captions
  $('.caption > h3.en_lang').html(
    `<span class="title">${randomMedia.title_en}</span>, marble, ${randomMedia.size}, 2023`
  )
  $('.caption > h3.fr_lang').html(
    `<span class="title">${randomMedia.title_fr}</span>, marbre, ${randomMedia.size}, 2023`
  )
}

document.addEventListener('DOMContentLoaded', () => {
  changeMedia()

  $('.wrapper-contact').click(() => {
    changeMedia()
  })
})

// LANG SWITCH
$(document).ready(function () {
  $('.en_lang').addClass('active-lang')
  $('#lang-switch .en').addClass('active-flag')

  $('#lang-switch .fr').click(function () {
    $('.fr_lang').addClass('active-lang')
    $('.en_lang').removeClass('active-lang')
    $('#lang-switch .fr').addClass('active-flag')
    $('#lang-switch .en').removeClass('active-flag')
  })

  $('#lang-switch .en').click(function () {
    $('.en_lang').addClass('active-lang')
    $('.fr_lang').removeClass('active-lang')
    $('#lang-switch .en').addClass('active-flag')
    $('#lang-switch .fr').removeClass('active-flag')
  })

  // OPEN-INFOS
  $('#infos-open').click(function () {
    $('body').addClass('info-is-opn')
  })
  $('#infos-close').click(function () {
    $('body').removeClass('info-is-opn')
  })
})
