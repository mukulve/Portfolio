<script>
  // skill images
  let skillimgs = [
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    },
  ];

  //if mobile dont show skill images
  var innerWidth;
  var imggrid = { show: false };

  $: if (innerWidth < 720) {
    imggrid.show = false;
  } else {
    imggrid.show = true;
  }
</script>

<section class="hero">
  {#if imggrid.show}
    <div class="header_grid">
      {#each skillimgs as { url }, i}
        <img class="skill_img" src={url} alt={url} />
      {/each}
    </div>
  {/if}
  <div class="header_txt">
    <h1>
      <span>Hi I'm Mukul</span><span class="green">A Software Engineer</span>
    </h1>
  </div>
</section>
<svelte:window bind:innerWidth />

<style scoped>
  .hero {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  section {
    padding-left: var(--padding);
    padding-right: var(--padding);
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .header_grid {
    width: 100%;
    position: relative;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    gap: 1.5rem;
    overflow: hidden;
    justify-content: center;
    justify-items: center;
    align-items: center;
  }

  .skill_img {
    height: 65px;
    opacity: 70%;
  }

  .header_txt {
    box-shadow: var(--box-shadow);
    text-align: left;
    position: absolute;
    background-color: var(--background-color);
    overflow: hidden;
    padding-top: 3rem;
    padding-bottom: 3rem;
    padding-right: 1rem;
    word-break: break-word;
  }

  .hero h1 span {
    display: block;
    font-weight: 500;
    font-size: 4rem;
    line-height: 1.9;
  }

  .green {
    color: var(--limegreen);
  }

  @media only screen and (max-width: 700px) {
    .header_txt {
      position: relative;
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
  }

  @media only screen and (max-width: 440px) {
    .hero h1 span {
      font-size: 3.5rem;
    }
    section {
      padding-top: var(--padding);
      padding-bottom: var(--padding);
    }
  }

  @media only screen and (max-width: 300px) {
    .hero h1 span {
      font-size: 3rem;
    }
  }
</style>
