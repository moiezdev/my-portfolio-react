import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    contacts: [
        {
            platform: 'GitHub',
            handle: '@moizdev',
            categories: ['media', 'portfolio'],
            url: 'https://github.com/moiezdev',
            icon: '/socialMediaIcons/Github.svg',
        },
        {
            platform: 'LinkedIn',
            handle: '@moizdev',
            categories: ['media', 'contact', 'freelance', 'portfolio'],
            url: 'https://www.linkedin.com/in/moiezdev/',
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
            handle: '+966 573240913 (WhatsApp)',
            categories: ['contact',],
            url: 'https://wa.me/qr/CCKSULC4NRAZI1',
            icon: '/socialMediaIcons/Whatsapp.svg',
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