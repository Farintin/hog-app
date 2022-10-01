// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const services = [
  {
    name: "Cinema therapy",
    image: '/img/services/young-happy-loving-couple-sitting-sofa-indoors-watching-happy-children-in-tv_1800x1800.jpg',
    text: `A form of therapy that uses movies, particularly videos, as therapeutic tools. 
      Cinema therapy can be a catalyst for healing and growth for those who are open to 
      learning how movies affect people and to watching certain films with conscious awareness. 
      Cinema therapy allows one to use the effect of imagery, plot, music, etc. 
      in films on the psyche for insight, inspiration, emotional release or relief and natural change. 
      Used as part of psychotherapy, cinema therapy is an innovative method based on traditional therapeutic principles. 
      We have a selection of movies that where curated by professionals to best suit the conditions of our patients.`,
    icon: <svg 
              version="1.1" 
              id="Layer_1" 
              xmlns="http://www.w3.org/2000/svg" 
              x="0px" 
              y="0px" 
              viewBox="0 0 122.88 95.8" 
              className='icon'
          >
              <g>
                  <path d="M12.14,0H32.8h29.43h28.8h19.71c3.34,0,6.38,1.37,8.58,
                  3.56c2.2,2.2,3.56,5.24,3.56,8.58v7.13v57.25v7.09 c0,3.34-1.37,
                  6.38-3.56,8.58c-2.2,2.2-5.24,3.56-8.58,3.56h-19.2c-0.16,0.03-0.33,
                  0.04-0.51,0.04c-0.17,0-0.34-0.01-0.51-0.04 H62.74c-0.16,0.03-0.33,
                  0.04-0.51,0.04c-0.17,0-0.34-0.01-0.51-0.04H33.31c-0.16,0.03-0.33,
                  0.04-0.51,0.04 c-0.17,0-0.34-0.01-0.51-0.04H12.14c-3.34,0-6.38-1.37-8.58-3.56S0,
                  86.95,0,83.61v-7.09V19.27v-7.13C0,8.8,1.37,5.76,3.56,3.56 C5.76,1.37,
                  8.8,0,12.14,0L12.14,0z M55.19,31.24l20.53,14.32c0.32,0.2,0.61,0.48,0.84,
                  0.81c0.92,1.33,0.58,3.14-0.74,4.06 L55.37,64.57c-0.5,0.41-1.15,0.66-1.85,
                  0.66c-1.62,0-2.93-1.31-2.93-2.93V33.63h0.01c0-0.58,0.17-1.16,
                  0.52-1.67 C52.05,30.64,53.87,30.32,55.19,31.24L55.19,31.24z M93.95,
                  79.45V89.9h16.78c1.73,0,3.3-0.71,4.44-1.85 c1.14-1.14,1.85-2.71,
                  1.85-4.44v-4.16H93.95L93.95,79.45z M88.1,89.9V79.45H65.16V89.9H88.1L88.1,
                  89.9z M59.31,89.9V79.45H35.73 V89.9H59.31L59.31,89.9z M29.87,89.9V79.45H5.85v4.16c0,
                  1.73,0.71,3.3,1.85,4.44c1.14,1.14,2.71,1.85,4.44,1.85H29.87L29.87,
                  89.9z M5.85,73.6H32.8h29.43h28.8h26V22.2h-26h-28.8H32.8H5.85V73.6L5.85,
                  73.6z M88.1,16.35V5.85H65.16v10.49H88.1L88.1,16.35z M93.95,
                  5.85v10.49h23.07v-4.2c0-1.73-0.71-3.3-1.85-4.44c-1.14-1.14-2.71-1.85-4.44-1.85H93.95L93.95,
                  5.85z M59.31,16.35V5.85 H35.73v10.49H59.31L59.31,16.35z M29.87,
                  16.35V5.85H12.14c-1.73,0-3.3,0.71-4.44,1.85c-1.14,1.14-1.85,
                  2.71-1.85,4.44v4.2H29.87 L29.87,16.35z"/>
              </g>
          </svg>,
  },
  {
    name: "Talk To a therapist",
    image: '/img/services/5ec827273f73707932588946.webp',
    text: `At its core, talk therapy, or psychotherapy, allows a person to discuss their concerns, 
      goals, and challenges with a person who holds no biases and no judgments. After a series of sessions, 
      talk therapy should help a person target, and eventually change, patterns of thought and behavior that may 
      be a hindrance to a healthy state of mind. These sessions will always be strictly confidential. 
      Our tailoring algorithm plays a major role here as it draws from several therapeutic frameworks and 
      previous conversation between patients and the Ai to find the right therapist with the right approach to your issue. 
      The Ai literally helps you book a session with a human-therapist.`,
    icon: <svg 
              xmlns="http://www.w3.org/2000/svg" 
              shapeRendering="geometricPrecision" 
              textRendering="geometricPrecision" 
              imageRendering="optimizeQuality" 
              fillRule="evenodd" 
              clipRule="evenodd" 
              viewBox="0 0 512 451.03"
              className='icon'
          >
              <path d="M213.17 390.59c53.96 52.06 130.29 67.78 206.61 35.26l64.05 
              25.18-21.22-50.47c71.17-57 58.43-135.34 6.04-188.75-3.51 20.53-10.46 
              39.99-20.36 57.98-14.07 25.58-34.21 48.33-58.89 67.05-23.91 18.15-51.82 
              32.38-82.24 41.58-28.99 8.77-60.74 13.15-93.98 12.17h-.01zM223.6 
              89.12l21.86 51.14 55.41 4.96c2.47.19 4.25 2.35 4.06 4.83-.12 1.21-.63 
              2.22-1.52 2.99l-41.94 36.6 12.39 54.26c.57 2.41-.95 4.76-3.37 5.33-1.2.26-2.47 
              0-3.43-.63l-47.65-28.47-47.78 28.6c-2.1 1.27-4.83.57-6.1-1.53-.64-1.02-.76-2.22
              -.51-3.3l12.39-54.26-41.94-36.6c-1.84-1.59-2.03-4.45-.44-6.29.89-.96 2.03-1.4 
              3.18-1.47l55.28-4.95 21.85-51.21c.96-2.29 3.56-3.31 5.85-2.36 1.14.45 1.97 
              1.34 2.41 2.36zm1.28-89 .22.01c60.08 1.82 113.95 23.17 152.5 56.22 39.2 33.61 
              62.71 79.31 61.24 129.15v.11c-1.51 49.92-27.76 94.22-68.97 125.49-40.55 
              30.77-95.69 48.92-155.8 47.15-16.83-.49-33.1-2.5-48.59-5.83-14.55-3.14-28.52
              -7.46-41.73-12.81L29.8 376.55l31.39-74.66c-18.84-16.19-34.06-35.17-44.59
              -56.04C5.23 223.32-.71 198.58.07 172.76c1.5-49.91 27.75-94.22 68.96-125.49C109.58 
              16.5 164.73-1.65 224.84.12h.04zm-.46 21.57-.22-.01c-55.07-1.61-105.36 
              14.84-142.15 42.75-36.12 27.42-59.12 65.9-60.42 108.92-.67 22.12 4.45 
              43.37 14.24 62.78 10.29 20.4 25.74 38.8 45.05 54.1l6.43 5.09-17.83 
              42.4 54.49-21.43 4.07 1.74c13.14 5.61 27.17 10.08 41.88 13.25 14.4 
              3.1 29.37 4.96 44.7 5.41 55.09 1.62 105.4-14.84 142.19-42.75 36.13-27.42 
              59.13-65.89 60.43-108.92v-.11c1.26-42.99-19.35-82.7-53.72-112.16-35.01-30.01
              -84.13-49.4-139.1-51.06h-.04z"/>
          </svg>,
  },
  {
    name: "music therapy",
    image: '/img/services/girl_listening_music_therapy.jpg',
    text: `Music therapy is an evidence-based treatment that helps with a variety of disorders including cardiac conditions, 
      depression, autism, substance abuse, etc. It can help with memory, lower blood pressure, improve coping, reduce stress, 
      improve self-esteem and more. We have a selection of different genre of music for patients to stream based on their mood.`,
    icon: <svg 
            version="1.1" 
            id="Layer_1" 
            xmlns="http://www.w3.org/2000/svg" 
            x="0px" 
            y="0px" 
            viewBox="0 0 110.97 122.88" 
            style={{ 
              width: 27,
              enableBackground: 'new 0 0 110.97 122.88',
              '& .st0': {
              },
              '& .st1': {
                  fillRule: 'evenodd',
                  clipRule: 'evenodd'
              }
            }}
            className='icon' 
          >
              <g>
                <path className="st1" 
                  d="M66.37,0h13.88v4.63c34.72,7.95,38.69,24.62,18.55,50.9c2.14-26.07-0.48-31.67-18.55-32.88v65.91 
                  c0.04,0.35,0.04,0.7,0.04,1.06c0,8.57-8.99,17.07-20.08,18.98c-3.5,0.6-6.78,0.48-9.64-0.24c5.41-5.56,
                  9.85-11.93,10.38-19.45 l0.02-0.46c0.01-0.13,0.01-0.3,0.01-0.52c0.04-2.35-0.36-4.52-1.12-6.48C59.37,
                  80.22,58.75,79.06,58,78 c2.93-0.62,5.83-0.58,8.36,0.31L66.37,0L66.37,0L66.37,0z M7.71,14.05c-2.81,
                  0-5.1-2.29-5.1-5.11c0-2.81,2.29-5.1,5.1-5.1h42.69 c2.81,0,5.1,2.29,5.1,5.1s-2.29,5.1-5.1,5.1L7.71,
                  14.05L7.71,14.05L7.71,14.05z M16.15,38.82c-2.81,0-5.1-2.29-5.1-5.11 c0-2.81,2.29-5.1,5.1-5.1h34.25c2.81,
                  0,5.1,2.29,5.1,5.1c0,2.81-2.29,5.1-5.1,5.1H7.71L16.15,38.82L16.15,38.82z M24.59,63.6 c-2.81,
                  0-5.1-2.29-5.1-5.1c0-2.81,2.29-5.1,5.1-5.1h25.81c2.81,0,5.1,2.29,5.1,5.1c0,2.81-2.29,5.1-5.1,
                  5.1H24.59L24.59,63.6 L24.59,63.6z"/>
                <path className="st0" 
                  d="M26.25,81.44c0.33,0.38,0.67,0.77,1.09,1.23l1.14,1.28l1.27-1.15c0.37-0.34,0.76-0.69,
                  1.12-1.04 c3.93-3.61,6.89-6.33,12.79-6.21c0.23,0,0.48,0.02,0.73,0.04c3.3,0.23,6.3,1.55,
                  8.45,3.7c2.12,2.13,3.42,5.08,3.34,8.62 c0,0.22-0.01,0.45-0.03,0.7c-0.69,9.86-10.44,18.15-18.52,
                  25.03c-1.56,1.33-3.05,2.59-4.49,3.88l-5.96,5.36l-5.81-6.17 C8.81,102.17,10.05,103.97,1.23,
                  93.13c-2.07-4.51-1.5-9.38,1.58-13.26c1.41-1.78,3.26-3.22,5.35-4.18c2.41-1.08,5.14-1.55,
                  7.9-1.14 C20.82,75.27,23.27,78.06,26.25,81.44L26.25,81.44L26.25,81.44L26.25,81.44z"/>
              </g>
          </svg>,
  },
  {
    name: "bedtime stories",
    image: '/img/services/FEATURED-Best-bedtime-story-podcasts.jpg',
    text: `We have a selection of Bedtime Stories for Adults and children to Help Overcome insomnia, Stress, Anxiety and Depression.`,
    icon: <svg 
            version="1.1" 
            id="Layer_1" 
            xmlns="http://www.w3.org/2000/svg" 
            x="0px" 
            y="0px" 
            viewBox="0 0 122.88 110.25" 
            className="icon"
            style={{ 
              enableBackground: 'new 0 0 122.88 110.25',
              '& .st0': {
                fillRule: 'evenodd',
                clipRule: 'evenodd'
              }
            }}
          >
              <g>
                <path className="st0" 
                d="M35.44,41.98c8.62,0,15.61,6.99,15.61,15.61c0,8.62-6.99,15.61-15.61,15.61c-8.62,
                0-15.61-6.99-15.61-15.61 C19.83,48.97,26.82,41.98,35.44,41.98L35.44,41.98z M3.36,
                31.61h7.3c1.85,0,3.36,1.56,3.36,3.36v43.77h37.33l9.45-33.22 c-2.49-4.42-3.92-9.53-3.92-14.98C56.87,
                13.67,70.54,0,87.42,0l0,0c16.87,0,30.55,13.67,30.55,30.55c0,5.08-1.24,9.86-3.43,14.07 c5.03,
                3.44,8.34,9.22,8.34,15.72v19.04h-0.02c0.01,0.12,0.02,0.24,0.02,0.37v30.5h-14.02V95.94H14.02v13.66H0V34.97 
                C0,33.13,1.51,31.61,3.36,31.61L3.36,31.61z M66.39,41.3h37.45c1.49,0,2.94,0.17,4.34,0.5c1.82-3.35,
                2.85-7.18,2.85-11.26 c0-13.04-10.57-23.61-23.61-23.61l0,0c-13.04,0-23.61,10.58-23.61,23.61C63.8,
                34.42,64.74,38.08,66.39,41.3L66.39,41.3z M86.92,18.2c0.68,0,1.24,0.56,1.24,1.24V30.8h11.7c0.69,0,
                1.24,0.56,1.24,1.24v3.74c0,0.68-0.56,1.24-1.24,1.24H81.94V19.44 c0-0.69,0.56-1.24,1.25-1.24H86.92L86.92,18.2z"/>
              </g>
          </svg>,
  },
  {
    name: "meditation audios",
    image: '/img/services/relax-calm-black-woman-listening-music-enjoying-meditation-headphones.jpg',
    text: `We have a selection of meditation audio recordings for you. 
      Whether you have five minutes or half an hour, take a moment to breathe and
      energize your mind with our thoughtful meditation series.
    `,
    icon: <svg 
            version="1.1" 
            id="Layer_1" 
            xmlns="http://www.w3.org/2000/svg"  
            x="0px" 
            y="0px" 
            viewBox="0 0 122.88 122.88" 
            className="icon"
            style={{ enableBackground: 'new 0 0 122.88 122.88' }} 
          >
              <g>
                <path d="M61.44,0c16.97,0,32.33,6.88,43.44,18c0.48,0.48,0.96,0.97,1.42,1.47l-1.92,
                6.46c-1.12-1.35-2.3-2.65-3.54-3.89l0,0 C90.76,11.96,76.83,5.72,61.44,5.72s-29.32,
                6.24-39.4,16.32C11.96,32.12,5.72,46.05,5.72,61.44s6.24,29.32,16.32,39.4 c10.08,
                10.08,24.01,16.32,39.4,16.32s29.32-6.24,39.4-16.32c10.08-10.08,16.32-24.01,16.32-39.4c0-5.14-0.7-10.11-2-14.84 
                l2.78-9.33c3.18,7.42,4.94,15.59,4.94,24.17c0,16.97-6.88,32.33-18,43.44c-11.12,11.12-26.48,18-43.44,18 
                c-16.97,0-32.33-6.88-43.44-18C6.88,93.77,0,78.41,0,61.44C0,44.47,6.88,29.11,18,18C29.11,6.88,44.47,0,
                61.44,0L61.44,0L61.44,0z M84.49,65.97c2.34,0,4.41,1.16,5.67,2.94l7.86-1.46l16.42-55.19c0.45-1.54,
                2.07-2.42,3.61-1.97s2.42,2.07,1.97,3.61l-16.93,56.9 c-0.33,1.13-1.29,1.91-2.39,2.06l-9.48,1.76c-0.76,
                3.02-3.49,5.25-6.74,5.25c-3.84,0-6.95-3.11-6.95-6.95S80.65,65.97,84.49,65.97 L84.49,65.97z M34.22,
                54.89c-0.44,1.27-1.82,1.94-3.09,1.51c-1.27-0.44-1.94-1.82-1.51-3.09c1.72-4.97,4.45-9.45,7.94-13.21 
                c3.5-3.77,7.78-6.82,12.59-8.9c1.23-0.53,2.66,0.04,3.19,1.27c0.53,1.23-0.04,2.66-1.27,3.19c-4.17,
                1.8-7.89,4.46-10.95,7.76 C38.09,46.69,35.72,50.59,34.22,54.89L34.22,54.89L34.22,54.89z M21.29,52.45c-0.33,
                1.31-1.66,2.1-2.96,1.76 c-1.31-0.33-2.1-1.66-1.76-2.97c1.96-7.68,5.79-14.61,10.96-20.29c5.21-5.72,
                11.79-10.16,19.21-12.82 c1.27-0.45,2.67,0.21,3.12,1.48c0.45,1.27-0.21,2.67-1.48,3.12c-6.67,2.39-12.57,
                6.38-17.25,11.5 C26.49,39.33,23.05,45.56,21.29,52.45L21.29,52.45L21.29,52.45z M61.44,47.14c3.95,0,7.53,
                1.6,10.11,4.19 c2.59,2.59,4.19,6.16,4.19,10.11c0,3.95-1.6,7.53-4.19,10.11c-2.59,2.59-6.16,4.19-10.11,
                4.19c-3.95,0-7.53-1.6-10.11-4.19 c-2.59-2.59-4.19-6.16-4.19-10.11c0-3.95,1.6-7.53,4.19-10.11C53.91,
                48.74,57.49,47.14,61.44,47.14L61.44,47.14L61.44,47.14z"/>
              </g>
          </svg>
  }
];



export { services }