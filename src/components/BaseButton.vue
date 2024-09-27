<script setup>
// defineProps(['color']);
defineProps({
    color: {
        type: String,
        default: 'blue',
    }
});
</script>

<template>
    <button
        type="submit"
        class="transition-colors py-2 px-4 rounded text-white"
        :class="{
            'bg-blue-700'           : color == 'blue',
            'focus:bg-blue-500'     : color == 'blue',
            'hover:bg-blue-500'     : color == 'blue',
            'active:bg-blue-900'    : color == 'blue',
            'bg-green-700'          : color == 'green',
            'focus:bg-green-500'    : color == 'green',
            'hover:bg-green-500'    : color == 'green',
            'active:bg-green-900'   : color == 'green',
            'bg-red-700'            : color == 'red',
            'focus:bg-red-500'      : color == 'red',
            'hover:bg-red-500'      : color == 'red',
            'active:bg-red-900'     : color == 'red',
        }"
    >
        <slot />
    </button>
</template>