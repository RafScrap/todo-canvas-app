import {atom, selector, selectorFamily} from 'recoil'
import {DialogueState, PhraseEntity} from "./Pages/Quiz/Entities";
import {from} from "linq-to-typescript";
export const dialoguesStateAtom = atom({
    key: 'dialoguesState',
    default: [] as DialogueState[]
})


export type TopicAndId = {
    topic: string,
    id : number,
}

export type TopicIdIndex =  TopicAndId & {
    index: number
}

export const getDialogByTopicAndId = selectorFamily({
    key: 'getDialogByTopicAndId',
    get: (tai : TopicAndId) => ({get}) => {
        return from(get(dialoguesStateAtom)).firstOrDefault(d => d.id === tai.id && d.topic === tai.topic)
    },
    set: (tai : TopicAndId) => ({get, set}, dialoguesState) => {
        let dialogues = get(dialoguesStateAtom);
            let ds = dialoguesState as DialogueState;
            set(
                dialoguesStateAtom,
                from(dialogues).where(d => d.id !== ds.id || d.topic !== ds.topic).toArray().concat(ds)
            )
    }
})

export const getPhraseByTopicIdIndex = selectorFamily({
    key: 'getPhraseByTopicIdIndex',
    get: (tai : TopicIdIndex) => ({get}) => {
        return from(get(dialoguesStateAtom)).first(d => d.id === tai.id && d.topic === tai.topic).phrases[tai.index]
    },
    set: (tai : TopicIdIndex) => ({get, set}, newPhrase) => {
        let dialogues = get(dialoguesStateAtom);
        let dialogue = from(dialogues).first(d => d.id === tai.id && d.topic === tai.topic);
        let newPhrases = dialogue.phrases.map((p, index) => {
            return index === tai.index ? newPhrase : p;
        })
        set(
            dialoguesStateAtom,
            from(dialogues).where(d => d.id !== tai.id || d.topic !== tai.topic).toArray().concat({...dialogue, phrases: newPhrases} as DialogueState)
        )
    }
})

