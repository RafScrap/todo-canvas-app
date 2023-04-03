export const TableData = [ ["Утверждение", "I/You/We/They + have + been + глагол + ing", "He/She/It + has + been + глагол + ing"], 
["Отрицание", "I/You/We/They + have not/haven’t + been + глагол + ing", "He/She/It + has not/hasn’t + been + глагол + ing"], 
["Вопрос", "Have/Haven’t + I/you/we/they + been + глагол + ing?", "Have + I/you/we/they + been + глагол + ing?", 
"Has/Hasn’t + he/she/it + been + глагол + ing?", "Has + he/she/it + not + been + глагол + ing?"] ];

export const TypeAction = [
    {
    theory: "Мы «смотрим» в ДВЕ точки. Первая точка — когда действие совершилось, однако он НЕ имеет значения, важно, К КАКОМУ моменту (вторая точка) действие совершилось.",
    examples: []
    },
    {
    theory: "Вторая точка находится в настоящем",
    examples: []
    }
]

export const TimeAction = [
    {
    theory: "Действие представляет из себя процесс",
    examples: []
    },
    {
    theory: "А потому есть результат в виде потраченного времени",
    examples:
        [
            {
            example: "I have been waiting for your call for a week.", 
            note: "",
            translation: "Я ждал твоего звонка неделю."
            }
        ]
    },
    {
    theory: "Или было видимое свидетельство того, что действие происхоДИЛО",
    examples:
        [
            {
            example: "Your hands are covered in paint. Have you been painting a picture?", 
            note: "Именно «рисовал», а не «нарисовал»",
            translation: "Твои руки покрыты краской. Ты рисовал картину?"
            }
        ]
    }
]