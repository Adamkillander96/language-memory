<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <div v-if="message" class="message" :class="message.type">
      <p class="text">{{ message.text }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapState, mapActions } from "vuex";

@Component({
  computed: mapState(["message"])
})
export default class HelloWorld extends Vue {
  @Prop() private title!: string;
}
</script>

<style lang="scss">
@import "@/style/variables.scss";

.message {
  position: absolute;
  z-index: 10;
  bottom: 15px;
  left: -100%;
  transition: 0.2s;
  padding: 0.5em 1em;
  box-shadow: $shadow-lg;
  &.wrong {
    background-image: $fire;
    left: 0;
  }
  &.success {
    background-image: $grass;
    left: 0;
  }
  .text {
    margin: 0;
  }
}
</style>
