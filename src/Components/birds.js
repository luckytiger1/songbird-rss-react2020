const birdsData = [
  [
    {
      id: 1,
      name: 'Андский кондор',
      species: 'Vultur gryphus',
      description:
        'А́ндский ко́ндор (лат. Vúltur grýphus) — птица из семейства американских грифов, единственный современный представитель монотипического рода кондоров (Vultur). Распространён в Андах и на тихоокеанском побережье Южной Америки. Считается самой крупной летающей птицей Западного полушария.',
      image: 'https://live.staticflickr.com/4631/38650605540_698b9cef32_b.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/DISAQFOZJP/CONDOR%20Andean_20_CRAR-UNORCH_Santiago_CH_SEP00_Guillermo%20Egli%20%28Egli%202002%29.mp3',
    },
    {
      id: 2,
      name: 'Колибри-пчёлка',
      species: 'Mellisuga helenae',
      description:
        'Колибри-пчёлка (лат. Mellisuga helenae) — самый маленький вид птиц в мире и в семействе колибри. Колибри-пчёлки достигают длины 5,7 см, включая хвост и клюв, и весят 2 г. Они легче, чем отдельно взятое перо страуса. Сердце птицы совершает от 300 до 500 ударов в минуту. ',
      image: 'https://live.staticflickr.com/666/32912633611_a63a7ec549_b.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/VKPKAFSATU/XC410114-180305_05_Bee%20Hummingbird_Background%20Cuban%20Emerald%20American%20Redstart.mp3',
    },
    {
      id: 3,
      name: 'Африканский страус',
      species: 'Struthio camelus',
      description:
        'Африка́нский стра́ус (лат. Struthio camelus) — бескилевая нелетающая птица, единственный современный представитель семейства страусовых (Struthionidae).Африканский страус — самая крупная из современных птиц: высотой до 270 см и массой до 156 кг. Страус имеет плотное телосложение, длинную шею и небольшую уплощённую голову.',
      image: 'https://live.staticflickr.com/65535/48803942053_f4f6e4fcfe_n.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/DNKBTPCMSQ/Ostrich%20RV%202-10.mp3',
    },
    {
      id: 4,
      name: 'Белый аист',
      species: 'Ciconia ciconia',
      description:
        'Белый аист — самый известный из аистов. Это белая птица с чёрными концами крыльев, длинной шеей, длинным, тонким, красным клювом и длинными красноватыми ногами. Когда крылья у аиста сложены, создаётся впечатление, что вся задняя часть тела аиста чёрная. Отсюда его украинское название — черногуз.',
      image: 'https://live.staticflickr.com/8726/28583327440_0af150161a_n.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/XUDFGWMRXG/XC521611-White%20Stork%20Bill%20Clapping_180120_EstanyDivars.825wav.mp3',
    },
    {
      id: 5,
      name: 'Обыкновенный ремез',
      species: 'Remiz pendulinus',
      description:
        'Длина тела ремеза примерно 12 см, вес до 20 г. Длина крыла до 60 мм. В глаза бросается серая голова с чёрной маской и красно-бурая спина. У молодых птиц чёрной маски ещё нет. Ремез отдалённо напоминает по окраске самца обыкновенного жулана. Тонкий свист звучит примерно как «ции-ции».',
      image: 'https://live.staticflickr.com/7877/46614792145_3cff59b4a4_n.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/PNYKOPBQBQ/XC460858-REMPEN230219-T020%20%282%29.mp3',
    },
    {
      id: 6,
      name: 'Деревенская ласточка',
      species: 'Hirundo rustica',
      description:
        'Пение деревенских ласточек напоминает щебет, который заканчивается характерной трелью. Ведут общественный образ жизни, собираясь в большие группы и вместе усаживаясь на провода и другие возвышения. Чаще, чем другие ласточки, садятся на землю.',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Landsvale.jpg/413px-Landsvale.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501623-190616_08.19h_boerenzwaluw_brabantse%20biesbosch%20jantjesplaat_alarmroep_2%20ex_ad%20_ter%20plaatse%20jagend_gezien_.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Райская ворона',
      species: 'Lycocorax pyrrhopterus',
      description:
        'Райская ворона (лат. Lycocorax pyrrhopterus) — вид воробьинообразных птиц из семейства райских птиц (Paradisaeidae), выделяемый в монотипный род райских воро́н (Lycocorax). Длина тела — 42 см. Обитают в Индонезии: в лесах островов Северного Молукку, расположенных между Сулавеси и Новой Гвинеей.',
      image: 'https://live.staticflickr.com/3241/5834245922_cae4bf6313_n.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501623-190616_08.19h_boerenzwaluw_brabantse%20biesbosch%20jantjesplaat_alarmroep_2%20ex_ad%20_ter%20plaatse%20jagend_gezien_.mp3',
    },
    {
      id: 2,
      name: 'Вымпеловая райская птица',
      species: 'Semioptera wallacii',
      description:
        'Размер туловища может достигать 28 сантиметров. Самцы имеют блестящую фиолетово-лиловую спину и изумрудно-зеленую грудь. Наиболее поразительной особенностью вида являются две пары длинных белых перьев, выходящих из изгиба крыла. Самки имеют оливково-коричневую окраску, по размерам мельче самцов, однако их хвост длиннее.',
      image: 'https://live.staticflickr.com/3676/9528093854_3964d5f3e2_n.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/FNIOJOZADD/XC410497-WallacesStandardwing_Hal_070717_display.mp3',
    },
    {
      id: 3,
      name: 'Западная паротия',
      species: 'Parotia sefilata',
      description:
        'Размер туловища может достигать 33 см. Хвост средней длины. Самцы имеют чёрное оперение с радужными золотисто-зеленым пятном на груди и треугольными серебристыми перьями, образующими венчик на шее. Помимо этого над глазами у птиц находятся по три длинных пера с каждой стороны. Самки имеют неяркую коричневую окраску.',
      image: 'https://live.staticflickr.com/65535/49076161268_1395f936e3_n.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/YTUXOCTUEM/XC163274-Parotia_sefilata-FL%20Arfak%204Aug13%208.31am%20LS116254.mp3',
    },
    {
      id: 4,
      name: 'Астрапия',
      species: 'Astrapia mayeri',
      description:
        'Астрапия — птица среднего размера, до 32 см длиной (без учёта хвоста у самцов, длина которого может превышать 1 м). Оперение у самцов оливково-зелёного и бронзового цветов. Два длинных хвостовых пера окрашены в белый цвет. Самка бурого цвета с радужной головой. У самцов длина хвоста в три раза превышает длину его тела.',
      image: 'https://live.staticflickr.com/3723/10417282323_8feeeb2e33_n.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/EHGWCIGILC/XC116116-B14h30m52s19sep2012_ribbontail.mp3',
    },
    {
      id: 5,
      name: 'Нитчатая райская птица',
      species: 'Seleucidis melanoleucus',
      description:
        'Нитчатая райская птица (лат. Seleucidis melanoleucus) — вид воробьинообразных птиц из семейства райских птиц (Paradisaeidae), который выделен в монотипный род нитчатых райских птиц (Seleucidis). Представители вида питаются, в основном, фруктами и членистоногими.Птица обитает в лесах на острове Новая Гвинея, а также на небольшом индонезийском острове Салавати.',
      image: 'https://live.staticflickr.com/3760/10400098126_0c22b80436_n.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/VSXHBVQJDA/XC141153-Selemela_4iv02_704_151B443.mp3',
    },
    {
      id: 6,
      name: 'Королевская райская птица',
      species: 'Cicinnurus regius',
      description:
        'Королевская райская птица (лат. Cicinnurus regius) — вид воробьинообразных птиц из семейства райских птиц (Paradisaeidae). Она обитает на большей части острова Новой Гвинеи, а также на островах Ару; не населяет горы. Длина тела — 16 см.',
      image: 'https://live.staticflickr.com/3481/3778538620_569b9487a7_n.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/EHGWCIGILC/XC498782-King_BOP_M3AK-408_Malagufuk_18thAug19.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Желтолицый мино',
      species: 'Mino dumontii',
      description:
        'Желтолицый мино может достигать длины до 29 см. У него ярко-жёлтые пятна вокруг чёрных глаз, похожие на апельсиновую корку. Оперение большей частью чёрное с металлическим отблеском. Гузка жёлтая, а кроющие хвоста белые. Клюв острый, а ноги оранжевые. Половой диморфизм отсутствует.',
      image: 'https://live.staticflickr.com/8028/7409691090_432c03c9ee_b.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/EHGWCIGILC/XC502874-Myna_Yellow-faced2_M6P-031_Malagufuk_Spot_YF_Myna_Cassowary.mp3',
    },
    {
      id: 2,
      name: 'Лысый скворец',
      species: 'Sarcops calvus',
      description:
        'Длина тела составляет 22 см. На голове обширные пятна оголённой красной кожи вокруг глаз, разделённые узкой полоской коротких перьев, растущих вдоль середины темени.Птицы выводят птенцов в дуплах деревьев, сооружённых в своё время дятлами. Основу рациона составляют плоды.',
      image: 'https://live.staticflickr.com/7335/16424779421_d4e1d61855_c.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/YTUXOCTUEM/Sarcops_calvus_melanonotus_Negros-29Apr10-FRL_PH_R09.0164_0-57_S.mp3',
    },
    {
      id: 3,
      name: 'Священная майна',
      species: 'Gracula religiosa',
      description:
        'Длина тела составляет 29 см. Оперение священной майны чёрное, при соответствующем освещении оно переливается зеленоватым цветом. Самый выделяющийся внешний признак — это жёлтые лоскуты кожи по бокам головы, которые тянутся до затылка. Следующий признак — это жёлтый клюв, которым птица поедает плоды и насекомых.',
      image: 'https://live.staticflickr.com/65535/47982572176_b3188594f2_c.jpg',
      audio:
        'https://upload.wikimedia.org/wikipedia/commons/8/89/Gracula_religiosa.ogg',
    },
    {
      id: 4,
      name: 'Бурая майна',
      species: 'Acridotheres fuscus',
      description:
        'Дятел – заметная и шумная птица, часто живет рядом с человеком. С середины января до конца июня можно услышать «барабанную дробь» дятлов – трель от вибрации веток под быстрыми ударами клюва птицы. В хорошую погоду дробь слышна в радиусе 1,5 км.',
      image: 'https://live.staticflickr.com/65535/49087368697_90c65da054_b.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/EHGWCIGILC/XC368816-jungle-myna-fiji2.mp3',
    },
    {
      id: 5,
      name: 'Розовый скворец',
      species: 'Sturnus roseus',
      description:
        'Небольшая птица длиной 19—22 см, размахом крыльев 12,3—13,9 см и весом 59—90 г, своими сглаженными очертаниями более напоминающее серую ворону, чем обыкновенного скворца. Оперение головы, шеи и верхней части грудки чёрное с фиолетовым металлическим отливом. Маховые перья крыльев первого и второго порядка, а также хвоста чёрно-бурые, с зеленовато-фиолетовым отливом. ',
      image: 'https://live.staticflickr.com/961/41445406244_774a1a02d3_b.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/DZNFYGHXAG/XC484606-Pastor-roseus.mp3',
    },
    {
      id: 6,
      name: 'Спрео Гильдебрандта',
      species: 'Lamprotornis hildebrandti',
      description:
        'Грудь, горло, голова, спина, верхняя сторона крыльев и хвост взрослой птицы тёмно-синего цвета с металлическим блеском. Брюхо и нижняя сторона крыльев коричневатые. Выделяются красные глаза. Клюв и ноги серые. Птица достигает длины примерно 19 см и массы тела 57 г.  Оперение птенцов более бледного цвета, кроме того, отсутствует синяя окраска груди и горла. Глаза тёмно-коричневые.',
      image: 'https://live.staticflickr.com/3859/15148919561_169985e5c4_b.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC510194-LS_58479%20Hildebrandt%27s%20Starling%20calls%20B.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Большой конёк',
      species: 'Anthus antarcticus',
      description:
        'Большой конёк (лат. Anthus antarcticus) — певчая птица из семейства трясогузковых. Эндемик острова Южная Георгия, единственная певчая птица Субантарктики. Гнездо из соломинок устраивает обычно в траве, куда откладывает четыре яйца в год. Питается насекомыми и паукообразными.',
      image: 'https://live.staticflickr.com/1490/25644333963_3e35ef7a9d_b.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/FPAGKPAQYO/XC318729-SouthGeorgia%20Pipit_Salisbury_24dec2015_Fschmitt_6.mp3',
    },
    {
      id: 2,
      name: 'Пегая трясогузка',
      species: 'Motacilla aguimp',
      description:
        'Длина тела 19—20,5 см, длина крыла 84-102 мм, длина хвоста 83-93 мм. Большая часть верхней части тела чёрного цвета, длинная и широкая полумесяцем «бровь», а также подбородок и горло белого цвета. Брюхо и большая часть перьев на крыльях белого цвета.',
      image: 'https://live.staticflickr.com/1946/44810464541_687aa6a296_b.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/GQMCPIVNXX/XC246213-African%20Pied%20Wagtail%20xc.mp3',
    },
    {
      id: 3,
      name: 'Степной конёк',
      species: 'Anthus richardi',
      description:
        'Степной конёк — это самый большой встречающийся в Центральной Европе конёк. Он достигает длины от 17 до 20 см. По сравнению с другими видами у птицы необычно длинные ноги и пальцы, задний коготь также очень длинный и очень прямой. Верхняя часть тела коричневатого цвета с тёмными продольными полосками.',
      image: 'https://live.staticflickr.com/8052/8442095544_f53f1ae3a3_b.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC486325-Pipit%20de%20Richard%20chant.mp3',
    },
    {
      id: 4,
      name: 'Мадагаскарская трясогузка',
      species: 'Motacilla flaviventris',
      description:
        'Мадагаска́рская трясогу́зка (лат. Motacilla flaviventris) — птица семейства трясогузковых, эндемик острова Мадагаскар. Её естественная среда обитания — субтропические или тропические, затопляемые в сезон дождей низовья полей и рек. Песня мелодичная, на русский её можно передать как три-три-о. Мадагаскарская трясогузка поёт как на земле, так и сидя на ветке или в полёте.',
      image: 'https://live.staticflickr.com/65535/48383849332_7031e56452_b.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/VROUALCTKG/XC155201-Madagascar%20Wagtail%20%28song%2C%20Madagascar%2C%20Ranomafana%2C%20nov2012%2C%201%29.MP3',
    },
    {
      id: 5,
      name: 'Лесной конёк',
      species: 'Bombycilla garrulus',
      description:
        'Длина тела до 16 см. Верх буровато-серый, с черновато-бурыми пестринами. Низ светло-охристый. На груди и боках тёмные пестрины, крайние рулевые белые. Ноги телесно-розовые; коготь заднего пальца короткий. Молодые с более чёткими чёрными пестринами верха тела. Позывки «тит-тит», «псиит-псиит».',
      image: 'https://live.staticflickr.com/65535/48146066806_44ce398e8d_c.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/HMJIMVISCP/XC521454-713_0365%20Embalse%20de%20Leiva.MP3',
    },
    {
      id: 6,
      name: 'Длиннохвостая трясогузка',
      species: 'Motacilla clara',
      description:
        'Длиннохвостая трясогузка, также известная как горная трясогузка (Motacilla clara) — птица из семейства трясогузковых. Имеет широкий ареал в Африке, в странах южнее Сахары, таких как Ангола, Ботсвана, Бурунди, Камерун и др.. Селится по берегам бурных лесных потоков в пределах субтропических или тропических сухих лесов и в субтропических или тропических влажных горных лесах.',
      image: 'https://live.staticflickr.com/7333/14070971216_220c4f87b8_b.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/GQMCPIVNXX/XC490811-Mountain%20Wagtail%20%282%29.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Красноголовый трупиал',
      species: 'Amblyramphus holosericeus',
      description:
        'Красноголовые трупиалы обычно живут парами (самец с самкой) и никогда не образуют настоящих стай. Песня самцов этого вида громкая, чистая и мелодичная: звонкое «клиир-клиир-клюр, клюлюлюлю». Голосовые сигналы во многом сходны с песней.',
      image: 'https://live.staticflickr.com/3665/9376419637_b576ed9cb6_b.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/TGBFXDVERJ/XC510627-Amblyramphus%20holocercus_Rio%20Grande_1171.mp3',
    },
    {
      id: 2,
      name: 'Краснобрюхий трупиал',
      species: 'Hypopyrrhus pyrohypogaster',
      description:
        'Длина тела самцов составляет примерно 30 см, самок — около 27 см. Общий окрас оперения чёрный, за исключением ярко-красного живота и подхвостовых перьев. Радужная оболочка глаза жёлтая или белая. Клюв конической, заострённой формы, чёрного цвета. Вокализация представляет собой мелодичные журчащие или хриплые звуки «глок-глок», «шлеее-о», «шлеее».',
      image: 'https://live.staticflickr.com/792/40975970582_627fce9b5b_b.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/VROUALCTKG/XC401502-Red-bellied%20Grackle%20%28song%2C%20Colombia%2C%20La%20Romera%2C%20mar2014%2C%202%29.MP3',
    },
    {
      id: 3,
      name: 'Никарагуанский гракл',
      species: 'Quiscalus nicaraguensis',
      description:
        'Птица средних размеров с длинным хвостом и относительно длинными клювом и ногами. Последние чёрного цвета, глаза же бледно-жёлтые. Длина самцов около 31 см, самок 25 см. Оперение самцов полностью чёрное, глянцевое. Самки коричневые с бледными «бровями» (суперциллумом).',
      image: 'https://live.staticflickr.com/4653/39056639275_2e3fb77129_h.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/VROUALCTKG/XC518330-Nicaraguan%20Grackle%20%28song%2C%20Costa%20Rica%2C%20Cano%20Negro%2C%20feb2019%2C%201%29.mp3',
    },
    {
      id: 4,
      name: 'Ямайский кассик',
      species: 'Nesopsar nigerrimus',
      description:
        'Ямайский кассик — небольшая (около 18 см) птица с коротким хвостом и полностью чёрным оперением. Вид является эндемиком Ямайки, обнаружен лишь в тропических лесах Голубых гор и хребта Джона Кроу. В настоящее время ареал составляет около 1,7 тыс. км², численность оценивается в 2500—10 000 особей.',
      image: 'https://live.staticflickr.com/1451/25845393960_82db2a17f3_b.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/SRRRBQPENI/Jamaican_Blackbird_duets_Hoyer.mp3',
    },
    {
      id: 5,
      name: 'Рисовая птица',
      species: 'Dolichonyx oryzivorus',
      description:
        'Рисовая птица, боболинк, рисовый трупиал или рисовый желтушник — американский вид воробьинообразных птиц из семейства трупиаловых (Icteridae). Большую часть года рисовая птица проводит в центральной части Северной Америки, зимует в центральной части и на крайнем западе Южной Америки. Обитают птицы на пахотных землях, влажных саваннах и в субтропических и тропических засушливые открытых низменных пространствах. Длина тела птиц ~18 см, вес — ~34 грамма.',
      image: 'https://live.staticflickr.com/65535/47980638931_d8d4bf0a45_b.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/BZQDDJCYTA/XC433094-Bobolink%20PRNWR%2006-25-18.mp3',
    },
    {
      id: 6,
      name: 'Красноглазый коровий трупиал',
      species: 'Molothrus aeneus',
      description:
        'Размер взрослого самца составляет 20 см в длину; вес — 68 грамм. Оперение чёрное с зеленовато-бронзовым оттенком по краю крыльев и на хвосте. Глаза красные. Размер самки составляет 18,5 см в длину; вес 56 грамм. Оперение самок чёрное сверху, коричневатое внизу. Молодые птицы похожи на самок, но имеют серый полосы в оперении.',
      image: 'https://live.staticflickr.com/65535/49417899093_506a392e3d_b.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/KZYUWIRZVH/XC440554-COWBIRD_Bronzed_c_f_rattle%20Cieneguilla%20400m%20051418%200623.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Желтоносый короткоклювый дрозд',
      species: 'Catharus aurantiirostris',
      description:
        'Простое пение птицы состоит из неразборчивого щебетания. Иногда эти дрозды издают громкие крики «во-а-а». Гнездятся на небольшой высоте в зарослях; гнездо имеет вид чаши. Кладка состоит из двух яиц светло-голубого цвета с бурыми пятнами.',
      image: 'https://live.staticflickr.com/7038/26844068872_4d2538a043_b.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/HFCIIGEMNS/XC517827-LS111903_TSF11_30-03-2019_0042_Orange-billed%20nightingale%20thrush.mp3',
    },
    {
      id: 2,
      name: 'Голубая сиалия',
      species: 'Sialia currucoides',
      description:
        'Голубая сиалия длиной 18 см. Клюв тонкий, крылья длинные, заострённые. Оперение самца голубого цвета, брюхо белое. Самка окрашена в серый цвет с голубыми участками на крыльях, хвосте, теле, брюхо белого цвета.Птица живёт летом на альпийских лугах и в горных ландшафтах на высоте свыше 1500 м на западе Северной Америки, мигрируя зимой на низменность или в Мексику.',
      image: 'https://live.staticflickr.com/65535/48100192331_e618808214_n.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/CDTGHVBGZP/MOBL2007-7-2-1.mp3',
    },
    {
      id: 3,
      name: 'Эфиопский дрозд',
      species: 'Turdus abyssinicus',
      description:
        'Эфиопский дрозд — вид воробьиных птиц из семейства дроздовых (Turdidae). В 2010 выделен в отдельный вид из капского дрозда (Turdus olivaceus) из-за обнаруженных генетических различий. Их ареалы не накладываются один на другой. Северная и южная популяция может представлять собой отдельные виды.',
      image: 'https://live.staticflickr.com/8080/8257588488_bab6d03875_b.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/QUBGGKWQNN/XC399239-LS112992_OliveThrush_AberdaresCountryClub_22Oct17_0845.mp3',
    },
    {
      id: 4,
      name: 'Рябинник',
      species: 'Turdus pilaris',
      description:
        'Рябинник отличается от остальных дроздов прежде всего образом жизни. Хотя некоторые пары и гнездятся изолированно, большинство их собирается в средние по численности колонии, насчитывающие 30-40 пар. Они любят селиться в парковых насаждениях и в перелесках, по опушкам лесов, поближе к влажным лугам. В глухих лесах рябинник не встречается.',
      image: 'https://live.staticflickr.com/65535/48835718532_919356cff4_b.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/RVVFWWDBAJ/XC519948-Bj%C3%B6rktrast-s%C3%A5ng-Alme%C3%B6kanalen%2C%20Hornborgasj%C3%B6n%20Vg-1969-06-11.mp3',
    },
    {
      id: 5,
      name: 'Странствующий дрозд',
      species: 'Turdus migratorius',
      description:
        'Небольшая певчая птица длиной 20—28 см, размахом крыльев 31—40 см и весом около 77 г. Телосложение скорее плотное, по форме несколько напоминает рябинника (Turdus pilaris). Оперение головы, крыльев и верхней части туловища и хвоста тёмно-серое либо чёрное. Грудка и брюхо оранжево-красные, контрастно выделяются по сравнению с тёмным верхом. Горло белое, с многочисленными чёрными пятнышками. Подхвостье и нижние кроющие перья хвоста грязно-белого цвета. ',
      image: 'https://live.staticflickr.com/1950/43689026730_6d979d2349_h.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/GVVNEJJEGA/XC524658-AMRO_LEGO_2019-05-03_Willamette_Bluff_North_Portland_OR_1439.mp3',
    },
    {
      id: 6,
      name: 'Одноцветный дрозд',
      species: 'Turdus unicolor',
      description:
        'По размерам одноцветный дрозд близок к дрозду-белобровику, общая длина тела составляет около 22 см, из которых чуть больше трети приходится на хвост. Длина крыла 12 см. Окрас тела у самцов в основном голубовато-серый, нижняя часть тела более светлая, ноги светло-коричневые.',
      image: 'https://live.staticflickr.com/607/31286043254_5c0276f04a_c.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC473114-LS102041%20Tickell%27s%20Thrush%20Q%20song%20A.mp3',
    },
  ],
];

export default birdsData;
