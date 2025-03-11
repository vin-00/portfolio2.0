import DevPad from "../../assets/devpad.png"
import Visualizer from "../../assets/visualizer.webp"
import simon_game from '../../assets/simon_game.png'
import Weather from '../../assets/weather.png'
import Calendar from '../../assets/calendar.png'
import Netflix from "../../assets/netflix.webp"
import TravelNest from "../../assets/travelNest.png"
import SharePrompt from "../../assets/sharePrompt.png"
import money from "../../assets/money.png"
import chat from "../../assets/whatsapp.webp"

export const projectsData = [
    {
        id: 1,
        image: DevPad,
        title: 'DevPad',
        category: 'major',
        link: 'https://devpad2-0.onrender.com/',
        github: 'https://github.com/vin-00/Devpad2.0',
        description: 'A real-time collaborative web application for writing and testing HTML, CSS, and JavaScript code.'
    },
    {
        id: 2,
        image: Visualizer,
        title: 'Visualizer',
        category: 'major',
        link: 'https://visualize-11.netlify.app/',
        github: 'https://github.com/vin-00/visualizer',
        description: 'Explore and solve various classic puzzles through interactive visualizations.'
    },
    {
        id: 3,
        image: chat,
        title: 'WhatsApp Chat Analyser',
        category: 'major',
        link: 'none',
        github: 'https://github.com/vin-00/WhatsAppChatAnalyser',
        description: 'Provides deep insights into your exported chat data.'
    },
    {
        id: 4,
        image: money,
        title: 'Money Tracker',
        category: 'major',
        link: 'https://money-tracker-cd74a4.netlify.app/',
        github: 'https://github.com/vin-00/Money-Tracker',
        description: 'Allows users to efficiently manage their expenses and incomes across various categories.'
    },
    {
        id: 5,
        image: TravelNest,
        title: 'TravelNest',
        category: 'clone',
        link: 'https://travelnest-8w76.onrender.com/listings',
        github: 'https://github.com/vin-00/TravelNest',
        description: 'An Airbnb clone with search and booking functionalities.'
    },
    {
        id: 6,
        image: SharePrompt,
        title: 'Share Prompt',
        category: 'clone',
        link: 'https://share-prompt-r1avkcf0q-vinays-projects-5b0b564c.vercel.app/',
        github: 'https://github.com/vin-00/share-prompt',
        description: 'A platform for sharing prompts and creative writing ideas.'
    },
    {
        id: 7,
        image: Netflix,
        title: 'Netflix Clone',
        category: 'clone',
        link: 'none',
        github: 'https://github.com/vin-00/Netflix_clone',
        description: 'A simplified Netflix clone created using HTML, CSS, and JavaScript.'
    },
    {
        id: 8,
        image: Weather,
        title: 'Weather Widget',
        category: 'minor',
        link: 'https://weather-widget-00.netlify.app/',
        github: 'https://github.com/vin-00/Weather-Widget',
        description: 'A simple and customizable tool to display current weather information for a specific city.'
    },
    {
        id: 9,
        image: Calendar,
        title: 'DayWise',
        category: 'minor',
        link: 'https://daywise.netlify.app/',
        github: 'https://github.com/vin-00/Calender',
        description: 'A user-friendly event management application .'
    },
    {
        id: 10,
        image: simon_game,
        title: 'Simon Game',
        category: 'minor',
        link: 'none',
        github: 'https://github.com/vin-00/simonGame',
        description: 'A classic memory game that will test and enhance your memory .'
    },
]

export const projectsNav = [
    {
        name: 'all'
    },
    {
        name: 'major'
    },
    {
        name: 'clone'
    },
    {
        name: 'minor'
    }
]