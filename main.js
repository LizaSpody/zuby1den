// new WOW().init();

const arr_doctors = [
    {name: "Стецюк Владимир Олегович", teamFilter: "oh", dataCity: "krasnodar", city: "Краснодар", job: "Главный врач сети стоматологических клиник <br> «Зубы за 1 день»", img: "https://zubyza1den.com/wp-content/themes/zzd/img/doctors/Stetsyuk-Vladimir-Olegovich-stomatolog-1.png", link: " https://zubyza1den.com/doktor/stecjuk-vladimir-olegovich/" },
    {name: "Шмурун Александр Рудольфович", teamFilter: "h", dataCity: "peterburg", city: "Санкт-Петербург", job: "Главный врач более 20 лет ", img: "https://zubyza1den.com/wp-content/themes/zzd/img/doctors/shmurun.png", link: " https://zubyza1den.com/doktor/shmurun-aleksandr-rudolfovich/" },
    {name: "Эркенов Бинегер Муратович", teamFilter: "h", dataCity: "krasnodar", city: "Краснодар", job: "Практикующий врач стоматолог-хирург-имплантолог с 2012 года", img: "https://zubyza1den.com/wp-content/themes/zzd/img/doctors/ermakov.png", link: " https://zubyza1den.com/doktor/jerkenov-bineger-muratovich/" },
    {name: "Баныкин Максим Валерьевич", teamFilter: "h", dataCity: "sochi", city: "Сочи", job: "Практикующий врач стоматолог-хирург- имплантолог с 2002 года", img: "https://zubyza1den.com/wp-content/themes/zzd/img/doctors/banikin.png", link: " https://zubyza1den.com/doktor/banykin-maksim-valerevich/" },
    {name: "Овчаров Михаил Николаевич", teamFilter: "o", dataCity: "sochi", city: "Сочи", job: "Врач-стоматолог-ортопед,<br> стаж с 2015 года", img: "https://zubyza1den.com/wp-content/themes/zzd/img/doctors/ovchkov.png", link: " https://zubyza1den.com/doktor/ovcharov-mihail-nikolaevich/" },
    {name: "Ахтаев Муслим Мусаевич", teamFilter: "", dataCity: "krasnodar", city: "Краснодар", job: "Cтоматолог-гигиенист, ассистент АО4, стаж с 2012 года", img: "https://zubyza1den.com/wp-content/themes/zzd/img/doctors/IMG_7787.png", link: " https://zubyza1den.com/doktor/ahtaev-muslim-musaevich/" },
    {name: "Славинский Антон Юрьевич", teamFilter: "", dataCity: "krasnodar", city: "Краснодар", job: "Врач-стоматолог общей практики, ассистент АО4,<br> стаж с 2014 года", img: "https://zubyza1den.com/wp-content/themes/zzd/img/doctors/slavinsliy.png", link: " https://zubyza1den.com/doktor/slavinskij-anton-jurevich/" },
    {name: "Друшляков Дмитрий Сергеевич", teamFilter: "o", dataCity: "krasnodar", city: "Краснодар", job: "Врач стоматолог-ортопед, <br> стаж работы с 2014 года", img: "https://zubyza1den.com/wp-content/themes/zzd/img/doctors/drushlykov.png", link: " https://zubyza1den.com/doktor/drushljakov-dmitrij-sergeevich/" },
    {name: "Медведкова Мария Александровна", teamFilter: "o", dataCity: "krasnodar", city: "Краснодар", job: "Врач стоматолог-ортопед, <br> стаж с 2014 года", img: "https://zubyza1den.com/wp-content/themes/zzd/img/doctors/medvedkova.png", link: " https://zubyza1den.com/doktor/medvedkova-marija-aleksandrovna/" },
    {name: "Мамий Байзет Капланович", teamFilter: "", dataCity: "krasnodar", city: "Краснодар", job: "Зубной техник по технологии<br> All-on-4, стаж с 2005 года", img: "https://zubyza1den.com/wp-content/themes/zzd/img/doctors/mamii.png", link: " https://zubyza1den.com/doktor/mamij-bajzet-kaplanovich/" },
    {name: "Демиров Денис Динчерович", teamFilter: "h", dataCity: "rostov", city: "Ростов-на-дону", job: "Врач стоматолог-ортопед-хирург, <br>стаж с 2013 года", img: "https://zubyza1den.com/wp-content/themes/zzd/img/doctors/demirow.png", link: " https://zubyza1den.com/doktor/demirov-denis-dincherovich/" },
    //{name: "Мишина Анастаия Андреевна", teamFilter: "o", dataCity: "peterburg", city: "Санкт-Петербург", job: "Врач-стоматолог-терапевт <br>стаж с 2011 года", img: "https://zubyza1den.com/wp-content/themes/zzd/img/doctors/misheva.png", link: " https://zubyza1den.com/doktor/mishina-anastaija-andreevna/" },
    {name: "Хомиченко Юлия Николаевна", teamFilter: "o", dataCity: "krasnodar", city: "Краснодар", job: "Врач-стоматолог-ортопед <br> стаж с 2003 года", img: "https://zubyza1den.com/wp-content/uploads/2019/12/IMG_0384-3.png", link: " https://zubyza1den.com/doktor/homichenko-julija-nikolaevna/" },
    {name: "Пименов Кирилл Павлович", teamFilter: "h", dataCity: "peterburg", city: "Санкт-Петербург", job: "Практикующий врач стоматолог-хирург, имплантолог с 2016 года", img: "https://zubyza1den.com/wp-content/themes/zzd/img/doctors/pim1.png", link: " https://zubyza1den.com/doktor/pimenov-kirill-pavlovich/" },
    {name: "Тищенко Игорь Владимирович", teamFilter: "o", dataCity: "peterburg", city: "Санкт-Петербург", job: "Врач стоматолог-ортопед, <br>cтаж с 2002 года", img: "https://zubyza1den.com/wp-content/themes/zzd/img/doctors/tishchenko.png", link: " https://zubyza1den.com/doktor/tishhenko-igor-vladimirovich/" },
    {name: "Лисовая Наталья Николаевна", teamFilter: "h", dataCity: "peterburg", city: "Санкт-Петербург", job: "Врач стоматолог-ортопед, <br> стаж с 2002 года", img: "https://zubyza1den.com/wp-content/themes/zzd/img/doctors/lisovay.png", link: " https://zubyza1den.com/doktor/lisovaja-natalja-nikolaevna/" },
    {name: "Мирбакиев Дильмурат Рахманович", teamFilter: "h", dataCity: "peterburg", city: "Санкт-Петербург", job: "Врач стоматолог-ортопед-хирург-имплантолог, <br> стаж с 2011 года", img: "https://zubyza1den.com/wp-content/themes/zzd/img/doctors/mirbaliev.png", link: " https://zubyza1den.com/doktor/mirbakiev-dilmurat-rahmanovich/" },
    {name: "Шмурун Дмитрий Александрович", teamFilter: "o", dataCity: "peterburg", city: "Санкт-Петербург", job: "Врач стоматолог-ортопед,<br> стаж с 2011 года", img: "https://zubyza1den.com/wp-content/themes/zzd/img/doctors/smutunsmall.png", link: " https://zubyza1den.com/doktor/shmurun-dmitrij-aleksandrovich/" }
];

const answerContent = [
    {filterAnswer: 'metod', number: '1', question: 'Как давно All-on-4 используют в протезировании?', answer: 'Методику All-on-4 разработали 20 лет назад в Швейцарии. Наша сеть клиник внедрила инновацию в 2013 году. В 2018 году несъемное протезирование отметило первый «юбилей» - 5 лет в России. Кроме того, на базе сети «Зубы за один день» мы обучаем докторов работе с технологией All-on-4.'},
    {filterAnswer: 'metod', number: '2', question: 'Сколько этапов в All-on-4?', answer: 'Быстрее, чем при обычной имплантации. Мы делаем санацию всей полости рта, удаляем оставшиеся зубы не подлежащие лечению. Затем устанавливаем имплантаты, снимаем слепки. После изготавливаем конструкцию из прочных материалов на титановой основе. А всего через 8 часов (на следующий день) устанавливаем несъемный протез пациенту.'},
    {filterAnswer: 'metod', number: '3', question: 'С какого возраста возможно использовать имплантацию как лечение?', answer: 'С 18 лет минимально, лучше с 21 года. '},
    {filterAnswer: 'metod', number: '4', question: 'До какого возраста можно устанавливать несъемный протез?', answer: 'Не стоит опираться на возраст. Скорее, возможность установки зависит от состояния здоровья. Самому взрослому пациенту в нашей сети было 96 лет.'},
    {filterAnswer: 'metod', number: '5', question: 'Правда, что за сутки возвращаете зубы?', answer: 'Да, это так. 24 часа - одно из главных преимуществ All-on-4 перед остальными методиками. '},
    {filterAnswer: 'metod', number: '6', question: 'В чем отличие All-on-4 от такой же системы, но с большим количеством имплантатов?', answer: 'Разница заключается в количестве имплантатов: 4 или 6. От них зависит длина протеза, возможность замены одного материала на другой. Количество имплантатов также зависит от кости в полости рта и ее объема. Классическая система имплантации дольше и включает в себя до трёх хирургических вмешательств, когда в All-on-4 только один этап хирургии.'},
    {filterAnswer: 'using', number: '1', question: 'Какие отличия между Nobel Biocare (Швейцария) и Cortex (Израиль)?', answer: 'Швейцарские имплантаты Nobel Biocare — это премиальный сегмент с запатентованной технологией производства. Приживаемость — 99%, срок остеоинтеграции сокращается в 2 раза. На Nobel Biocare распространяется пожизненная гарантия, сертификация и паспорт на каждый имплантат. Nobel Biocare изобрела имплантацию в середине 20 века и считается лучшим в мире решением при любом методе имплантации. У Cortex гарантия эксплуатации 45 лет. К тому же, Cortex достаточно молодой производитель со своим видом имплантатов и рядом патентов. Он дешевле — да, но вопрос качества находится на первом месте. У этого производителя есть свои уникальные наработки в части конического соединения имплантатов.'},
    {filterAnswer: 'using', number: '2',question: 'Какой процент приживаемости опоры от швейцарской компании Nobel Biocare?', answer: 'За счет того, что нагрузка равномерно распределяется на имплантатах Nobel Biocare, степень их остеоинтеграции (приживления) возрастает вплоть до 99%.'},
    {filterAnswer: 'using', number: '3',question: 'Как быть, если имплантат расшатался?', answer: 'Нужно обратиться к доктору за консультацией для оценки положения имплантатов. Он порекомендует вариант решения вопроса.'},
    {filterAnswer: 'using', number: '4',question: 'Сколько по времени составляет гарантия на имплантат, протез?', answer: 'На имплантаты от Nobel Biocare и Cortex распространяется пожизненная гарантия. Протез, при соблюдении правил эксплуатации, может прослужить, также, пожизненно. '},
    {filterAnswer: 'using', number: '5',question: 'Какие лекарства нужно пить при установке имплантатов?', answer: 'Противовоспалительные препараты назначаются за день до установки имплантатов. Затем, к ним добавляют трёхдневный курс антибиотиков. В течение трех дней после хирургии можно принимать обезболивающие.'},
    {filterAnswer: 'using', number: '6',question: 'Как влияют курение и алкоголь на приживляемость имплантатов?', answer: 'Конечно, лучше  всего отказаться от алкоголя. Его нельзя употреблять во время курса приема антибиотиков, а также после установки. При установке протеза нельзя сидеть на диете, в рационе должны быть только необходимые питательные элементы. В отдельных случаях курение намного сильнее влияет на возвращение зубов, повышая риск отторжения имплантатов. Для пациента вредная привычка может стать причиной отказа при работе с All-on-4. В первые 3 месяца после установки несъемного протеза мы рекомендуем вообще отказаться от сигарет. '},
    {filterAnswer: 'operation', number: '1', question: 'Какие анализы необходимо сдать?', answer: 'Базовых анализов несколько. Это общий анализ крови, уровень глюкозы, наличие или отсутствие инфекционных заболеваний. Остальное рекомендует специалист на приеме. '},
    {filterAnswer: 'operation', number: '2', question: 'Какой снимок нужен на первый прием врача?', answer: 'Нам необходим панорамный снимок для оценки возможности лечения и 3D снимок на этапе планирования операции непосредственно. У нас в каждом филиале стоят современные аппараты 3D снимков, которые сразу дают информацию о возможности лечения и позволяют его спланировать с максимальной точностью.'},
    {filterAnswer: 'operation', number: '3', question: 'А если я делаю снимок в другой клинике, как его принести?', answer: 'Снимок нужно записать на диск. 3D снимок лучше сделать в одном из филиалов нашей сети. Это облегчает работу по выбору и формированию виртуальной картинки будущего зубного ряда.'},
    {filterAnswer: 'operation', number: '4', question: 'Почему нужно делать объемную КТ, а не 2D снимок?', answer: 'Имплантат - это объемная структура, врачу нужно трехмерное изображение состояния костной ткани. Так лучше спланировать установку имплантатов, определить их параметры.'},
    {filterAnswer: 'operation', number: '5', question: 'Я долго буду без зубов?', answer: 'В 99% случаев пациент всего ночь будет находиться без зубов. Уже утром Вы вернетесь к доктору для установки несъемного протеза.'},
    {filterAnswer: 'operation', number: '6', question: 'Вы применяете лазер, который останавливает кровь после вживления имплантатов?', answer: 'Да, применяем.'},
    {filterAnswer: 'operation', number: '7', question: 'Делают ли ваши доктора шинирование зубов при пародонтите?', answer: 'Да, нужна консультация специалиста.'},
    {filterAnswer: 'operation', number: '8', question: 'Планирую установить коронки из сплавов. Можно?', answer: 'Да, мы подберем план лечения для пациента.'},
    {filterAnswer: 'operation', number: '9', question: 'Ношу брекеты, нужно консультироваться с ортодонтом?', answer: 'Это ортодонтическое лечение, мы не проводим имплантации на здоровых зубах и категорически против таких методов исправления ситуации. Лучше исправить прикус и зубы ортодонтическим лечением.'},
    {filterAnswer: 'protovopokazania', number: '1', question: 'Можно ли применять несъемное протезирование, если у меня гепатит С?', answer: 'Да. Это не причина для отказа в работе, но требуется дополнительная подготовка операционной и последующая её трёхэтапная очистка.'},
    {filterAnswer: 'protovopokazania', number: '2', question: 'А если пациент пережил инфаркт или инсульт?', answer: 'Да, спустя минимум полгода и после контрольной консультации с лечащим врачом.'},
    {filterAnswer: 'protovopokazania', number: '3', question: 'А если в анамнезе болезни с иммунными заболеваниями?', answer: 'В основном, это прямое противопоказание, но необходимо смотреть индивидуальные показания здоровья с лечащим врачом.'},
    {filterAnswer: 'protovopokazania', number: '4', question: 'Можно ли вернуть зубы, если есть сахарный диабет?', answer: 'Да. Сахар должен быть до уровня в 10 единиц. Инсулинозависимым – прямое противопоказание.'},
    {filterAnswer: 'protovopokazania', number: '5', question: 'Можно устанавливать несъемный протез, если проблемы с костями? ',  answer: 'Нужен эндокринолог для итогового решения. При остеопорозе можно, если не принимаются бисфосфонаты.'},
    {filterAnswer: 'day', number: '1', question: 'Процедуру восстановления зубов по методике All-on-4 проводят под наркозом?',  answer: 'Для установки имплантатов мы рекомендуем местную анестезию, этого будет достаточно пациенту. Также, возможно использование седативных средств. Они не относятся к наркозу, все проходит достаточно легко для пациентов.'},
    {filterAnswer: 'day', number: '2', question: 'Могу ли вставить зубы сразу на обеих челюстях?',  answer: 'Да, если отсутствуют индивидуальные противопоказания.'},
    {filterAnswer: 'day', number: '3', question: 'Какие материалы используются для протезов?',  answer: 'Мы выливаем протез из полимеров на титановой основе, он укреплен и максимально надежен. Через 6 месяцев возможно улучшение протеза, более современными материалами: безметалловая керамика, E-max, цирконий.'},
    {filterAnswer: 'day', number: '4', question: 'Из чего сделан материал для основы протеза? Он прочный? ',  answer: 'Основа - каркас из титана такого же класса, как и имплантат, который покрывается прочным материалом из композита. Его прочности вполне достаточно для ежедневного пользования в течение долгого времени, чтобы прижились имплантаты.'},
    {filterAnswer: 'after', number: '1', question: 'Как часто нужно посещать врача после операции?',  answer: 'Пациент должен посещать доктора в течение полугода после операции по установке несъемного протеза, примерно 1 раз в 2 месяца. Затем период осмотров можно сократить до одного раза в год.'},
    {filterAnswer: 'after', number: '2', question: 'Когда необходима коррекция протеза?',  answer: 'При установке доктор сразу корректирует протез. Если позднее пациент чувствует дискомфорт, на следующем приеме имплантолог «поправляет» конструкцию абсолютно бесплатно. И так в течение всего срока гарантии.'},
    {filterAnswer: 'after', number: '3', question: 'Какие правила ухода надо соблюдать?',  answer: 'Все то же самое, что и при уходе за родными зубами. Чистка, базовая гигиена, мы рекомендуем приобрести ирригатор.'},
    {filterAnswer: 'after', number: '4', question: 'Как быстро можно есть твердые продукты после операции?',  answer: 'Пациенту первые 6 месяцев назначается лояльный режим питания - диета с мягкими блюдами, пюре и т.д. Спустя время можно вернуться в привычный ритм. Ограничения сначала необходимы, чтобы имплантаты полноценно интегрировались в челюсти.'},
    {filterAnswer: 'after', number: '5', question: 'Может ли еда попасть под протез All-on-4?',  answer: 'Она может оказаться как в протезе, так и в межзубных промежутках родных зубов. Мы усаживаем конструкцию без зазоров, поэтому нужно будет постараться оставить кусочки еды под протезом. Если чувствуете дискомфорт, полощите рот и используйте зубную щётку для тщательной чистки.'},
    {filterAnswer: 'notAsk', number: '1', question: 'Можно ли вернуть зубы, если в анамнезе сахарный диабет? ',  answer: 'Да. Сахар должен быть до уровня в 10 единиц.'},
    {filterAnswer: 'notAsk', number: '2', question: 'Если есть проблемы с костями, можно применять ваше протезирование?',  answer: 'Нужен эндокринолог для итогового решения. При остеопорозе можно.'},
    {filterAnswer: 'notAsk', number: '3', question: 'Почему может увеличиться цена на лечение?',  answer: 'Цена может увеличиться из-за удаления оставшихся единиц, особенностей диагностики при наследственных заболеваниях и т.д. Все это рассказывает доктор на первичном приеме. '},
    {filterAnswer: 'qualities', number: '1', question: 'Могу использовать полисы ДМС или ОМС?',  answer: 'Нет, по таким полисам мы не производим лечение. '},
    {filterAnswer: 'qualities', number: '2', question: 'Планирую установить коронки из сплавов. Можно?',  answer: 'Да, мы подберем план лечения для пациента.'},
    {filterAnswer: 'qualities', number: '3', question: 'Ношу брекеты, нужно консультироваться с ортодонтом?',  answer: 'Конечно, необходимо вместе с лечащим доктором спланировать лечение.'},
    {filterAnswer: 'qualities', number: '4', question: 'Вы применяете лазер, который останавливает кровь после вживления имплантов?',  answer: 'Да, применяем.'},
    {filterAnswer: 'qualities', number: '5', question: 'Шинирование зубов при пародонтите делаете?',  answer: 'Да, нужна консультация специалиста. '},
    {filterAnswer: 'qualities', number: '6', question: 'Оформляете справку для вычета в налоговую службу? ',  answer: 'Да'},
    {filterAnswer: 'garantiy', number: '1', question: 'Со скольких лет можно использовать имплантацию?',  answer: 'С момента совершеннолетия.'},
  {filterAnswer: 'garantiy', number: '2', question: 'Какая гарантия на лечение по All-on-4?',  answer: 'Гарантия на импланты пожизненная! На первичный протез от 6 месяцев. На улучшенный протез, через 6 месяцев от 5 лет.'}
]


const commit1 = [
    {img1: "after1.jpg", img3: "before1.jpg"},
    {img1: "fc2.jpeg", img3: "fc2-2.jpeg"},
  {img1: "photo_2019-12-17_19-52-48.jpg", img3: "IMG_20191012_181856.jpg"}

];
const result = [
    {before: 'before2.jpeg', after: 'after2.jpeg'},
    {before: 'before4.jpeg', after: 'after4.jpeg'},
    {before: 'before1.jpeg', after: 'after1.jpeg'},
    {before: 'before3.jpeg', after: 'after3.jpeg'},
    {before: 'before5.jpeg', after: 'after5.jpeg'}
];
const youtube = [
    {id: "6EPQSpDzn2c"},
    {id: "awsipUPn2dI"},
    {id: "d6SLf5kxiVc"},
    {id: "dw1Yy0Cs9Ug"},
    {id: "g-AvVm2EOEw"},
    {id: "JR58zAVt5nw"},
    {id: "KHxB5RJURN8"},
    {id: "lygOna5lBvA"},
    {id: "MPKjoViR_xU"},
    {id: "obPWyILiw6c"},
    {id: "Op_QggjeblA"},
    {id: "RuEZ18QDxZc"},
    {id: "RUkp6rfzv1E"},
    {id: "vtpJIfx8-l4"},
    {id: "W1sR8D9th_I"},
    {id: "1oDEecRJr_Y"},
    {id: "1zSXkaBidHA"},
    {id: "03XUER4-blk"},
    {id: "6R5vUrhkG0Y"},
    {id: "DFIzQ6kc6uA"},
    {id: "e_hyPWV45jU"},
    {id: "EpZfbVr4PpQ"},
    {id: "fiHxGdk1o18"},
    {id: "iriFJUFj4Vc"},
    {id: "i-Rv3-LXZTc"},
    {id: "jH4qggL8AkU"},
    {id: "JSpqKHQxjW8"},
    {id: "KIvh_njL8Vg"},
    {id: "kpDquHmoD9Y"},
    {id: "NsYngdGCMdk"},
    {id: "ofTMDzaPrvo"},
    {id: "OG4jVfCqjHE"},
    {id: "otrjZV-PcZ0"},
    {id: "p932b-_Ju4M"},
    {id: "PT4gQN6eX_A"},
    {id: "pVDIzD6T6jU"},
    {id: "S-_Vk72Dus8"},
    {id: "VJd9c0ge0v4"},
    {id: "vUCxaHuxrFw"},
    {id: "WaJTh-5SibY"},
    {id: "ZaZM0UseaZo"}
]

// let footer_humburger = document.querySelector('.humburger_footer');
// let menu_footer = document.querySelector('.navigation_footer');
// let active_menu_footer = false;
// footer_humburger.addEventListener('click', ()=>{
//     active_menu_footer = !active_menu_footer;
//     if(active_menu_footer === true){
//         menu_footer.style.height = 336 + 'px';
//     }
//     else{
//         menu_footer.style.height = 0;
//     }
// })

let header_humburger = document.querySelector('.humburger_header');
let menu_header = document.querySelector('.navigation_header');
let info_header = document.querySelector('.header-info');
let active_menu_header = false;
header_humburger.addEventListener('click', ()=>{
    active_menu_header = !active_menu_header;
    if(active_menu_header === true){
        menu_header.style.height = 336 + 'px';
        info_header.style.height = 166 + 'px';
    }
    else{
        menu_header.style.height = 0;
        info_header.style.height = 0;
    }
})

let button_call_header = document.querySelector('.feadback-block-button');
if(button_call_header !== null){
    let container_form = document.querySelector('.feadback-block');
    let close_form = document.querySelector('.close-form');
    button_call_header.addEventListener('click', ()=>{
        container_form.style.marginTop = '-200px'
    })
    close_form.addEventListener('click', ()=>{
        container_form.style.marginTop = '0px'
    })
}

let overlay = document.querySelector('.overlay');
let overlay_close = document.querySelector('.overlay-close-img');
document.body.addEventListener("click", function(event) {
    if (event.target.classList.contains('overlay-on')){
        overlay.classList.add('active')
    }
});
overlay_close.addEventListener("click", function(event) {
        overlay.classList.remove('active')
});

const row_doctors = document.querySelector('.row-doctors');
if(row_doctors !==null){
    const doctor_prev = row_doctors.querySelector('.prev-doctors');
    const doctor_next = row_doctors.querySelector('.next-doctors');
    let doctor_item = row_doctors.querySelector('.doctors-container');
    doctor_item.innerHTML = `${arr_doctors.map(doctor => `
            <div class="doctor-item active-doctor " data-City="${doctor.dataCity}">
                        <img src="${doctor.img}" alt="" class="background-doctor">
                        <div class="hover-doctor-info">
                            <h3>${ doctor.name }</h3>
                            <span>${ doctor.job }</span>
                            <a href="${ doctor.link }">Подробнее</a>
                        </div>
                    </div>

        `).join('') }`;
    let doctorElements = doctor_item.querySelectorAll('.doctor-item');
    let filter_doctors = document.querySelector('.selected-city');
    let width_doctor = 270;
    let selectItem = filter_doctors.querySelector('.city-active');
    let selectValue = filter_doctors.querySelector('.city-active-span');
    let selectValueImg = filter_doctors.querySelector('.city-active-img');
    let listCity = filter_doctors.querySelector('.city-list');
    let position_doctor = 0;
    filter_doctors.addEventListener('click', function () {
        let valueAttribute = '';
        if(event.target.hasAttribute('data-CityItem')){
            valueAttribute = event.target.textContent;
            selectValue.innerHTML = valueAttribute;
            listCity.style.height = 0 + 'px';
            selectValueImg.style.transform = 'rotate(90deg)';
        }
        for(let i = 0; i<doctorElements.length; i++){
           if(doctorElements[i].getAttribute('data-City') === event.target.getAttribute('data-CityItem')){
               doctorElements[i].classList.remove('remove-doctor');
               doctorElements[i].classList.add('active-doctor');
               doctor_prev.style.opacity = '0.3';
               doctor_next.style.opacity = '1';
               doctor_item.style.marginLeft = 0 + 'px';
               position_doctor = 0;
           }
           else if(event.target.getAttribute('data-CityItem') === 'all'){
               doctorElements[i].classList.remove('remove-doctor');
               doctorElements[i].classList.add('active-doctor');
               doctor_item.style.marginLeft = 0 + 'px';
               doctor_prev.style.opacity = '0.3';
               doctor_next.style.opacity = '1';
               position_doctor = 0;
           }
           else if(event.target.hasAttribute('data-CityItem')){
               doctorElements[i].classList.remove('active-doctor');
               doctorElements[i].classList.add('remove-doctor');
           }

        }
    });
    selectItem.addEventListener('click', function () {
        if(listCity.style.height != '0px'){
            listCity.style.height = 0 ;
            selectValueImg.style.transform = 'rotate(90deg)';
        }
        else{
            listCity.style.height = 220 + 'px';
            selectValueImg.style.transform = 'rotate(-90deg)';
        }
    })
    let count_doctor;
    if(window.innerWidth < 767){
        count_doctor = 1;
    }
    else if(window.innerWidth >= 767 && window.innerWidth < 992){
        count_doctor = 2;
    }else if(window.innerWidth >= 992 && window.innerWidth < 1280){
        count_doctor = 3;
    }
    else{
        count_doctor = 4;
    }

    doctor_next.addEventListener('click', function () {
        let list = row_doctors.querySelectorAll('.active-doctor');
        position_doctor = Math.max(-(list.length - count_doctor) * width_doctor, position_doctor - width_doctor * count_doctor);
        doctor_item.style.marginLeft = position_doctor + 'px';
        if (position_doctor === (-(list.length - count_doctor) * width_doctor)) {
            doctor_next.style.opacity = '0.3'
        }
        if (position_doctor < 0) {
            doctor_prev.style.opacity = '1'
        }
    });
    doctor_prev.addEventListener('click', function () {
        let list = row_doctors.querySelectorAll('.active-doctor');
        position_doctor = Math.min(0, position_doctor + width_doctor*count_doctor);
        doctor_item.style.marginLeft = position_doctor + 'px';
        if (position_doctor > (-(list.length - count_doctor) * width_doctor)) {
            doctor_next.style.opacity = '1'
        }
        if (position_doctor === 0) {
            doctor_prev.style.opacity = '0.3'
        }
    })
}



const four_video_list = document.querySelector('.four-video-list');
if(four_video_list !== null){
    const youtube_next = four_video_list.querySelector('.click_youtube');
    const youtube_prev = four_video_list.querySelector('.prev_youtube');
    const video_item = four_video_list.querySelector('.four-list-container');
    video_item.innerHTML = `${youtube.map(video => `
            <div class="four-video">
                            <img id="${ video.id }" src="https://zubyza1den.com/wp-content/themes/zzd//img/video-pic/${ video.id }.jpeg" alt="">
                        </div>

        `).join('') }`;
    let position_video = 0;
    let count_video;
    if(window.innerWidth < 480){
        count_video = 1;
    }
    else if(window.innerWidth > 480 && window.innerWidth < 767){
        count_video = 1;
    }
    else{
        count_video = 3;
    }
    console.log(count_video)
    const height_video = parseInt(getComputedStyle(four_video_list.querySelector('.four-video')).height)+20;

    youtube_next.addEventListener('click', function () {
        const list = video_item.querySelectorAll('.four-video');
        position_video = Math.max( (-(list.length - count_video) * height_video), position_video - count_video*height_video);
        video_item.style.marginTop = position_video + 'px';
        if (position_video === (-(list.length - count_video) * height_video)) {
            youtube_next.style.opacity = '0.3'
        }
        if (position_video < 0) {
            youtube_prev.style.opacity = '1'
        }
    });
    youtube_prev.addEventListener('click', function () {
        const list = video_item.querySelectorAll('.four-video');
        position_video = Math.min(0, (position_video + height_video*count_video));
        video_item.style.marginTop = position_video + 'px';
        if (position_video < ((list.length - count_video) * height_video)) {
            youtube_next.style.opacity = '1'
        }
        if (position_video === 0) {
            youtube_prev.style.opacity = '0.3'
        }
    })
}


const main_slide_content = document.querySelector('.main-first-slider');
if(main_slide_content !== null){
    const main_prev = main_slide_content.querySelector('.main-prev');
    const main_next = main_slide_content.querySelector('.main-next');
    const main_slide = main_slide_content.querySelector('.main-slider');

    main_slide.innerHTML = `${commit1.map(slider => `
            <div class="main-slid">
                            <div class="main-slid-content">
                                <div class="main-slid-item"><img src="https://zubyza1den.com/wp-content/themes/zzd/img/commit/${ slider.img3 }" alt=""><span>до</span></div>
                                <div class="main-slid-item"><img src="https://zubyza1den.com/wp-content/themes/zzd/img/main/proces-slide.jpg" alt=""><span>процесс</span></div>
                                <div class="main-slid-item"><img src="https://zubyza1den.com/wp-content/themes/zzd/img/commit/${ slider.img1 }" alt=""><span>через 1 день</span></div>
                            </div>
                        </div>

        `).join('') }`;
    let position = 0;
    const width_block = main_slide_content.offsetWidth;

    main_next.addEventListener('click', function () {
        const list = main_slide_content.querySelectorAll('.main-slid');
        position = Math.max(-(list.length - 1) * width_block, position - width_block);
        main_slide.style.marginLeft = position + 'px';
        if (position === (-(list.length - 1) * width_block)) {
            main_next.style.opacity = '0.3'
        }
        if (position < 0) {
            main_prev.style.opacity = '1'
        }
    });
    main_prev.addEventListener('click', function () {
        const list = main_slide_content.querySelectorAll('.main-slid');
        position = Math.min(0, position + width_block);
        main_slide.style.marginLeft = position + 'px';
        if (position > (-(list.length - 1) * width_block)) {
            main_next.style.opacity = '1'
        }
        if (position === 0) {
            main_prev.style.opacity = '0.3'
        }
    })
}


const result_container = document.querySelector('.slider-result-container');
if(result_container !== null){
    const prev_button_result = result_container.querySelector('.prev-button-result');
    const next_button_result = result_container.querySelector('.next-button-result');
    const list_slider_result = result_container.querySelector('.list-slider-result');
    let position_result = 0;
    const width_block_result = result_container.offsetWidth;

    next_button_result.addEventListener('click', function () {
        const list = result_container.querySelectorAll('.reusult-slider-content');
        position_result = Math.max(-(list.length - 1) * width_block_result, position_result - width_block_result);
        list_slider_result.style.marginLeft = position_result + 'px';
        if (position_result === (-(list.length - 1) * width_block_result)) {
            next_button_result.style.opacity = '0.3'
        }
        if (position_result < 0) {
            prev_button_result.style.opacity = '1'
        }
    });
    prev_button_result.addEventListener('click', function () {
        const list = result_container.querySelectorAll('.reusult-slider-content');
        position_result = Math.min(0, position_result + width_block_result);
        list_slider_result.style.marginLeft = position_result + 'px';
        if (position_result > (-(list.length - 1) * width_block_result)) {
            next_button_result.style.opacity = '1'
        }
        if (position_result === 0) {
            prev_button_result.style.opacity = '0.3'
        }
    })
}

// const main_slide_content_footer = document.querySelector('.main-last-slider');
// if(main_slide_content_footer !== null){
//     const main_prev_footer = main_slide_content_footer.querySelector('.main-prev_footer');
//     const main_next_footer = main_slide_content_footer.querySelector('.main-next_footer');
//     const main_slide_footer = main_slide_content_footer.querySelector('.main-slider_footer');
//
//     main_slide_footer.innerHTML = `${commit1.map(slider => `
//             <div class="main-slid_footer main-slid">
//                             <div class="main-slid-content_footer main-slid-content">
//                                 <div class="main-slid-item_footer main-slid-item"><img src="https://zubyza1den.com/wp-content/themes/zzd/img/commit/${ slider.img3 }" alt=""><span>до</span>
//                                 </div>
//                                 <div class="main-slid-item_footer main-slid-item"><img src="https://zubyza1den.com/wp-content/themes/zzd/img/main/proces-slide.jpg" alt=""><span>процесс</span>
//                                 </div>
//                                 <div class="main-slid-item_footer main-slid-item"><img src="https://zubyza1den.com/wp-content/themes/zzd/img/commit/${ slider.img1 }" alt=""><span>через
//                                     1 день</span>
//                                 </div>
//                             </div>
//                         </div>
//
//         `).join('') }`;
//     let position_footer = 0;
//     const width_block_footer = main_slide_content_footer.offsetWidth;
//
//     main_next_footer.addEventListener('click', function () {
//         const list = main_slide_content_footer.querySelectorAll('.main-slid_footer');
//         position_footer = Math.max(-(list.length - 1) * width_block_footer, position_footer - width_block_footer);
//         main_slide_footer.style.marginLeft = position_footer + 'px';
//         if (position_footer === (-(list.length - 1) * width_block_footer)) {
//             main_next_footer.style.opacity = '0.3'
//         }
//         if (position_footer < 0) {
//             main_prev_footer.style.opacity = '1'
//         }
//     });
//     main_prev_footer.addEventListener('click', function () {
//         const list = main_slide_content_footer.querySelectorAll('.main-slid_footer');
//         position_footer = Math.min(0, position_footer + width_block_footer);
//         main_slide_footer.style.marginLeft = position_footer + 'px';
//         if (position_footer > (-(list.length - 1) * width_block_footer)) {
//             main_next_footer.style.opacity = '1'
//         }
//         if (position_footer === 0) {
//             main_prev_footer.style.opacity = '0.3'
//         }
//     })
// }

const mainFour = document.querySelector('.main-four');
if(mainFour !== null){
    const videoYouTube = mainFour.querySelector('iframe');
    const videoList = document.querySelector('.four-list-container');
    videoList.addEventListener('click', function (event) {
        const idVideo = event.target.getAttribute('id');
        videoYouTube.setAttribute('src', 'https://www.youtube.com/embed/' + idVideo)
    })
}

const team_container = document.querySelector('.team-container');
if(team_container !== null){
    team_container.innerHTML = `${arr_doctors.map(doctor => `
            <div daya-filter-job="${ doctor.teamFilter }" class="team-doctor-item active-doctor">
                <h3>${ doctor.name }</h3>
                <img src="${ doctor.img }" alt="">
                <div class="team-doctor-bottom">
                    <p>${ doctor.job }<br class="br-city"> ${ doctor.city }</p>
                    <a href="${ doctor.link }">Подробнее</a>
                </div>
            </div>

        `).join('') }`;
    const filter_team = document.querySelector('.filter-team');
    filter_team.addEventListener('click', function () {
        let filte_team_item = document.querySelectorAll('.team-doctor-item');
        let valueAttribute = '';
        if(event.target.hasAttribute('data-filter')){
            valueAttribute = event.target.getAttribute('data-filter');
        }
        console.log(valueAttribute)
        for(let i = 0; i<filte_team_item.length; i++){
            console.log(filte_team_item[i].getAttribute('daya-filter-job'));
            console.log(event.target.getAttribute('data-filter'));
            if(filte_team_item[i].getAttribute('daya-filter-job') === event.target.getAttribute('data-filter') ||  filte_team_item[i].getAttribute('daya-filter-job') === 'oh'){
                filte_team_item[i].classList.remove('remove-doctor');
                filte_team_item[i].classList.add('active-doctor');
            }
            else if('all' === event.target.getAttribute('data-filter')){
                filte_team_item[i].classList.add('active-doctor');
            }
            else{
                filte_team_item[i].classList.remove('active-doctor');
                filte_team_item[i].classList.add('remove-doctor');
            }
        }
    })
}

const answerBlock = document.querySelector('.answer-block');
if(answerBlock !== null){
    answerBlock.innerHTML = `${answerContent.map(answerItem => `
            <div data-filter-faq="${ answerItem.filterAnswer }" class="answer-item">
                <h2 class="answer-number">${ answerItem.number }</h2>
                <div class="answer-content">
                    <h3>${ answerItem.question }</h3>
                    <p>${ answerItem.answer }</p>
                </div>
            </div>

        `).join('') }`;
    const categoryItems = document.querySelector('.faq-items-container');
    let faqItemTitle = '';
    let mainAnswerTitle = document.querySelector('.answerTitle');
    let answerItems = document.querySelectorAll('.answer-item');
    for(let y = 0; y<answerItems.length; y++){
        if(answerItems[y].getAttribute('data-filter-faq') === 'metod'){
            answerItems[y].classList.add('active');
        }
    }
    categoryItems.addEventListener('click', function (event) {
        if(event.target.hasAttribute('data-filter-category') || event.target.parentNode.hasAttribute('data-filter-category')){
           let faqItem = document.querySelectorAll('.faq-item');
            for(let i = 0; i<faqItem.length; i++){
               faqItem[i].classList.remove('active');
           }
           let clickFaq = event.target.closest('div[data-filter-category]');
            clickFaq.classList.add('active');
            faqItemTitle = clickFaq.querySelector('span').textContent;
            mainAnswerTitle.innerHTML = faqItemTitle;
            for(let y = 0; y<answerItems.length; y++){
                if(answerItems[y].getAttribute('data-filter-faq') === clickFaq.getAttribute('data-filter-category')){
                    answerItems[y].classList.add('active');
                }
                else{
                    answerItems[y].classList.remove('active');
                }
            }
        }
    })
}


const contactFaq = document.querySelector('.city-active-map');
if(contactFaq !== null){
    const contactCityMenu = document.querySelector('.city-list');
    const contactCityActive = document.querySelector('.city-active-span');
    const contactCityImg = document.querySelector('.city-active-img');
    let mapContent = document.querySelector('.map');
    let mapContentSrc = mapContent.querySelector('iframe');
    contactFaq.addEventListener('click', function () {
        if(contactCityMenu.style.height === '0px'){
            contactCityMenu.style.height = 200 + 'px';
            contactCityImg.style.transform = 'rotate(270deg)'
        }

        else{
            contactCityMenu.style.height = 0+'px';
            contactCityImg.style.transform = 'rotate(90deg)'
        }

    })
    contactCityMenu.addEventListener('click', function () {
        contactCityActive.innerHTML = event.target.textContent;
        contactCityMenu.style.height = 0+'px';
        contactCityImg.style.transform = 'rotate(90deg)';
        if(event.target.getAttribute('data-CityItem') === "sochi"){
            mapContentSrc.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2897.7204616324016!2d39.91923321544084!3d43.42466687912974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f5bfc597913069%3A0xc208f1f46c11bdd1!2z0YPQuy4g0JHQvtCz0LTQsNC90LAg0KXQvNC10LvRjNC90LjRhtC60L7Qs9C-LCAxMCwg0KHQvtGH0LgsINCa0YDQsNGB0L3QvtC00LDRgNGB0LrQuNC5INC60YDQsNC5LCDQoNC-0YHRgdC40Y8sIDM1NDM0MA!5e0!3m2!1sru!2sua!4v1564569815042!5m2!1sru!2sua');
        }
        else if(event.target.getAttribute('data-CityItem') === "krasnodar"){
            mapContentSrc.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2819.1179943251313!2d38.94512561549515!3d45.04282737909822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f04f12e3db59ab%3A0x9d99ec2780fc2957!2z0YPQuy4g0JrRgNC-0L_QvtGC0LrQuNC90LAsIDc1LCDQmtGA0LDRgdC90L7QtNCw0YAsINCa0YDQsNGB0L3QvtC00LDRgNGB0LrQuNC5INC60YDQsNC5LCDQoNC-0YHRgdC40Y8sIDM1MDAwNA!5e0!3m2!1sru!2sua!4v1564570185242!5m2!1sru!2sua');
        }
        else if(event.target.getAttribute('data-CityItem') === "peterburg"){
            mapContentSrc.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.7400844071801!2d30.272346216061404!3d59.90326398186337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696308e09946fcf%3A0xa244fc418b12e706!2z0J3QsNGA0LLRgdC60LjQuSDQv9GALiwgMTgsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCDQoNC-0YHRgdC40Y8sIDE5MDAyMA!5e0!3m2!1sru!2sua!4v1564570292055!5m2!1sru!2sua');
        }
        else if(event.target.getAttribute('data-CityItem') === "rostov"){
            mapContentSrc.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2709.2694042182534!2d39.74782931561762!3d47.230875979161524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e3b9913b5c22c3%3A0x64e5e195d69d4bd0!2z0JLQtdGA0YXQvdC10L3QvtC70YzQvdCw0Y8g0YPQuy4sIDExLCDQoNC-0YHRgtC-0LIt0L3QsC3QlNC-0L3Rgywg0KDQvtGB0YLQvtCy0YHQutCw0Y8g0L7QsdC7Liwg0KDQvtGB0YHQuNGPLCAzNDQwMTk!5e0!3m2!1sru!2sua!4v1570287998645!5m2!1sru!2sua');
        }
    })
}

const single_doctor_container = document.querySelector('.single-doctor-arr');
if(single_doctor_container !== null){
    const single_doctor_prev = document.querySelector('.single-doctor-prev');
    const single_doctor_next = document.querySelector('.single-doctor-next');
    let position_doctor = 0;
    const height_doctor = 246;
    let count_doctor = 3;
    single_doctor_next.addEventListener('click', function () {
        const list = single_doctor_container.querySelectorAll('.single-doctor-item');
        position_doctor = Math.max( (-(list.length - count_doctor) * height_doctor), position_doctor - count_doctor*height_doctor);
        single_doctor_container.style.marginTop = position_doctor + 'px';
        if (position_doctor === (-(list.length - count_doctor) * height_doctor)) {
            single_doctor_next.style.opacity = '0.3'
        }
        if (position_doctor < 0) {
            single_doctor_prev.style.opacity = '1'
        }
    });
    single_doctor_prev.addEventListener('click', function () {
        const list = single_doctor_container.querySelectorAll('.single-doctor-item');
        position_doctor = Math.min(0, (position_doctor + height_doctor*count_doctor));
        single_doctor_container.style.marginTop = position_doctor + 'px';
        if (position_doctor < ((list.length - count_doctor) * height_doctor)) {
            single_doctor_next.style.opacity = '1'
        }
        if (position_doctor === 0) {
            single_doctor_prev.style.opacity = '0.3'
        }
    })
}
