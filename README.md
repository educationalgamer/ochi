# Ochi Clone

This is a frontend focused project built using vite+javascript. I have used framer-motion and locomotive scroll for smooth animations. It is a clone of the [ochi]("https://ochi.design/") website. Things that i learnt from this project include:

## To add fonts to your project :-

1. Download the fonts in your `assets` folder.
2. Add `font-face` to your `index.css` as follows:

    ```css
    @font-face {
        font-family: "foundersgrotesk";
        src: url("/assets/fonts/FOUNDERSGROTESKXCOND-BOLD.OTF");
    }
    @font-face {
        font-family: "neuemontreal";
        src: "/assets/fonts/NeueMontreal-Regular.ttf";
    }
    ```

3. Add the following to your `tailwind.config.js`

    ```js
    export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
        fontFamily: {
            neuemontreal: ["neuemontreal", "sans-serif"],
            foundersgrotesk: ["foundersgrotesk", "sans-serif"],
        },
        },
    },
    plugins: [],
    };
    ```

## To remove scrollbars :-

1. Add the following to your `index.css`

    ```css
    @layer utilities {
        /* Hide scrollbar for Chrome, Safari, and Opera */
        .no-scrollbar::-webkit-scrollbar {
        display: none;
        }


        /* Hide scrollbar for IE, Edge, and Firefox */
        .no-scrollbar {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
        }
    } 
    ```

2. Add the class `no-scrollbar overflow-y-auto` where you want to avoid the scollbar.

## Locomotive Scroll :-

[Locomotive Scroll]("https://scroll.locomotive.ca/docs/#/quickstart") is an opinionated JavaScript library that provides smooth scrolling animations and advanced scroll interactions for web applications. It is designed to create engaging and interactive scrolling experiences with ease. Locomotive Scroll offers features such as smooth scrolling, parallax effects and scroll-based animations.

`npm install locomotive-scroll@beta`
