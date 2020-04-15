let catPhotoCards = [
    {
        id: 1,
        path: "cats/Asya/asya1.jpg",
        name: "Ася",
        description: "мешает работать",
    },
    {
        id: 2,
        path: "cats/Asya/asya2.jpg",
        name: "Ася",
        description: "спит там, где ей вздумается",
    },
    {
        id: 3,
        path: "cats/Asya/asya3.jpg",
        name: "Ася",
        description: "ни в чём себе не отказвыает",
    },
    {
        id: 4,
        path: "cats/Asya/asya4.jpg",
        name: "Ася",
        description: "защищает хозяйские вещи от хозяев",
    },
    {
        id: 5,
        path: "cats/Asya/asya5.jpg",
        name: "Ася",
        description: "приуныла",
    },
    {
        id: 6,
        path: "cats/Asya/asya6.jpg",
        name: "Ася",
        description: "залезет куда угодно",
    },
    {
        id: 7,
        path: "cats/Asya/asya7.jpg",
        name: "Ася",
        description: "в ужасе от возможного возмездия",
    },
    {
        id: 8,
        path: "cats/Asya/asya8.jpg",
        name: "Ася",
        description: "не даст себя в обиду",
    },
    {
        id: 9,
        path: "cats/Asya/asya9.jpg",
        name: "Ася",
        description: "устала от тяжёлой жизни и прилегла отдохнуть",
    },
    {
        id: 10,
        path: "cats/Asya/asya10.jpg",
        name: "Ася",
        description: "наелась и спит",
    },
    {
        id: 11,
        path: "cats/Asya/asya11.jpg",
        name: "Ася",
        description: "может себе позволить спать, где захочет",
    },
];

let catPhotos = document.querySelectorAll(".catPhoto");

for (let i = 0; i < catPhotos.length; i++) {
    catPhotos[i].src = catPhotoCards[i].path;
}