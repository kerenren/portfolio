import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { nanoid } from "nanoid"

export const projectsData = [
  {
    id: nanoid(),
    img: "ProjectTurboKanban.jpg",
    title: "Turbo Kanban",
    info:
      "A full stack web app using RESTful API to monitor real time cloud bots logs and presented in a bots dashboard, to retrieve logs by bot id, to upload files and modules and to execute sql commands per types by simply selecting options from a user friendly form.",
    info2: "It's built with React.js, axios, python, flask, MySql database",
    url: "./",
    repo: "https://github.com/kerenren/Turbo-Kanban",
  },
  {
    id: nanoid(),
    img: "project-hogwarts-crm.jpg",
    title: "Hogwarts CRM APP",
    info:
      "An Hogwarts CRM (customer relationship management) full stack app using React, Axios, Python and Flask.",
    info2:
      "The CRM uses nivo chart for charts visualization, and uses MongoDb to store and manipulate the data. ",
    url: "./",
    repo: "https://github.com/kerenren/hogwarts_crm_react",
  },
  {
    id: nanoid(),
    img: "project-stock-exchange.jpg",
    title: "Vanilla JavaScript Stock Exchange Web App",
    info:
      "A multi page stock exchange data website. Used Vanilla Javascript completely to build html per module.",
    info2:
      "Built with Node.js, Express, RESTful API, chart.js, MongoDB. Hosted by Heroku. Users are able to search stock exchange companies by symbol, query is highlighted in the search result. Public companies details and stock quotes are able to be retrieved. ",
    url: "https://stock-exchange-js.herokuapp.com/index.html",
    repo: "https://github.com/kerenren/js-project-2-stock-exchange",
  },
  {
    id: nanoid(),
    img: "project-tree-whisper.jpg",
    title: "TheTreeWhisper",
    info:
      "A 48 hours Hackathon project which uses React, Python, Flask and AI algorithm to detect if plants are healthy or not from the image recognition.",
    info2: "Built with React, Axios, Flask, Google Map API, and TensorFlow.",
    url: "./",
    repo: "https://github.com/kerenren/TheTreeWhisperer",
  },
  {
    id: nanoid(),
    img: "project-react-micro-blogging.jpg",
    title: "React Micro blogging",
    info: "A fully functional micro-blogging web app (like Twitter)",
    info2: "Built with React, and hosted by Google Firebase.",
    url: "https://react-micro-blogging-kerenren.web.app/home",
    repo: "https://github.com/kerenren/react-micro-blogging",
  },
  {
    id: nanoid(),
    img: "project-news-portal.jpg",
    title: "News Portal",
    info: "News portal which present news feeds from news API and RSS feeds.",
    info2: "Built with React, chakra UI.",
    url: "./",
    repo: "https://github.com/kerenren/news_portal",
  },
  {
    id: nanoid(),
    img: "project-todo-app.jpg",
    title: "React event planner app",
    info:
      "An app that will let you add elements to a ‘to do’ list and to move it from that list to a ‘done’. This app was created using React and create-react-app.",
    info2:
      "The app has extra features: delete a post, star post (takes it to the top), edit post, reset the app. When clicking on the tick button, it moves the post from ’To do’ to ‘done’ and vice versa. There is also a reset button that allows users to clear the list.",
    url: "./",
    repo: "https://github.com/kerenren/react-planner-app",
  },
  {
    id: nanoid(),
    img: "project-fibonacci-calc.jpg",
    title: "Vanilla JavaScript Fibonacci Project",
    info: "A fibonacci calculator.",
    info2: "Built with vanilla Javascript.",
    url: "./",
    repo: "https://github.com/kerenren/js-project-1-fibonacci",
  },
  {
    id: nanoid(),
    img: "project-portfolio-vanilla.jpg",
    title: "Vanilla JavaScript portfolio",
    info:
      "A self learning project before starting my study in Israel Tech Challenge Full Stack Web Development Bootcamp.",
    info2: "Built with HTML, CSS and vanilla Javascript.",
    url:
      "https://kerenren.github.io/israel_tech_challenge/Documents/GitHub/Ren_Kelei_ITCPrecourse/index.html",
    repo: "https://github.com/kerenren/israel_tech_challenge",
  },
  {
    id: nanoid(),
    img: "project-wix-website.jpg",
    title: "Wix Website Project",
    info:
      "One of my first projects from Israel Tech Challenge Full Stack Web Development Bootcamp. It's completed within 24 hours.",
    info2: "I was assigned and developed the pixel perfect website page almost as the same as the home page of the official Wix Website by using HTML and CSS without any libraries or frameworks.",
    url:
      "https://kerenren.github.io/Wix-Website-Project/ren-week1-wix.html",
    repo: "https://github.com/kerenren/Wix-Website-Project",
  },
]

export const networks = [
  { name: faGithub, url: "https://github.com/kerenren", id: nanoid() },
  {
    name: faLinkedin,
    url: "https://www.linkedin.com/in/renkelei/?locale=en_US",
    id: nanoid(),
  },
]
