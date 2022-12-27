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