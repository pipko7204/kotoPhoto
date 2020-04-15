let catPhotoCards = [
    {
        id: 1,
        path: "cats/mrGray/mrGray1.jpg",
        name: "Мистер Грей",
        description: "лежит на диване",
    },
    {
        id: 2,
        path: "cats/mrGray/mrGray2.jpg",
        name: "Мистер Грей",
        description: "о чём-то задумался",
    },
    {
        id: 3,
        path: "cats/mrGray/mrGray3.jpg",
        name: "Мистер Грей",
        description: "заметил что-то неладное",
    },
    {
        id: 4,
        path: "cats/mrGray/mrGray4.jpg",
        name: "Мистер Грей",
        description: "удивился бренности бытия хозяйки",
    },
    {
        id: 5,
        path: "cats/mrGray/mrGray5.jpg",
        name: "Мистер Грей",
        description: "нежится и наслаждается жизнью",
    },
    {
        id: 6,
        path: "cats/mrGray/mrGray6.jpg",
        name: "Мистер Грей",
        description: "смотрит на всех как на ...",
    },
    {
        id: 7,
        path: "cats/mrGray/mrGray7.jpg",
        name: "Мистер Грей",
        description: "дрыхнет",
    },
    {
        id: 8,
        path: "cats/mrGray/mrGray8.jpg",
        name: "Мистер Грей",
        description: "в доме хозяин",
    },
    {
        id: 9,
        path: "cats/mrGray/mrGray9.jpg",
        name: "Мистер Грей",
        description: "показывает своё превосходство",
    },
    {
        id: 10,
        path: "cats/mrGray/mrGray10.jpg",
        name: "Мистер Грей",
        description: "наелся и спит",
    },
];

let catPhotos = document.querySelectorAll(".catPhoto");

for (let i = 0; i < catPhotos.length; i++) {
    catPhotos[i].src = catPhotoCards[i].path;
}