<script context="module">
    export const load = ({ params }) => {
        const id = params.id;

        return {
            props: {
                id
            }
        };
    }
</script>

<script>
    export let id;
    import works from '$lib/data/works.json';

    let work = works[id-1];
</script>

<div class="center-screen">work in progress</div>

<style>
    .center-screen {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        min-height: 70vh;
    }
</style>