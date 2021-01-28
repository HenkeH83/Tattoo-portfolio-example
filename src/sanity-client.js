import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import blocksToHtml from "@sanity/block-content-to-html";

export const client = sanityClient({
    projectId: "31pqoz1b",
    dataset: "production"
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
    return builder.image(source)
}

const h = blocksToHtml.h;
export const serializers = {
    types: {
        code: (props) =>
            h(
                "pre",
                { className: props.node.language },
                h("code", props.node.code)
            ),
    },
};