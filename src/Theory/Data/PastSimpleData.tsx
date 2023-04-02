export const TableData = [ ["Утверждение", "Подл + глагол-ed"], 
["Отрицание", "Подл + did not/didn’t + глагол"], 
["Вопрос", "Did/ Didn’t + подл + глагол?", "Did/ Didn + подл + not + глагол?"] ];

export const TimeAction = [
    {
    theory: "в прошлом",
    examples: 
        [
            {
            example: "The cat jumped on the chair a minute ago.",
            note: "",
            translation: "Кот прыгнул на стул минуту назад."
            }
        ],        
    },
    {
    theory: "в определенный! момент времени",
    examples:
        [
            {
            example: "— Didn't he write the letter yesterday?", 
            note: "Момент времени, вчера, указан прямо",
            translation: "Он не написал письмо вчера?"
            },
            {
            example: "— He didn't write the letter.", 
            note: "Момент времени, вчера, не указан, но ясен для обоих собеседников",
            translation: "Он не написал письмо."
            }
        ]
    }
]

export const TypeAction = [
    {
        theory: "постоянно-регулярное",
        examples:
        [
            {
            example: "I walked my dog every day a year ago.",
            note: "", 
            translation: "Я гулял с моей собакой каждый день год назад."
            }
        ]
    
    },   
    {
        theory: "«единичное»",
        examples:
        [
            {
            example: "He did not write a letter yesterday.",
            note: "",  
            translation: "Он не написал письмо вчера."
            }
        ]
    }
]

export const TableDataBe = [["Утверждение", "I/He/She/It + was", "You/We/They + were"], 
["Отрицание", "I/He/She/It + was not/wasn’t", "You/We/They + were not/weren’t"],
["Вопрос", "Was/Wasn’t + I/he/she/it?", "Was + I/he/she/it + not?", "Were/Weren’t + you/we/they?", "Were + you/we/they + not?"] ]

export const ExamplesBe = [
    {
        example: "We were not here a year ago.",  
        translation: "Мы не были здесь год назад."
    },
    {
        example: "Was the cat (~it) here yesterday?",
        translation: "Кот был здесь вчера?"
    }
]
