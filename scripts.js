// RAMDOM VIDEO ////////////////////////
let lastMediaIndex = -1 // mémorise l'index de la dernière vidéo jouée

function buildLine (...fields) {
  const filtered = fields.filter(f => f && f.trim() !== '')
  if (filtered.length === 0) return ''
  return ', ' + filtered.join(', ')
}

function changeMedia () {
  const media = [
    {
      type: 'video',
      file: 'https://res.cloudinary.com/dyc6vnymg/video/upload/v1747747408/jules-belvega--stupeur-chair--2022_phd4sv.mp4',
      title_en: 'Stupeur bleue',
      title_fr: 'Stupeur bleue',
      material_en: 'marble',
      material_fr: 'marble',
      size: '35x25cm',
      date: '2023'
    },
    {
      type: 'video',
      file: 'https://res.cloudinary.com/dyc6vnymg/video/upload/v1747747407/jules-belvega--stupeur-noir--2022_hbq3zt.mp4',
      title_en: 'Stupeur rouge',
      title_fr: 'Stupeur rouge',
      material_en: 'marble',
      material_fr: 'marble',
      size: '25x25cm',
      date: '2023'
    },
    {
      type: 'image',
      file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749986/jules-belvega--the-machiavellian-eye--2024-4_evrchw.jpg',
      title_en: 'Balaguere',
      title_fr: 'Balaguere',
      material_en: 'marble',
      material_fr: 'marble',
      size: '',
      date: '2023'
    },
    {
      type: 'image',
      file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749990/jules-belvega--totem-vert--2023-1_ou5nkd.jpg',
      title_en: 'La banquise de Notos',
      title_fr: 'La banquise de Notos',
      material_en: 'marble',
      material_fr: 'marble',
      size: '',
      date: '2023'
    },
    {
      type: 'image',
      file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749992/jules-belvega--wait-here-brussels--2024-3_cseka2.jpg',
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
    `<span class="title">${randomMedia.title_en}</span>${buildLine(
      randomMedia.material_en,
      randomMedia.size,
      randomMedia.date
    )}`
  )
  $('.caption > h3.fr_lang').html(
    `<span class="title">${randomMedia.title_fr}</span>${buildLine(
      randomMedia.material_fr,
      randomMedia.size,
      randomMedia.date
    )}`
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
