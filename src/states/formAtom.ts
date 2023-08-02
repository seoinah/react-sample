import {atom} from "recoil";
import {TDefaultForm} from "../components/form/DefaultForm";

export const defaultFormAtom = atom<TDefaultForm>({
    key: `defaultFormAtom`,
    default: {
        firstname: '',
        lastname: '',
        country: '',
        longText: '',
    }
});
