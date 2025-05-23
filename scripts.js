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
      file: 'https://res.cloudinary.com/dyc6vnymg/video/upload/v1747747409/jules-belvega--stupeur-bleu-2022_lhqmdp.mp4',
      title_en: 'Stupeur bleue',
      title_fr: 'Stupeur bleue',
      material_en: 'marble',
      material_fr: 'marble',
      size: '35x25cm',
      date: '2022'
    },
    {
      type: 'video',
      file: 'https://res.cloudinary.com/dyc6vnymg/video/upload/v1747747408/jules-belvega--stupeur-chair--2022_phd4sv.mp4',
      title_en: 'Stupeur chaire',
      title_fr: 'Stupeur chaire',
      material_en: 'marble',
      material_fr: 'marble',
      size: '',
      date: '2022'
    },

    {
      type: 'video',
      file: 'https://res.cloudinary.com/dyc6vnymg/video/upload/v1747747407/jules-belvega--stupeur-noir--2022_hbq3zt.mp4',
      title_en: 'Stupeur noire',
      title_fr: 'Stupeur noire',
      material_en: 'marble',
      material_fr: 'marble',
      size: '',
      date: '2022'
    },
    {
      type: 'video',
      file: 'https://res.cloudinary.com/dyc6vnymg/video/upload/v1747747411/jules-belvega--stupeur-rouge--2022_dxccgk.mp4',
      title_en: 'Stupeur rouge',
      title_fr: 'Stupeur rouge',
      material_en: 'marble',
      material_fr: 'marble',
      size: '25x25cm',
      date: '2022'
    },
    {
      type: 'image',
      file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749967/jules-belvega--balaguere--2025-2_actzif.jpg',
      title_en: 'Balaguère',
      title_fr: 'Balaguère',
      material_en: '',
      material_fr: '',
      size: '',
      date: '2025'
    },
    {
      type: 'image',
      file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749968/jules-belvega--balaguere--2025-4_xcyijl.jpg',
      title_en: 'La banquise de Notos',
      title_fr: 'La banquise de Notos',
      material_en: '',
      material_fr: '',
      size: '',
      date: '2025'
    },
    {
      type: 'image',
      file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749968/jules-belvega--botch-01-brussels--2023-1_d93eed.jpg',
      title_en: 'Stupeur bleue',
      title_fr: 'Stupeur bleue',
      material_en: 'Botch-1 Brussels',
      material_fr: 'Botch-1 Bruxelles',
      size: '',
      date: '2023'
    },
    {
      type: 'image',
      file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749968/jules-belvega--botch-01-brussels--2023-2_sls4je.jpg',
      title_en: 'Stupeur bleue',
      title_fr: 'Stupeur bleue',
      material_en: 'Botch-1 Brussels',
      material_fr: 'Botch-1 Bruxelles',
      size: '',
      date: '2023'
    },
    {
      type: 'image',
      file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749968/jules-belvega--botch-01-brussels--2023-2_sls4je.jpg',
      title_en: 'Stupeur bleue',
      title_fr: 'Stupeur bleue',
      material_en: 'Botch-1 Brussels',
      material_fr: 'Botch-1 Bruxelles',
      size: '',
      date: '2023'
    },
    {
      type: 'image',
      file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749968/jules-belvega--botch-01-brussels--2023-3_snqp4r.jpg',
      title_en: 'Stupeur bleue',
      title_fr: 'Stupeur bleue',
      material_en: 'Botch-1 Brussels',
      material_fr: 'Botch-1 Bruxelles',
      size: '',
      date: '2023'
    },
    {
      type: 'image',
      file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749968/jules-belvega--botch-01-brussels--2023-4_yefges.jpg',
      title_en: 'Suspiria chaire',
      title_fr: 'Suspiria chaire',
      material_en: 'Botch-1 Brussels',
      material_fr: 'Botch-1 Bruxelles',
      size: '',
      date: '2023'
    },
    {
      type: 'image',
      file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749968/jules-belvega--botch-01-brussels--2023-4_yefges.jpg',
      title_en: 'Stupeur bleue',
      title_fr: 'Stupeur bleue',
      material_en: 'Botch-1 Brussels',
      material_fr: 'Botch-1 Bruxelles',
      size: '',
      date: '2023'
    },
    {
      type: 'image',
      file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749969/jules-belvega--bureau-001--2024-1_rmqfb5.jpg',
      title_en: 'Bureau 001',
      title_fr: 'Bureau 001',
      material_en: '',
      material_fr: '',
      size: '',
      date: '2024'
    },
    {
      type: 'image',
      file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749969/jules-belvega--bureau-001--2024-3_di2edd.jpg',
      title_en: 'Bureau 001',
      title_fr: 'Bureau 001',
      material_en: '',
      material_fr: '',
      size: '',
      date: '2024'
    },
    {
      type: 'image',
      file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749969/jules-belvega--bureau-001--2024-4_kr6mfg.jpg',
      title_en: 'Bureau 001',
      title_fr: 'Bureau 001',
      material_en: '',
      material_fr: '',
      size: '',
      date: '2024'
    },
    {
      type: 'image',
      file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749969/jules-belvega--collectible-brussels--2023-1_e3uts0.jpg',
      title_en: 'Stupeurs',
      title_fr: 'Stupeurs',
      material_en: 'Collectible Brussels',
      material_fr: 'Collectible Bruxelles',
      size: '',
      date: '2023'
    },
    {
      type: 'image',
      file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749970/jules-belvega--collectible-brussels--2023-3_he1bxi.jpg',
      title_en: 'Stupeur noire',
      title_fr: 'Stupeur noire',
      material_en: 'Collectible Brussels',
      material_fr: 'Collectible Bruxelles',
      size: '',
      date: '2023'
    },
    {
      type: 'image',
      file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749970/jules-belvega--collectible-brussels--2023-6_dwtyoe.jpg',
      title_en: 'Stupeurs',
      title_fr: 'Stupeurs',
      material_en: 'Collectible Brussels',
      material_fr: 'Collectible Bruxelles',
      size: '',
      date: '2023'
    },
    {
      type: 'image',
      file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749970/jules-belvega--collectible-brussels--2023-7_cxjsyv.jpg',
      title_en: 'Stupeur chair',
      title_fr: 'Stupeur chair',
      material_en: 'Collectible Brussels',
      material_fr: 'Collectible Bruxelles',
      size: '',
      date: '2023'
    },
    {
      type: 'image',
      file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749972/jules-belvega--darwin-15--2024-2_nfyfqk.jpg',
      title_en: 'Stupeurs',
      title_fr: 'Stupeurs',
      material_en: 'Darwin 15, Brussels',
      material_fr: 'Darwin 15, Bruxelles',
      size: '',
      date: '2024'
    },
    {
      type: 'image',
      file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749972/jules-belvega--darwin-15--2024-2_nfyfqk.jpg',
      title_en: 'Stupeurs',
      title_fr: 'Stupeurs',
      material_en: 'Darwin 15, Brussels',
      material_fr: 'Darwin 15, Bruxelles',
      size: '',
      date: '2024'
    },
    {
      type: 'image',
      file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749972/jules-belvega--darwin-15--2024-2_nfyfqk.jpg',
      title_en: 'Totem vert',
      title_fr: 'Totem vert',
      material_en: 'Darwin 15, Brussels',
      material_fr: 'Darwin 15, Bruxelles',
      size: '',
      date: '2024'
    },
    {
      type: 'image',
      file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749972/jules-belvega--darwin-15--2024-2_nfyfqk.jpg',
      title_en: 'Totem vert',
      title_fr: 'Totem vert',
      material_en: 'Darwin 15, Brussels',
      material_fr: 'Darwin 15, Bruxelles',
      size: '',
      date: '2024'
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
