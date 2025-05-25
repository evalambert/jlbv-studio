// LISTE DES MÉDIAS //////////////////////
const media = [
  {
    type: 'video',
    file: 'https://res.cloudinary.com/dyc6vnymg/video/upload/v1747747409/jules-belvega--stupeur-bleu-2022_lhqmdp.mp4',
    title_en: 'Stupeur bleue',
    title_fr: 'Stupeur bleue',
    material_en: 'marble 35x25cm',
    material_fr: 'marbre 35x25cm',
    size: '',
    date: '2022'
  },
  {
    type: 'video',
    file: 'https://res.cloudinary.com/dyc6vnymg/video/upload/v1747747408/jules-belvega--stupeur-chair--2022_phd4sv.mp4',
    title_en: 'Stupeur chair',
    title_fr: 'Stupeur chair',
    material_en: 'marble 50x17cm',
    material_fr: 'marbre 50x17cm',
    size: '',
    date: '2022'
  },
  {
    type: 'video',
    file: 'https://res.cloudinary.com/dyc6vnymg/video/upload/v1747747407/jules-belvega--stupeur-noir--2022_hbq3zt.mp4',
    title_en: 'Stupeur noire',
    title_fr: 'Stupeur noire',
    material_en: 'marble 30x20cm',
    material_fr: 'marbre 30x20cm',
    size: '',
    date: '2022'
  },
  {
    type: 'video',
    file: 'https://res.cloudinary.com/dyc6vnymg/video/upload/v1747747411/jules-belvega--stupeur-rouge--2022_dxccgk.mp4',
    title_en: 'Stupeur rouge',
    title_fr: 'Stupeur rouge',
    material_en: 'marble 25x25cm',
    material_fr: 'marbre 25x25cm',
    size: '',
    date: '2022'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747754981/jules-belvega--balaguere--2025-2_h6lq0w.jpg',
    title_en: 'Balaguère',
    title_fr: 'Balaguère',
    material_en: '',
    material_fr: '',
    size: '110x55x43cm',
    date: '2025'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749968/jules-belvega--balaguere--2025-4_xcyijl.jpg',
    title_en: 'Balaguère',
    title_fr: 'Balaguère',
    material_en: '',
    material_fr: '',
    size: '',
    date: '2025'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749968/jules-belvega--botch-01-brussels--2023-2_sls4je.jpg',
    title_en: 'Suspiria Chair x Belalbatros',
    title_fr: 'Chaise Suspiria x Belalbatros',
    material_en: 'Botch-1, Brussels',
    material_fr: 'Botch-1, Bruxelles',
    size: '60x50x80cm',
    date: '2023'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749968/jules-belvega--botch-01-brussels--2023-3_snqp4r.jpg',
    title_en: 'Botch-1',
    title_fr: 'Botch-1',
    material_en: 'Brussels',
    material_fr: 'Bruxelles',
    size: '',
    date: '2023'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749968/jules-belvega--botch-01-brussels--2023-4_yefges.jpg',
    title_en: 'Suspiria Chair',
    title_fr: 'Chaise Suspiria',
    material_en: 'Botch-1, Brussels',
    material_fr: 'Botch-1, Bruxelles',
    size: '60x50x80cm',
    date: '2023'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749969/jules-belvega--bureau-001--2024-1_rmqfb5.jpg',
    title_en: 'Cœur sanglant',
    title_fr: 'Cœur sanglant',
    material_en: '',
    material_fr: '',
    size: '130x75x70cm',
    date: '2024'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1748194248/jules-belvega--bureau-001--2024-5_qpzzco.jpg',
    title_en: 'Cœur sanglant',
    title_fr: 'Cœur sanglant',
    material_en: '',
    material_fr: '',
    size: '',
    date: '2024'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749969/jules-belvega--bureau-001--2024-3_di2edd.jpg',
    title_en: 'Cœur sanglant',
    title_fr: 'Cœur sanglant',
    material_en: '',
    material_fr: '',
    size: '',
    date: '2024'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749969/jules-belvega--bureau-001--2024-4_kr6mfg.jpg',
    title_en: 'Cœur sanglant',
    title_fr: 'Cœur sanglant',
    material_en: '',
    material_fr: '',
    size: '',
    date: '2024'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749970/jules-belvega--collectible-brussels--2023-6_dwtyoe.jpg',
    title_en: 'Stupeurs sculptures',
    title_fr: 'Stupeurs sculptures',
    material_en: 'Collectible Fair Brussels',
    material_fr: 'Collectible Fair Bruxelles',
    size: '',
    date: '2023'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749970/jules-belvega--collectible-brussels--2023-7_cxjsyv.jpg',
    title_en: 'Stupeur chair',
    title_fr: 'Stupeur chair',
    material_en: 'Collectible Fair Brussels',
    material_fr: 'Collectible Fair Bruxelles',
    size: '',
    date: '2023'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749972/jules-belvega--darwin-15--2024-2_nfyfqk.jpg',
    title_en: 'Stupeurs sculptures',
    title_fr: 'Stupeurs sculptures',
    material_en: 'Darwin 15 Brussels',
    material_fr: 'Darwin 15 Bruxelles',
    size: '',
    date: '2024'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749972/jules-belvega--darwin-15--2024-3_erhapp.jpg',
    title_en: 'Stupeurs sculptures',
    title_fr: 'Stupeurs sculptures',
    material_en: 'Darwin 15 Brussels',
    material_fr: 'Darwin 15 Bruxelles',
    size: '',
    date: '2024'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749972/jules-belvega--darwin-15--2024-4_ea3iey.jpg',
    title_en: 'Stupeur bleue',
    title_fr: 'Stupeur bleue',
    material_en: 'Darwin 15 Brussels',
    material_fr: 'Darwin 15 Bruxelles',
    size: '',
    date: '2024'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749971/jules-belvega--darwin-15--2024-6_u66gzf.jpg',
    title_en: 'Totem vert',
    title_fr: 'Totem vert',
    material_en: 'Darwin 15 Brussels',
    material_fr: 'Darwin 15 Bruxelles',
    size: '',
    date: '2024'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749971/jules-belvega--darwin-15--2024-7_zsgmc4.jpg',
    title_en: 'Suspiria Corner Shelf',
    title_en: 'Suspiria étagère d’angle',
    material_en: 'Darwin 15 Brussels',
    material_fr: 'Darwin 15 Bruxelles',
    size: '60x45x43cm',
    date: '2024'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1748195696/jules-belvega--darwin-15--2024-8_tsti3w.jpg',
    title_en: 'Suspiria Corner Shelf',
    title_en: 'Suspiria étagère d’angle',
    material_en: 'Darwin 15 Brussels',
    material_fr: 'Darwin 15 Bruxelles',
    size: '',
    date: '2024'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749974/jules-belvega--extravaganza-suspiria--2024-10_ebenqo.jpg',
    title_en: 'Extravaganza Suspiria CH02',
    title_fr: 'Extravaganza Suspiria CH02',
    material_en: 'La maison de la chapelle',
    material_fr: 'La maison de la chapelle',
    size: '',
    date: '2024'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749975/jules-belvega--extravaganza-suspiria--2024-11_qld4ke.jpg',
    title_en: 'Extravaganza Suspiria',
    title_fr: 'Extravaganza Suspiria',
    material_en: 'La maison de la chapelle',
    material_fr: 'La maison de la chapelle',
    size: '',
    date: '2024'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749975/jules-belvega--extravaganza-suspiria--2024-12_icmcbv.jpg',
    title_en: 'Extravaganza Suspiria',
    title_fr: 'Extravaganza Suspiria',
    material_en: 'La maison de la chapelle',
    material_fr: 'La maison de la chapelle',
    size: '',
    date: '2024'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749973/jules-belvega--extravaganza-suspiria--2024-1_waxuh7.jpg',
    title_en: 'Extravaganza Suspiria',
    title_fr: 'Extravaganza Suspiria',
    material_en: 'La maison de la chapelle',
    material_fr: 'La maison de la chapelle',
    size: '',
    date: '2024'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1748195514/jules-belvega--extravaganza-suspiria--2024-13_lbb38s.jpg',
    title_en: 'Extravaganza Suspiria Bench',
    title_fr: 'Extravaganza Suspiria Bench',
    material_en: 'La maison de la chapelle',
    material_fr: 'La maison de la chapelle',
    size: '',
    date: '2024'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749972/jules-belvega--extravaganza-suspiria--2024-2_zxfjzp.jpg',
    title_en: 'Extravaganza Suspiria Bench',
    title_fr: 'Extravaganza Suspiria Bench',
    material_en: 'La maison de la chapelle',
    material_fr: 'La maison de la chapelle',
    size: '228x40x44cm',
    date: '2024'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749974/jules-belvega--extravaganza-suspiria--2024-3_nzmhpp.jpg',
    title_en: 'Extravaganza Suspiria Bench',
    title_fr: 'Extravaganza Suspiria Bench',
    material_en: 'La maison de la chapelle',
    material_fr: 'La maison de la chapelle',
    size: '',
    date: '2024'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749973/jules-belvega--extravaganza-suspiria--2024-5_fggbia.jpg',
    title_en: 'Extravaganza Suspiria CH01',
    title_fr: 'Extravaganza Suspiria CH01',
    material_en: 'La maison de la chapelle',
    material_fr: 'La maison de la chapelle',
    size: '52x56x89cm',
    date: '2024'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749975/jules-belvega--extravaganza-suspiria--2024-6_nxk57z.jpg',
    title_en: 'Extravaganza Suspiria CH01',
    title_fr: 'Extravaganza Suspiria CH01',
    material_en: 'La maison de la chapelle',
    material_fr: 'La maison de la chapelle',
    size: '',
    date: '2024'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749974/jules-belvega--extravaganza-suspiria--2024-8_tdrvvq.jpg',
    title_en: 'Extravaganza Suspiria CH02',
    title_fr: 'Extravaganza Suspiria CH02',
    material_en: 'La maison de la chapelle',
    material_fr: 'La maison de la chapelle',
    size: '',
    date: '2024'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749980/jules-belvega--extravaganza-suspiria--2024-9_y5rt1l.jpg',
    title_en: 'Extravaganza Suspiria CH02',
    title_fr: 'Extravaganza Suspiria CH02',
    material_en: 'La maison de la chapelle',
    material_fr: 'La maison de la chapelle',
    size: '52x56x89cm',
    date: '2024'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749980/jules-belvega--la-banquise-de-notos--2025-10_mcihst.jpg',
    title_en: 'La banquise de Notos',
    title_fr: 'La banquise de Notos',
    material_en: '',
    material_fr: '',
    size: '',
    date: '2025'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749975/jules-belvega--la-banquise-de-notos--2025-1_nsxxmg.jpg',
    title_en: 'La banquise de Notos',
    title_fr: 'La banquise de Notos',
    material_en: '',
    material_fr: '',
    size: '',
    date: '2025'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749977/jules-belvega--la-banquise-de-notos--2025-2_ywijqp.jpg',
    title_en: 'La banquise de Notos',
    title_fr: 'La banquise de Notos',
    material_en: '',
    material_fr: '',
    size: '',
    date: '2025'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749976/jules-belvega--la-banquise-de-notos--2025-3_wfkhbs.jpg',
    title_en: 'La banquise de Notos',
    title_fr: 'La banquise de Notos',
    material_en: '',
    material_fr: '',
    size: '',
    date: '2025'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749978/jules-belvega--la-banquise-de-notos--2025-4_z33lqy.jpg',
    title_en: 'La banquise de Notos',
    title_fr: 'La banquise de Notos',
    material_en: '',
    material_fr: '',
    size: '',
    date: '2025'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749980/jules-belvega--la-banquise-de-notos--2025-5_t2nf2q.jpg',
    title_en: 'La banquise de Notos',
    title_fr: 'La banquise de Notos',
    material_en: '',
    material_fr: '',
    size: '420x80x65cm',
    date: '2025'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749982/jules-belvega--la-banquise-de-notos--2025-6_zhvoxn.jpg',
    title_en: 'La banquise de Notos',
    title_fr: 'La banquise de Notos',
    material_en: '',
    material_fr: '',
    size: '',
    date: '2025'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749978/jules-belvega--la-banquise-de-notos--2025-7_iehfzf.jpg',
    title_en: 'La banquise de Notos',
    title_fr: 'La banquise de Notos',
    material_en: '',
    material_fr: '',
    size: '',
    date: '2025'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749979/jules-belvega--la-banquise-de-notos--2025-8_zyb6u8.jpg',
    title_en: 'La banquise de Notos',
    title_fr: 'La banquise de Notos',
    material_en: '',
    material_fr: '',
    size: '',
    date: '2025'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749979/jules-belvega--la-banquise-de-notos--2025-9_paz0et.jpg',
    title_en: 'La banquise de Notos',
    title_fr: 'La banquise de Notos',
    material_en: '',
    material_fr: '',
    size: '',
    date: '2025'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749980/jules-belvega--porte-des-abysses--2025-1_mojcde.jpg',
    title_en: 'La porte des abysses',
    title_fr: 'La porte des abysses',
    material_en: '',
    material_fr: '',
    size: '160x110x80cm',
    date: '2025'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749981/jules-belvega--porte-des-abysses--2025-3_hooyy7.jpg',
    title_en: 'La porte des abysses',
    title_fr: 'La porte des abysses',
    material_en: '',
    material_fr: '',
    size: '',
    date: '2025'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749981/jules-belvega--porte-des-abysses--2025-2_v3tc2y.jpg',
    title_en: 'La porte des abysses',
    title_fr: 'La porte des abysses',
    material_en: 'Studio 1935',
    material_fr: 'Studio 1935',
    size: '',
    date: '2025'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749981/jules-belvega--suspiria-chair--mix-fox-brussels--2023-1_ru9s5t.jpg',
    title_en: 'Suspiria Chair',
    title_fr: 'Chaise Suspiria',
    material_en: 'Fox Mix Brussels',
    material_fr: 'Fox Mix Bruxelles',
    size: '',
    date: '2023'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749983/jules-belvega--suspiria-chair--mix-fox-brussels--2023-3_pohuqs.jpg',
    title_en: 'Suspiria Chair',
    title_fr: 'Chaise Suspiria',
    material_en: 'Fox Mix Brussels',
    material_fr: 'Fox Mix Bruxelles',
    size: '',
    date: '2023'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749983/jules-belvega--suspiria-chair--mix-fox-brussels--2023-4_uxnkpe.jpg',
    title_en: 'Suspiria Chair',
    title_fr: 'Chaise Suspiria',
    material_en: 'Fox Mix Brussels',
    material_fr: 'Fox Mix Bruxelles',
    size: '',
    date: '2023'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749984/jules-belvega--suspiria-chair--mix-fox-brussels--2023-5_hmmske.jpg',
    title_en: 'Suspiria Chair',
    title_fr: 'Chaise Suspiria',
    material_en: 'Fox Mix Brussels',
    material_fr: 'Fox Mix Bruxelles',
    size: '',
    date: '2023'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749983/jules-belvega--suspiria-chair--mix-fox-brussels--2023-6_gzfvzw.jpg',
    title_en: 'Suspiria Chair',
    title_fr: 'Chaise Suspiria',
    material_en: 'Fox, Mix Brussels',
    material_fr: 'Fox, Mix Bruxelles',
    size: '',
    date: '2023'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749984/jules-belvega--suspiria-stool--2024-1_lxn3xp.jpg',
    title_en: 'Suspiria Stool',
    title_fr: 'Tabouret Suspiria',
    material_en: '',
    material_fr: '',
    size: '',
    date: '2024'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749984/jules-belvega--suspiria-stool--2024-5_vh2cos.jpg',
    title_en: 'Suspiria Stool',
    title_fr: 'Tabouret Suspiria',
    material_en: '',
    material_fr: '',
    size: '',
    date: '2024'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749984/jules-belvega--suspiria-stool--2024-4_kl8ziq.jpg',
    title_en: 'Suspiria Stool',
    title_fr: 'Tabouret Suspiria',
    material_en: '',
    material_fr: '',
    size: '35x35x43cm',
    date: '2024'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749986/jules-belvega--suspiria-stool--2024-2_kh39nw.jpg',
    title_en: 'Suspiria Stool',
    title_fr: 'Tabouret Suspiria',
    material_en: '',
    material_fr: '',
    size: '',
    date: '2024'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749984/jules-belvega--suspiria-stool--2024-3_nbicsb.jpg',
    title_en: 'Suspiria Stool',
    title_fr: 'Tabouret Suspiria',
    material_en: '',
    material_fr: '',
    size: '',
    date: '2024'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749986/jules-belvega--suspiria-wip--2023-1_q16dqs.jpg',
    title_en: 'Suspiria Chair',
    title_fr: 'Chaise Suspiria',
    material_en: '',
    material_fr: '',
    size: '',
    date: '2023'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749991/jules-belvega--the-machiavellian-eye--2024-12_khtpsc.jpg',
    title_en: 'The Machiavellian Eye',
    title_fr: 'The Machiavellian Eye',
    material_en: '',
    material_fr: '',
    size: '',
    date: '2025'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749990/jules-belvega--the-machiavellian-eye--2024-13_rgn5vn.jpg',
    title_en: 'The Machiavellian Eye',
    title_fr: 'The Machiavellian Eye',
    material_en: '',
    material_fr: '',
    size: '',
    date: '2025'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749990/jules-belvega--the-machiavellian-eye--2024-14_cy3shp.jpg',
    title_en: 'The Machiavellian Eye',
    title_fr: 'The Machiavellian Eye',
    material_en: '',
    material_fr: '',
    size: '',
    date: '2025'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749985/jules-belvega--the-machiavellian-eye--2024-1_akt4m0.jpg',
    title_en: 'The Machiavellian Eye',
    title_fr: 'The Machiavellian Eye',
    material_en: '',
    material_fr: '',
    size: '',
    date: '2025'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749986/jules-belvega--the-machiavellian-eye--2024-2_tlh0wr.jpg',
    title_en: 'The Machiavellian Eye',
    title_fr: 'The Machiavellian Eye',
    material_en: '',
    material_fr: '',
    size: '',
    date: '2025'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749987/jules-belvega--the-machiavellian-eye--2024-3_wnba93.jpg',
    title_en: 'The Machiavellian Eye',
    title_fr: 'The Machiavellian Eye',
    material_en: '',
    material_fr: '',
    size: '',
    date: '2025'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749986/jules-belvega--the-machiavellian-eye--2024-4_evrchw.jpg',
    title_en: 'The Machiavellian Eye',
    title_fr: 'The Machiavellian Eye',
    material_en: '',
    material_fr: '',
    size: '',
    date: '2025'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749987/jules-belvega--the-machiavellian-eye--2024-5_cviguf.jpg',
    title_en: 'The Machiavellian Eye',
    title_fr: 'The Machiavellian Eye',
    material_en: '',
    size: '',
    date: '2025'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749986/jules-belvega--the-machiavellian-eye--2024-4_evrchw.jpg',
    title_en: 'The Machiavellian Eye',
    title_fr: 'The Machiavellian Eye',
    material_en: '',
    material_fr: '',
    size: '',
    date: '2025'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749988/jules-belvega--the-machiavellian-eye--2024-7_bctubr.jpg',
    title_en: 'The Machiavellian Eye',
    title_fr: 'The Machiavellian Eye',
    material_en: '',
    material_fr: '',
    size: '',
    date: '2025'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749988/jules-belvega--the-machiavellian-eye--2024-8_l8r2ou.jpg',
    title_en: 'The Machiavellian Eye',
    title_fr: 'The Machiavellian Eye',
    material_en: '',
    material_fr: '',
    size: '150x110x90cm',
    date: '2025'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749989/jules-belvega--the-machiavellian-eye--2024-9_se00le.jpg',
    title_en: 'The Machiavellian Eye',
    title_fr: 'The Machiavellian Eye',
    material_en: '',
    material_fr: '',
    size: '',
    date: '2025'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749992/jules-belvega--totem-vert--2023-11_xerzgx.jpg',
    title_en: 'Totem vert',
    title_fr: 'Totem vert',
    material_en: '',
    material_fr: '',
    size: '70x35x30cm',
    date: '2023'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749991/jules-belvega--totem-vert--2023-2_l8p10x.jpg',
    title_en: 'Totem vert',
    title_fr: 'Totem vert',
    material_en: '',
    material_fr: '',
    size: '',
    date: '2023'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749991/jules-belvega--totem-vert--2023-5_zbqoij.jpg',
    title_en: 'Totem vert',
    title_fr: 'Totem vert',
    material_en: '',
    material_fr: '',
    size: '',
    date: '2023'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749993/jules-belvega--totem-vert--2023-7_anulaf.jpg',
    title_en: 'Totem vert',
    title_fr: 'Totem vert',
    material_en: '',
    material_fr: '',
    size: '',
    date: '2023'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749992/jules-belvega--wait-here-brussels--2024-1_jna0u2.jpg',
    title_en: 'Suspiria Stool',
    title_fr: 'Chaise Suspiria',
    material_en: 'Wait Here Brussels',
    material_fr: 'Wait Here Bruxelles',
    size: '',
    date: '2024'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749994/jules-belvega--wait-here-brussels--2024-2_xfa9wl.jpg',
    title_en: 'Fleur de lave',
    title_fr: 'Fleur de lave',
    material_en: 'Wait Here Brussels',
    material_fr: 'Wait Here Bruxelles',
    size: '',
    date: '2024'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749992/jules-belvega--wait-here-brussels--2024-3_cseka2.jpg',
    title_en: 'Suspiria Chair',
    title_fr: 'Chaise Suspiria',
    material_en: 'Wait Here Brussels',
    material_fr: 'Wait Here Bruxelles',
    size: '60x50x80cm',
    date: '2024'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749993/jules-belvega--wait-here-brussels--2024-4_vdrgae.jpg',
    title_en: 'Fleur de lave',
    title_fr: 'Fleur de lave',
    material_en: 'Wait Here Brussels',
    material_fr: 'Wait Here Bruxelles',
    size: '52x27x22cm',
    date: '2024'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749993/jules-belvega--wait-here-brussels--2024-5_evlggt.jpg',
    title_en: 'Suspiria Chair x Belalbatros',
    title_fr: 'Chaise Suspiria x Belalbatros',
    material_en: 'Wait Here, Brussels',
    material_fr: 'Wait Here, Bruxelles',
    size: '60x50x80cm',
    date: '2024'
  },
  {
    type: 'image',
    file: 'https://res.cloudinary.com/dyc6vnymg/image/upload/v1747749994/jules-belvega--wait-here-brussels--2024-6_eyd8x3.jpg',
    title_en: 'Wait Here',
    title_fr: 'Wait Here',
    material_en: 'Brussels',
    material_fr: 'Bruxelles',
    size: '',
    date: '2024'
  }
]

// VARIABLES POUR LE SYSTÈME DE BOUCLE ALÉATOIRE
let shuffledMedia = []
let currentIndex = 0

function shuffleArray (array) {
  const copy = [...array]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

function buildLine (...fields) {
  const filtered = fields.filter(f => f && f.trim() !== '')
  if (filtered.length === 0) return ''
  return ', ' + filtered.join(', ')
}

function changeMedia () {
  if (shuffledMedia.length === 0 || currentIndex >= shuffledMedia.length) {
    shuffledMedia = shuffleArray(media)
    currentIndex = 0
  }

  const currentMedia = shuffledMedia[currentIndex]
  currentIndex++

  const videoElem = document.querySelector('video')
  const imageElem = document.getElementById('media-image')

  if (currentMedia.type === 'video') {
    imageElem.style.display = 'none'
    videoElem.style.display = 'block'
    const target = document.getElementById('target')
    target.src = currentMedia.file
    videoElem.load()
    videoElem.play()
  } else {
    videoElem.style.display = 'none'
    imageElem.style.display = 'block'
    imageElem.src = currentMedia.file
  }

  $('.caption > .legende.en_lang').html(
    `<p><strong>${currentMedia.title_en}</strong>${buildLine(
      currentMedia.material_en,
      currentMedia.size,
      currentMedia.date
    )}</p>`
  )
  $('.caption > .legende.fr_lang').html(
    `<p><strong>${currentMedia.title_fr}</strong>${buildLine(
      currentMedia.material_fr,
      currentMedia.size,
      currentMedia.date
    )}</p>`
  )
}

// INITIALISATION
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

  $('#infos-open').click(function () {
    $('body').addClass('info-is-opn')
  })

  $('#infos-close').click(function () {
    $('body').removeClass('info-is-opn')
  })
})
