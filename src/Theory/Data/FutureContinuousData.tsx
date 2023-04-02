export const TableData = [
    ["Утверждение", "Подл + will + be + глагол-ing"], 
    ["Отрицание", "Подл + will not/won’t + be + глагол-ing"], 
    ["Вопрос", "Will/Won’t + подл + глагол-ing?", "Will + подл + not + глагол-ing?"] ];

export const TimeAction = [
    {
    theory: "в будущем",
    examples: 
        [
            {
            example: "The cat (~it) will be sleeping on the chair tomorrow.",
            note: "",
            translation: "Кот будет спать на стуле завтра."
            }
        ],        
    },
    {
    theory: "в определенный! момент времени",
    examples:
        [
            {
            example: "— Will you be sleeping tomorrow?", 
            note: "Момент времени, завтра, указан прямо",
            translation: "Ты будешь спать завтра?"
            },
            {
            example: "— I won’t be sleeping.", 
            note: "Момент времени, завтра, не указан, но ясен для обоих собеседников.",
            translation: "Я не буду спать."
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
            example: "We will be eating the cake tomorrow.",
            note: "Действие переводится именно как «будем есть», а не «съедим».",  
            translation: "Мы будем есть торт завтра."
            }
        ]
    }
]
