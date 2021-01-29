<script>
  import { about } from "../store";
  import { client, urlFor, serializers } from "../sanity-client";
  import blocksToHtml from "@sanity/block-content-to-html";
  import Spinner from "./Spinner.svelte";

  async function getContent() {
    const content = await client.fetch(
      `*[_type == 'post' && tag[]->tag match 'about']
    {
      title,
      alt,
      mainImage {
        asset -> {
          url,
          lqip
        },
        hotspot
      },
      body
    }`
    );

    return content;
  }

  let promise = getContent();
</script>

<article class="about" bind:this={$about}>
  <about-container>
    {#await promise}
      <Spinner />
    {:then content}
      <about-img>
        <img
          class="item"
          srcset="
          {urlFor(content[0].mainImage)
            .width(400)
            .height(647)
            .minWidth(250)
            .maxWidth(450)
            .quality(80)
            .auto('format')
            .url()} 400w,
          {urlFor(content[0].mainImage)
            .width(900)
            .height(1456)
            .quality(80)
            .auto('format')
            .url()} 2x"
          sizes="(max-width: 599px) 100vw, 40vw"
          src={urlFor(content[0].mainImage)
            .width(400)
            .height(647)
            .minWidth(250)
            .maxWidth(450)
            .quality(80)
            .auto("format")
            .url()}
          alt={content[0].alt}
          width="600"
          height="971"
        />
      </about-img>
      <about-text>
        {@html blocksToHtml({
          blocks: content[0].body,
          serializers: serializers,
        })}
      </about-text>
    {/await}
  </about-container>
</article>

<style>
  .about {
    min-height: 70vh;
  }
  about-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  img {
    width: 100%;
    min-width: 250px;
    max-width: 450px;
    height: auto;
  }
  about-text {
    margin-top: 2rem;
    width: 90vw;
    font-size: var(--Fs);
  }
  @media only screen and (min-width: 600px) {
    .about {
      padding-left: 3rem;
      padding-right: 3rem;
    }
    about-container {
      -webkit-box-pack: unset;
      -ms-flex-pack: unset;
      justify-content: unset;
      -webkit-box-align: unset;
      -ms-flex-align: unset;
      align-items: unset;
      display: -ms-grid;
      display: grid;
      grid-template-areas: "image text";
      -ms-grid-columns: 2fr 3fr;
      grid-template-columns: 2fr 3fr;
    }
    about-text {
      width: auto;
      grid-area: text;
      margin: 0px;
      padding-left: 2rem;
    }
    img {
      grid-area: image;
      padding-top: 0;
    }
  }
  @media only screen and (min-width: 600px) {
    about-text {
      -ms-grid-row: 1;
      -ms-grid-column: 2;
    }
    img {
      -ms-grid-row: 1;
      -ms-grid-column: 1;
    }
  }
  @media only screen and (min-width: 1100px) {
    .about {
      padding-left: 7rem;
      padding-right: 7rem;
    }
    about-text {
      padding-left: 10rem;
      font-size: var(--Fm);
    }
  }
</style>
