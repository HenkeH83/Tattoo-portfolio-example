<script>
  import { work } from "../store";
  import { client, urlFor } from "../sanity-client";
  import Spinner from "./Spinner.svelte";

  async function getContent() {
    const content = await client.fetch(
      `*[_type == 'post' && tag[]->tag match 'work']
      {
        title,
        alt,
        mainImage {
          asset -> {
            url,
            lqip
          },
          hotspot
        }
      }`
    );

    return content;
  }

  let promise = getContent();
</script>

<article class="work" bind:this={$work}>
  <gallery-container>
    {#await promise}
      <Spinner />
    {:then posts}
      {#each posts as post}
        <img
          srcset="
        {urlFor(post.mainImage)
            .width(400)
            .height(647)
            .quality(80)
            .auto('format')
            .url()} 400w,
        {urlFor(post.mainImage)
            .width(600)
            .height(971)
            .quality(80)
            .auto('format')
            .url()} 600w,
        {urlFor(post.mainImage)
            .width(900)
            .height(1456)
            .quality(80)
            .auto('format')
            .url()} 2x"
          sizes="(max-width: 599px) 100vw,
          (max-width: 899px) 50vw,
          (max-width: 11999px) 33vw,
          25vw"
          src={urlFor(post.mainImage)
            .width(900)
            .height(1456)
            .quality(80)
            .auto("format")
            .url()}
          alt={post.alt}
          width="400"
          height="647"
          loading="lazy"
        />
      {/each}
    {/await}
  </gallery-container>
</article>

<style>
  .work {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  gallery-container {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (1fr) [1];
    grid-template-columns: repeat(1, 1fr);
  }
  img {
    width: 100%;
    min-width: 200px;
    height: auto;
    min-height: 300px;
    -o-object-fit: contain;
    object-fit: contain;
  }
  @media (min-width: 600px) {
    gallery-container {
      -ms-grid-columns: (1fr) [2];
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 900px) {
    gallery-container {
      -ms-grid-columns: (1fr) [3];
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (min-width: 1200px) {
    gallery-container {
      -ms-grid-columns: (1fr) [4];
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>
