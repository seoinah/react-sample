import {atom} from "recoil";
import {IDefaultForm} from "../components/form/DefaultForm";

export const defaultFormAtom = atom<IDefaultForm>({
    key: `defaultFormAtom`,
    default: {
        firstname: '',
        lastname: '',
        country: '',
        longText: '',
    }
});
