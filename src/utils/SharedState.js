import { atom } from "recoil";

export const InstructionLang = atom({
    key: 'InstructionLang', // unique ID (with respect to other atoms/selectors)
    default: 'EN', // default value (aka initial value)
});
export const History = atom({
    key: 'History', // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
});