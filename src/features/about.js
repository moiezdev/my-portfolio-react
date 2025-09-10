import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    about:
    {
        title: "Hello, I'm Moiz!",
        subtitle: "A Frontend Developer",
        description: ["A Frontend Engineer and UI/ UX Specialist based in Saudi Arabia.Over the past 5 + years, I’ve been turning complex ideas into clean, responsive, and user - friendly web applications using React, Vue.js, Next.js, Nuxt.js, and Tailwind CSS.I have experience collaborating with international clients on Flight & Car Booking platforms, E-Commerce, and other B2B / B2C projects, focusing on improving user experiences and delivering high - performing interfaces.",
            "I’m passionate about bridging design and development, crafting scalable, visually engaging solutions, and staying up-to-date with the latest technologies and frameworks. Whether it’s creating reusable UI components, integrating APIs, or optimizing performance, I always aim to build modern digital experiences that users love and businesses value."
        ]
    },
};

const aboutSlice = createSlice({
    name: "about",
    initialState,
    reducers: {},
});

export default aboutSlice.reducer;