<template>
    <button
 class="button is-primary mt-10"
 v-for="v in []"
:key="v.key"
        v-if="true"
        @click="onClick"
    >
        <!-- @slot default inner button content -->
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "my-button",
    methods: {
        onClick(value) {
            /**
             * Click event
             *
             * @event click
             */
            this.$emit("click");
        },
    },
};
</script>

<style scoped>
button {
    border: 1px solid #eee;
    border-radius: 3px;
    background-color: #ffffff;
    cursor: pointer;
    font-size: 15pt;
    padding: 3px 10px;
}
</style>
