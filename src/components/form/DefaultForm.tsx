import '../../assets/css/form.css';
import {useRecoilState} from "recoil";
import {defaultFormAtom} from "../../states/formAtom";
import * as React from "react";

export type TDefaultForm = {
    firstname: string,
    lastname: string,
    country: string,
    longText: string
}

let counter = 0;

const DefaultForm = () => {
    const [data, setData] = useRecoilState(defaultFormAtom);

    const handleChange = (e: React.ChangeEvent<any>) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(JSON.stringify(data));
    };

    return (
        <div className="w-screen h-screen flex justify-center items-center flex-col">
            <h2 className="text-3xl font-semibold mb-10">React Hook Form Practice</h2>

            <p className="mb-10">
                Render: <span>{counter++}</span>
            </p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" onChange={handleChange} placeholder="Your name.."/>

                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" onChange={handleChange} placeholder="Your last name.."/>

                <label htmlFor="country">Country</label>
                <select id="country" name="country" onChange={handleChange}>
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                </select>

                <textarea id="longT" name="longText" onChange={handleChange}>Some text...</textarea>

                <input type="submit" value="Submit"/>

            </form>
        </div>
    )
}

export default DefaultForm;
