import '../../assets/css/form.css';
import {SubmitHandler, useForm} from "react-hook-form";
import {TDefaultForm} from "./DefaultForm";
import * as React from "react";

let counter = 0;

const DefaultForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        //resolver: yupResolver(accessControlSchemaCreationValidation),
        defaultValues: {
            firstname: '',
            lastname: '',
            country: '',
            longText: ''
        },
        mode: 'onChange',
    });

    const onSubmit : SubmitHandler<any> = async (data)  => alert(JSON.stringify(data));

    return (
        <div className="w-screen h-screen flex justify-center items-center flex-col">
            <h2 className="text-3xl font-semibold mb-10">React Hook Form Practice</h2>

            <p className="mb-10">
                Render: <span>{counter++}</span>
            </p>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-[450px] p-10 flex flex-col bg-[#f2f4f6] rounded-lg gap-8"
            >
                <label className="flex flex-col">
                    <div className="mb-1 flex text-sm">
                        <span>First Name</span>
                        <span className="text-[#e50000] ml-1">*</span>
                    </div>

                    <input
                        {...register('firstname', { required: true })}
                        className="px-4 py-2 border border-[#eaecee] rounded-[6px] focus:border-[#535961]"
                    />

                    {errors.firstname && (
                        <span className="text-[#e50000] ml-1 text-sm">
                          x This field is required
                        </span>
                    )}
                </label>
                <label className="flex flex-col">
                    <div className="mb-1 flex text-sm">
                        <span>Last Name</span>
                        <span className="text-[#e50000] ml-1">*</span>
                    </div>
                    <input
                        {...register("lastname", { required: true })}
                        className="px-4 py-2 border border-[#eaecee] rounded-[6px] focus:border-[#535961]"
                    />
                    {errors.lastname && (
                        <span className="text-[#e50000] ml-1 text-sm">
                          x This field is required
                        </span>
                    )}
                </label>

                <label htmlFor="country">Country</label>
                <select id="country" name="country" {...register("country", { required: true })}>
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                </select>

                <textarea id="longT" name="longText" {...register("longText", { required: true })}
                >Some text...
                </textarea>


                <button
                    type="submit"
                    className="bg-[#00CCAA] text-white rounded-[6px] px-4 py-3"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default DefaultForm;
