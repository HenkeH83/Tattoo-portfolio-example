<graphic />

<style>
    graphic {
        position: absolute;
        top: 0;
        right: 0;
        z-index: -1;
        height: 100%;
        width: 100%;
        background-color: var(--Ca);
        -webkit-clip-path: polygon(
            15% 50%,
            70% 25%,
            100% 25%,
            100% 100%,
            55% 100%
        );
        clip-path: polygon(15% 50%, 70% 25%, 100% 25%, 100% 100%, 55% 100%);
    }
    @media only screen and (min-width: 600px) {
        graphic {
            -webkit-clip-path: polygon(
                20% 45%,
                80% 15%,
                100% 15%,
                100% 100%,
                55% 100%
            );
            clip-path: polygon(20% 45%, 80% 15%, 100% 15%, 100% 100%, 55% 100%);
        }
    }
    @media only screen and (min-width: 1200px) {
        graphic {
            -webkit-clip-path: polygon(
                39% 45%,
                87% 0%,
                100% 0%,
                100% 100%,
                55% 100%
            );
            clip-path: polygon(39% 45%, 87% 0%, 100% 0%, 100% 100%, 55% 100%);
        }
    }
</style>
