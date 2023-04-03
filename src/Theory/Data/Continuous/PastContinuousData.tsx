export const TableData = [ ["Утверждение", "I/He/She/It + was + глагол-ing", "You/We/They + were + глагол-ing"], 
["Отрицание", "I/He/She/It + was not/wasn’t + глагол-ing", "You/We/They + were/weren’t + глагол-ing"], 
["Вопрос", "Was/Wasn’t + I/he/she/it + глагол-ing?", "Was + I/he/she/it + not + глагол-ing?", 
"Were/Weren’t + you/we/they + глагол-ing?", "Were + you/we/they + not + глагол-ing?"] ];

export const TimeAction = [
    {
    theory: "в прошлом",
    examples: 
        [
            {
            example: "The cat (~it) was sleeping on the chair an hour ago.",
            note: "",
            translation: "Кот спал на стуле час назад."
            }
        ],        
    },
    {
    theory: "в определенный! момент времени",
    examples:
        [
            {
            example: "— Weren't you sleeping an hour ago?", 
            note: "Момент времени, час назад, указан прямо.",
            translation: "Ты спал час назад?"
            },
            {
            example: "— I was not sleeping.", 
            note: "Момент времени, час назад, не указан, но ясен для обоих собеседников.",
            translation: "Я не спал."
            }
        ]
    }
]

export const TypeAction = [   
    {
        theory: "представляет из себя процесс",
        examples:
        [
            {
            example: "We were eating the cake yesterday.",
            note: "Именно «ели», а не «съели»",  
            translation: "Мы ели торт вчера."
            }
        ]
    }
]
