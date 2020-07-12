let cards = [
    {
        num: "1",

        cls: "one",
    },

    {
        num: "2",

        cls: "two",
    },

    {
        num: "3",

        cls: "three",
    },

    {
        num: "4",

        cls: "four",
    },

    {
        num: "5",

        cls: "five",
    },

    {
        num: "6",

        cls: "six",
    },

    {
        num: "7",

        cls: "seven",
    },

    {
        num: "8",

        cls: "eight",
    },

    {
        num: "9",

        cls: "nine",
    },
];

function mainShuffle() {
    var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    shuffle(cards);

    function shuffle(cards) {
        var temp, currentIndex, i;

        for (i = cards.length - 1; i > 0; i--) {
            temp = Math.floor(Math.random() * (i + 1));

            currentIndex = cards[i];

            cards[i] = cards[temp];

            cards[temp] = currentIndex;
        }

        console.log(cards);

        createTable(cards);
    }
}

function createTable(edata = a) {
    const recordsTr = edata.map((item) => '<div class="square ' + item.cls + '">' + item.num + "</div>").join("");

    document.getElementById("lowerSectionTable").innerHTML = recordsTr;
}

function mainSort() {
    cards.sort((a, b) => (a.num > b.num ? 1 : -1));

    createTable(cards);
}
