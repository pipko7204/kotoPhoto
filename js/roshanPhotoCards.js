let catPhotoCards = [
    {
        id: 1,
        path: "cats/Roshan/roshan1.jpg",
        name: "Рошан",
        description: "нашёл что-то интересное",
    },
    {
        id: 2,
        path: "cats/Roshan/roshan2.jpg",
        name: "Рошан",
        description: "возмущён тем, что его подушка пахнет людьми",
    },
    {
        id: 3,
        path: "cats/Roshan/roshan3.jpg",
        name: "Рошан",
        description: "эпохи Возрождения",
    },
    {
        id: 4,
        path: "cats/Roshan/roshan4.jpg",
        name: "Рошан",
        description: "готовится съесть что-то вкусное, я бы на твоём месте шёл за кормом",
    },
    {
        id: 5,
        path: "cats/Roshan/roshan5.jpg",
        name: "Рошан",
        description: "новогодний",
    },
    {
        id: 6,
        path: "cats/Roshan/roshan6.jpg",
        name: "Рошан",
        description: "мечтает о птичках",
    },
    {
        id: 7,
        path: "cats/Roshan/roshan7.jpg",
        name: "Рошан",
        description: "берёт от жихни всё",
    },
    {
        id: 8,
        path: "cats/Roshan/roshan8.jpg",
        name: "Рошан",
        description: "услышал, что он поедет к доктору хе-хе",
    },
    {
        id: 9,
        path: "cats/Roshan/roshan9.jpg",
        name: "Рошан",
        description: "очень дружелюбный",
    },
    {
        id: 10,
        path: "cats/Roshan/roshan10.jpg",
        name: "Рошан",
        description: "в VIP-ложе",
    },
    {
        id: 11,
        path: "cats/Roshan/roshan11.jpg",
        name: "Рошан",
        description: "предпочитает пищу животного происхождения",
    },
    {
        id: 12,
        path: "cats/Roshan/roshan12.jpg",
        name: "Рошан",
        description: "пришёл что-то клянчить",
    },
    {
        id: 13,
        path: "cats/Roshan/roshan13.jpg",
        name: "Рошан",
        description: "увидел что делают хозяева ночью",
    },
    {
        id: 14,
        path: "cats/Roshan/roshan14.jpg",
        name: "Рошан",
        description: "проходит курс реабилитации после увиденного",
    },
];

let catPhotos = document.querySelectorAll(".catPhoto");

for (let i = 0; i < catPhotos.length; i++) {
    catPhotos[i].src = catPhotoCards[i].path;
}