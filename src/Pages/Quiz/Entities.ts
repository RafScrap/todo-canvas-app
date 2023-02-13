export type Answer = {
    id: number,
    state: "right" | "wrong"
}

export type Test = {
    q: string,
    a: string,
    variants: string[],
    correct: Number
}

export type DialogueState = {
    topic: string,
    id: number,
    phrases: PhraseEntity[]
}

export type PhraseEntity = {
    question: string,
    reply: string,
    answers: AnswersRow
}

export type AnswersRow = {
    answers: string[],
    answerIndex: number
    selected?: number[]
}