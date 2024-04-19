# iWeather Weather App

## Project Overview and Challenges

- I created this project using;
    - React with Vite
    - Jest and React Testing Library for testing
    - React Google Maps Places API for autocompleting
    - OpenWeatherMap as weather API
    - Axios for API requests
    - React Router for routing
    - Tailwind.css for styling
- I struggled a bit using React Google Maps API since there was not a detailed documentation on
  how to use each functionality how, but with debugging and observing behaviours I managed to make it
  work for me.
- I decided to use context for data communication throughout the app. It was based on two main reasons;
    - I wanted to separate logic from components since there might be another use case for another component
      and this way it would be easy to access the same functionality on a different place and same goes for the states
      as well.
    - I took precautions of a possible prop drilling and/or a child-to-parent communication case.
- I didn't need to use Redux or any other state management tool since it is a small project and context can do the same
  job just fine without being complicated, so I did not see any need of using one.
- I used `createBrowserRouter` functionality rather than using `<BrowserRouter/>` component when creating the routes,
  since it is, one, the recommended way now with React Router v6.4, and two, I decided to use data APIs - `loader` in
  this case - to send API requests, so I had to anyway.
- I used query parameters - `useSearchParams` hook - as route parameters to use it in data fetching. It seemed more
  clear and professional to use query parameters than React Routers params feature.

## How To Start?

### Build Docker image

- `docker build -t weather-app .`

### Running application

- `docker run -p 5173:5173 weather-app`
  and there you go!

### What about tests ?

- `docker run -it weather-app npm run test`

### What about ESLint ?

- `docker run -it weather-app npm run lint` to see ESLint errors

### API Keys

- I have created an `.env.example` file where you can find the format you should use. Create your own `.env` file with
  your API keys using that file as a guide

#### For Location API from Google

- https://developers.google.com/maps/documentation/javascript/get-api-key
    - Follow the steps from **_create API keys_** section.

#### For the Weather API from OpenWeatherMap

- https://home.openweathermap.org/api_keys
    - I use Developer Plan which allows me to use an API that is not included in free plan.
      If you don't have access please reach out so that I can give you mine for you to see how the application works.

## Reasoning

### Why didn't I use TypeScript

- To be candid, I am not quite comfortable using TypeScript with my React applications yet, I know the basics and with a
  little research I can use it pretty well too, to be more clear about the matter,
  I have no problem with logic heavy parts types, but with components and event handlers, I am not as fast and accurate
  as I am with the logic heavy side of the things.
  So in short, I was worried It might slow my progress down a bit, which I didn't want with all the exams and homeworks
  going on with school as well.

### Why did I use Vite and not the classic `create-react-app`

- I know create-react-app has its benefits like having Jest configured ready, using `process.env` instead
  of `import.meta.env` for accessing environment variables - trust me when I say it, I wasn't thinking it is a plus but
  while I was unit testing it caused such a headache for me -. But the reason I chose vite is that I think it is
  more flexible and I personally like that vite excludes some unnecessary files and leaves you the choice of using those
  features and including them.

### Why did I use React Google Maps API instead of Google Maps API itself

- You might think, If there wasn't detailed documentation, and you had no prior knowledge about the library, why did you
  choose it? Well, the reason is that, implementing Google Maps API directly into my React app would have been way
  harder. Despite the lack of detailed documentation, the library had a decent amount of downloads per week, so it
  seemed worth giving it a shot. I am happy with how the library simplified the process, even though there was a
  learning curve. It just made all the complex implementation reduce down to 3 components with easier logic once I got
  the hang of it.

### Why Context

- As I briefly mentioned in the first section, I believe that using Redux would be an overkill for this project. It's a
  small application with just a handful of data, so using context was sufficient. If the project were larger, I would
  definitely consider using Redux. However, in this case, context is a valuable hook that does the same
  job more or less with little effort in a situation like this. Lastly, in my humble opinion, it is important to
  understand the basics. Without the knowledge of them, there is no point of using the tools that is created based on
  those basics. By choosing to use context instead of Redux, I also was able to demonstrate my understanding of the
  basics as well.

### Why did I make the API request using `loader`

- I needed a way of fetching data on every refresh of the page that uses the data response, but at the same time I
  needed to display the loading icon at the welcome page, not at the page I showed the details. As a result, I came
  up with this approach, when user presses enter after choosing a place, I extract the longitude and latitude of that
  place, display the loading icon, and navigate to the page where the weather information is
  displayed, passing the longitude and latitude values as query parameters. While the page is loading, I make the
  request with given parameter values, wait for the response to arrive, and THEN navigate fully to the page. This way,
  it remains on the welcome page until the whole fetching is complete.

## Feedback about the project

- I have a couple of nitpicks I would like you to know about the figma file you gave;
    - For `base-gray-600` color, you used `#1E1E29` color code in the project section, but you put `#22222F` color code
      in the style guide section for the same color. I think despite being a small issue it still is an issue and causes
      confusion.
    - Icon set provided was a bit limited; for example, there were no icons for snow, so I had to improvise.
    - I also think it would be beneficial if you were to share icons without the linear-background lights for us to use
      in the last section where we display the week's general weather forecast.

-Other than my nitpicks, I think it was a fun project to do. It was basic, but at the same time, it gave me an
opportunity to showcase what I know. Providing a design to follow was also nice since it pushed all of us to use the
same standards and demonstrate how good we are at following a design and creating a pixel-perfect implementation.
