import { atom } from "recoil";

// Store Language of the application 
export const InstructionLang = atom({
    key: 'InstructionLang', // unique ID (with respect to other atoms/selectors)
    default: 'EN', // default value (aka initial value)
});

// Store History of all drinks visited and randomly fetched 
export const History = atom({
    key: 'History', // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
});