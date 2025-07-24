import React from 'react'
import Button from './Button'


import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';

const contactLinks = [
    {
        icon: <FaEnvelope className="text-white text-xl" />,
        label: 'sourabhkarikatti007@gmail.com',
        href: 'mailto:sourabhkarikatti007@gmail.com',
    },
    {
        icon: <FaPhone className="text-white text-xl" />,
        label: '+(91) 9611927500',
        href: 'tel:+919611927500',
    },
    {
        icon: <FaLinkedin className="text-white text-xl" />,
        label: 'Sourabh Karikatti',
        href: 'https://www.linkedin.com/in/sourabh-karikatti-322109235',
    },
];

const ImageClipBox = ({ src, clipClass }) => (
    <div className={clipClass}>
        <img src={src} alt="" />
    </div>
);

import toast, { Toaster } from 'react-hot-toast';

const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key",import.meta.env.VITE_W3_FORM);

    const json = JSON.stringify(Object.fromEntries(formData));

    const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: json
    }).then(res => res.json());


    if (res.success) {
        toast.success('Email sent!');
        event.target.reset();
    } else {
        toast.error('Failed to send email.');
    }
};


const Contact = () => {
    return (
        <div id='contact' className='my-20 min-h-96 w-screen px-10'>
            <div className='relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden flex justify-center pl-20'>


                <div className='z-20 relative sm:z-between flex flex-col items-center text-center '>
                    <p className='font-general text-[14px] uppercase'> Contact me</p>
                    <p className='special-font mt-10 w-full font-zentry  leading-[0.9] md:text-[6rem]'>
                        {/* Let’s <b>b</b>uild something <br /> amazing <br /> together. */}
                        Open to n<b>e</b>w i<b>d</b>eas,<br /> ch<b>a</b>llen<b>g</b>es, and gre<b>a</b>t coffee.

                    </p>
                    <div className="pt-10 flex flex-col gap-1 md:items-center items-center text-white ">
                        {contactLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300"
                            >
                                {link.icon}
                                <span>{link.label}</span>
                            </a>
                        ))}
                    </div>
                    <form
                        onSubmit={onSubmit}
                        // action="https://api.w3forms.com/submit"
                        // method="POST"
                        className="mt-10 w-full max-w-lg space-y-4 text-black"
                    >
                        <input
                            type="hidden"
                            name="access_key"
                            value="YOUR_W3FORMS_ACCESS_KEY"
                        />

                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            className="w-full rounded-md p-3 text-sm"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            className="w-full rounded-md p-3 text-sm"
                        />

                        <textarea
                            name="message"
                            placeholder="Your Message"
                            required
                            rows="5"
                            className="w-full rounded-md p-3 text-sm"
                        ></textarea>

                        <button
                            className='group relative  w-fit
                        cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3
                         text-black text-[14px] hover:bg-blue-400 transition-colors duration-300 ease-linear' type='submit'>SEND EMAIL</button>
                    </form>
                    {/* <Button title='Contact us' containerClass='mt-10 cursor-pointer'/> */}

                </div>
                <div className="absolute z-50 sword-man-clip-path bottom-0 right-0 w-[20%] hidden lg:block overflow-hidden  object-cover">

                    <ImageClipBox
                        src="img/contact_me.gif"
                        clipClass="sword-man-clip-path h-full w-full object-cover scale-120   object-cover"
                    />

                </div>
                <div className='sword-man-clip-path w-[23%] h-[30%] absolute bottom-0 right-0 bg-gradient-to-b from-blue-500 to-black '>

                </div>
              

                <Toaster position="bottom-center" reverseOrder={false} />
            </div>
        </div>
    )
}

export default Contact