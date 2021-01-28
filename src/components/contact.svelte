<script>
  import { onMount } from "svelte";
  import { contact } from "../store";

  const isPhone = new RegExp("^[0-9]+$");
  const isMail = new RegExp(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  let name = "",
    mail = "",
    phone = "",
    message = "",
    info = "",
    submitted = false;

  $: validMail = (mail != "" && isMail.test(mail)) || submitted ? true : false;
  $: validPhone = phone === "" || isPhone.test(phone) ? true : false;

  onMount(() => {
    validMail = true;
    validPhone = true;
  });

  function submit(event) {
    info = "";
    if (mail != "" && validMail && validPhone) {
      alert("This could have been a new client messaging you!");
      name = "";
      mail = "";
      phone = "";
      message = "";
      info =
        "Thx!\nYour message has been sent\nWe will get back to you as soon as we can.";
      submitted = true;
      validMail = true;
    } else {
      info = "Please review your";
      if (!validMail || mail === "") {
        info += " e-mail adress";
        if (mail === "") {
          validMail = false;
        }
        if (phone != "" && !validPhone) {
          info += " and";
        }
      }
      if (phone != "" && !validPhone) {
        info += " phone number";
      }
      info += ".";
    }
  }
</script>

<article class="contact" bind:this={$contact}>
  <form>
    <!-- //namn -->
    <label for="name">Name:</label><br />
    <input
      type="text"
      id="name"
      name="name"
      placeholder="Who are you?"
      bind:value={name}
    /><br />

    <!-- //mail -->
    <label for="mail">E-mail:</label><br />
    <input
      type="email"
      id="mail"
      name="mail"
      placeholder="awesome@email.com"
      class:notValid={!validMail}
      bind:value={mail}
    /><br />

    <!-- //telefonnummer -->
    <label for="tel">Phone number:</label><br />
    <input
      type="tel"
      id="tel"
      name="tel"
      placeholder="Not required, but nice."
      class:notValid={!validPhone}
      bind:value={phone}
    /><br />

    <!-- //meddelande -->
    <label for="message">Message:</label><br />
    <textarea
      type="text"
      id="message"
      name="message"
      placeholder="What's on your mind?"
      bind:value={message}
    /><br />
    <p>{info}</p>
    <button type="submit" on:click|preventDefault={submit}>Send</button>
  </form>
</article>

<style>
  .contact {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  input {
    margin-top: 0.6rem;
    margin-bottom: 2rem;
    padding: 1rem;
    width: 80vw;
  }
  textarea {
    border-radius: 8px;
    height: 12rem;
    padding: 1rem;
    width: 81.5vw;
  }
  button {
    margin-top: 2rem;
    margin-bottom: 4rem;
    padding: 0;
    font-size: var(--Fl);
  }
  .notValid {
    background-color: lightcoral;
    color: var(--Cw);
    outline: 1px solid red;
    border-radius: 5px;
    padding: 0.87rem;
    min-width: 84vw;
  }
  p {
    max-width: 80vw;
    margin-top: 2rem;
    word-wrap: normal;
    white-space: pre-line;
  }
  @media only screen and (min-width: 600px) {
    input {
      width: 50vw;
    }
    textarea {
      width: 51.5vw;
    }
    .notValid {
      min-width: 53vw;
    }
    p {
      max-width: 50vw;
    }
  }
  @media only screen and (min-width: 1200px) {
    input {
      width: 25vw;
    }
    textarea {
      width: 26.5vw;
    }
    .notValid {
      min-width: 26.5vw;
    }
    p {
      max-width: 25vw;
    }
  }
</style>
