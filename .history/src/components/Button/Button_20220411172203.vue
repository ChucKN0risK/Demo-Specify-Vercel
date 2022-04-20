<template>
  <button
    type="button"
    :class="classes"
    @click="onClick"
    :style="style"
  >
    <span class="m-button__text">{{ label }}</span>
  </button>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  name: 'sp-button',

  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    },
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        'm-button': true,
        'm-button--primary': props.primary,
        'm-button--secondary': !props.primary,
        [`m-button--${props.size || 'medium'}`]: true,
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
      onClick() {
        emit('click');
      }
    }
  },
};
</script>

<style lang="scss">
@import './Button.scss';
</style>