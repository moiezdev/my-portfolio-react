import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    contacts: [
        {
            platform: 'LinkedIn',
            handle: '@moizdev',
            categories: ['media', 'contact', 'freelance', 'portfolio'],
            url: 'https://www.linkedin.com/in/moizdev/',
            icon: '/socialMediaIcons/Linkedin.svg',
        },
        {
            platform: 'Gmail',
            handle: 'moiezdev@gmail',
            categories: ['contact'],
            url: 'mailto:moiezdev@gmail',
            icon: '/socialMediaIcons/Email.svg',
        },
        {
            platform: 'Phone No',
            handle: '+966 573240913',
            categories: ['contact'],
            url: 'tel:+966573240913',
            icon: '/socialMediaIcons/Phone.svg',
        },
        {
            platform: 'Gmail',
            handle: 'Whatsapp: +966 573240913',
            categories: ['contact',],
            url: 'https://wa.me/qr/CCKSULC4NRAZI1',
            icon: '/socialMediaIcons/Email.svg',
        },
        // Add more contacts as needed
    ],
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {},
});

export default contactsSlice.reducer;