module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Products', [{
      name: 'Окорок свиной',
      title: 'Окорок свиной бескостный – это вкусное и сочное мясо без грубой соединительной ткани и прожилок. Подходит для запекания, тушения, обжаривания.',
      category_id: 4,
      user_id: 3,
      photo: 'https://cdn.lifehacker.ru/wp-content/uploads/2020/09/1_1600163298-e1600163396967-630x315.jpg',
      price: '200',
    },
    {
      name: 'Мед',
      title: 'Мед урожая 2022. Натуральный природный мед из нектара полевых цветов: дикая мята, мать-и-мачеха и мышиный горошек. Луговой мёд признан первосортным и чрезвычайно ценным. Его полезные свойства определяются растениями, с которых собирался нектар. Собран в деревне Волгоградской области Михайловского района.',
      category_id: 6,
      user_id: 3,
      photo: 'https://static.insales-cdn.com/images/products/1/3804/340831964/%D0%BB%D1%83%D0%B31.jpeg',
      price: '100',
    },
    {
      name: 'Колбаски для жарки нюрбергские',
      title: 'Классические немецкие колбаски из свиного фарша в натуральной бараньей оболочке. В составе нет красителей, усилителей вкуса и вредной “химии”. Вкус настоящего мяса без примесей.',
      category_id: 4,
      user_id: 3,
      photo: 'https://static.insales-cdn.com/images/products/1/4111/372191247/kolbaski-zharenye-njurnbergskie-1.jpg',
      price: '150',
    },
    {
      name: 'Колбаски для жарки нюрбергские',
      title: 'Окорок свиной бескостный – это вкусное и сочное мясо без грубой соединительной ткани и прожилок. Подходит для запекания, тушения, обжаривания.',
      category_id: 4,
      user_id: 3,
      photo: 'https://cdn.lifehacker.ru/wp-content/uploads/2020/09/1_1600163298-e1600163396967-630x315.jpg',
      price: '300',
    },
    {
      name: 'Говядина',
      title: 'Низкая калорийность и высокая питательность: легко усваивается после долгой болезни, облегчает послеоперационный период.',
      category_id: 4,
      user_id: 3,
      photo: 'https://halal-spb.ru/sites/default/files/meat-3359248_1920.jpg',
      price: '200',
    },
    {
      name: 'Яблоки',
      title: 'Яблоки сезонные красные - хрустящий и низкокалорийный перекус. Свежий фрукт удобно брать с собой в дорогу, на прогулку, в офис или на учебу.',
      category_id: 2,
      user_id: 3,
      photo: 'https://pazlyigra.ru/uploads/posts/2021-02/1613807974_yabloki_i_ryabina_1.jpg',
      price: '40',
    },
    {
      name: 'Яблоки зеленые',
      title: 'Яблоки «Симиренко» — это кисло-сладкие хрустящие зеленые плоды среднего размера. Сорт получил широкое распространения в начале девятнадцатого века и был назван в честь селекционера Льва Симиренко, который культивировал его на протяжении длительного времени.',
      category_id: 2,
      user_id: 3,
      photo: 'https://zakromadoma.ru/wp-content/uploads/2017/12/kak-sobirat-yabloki-dlya-udachnogo-hraneniya.jpg',
      price: '50',
    },
    {
      name: 'Виноград черный',
      title: 'Виноград кишмиш любят за то, что в нем нет косточек. Он был выведен в результате селекционной работы и получил широкое распространение. У ягод этого сорта тонкая кожица, сладкая, сочная и не вяжущая мякоть.',
      category_id: 2,
      user_id: 3,
      photo: 'https://fermoved.ru/wp-content/uploads/2018/06/chernyj-polza-i-vred3-600x450.jpg',
      price: '100',
    },
    {
      name: 'Кабачок',
      title: 'Кабачок — это овощ, широко культивируемый во многих странах, подвид тыквы. Обладает плотной, при этом нежной и сочной мякотью.',
      category_id: 1,
      user_id: 3,
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRBnjYWRJxIrY8l1V2Z7PY5oNadXYy8MOWow&usqp=CAU',
      price: '30',
    },
    {
      name: 'Баклажан',
      title: 'Баклажан – один из самых желанных овощей на столах у россиян, хотя сам родом из Азии. Полезные свойства «синеньких» — так любя их называют гурманы – сложно переоценить.',
      category_id: 1,
      user_id: 3,
      photo: 'https://cdn.sibkray.ru/upload/resize/954986/3761d4f76d5193ecdc910c76c3230eaf.jpg',
      price: '30',
    },
    {
      name: 'Помидоры',
      title: 'Красные помидоры «Сливка» по форме напоминают одноименный фрукт. Овальные томаты ничем не хуже привычных. Они идеальны для консервации на зиму.',
      category_id: 1,
      user_id: 3,
      photo: 'https://www.gastronom.ru/binfiles/images/20160329/b4cd7935.jpg',
      price: '25',
    },
    {
      name: 'Момидорки черри',
      title: 'Мини-помидоры отличаются от крупных сортов более сладким и выразительным вкусом. Шикарный ингредиент для салатов и вторых блюд.',
      category_id: 1,
      user_id: 3,
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOPj8bQ6d-uHtjeJ1UjXnaprK2JOq3q6KBJxjK5bXxwczjLMxR5pO-Wbb7NVSTyW-uns&usqp=CAU',
      price: '35',
    },
    {
      name: 'Огурцы',
      title: 'Огурцы кисловодские — натуральный продукт, выращенный в экологически чистом регионе Ставропольского края. Естественные условия произрастания обеспечивают огурцам приятный запах и вкус. Свежие и хрустящие, ароматные и аппетитные – они совсем не содержат химических добавок.',
      category_id: 1,
      user_id: 3,
      photo: 'https://cdn.botanichka.ru/wp-content/uploads/2018/12/9-nezamenimyih-01.jpg',
      price: '50',
    },
    {
      name: 'Творог рассыпчатый',
      title: 'Творог — один из самых полезных продуктов переработки молока. В нем много кальция, витаминов, а также полезных молочных бактерий, которые положительно влияют на работу всех органов пищеварения.',
      category_id: 3,
      user_id: 3,
      photo: 'https://cdn.vkuso.ru/uploads/presnyj-tvorog-na-limone.jpg',
      price: '100',
    }, {
      name: 'Сметана',
      title: 'Молоко для изготовления сметаны не кипятили, а пастеризовали – быстро нагрели до 74 градусов.В сметане много кальция, и он усваивается почти на 100%, что положительным образом сказывается на костях. В сметане более 200 питательных веществ – витаминов (А, Е, К, С, D, В, РР), белков и углеводов.',
      category_id: 3,
      user_id: 3,
      photo: 'https://kedem.ru/photo/articles/big/aphoto1382674155.jpg',
      price: '120',
    },
    {
      name: 'Молоко',
      title: 'Молоко входит в рацион большинства людей с древних времен. Оно богато микроэлементами, витаминами, незаменимо для детского питания, поскольку является источником хорошо усвояемого кальция.',
      category_id: 3,
      user_id: 3,
      photo: 'https://frankfurt.apollo.olxcdn.com/v1/files/mvym3zcbk4x71-KZ/image;s=644x461',
      price: '70',
    }, {
      name: 'Йогурт',
      title: 'Йогурт питьевой живойю',
      category_id: 3,
      user_id: 3,
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJRiGUXkEHEyfTIgImvmLhaFp0ck10FmmyrN8N_UDYeuN5tAydaxMbMaM7Ul8tjGU6uqA&usqp=CAU',
      price: '30',
    },
    {
      name: 'Цеплята домашние',
      title: 'О Сбалансированный рацион, учитывающий особенности направления и породы, — залог здоровья птиц и их высокой продуктивности.',
      category_id: 8,
      user_id: 3,
      photo: 'https://79.img.avito.st/image/1/1.mn3-D7a6NpTIpvSRxnHZTy2sMJBKLD5WT6wynEqkNA.1k9H7hROOorb5icDvwWlYZ9ObkQRK0ve7TmR-kzFRw0',
      price: '30',
    },
    {
      name: 'Лошадь',
      title: 'Ума-Лошади татарской породы относятся к группе местных пород, имеющих средний рост (у кобыл высота в холке 145 – 146 см), тело среднего размера (живая масса 470 – 475 кг; длина туловища 152 – 153 см)',
      category_id: 8,
      user_id: 3,
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7NS346hCCy8uHsgGfGy-Q3Kh-oKTeZacuhw&usqp=CAU',
      price: '30',
    },
    {
      name: 'эстонская выпечка',
      title: 'Вкусная эстонская булочкаю',
      category_id: 7,
      user_id: 3,
      photo: 'https://kaemochka.ru/uploads/posts/2020-02/1580877243_10.jpg',
      price: '30',
    },
    {
      name: 'РЫба копченая',
      title: 'Нежная копченая рыба',
      category_id: 5,
      user_id: 3,
      photo: 'https://zakoptili.ru/wp-content/uploads/2016/09/%D0%9A%D0%BE%D0%BF%D1%87%D0%B5%D0%BD%D1%8B%D0%B5-%D1%80%D1%8B%D0%B1%D0%BD%D1%8B%D0%B5-%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82%D1%8B.jpg',
      price: '100',
    },
    ], {});

    //  name: DataTypes.STRING,
    //  title: DataTypes.TEXT,
    //  category_id: DataTypes.INTEGER,
    //  user_id: DataTypes.INTEGER,
    //  photo: DataTypes.TEXT,
    //  price: DataTypes.STRING,
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
