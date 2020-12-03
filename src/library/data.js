import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { nanoid } from "nanoid"

export const projectsData = [
  {
    id: nanoid(),
    img: "ProjectTurboKanban.jpg",
    title: "Turbo Kanban",
    info: "A full stack Web App to monitor realtime bots logs status, ",
    info2:
      "Ut minim ut ex ea et. Esse irure aute incididunt quis. Eiusmod tempor voluptate fugiat dolor in adipisicing esse ad incididunt ex quis qui. Quis consectetur aute sunt aute labore dolor dolore mollit. Officia occaecat laboris pariatur magna. Nulla reprehenderit pariatur ullamco officia est occaecat exercitation officia.",
    url: "./",
    repo: "./",
  },
  {
    id: nanoid(),
    img: "ProjectTurboKanban.jpg",
    title: "Hogwarts CRM APP",
    info:
      "an Hogwarts CRM (customer relationship management) full stack app using react and python.",
    info2:
      "Et culpa laborum veniam elit voluptate nulla nostrud eu anim anim esse esse Lorem. Ut elit irure ad est do. Adipisicing Lorem magna do ad eiusmod aute occaecat mollit pariatur do. Lorem excepteur veniam qui laboris. Duis do ullamco fugiat consequat culpa id labore incididunt reprehenderit ea. Occaecat aute ullamco irure in minim anim aliqua duis qui. Ipsum laboris ut nostrud labore aliquip non elit aute magna elit tempor sint ut.",
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
    img: "ProjectTurboKanban.jpg",
    title: "TheTreeWhisperer",
    info:
      "a 48 hours Hackathon project which uses React, Python, Flask and AI algorithm to detect if plants are healthy or not from the image recogonition",
    info2:
      "Fugiat do non exercitation dolor nisi excepteur qui ea ea mollit in. Ullamco in do excepteur excepteur ullamco et ullamco fugiat culpa amet laboris culpa. Officia quis qui enim adipisicing ad et nostrud est exercitation. Ea ipsum exercitation Lorem aliqua exercitation ut irure voluptate ad eiusmod labore dolor qui labore. Ea ad est do do ullamco occaecat esse dolore ullamco cupidatat esse ea.",
    url: "./",
    repo: "https://github.com/kerenren/TheTreeWhisperer",
  },
  {
    id: nanoid(),
    img: "ProjectTurboKanban.jpg",
    title: "React Micro blogging",
    info: "A fully functional micro blogging web app (like twitter)",
    info2:
      "Anim aliqua in veniam est aliqua. Occaecat cillum voluptate in consequat magna incididunt velit. Aliquip incididunt deserunt commodo eu enim ut aliqua veniam excepteur.",
    url: "./",
    repo: "https://github.com/kerenren/news_portal",
  },
  {
    id: nanoid(),
    img: "ProjectTurboKanban.jpg",
    title: "News Portal",
    info: "News portal which present news feeds from news API and Rss feeds",
    info2:
      "Commodo dolor do laborum aliqua dolore veniam quis non ipsum tempor tempor. Nisi tempor ex voluptate aute irure magna. Voluptate id nisi incididunt consectetur fugiat ullamco fugiat sunt occaecat. Ullamco proident minim laboris consequat.",
    url: "./",
    repo: "https://github.com/kerenren/react-micro-blogging",
  },
  {
    id: nanoid(),
    img: "ProjectTurboKanban.jpg",
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
    img: "ProjectTurboKanban.jpg",
    title: "Valina JavaScript Fibonacci Project",
    info: "A fibonacci calculator",
    info2:
      "In mollit sunt Lorem cupidatat consectetur minim labore in magna proident mollit et cillum eu. Occaecat excepteur sint officia aute ex anim occaecat magna tempor consequat labore proident incididunt. Ut adipisicing incididunt duis irure fugiat aliqua ea dolore aute deserunt minim amet deserunt. Culpa eiusmod anim ad ullamco pariatur quis.",
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