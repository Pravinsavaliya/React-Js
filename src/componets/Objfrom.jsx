import React, { useState } from 'react';

export default function ObjForm() {
    const [obj, setObj] = useState({
        name: "",
        email: "",
        gender: "",
        subscription: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        setObj({
            ...obj,
            [name]: newValue,
        });
    };

    const handleForm = (e) => {
        e.preventDefault();
        console.log(obj);
        setObj({
            name: "",
            email: "",
            gender: "",
            subscription: false,
        });
        e.target.reset();
    };

    return (
        <>
            <form onSubmit={handleForm}>
                <input
                    type="text"
                    placeholder="Enter Name"
                    name="name"
                    value={obj.name}
                    onChange={handleChange}
                />
                <br /><br />
                <input
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    value={obj.email}
                    onChange={handleChange}
                />
                <br /><br />
                <input
                    type="radio"
                    name="gender"
                    value="male"
                    id="male"
                    onChange={handleChange}
                />
                <label htmlFor="male">Male</label>
                <br /><br />
                <input
                    type="radio"
                    name="gender"
                    value="female"
                    id="female"
                    onChange={handleChange}
                />
                <label htmlFor="female">Female</label>
                <br /><br />
                <input
                    type="checkbox"
                    name="subscription"
                    id="sub"
                    checked={obj.subscription}
                    onChange={handleChange}
                />
                <label htmlFor="sub">Subscribe to Newsletter</label>
                <br /><br />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}
