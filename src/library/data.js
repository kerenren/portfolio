import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { nanoid } from "nanoid"

export const projectsData = [
  {
    id: nanoid(),
    img: "ProjectTurboKanban.jpg",
    title: "Turbo Kanban",
    info: "A full stack Web App to monitor realtime bots logs status, ",
    info2:
      "",
    url: "./",
    repo: "./",
  },
  {
    id: nanoid(),
    img: "project-hogwarts-crm.jpg",
    title: "Hogwarts CRM APP",
    info:
      "an Hogwarts CRM (customer relationship management) full stack app using react and python.",
    info2:
      "",
    url: "./",
    repo: "https://github.com/kerenren/hogwarts_crm_react",
  },
  {
    id: nanoid(),
    img: "project-stock-exchange.jpg",
    title: "Valina JavaScript Stock Exchange Web App.",
    info:
      "A multipage stock exchange data website. Used Vanila Javascript completly to build html per module.",
    info2:
      "Built with Node.js, Express, RESTful API, chart.js, MongoDB. Hosted by Heroku. Users are able to search stock exchange companies by symbol, query is hilighted in the search result. Public companies details and stock quotes are able to be retrived. ",
    url: "https://stock-exchange-js.herokuapp.com/index.html",
    repo: "https://github.com/kerenren/js-project-2-stock-exchange",
  },
  {
    id: nanoid(),
    img: "project-tree-whisper.jpg",
    title: "TheTreeWhisper",
    info:
      "a 48 hours Hackathon project which uses React, Python, Flask and AI algorithm to detect if plants are healthy or not from the image recogonition",
    info2:
      "uilt with React, Axios, Flask, tensorflow",
    url: "./",
    repo: "https://github.com/kerenren/TheTreeWhisperer",
  },
  {
    id: nanoid(),
    img: "project-react-micro-blogging.jpg",
    title: "React Micro blogging",
    info: "A fully functional micro blogging web app (like twitter)",
    info2:
      "Built with React, hosted by Google Firebase",
    url: "https://react-micro-blogging-kerenren.web.app/",
    repo: "https://github.com/kerenren/news_portal",
  },
  {
    id: nanoid(),
    img: "ProjectTurboKanban.jpg",
    title: "News Portal",
    info: "News portal which present news feeds from news API and Rss feeds",
    info2:
      "Built with React, chakra UI",
    url: "./",
    repo: "https://github.com/kerenren/react-micro-blogging",
  },
  {
    id: nanoid(),
    img: "project-todo-app.jpg",
    title: "React event planner app",
    info:
      "An app that will let you add elements to a ‘to do’ list and to move it from that list to a ‘done’. This app was created using React and create-react-app.",
    info2:
      "The app has extra features: delete post, star post (takes it to the top), edit post, reset app. When clicking on the tick button, it moves the post from ’To do’ to ‘done’ and vice versa. There is also a reset button that allows user to clear the list.",
    url: "./",
    repo: "https://github.com/kerenren/react-planner-app-kerenren",
  },
  {
    id: nanoid(),
    img: "project-fibonacci-calc.jpg",
    title: "Valina JavaScript Fibonacci Project",
    info: "A fibonacci calculator",
    info2:
      "Built with valina Javascript",
    url: "./",
    repo: "https://github.com/kerenren/js-project-1-fibonacci",
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
