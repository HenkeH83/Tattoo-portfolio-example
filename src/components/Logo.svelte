<script>
    import RustyGraphic from "./RustyGraphic.svelte";
</script>

<border>
    <svg
        width="400"
        height="400"
        version="1.1"
        viewBox="0 0 105.83 105.83"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:cc="http://creativecommons.org/ns#"
        xmlns:dc="http://purl.org/dc/elements/1.1/"
        xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
    >
        <text
            transform="matrix(.84057 -.44875 .38283 .98529 0 0)"
            x="-20.86965"
            y="63.735416"
            fill="#eaeaea"
            font-family="TT2020Base"
            font-size="31.314px"
            stroke="#000000"
            stroke-width=".31926"
            style="font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;line-height:1.25;paint-order:stroke fill markers"
            xml:space="preserve"
        >
            <tspan
                x="-20.86965"
                y="63.735416"
                fill="#eaeaea"
                font-family="TT2020Base"
                font-size="31.314px"
                stroke="#000000"
                stroke-width=".31926"
                style="font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;paint-order:stroke fill markers"
                >Made up</tspan
            >
        </text>
        <text
            transform="matrix(.83372 -.46597 .39753 .97726 0 0)"
            x="-20.296978"
            y="93.791954"
            fill="#eaeaea"
            font-family="TT2020Base"
            font-size="31.314px"
            stroke="#000000"
            stroke-width=".31926"
            style="font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;line-height:1.25;paint-order:stroke fill markers"
            xml:space="preserve"
            ><tspan
                x="-20.296978"
                y="93.791954"
                fill="#eaeaea"
                font-family="TT2020Base"
                font-size="31.314px"
                stroke="#000000"
                stroke-width=".31926"
                style="font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;paint-order:stroke fill markers"
                >tattoo</tspan
            ></text
        >
    </svg>
</border>
<RustyGraphic />

<style>
    border {
        border: 4px solid var(--Cw);
        padding: 2rem;
    }
    svg {
        height: 33vh;
        width: 33vh;
    }
    @media only screen and (min-width: 600px) {
        border {
            padding: 4rem;
        }
    }
</style>
