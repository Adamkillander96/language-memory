<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-if="message" class="message" :class="message.type">
      <p>{{ message.text }}</p>
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
  @Prop() private msg!: string;
}
</script>