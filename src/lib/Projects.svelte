<script>
  var projects = [
    "Weather App",
    "Real Time Chat",
    "Music Streaming App",
    "Portfolio",
    "Airticket Search",
    "Calculator",
  ];

  var descriptions = [
    "A Weather App Made With Vuejs",
    "A Real Time Chat App Made With Firebase",
    "A Music Streaming Service Made With Vuejs",
    "A Portfolio Made With Sveltekit",
    "Scrapes Airticket Data From The Web And Displays Them",
    "A Calculator Made With Reactjs",
  ];

  var githublinks = [
    "https://github.com/mukulve/Weather-App",
    "https://github.com/mukulve/Chat-App",
    "https://github.com/mukulve/Music-Streaming-Service",
    "https://github.com/mukulve/Portfolio",
    "https://github.com/mukulve/Airticket-Search-Engine",
    "https://github.com/mukulve/Calculator",
  ];

  var livelinks = [
    "https://weathermv.netlify.app/",
    "https://mukulve.github.io/Chat-App/",
    "https://music-streaming-service.netlify.app/",
    "https://mukulve.netlify.app/",
    "#",
    "https://calculatormv.netlify.app",
  ];
</script>

<section class="projects">
  <div class="divider" />
  <h1 class="title">Projects</h1>
  <div class="project_btns">
    <a href="https://github.com/mukulve"
      ><button><i class="fa-brands fa-github" /> Github</button></a
    >
    <a href="https://codepen.io/mukulve"
      ><button><i class="fa-brands fa-codepen" /> Codepen</button></a
    >
  </div>
  <div class="project_grid">
    {#each projects as project, index}
      <div class="project">
        <h1>{project}</h1>
        <h3>{descriptions[index]}</h3>
        <div class="project_btns_grid">
          <a href={githublinks[index]}
            ><button><i class="fa-brands fa-github" /> Github</button></a
          >
          <a href={livelinks[index]}
            ><button
              ><i class="fa-solid fa-arrow-up-right-from-square" /> Live</button
            ></a
          >
        </div>
      </div>
    {/each}
  </div>
</section>

<style scoped>
  .projects {
    padding-left: var(--padding);
    padding-right: var(--padding);
  }

  .project_btns {
    display: flex;
    justify-content: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    gap: 2rem;
  }

  .project_btns_grid {
    display: flex;
    padding-top: 1rem;
    padding-bottom: 1rem;
    gap: 2rem;
  }

  .project_btns button,
  .project_btns_grid button {
    border: none;
    background: none;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
  }

  .project_grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .project {
    padding: calc(var(--padding) / 2);
  }

  .project h1 {
    font-size: 1.5rem;
    font-weight: 500;
  }

  .project h3 {
    font-size: 1rem;
    font-weight: 400;
  }

  @media (max-width: 1000px) {
    .project_grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 550px) {
    .project_grid {
      grid-template-columns: 1fr;
    }
  }
</style>
