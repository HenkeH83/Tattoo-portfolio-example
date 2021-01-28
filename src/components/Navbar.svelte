<script>
  import {
    home,
    work,
    about,
    contact,
    currentWidth,
    currentPage,
  } from "../store";
  import { scale } from "svelte/transition";
  import { sineIn } from "svelte/easing";
  import { clickOutside } from "../utility/clickOutside";

  let isHome, isWork, isAbout, isContact;
  let open = false;

  $: if ($currentWidth > 900) {
    open = false;
    switch ($currentPage) {
      case "home":
        isHome = true;
        isWork = false;
        isAbout = false;
        isContact = false;
        break;
      case "work":
        isHome = false;
        isWork = true;
        isAbout = false;
        isContact = false;
        break;
      case "about":
        isHome = false;
        isWork = false;
        isAbout = true;
        isContact = false;
        break;
      case "contact":
        isHome = false;
        isWork = false;
        isAbout = false;
        isContact = true;
        break;
    }
  }

  // No color behind active page in mobile
  $: if ($currentWidth < 900) {
    isHome = false;
    isWork = false;
    isAbout = false;
    isContact = false;
  }

  const scrollTo = (page) => {
    const scrollOptions = {
      behavior: "smooth",
      block: "start",
      inline: "start",
    };
    page.scrollIntoView(scrollOptions);
  };

  const closeMenu = () => {
    open = false;
  };
  const handleClickOutside = () => {
    open = false;
  };
</script>

<nav-container
  class:open={open === true}
  use:clickOutside
  on:click_outside={handleClickOutside}
>
  {#key open}
    <ul
      in:scale={{
        duration: 500,
        opacity: 0.5,
        easing: sineIn,
      }}
      class:open={open === true}
    >
      <li class:current={isHome}>
        <button on:click={(scrollTo($home), closeMenu())}> Home </button>
      </li>
      <li class:current={isWork}>
        <button on:click={(scrollTo($work), closeMenu())}> Work </button>
      </li>
      <li class:current={isAbout}>
        <button on:click={(scrollTo($about), closeMenu())}> About </button>
      </li>
      <li class:current={isContact}>
        <button on:click={(scrollTo($contact), closeMenu())}> Contact </button>
      </li>
    </ul>
  {/key}
  <tab class:open={open === true} on:click={() => (open = !open)}>
    <p class:open={open === true}>Menu</p>
  </tab>
</nav-container>

<style>
  nav-container {
    position: fixed;
    top: 3rem;
    width: 100%;
    font-size: var(--Fm);
    height: 7rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
  }
  ul {
    background: transparent;
    height: 100%;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
  }
  button {
    font-size: var(--Fm);
    font-family: inherit;
  }
  tab {
    background-color: var(--Cs);
    width: 7rem;
    height: 4rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    border: 5px solid var(--Cw);
    border-right: none;
    border-bottom-left-radius: 50px;
    border-top-left-radius: 50px;
    -webkit-transition: width 0.1s ease-out, height 0.2s ease-out;
    -o-transition: width 0.1s ease-out, height 0.2s ease-out;
    transition: width 0.1s ease-out, height 0.2s ease-out;
  }
  ul {
    display: none;
  }
  li {
    background-color: transparent;
    -webkit-transition: all 0.2s ease-out;
    -o-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
  }
  .current {
    background-color: var(--Ca);
  }
  tab.open {
    width: 13rem;
    height: 15rem;
    position: absolute;
    z-index: -1;
  }
  p.open {
    display: none;
  }
  ul.open {
    margin-right: 1em;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: space-evenly;
    -ms-flex-pack: space-evenly;
    justify-content: space-evenly;
  }
  nav-container.open {
    right: 0;
    width: 13rem;
    height: 15rem;
  }

  @media only screen and (min-width: 900px) {
    nav-container {
      -ms-flex-pack: distribute;
      justify-content: space-around;
      top: 0;
    }
    tab {
      display: none;
    }
    ul {
      width: 100%;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -ms-flex-pack: distribute;
      justify-content: space-around;
    }
    ul::before {
      -webkit-transform: scaleY(0);
      -ms-transform: scaleY(0);
      transform: scaleY(0);
      -webkit-transform-origin: top;
      -ms-transform-origin: top;
      transform-origin: top;
    }

    ul:hover::before {
      -webkit-transform: scaleY(1);
      -ms-transform: scaleY(1);
      transform: scaleY(1);
    }

    ul::before {
      content: " ";
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      inset: 0 0 0 0;
      background: var(--Cs);
      z-index: -1;
      -webkit-transition: -webkit-transform 0.3s ease-out;
      transition: -webkit-transform 0.3s ease-out;
      -o-transition: transform 0.3s ease-out;
      transition: transform 0.3s ease-out;
      transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
    }
  }
</style>
