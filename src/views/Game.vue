<template>
  <article id="game" class="game">
    <Memory title="Language memory game" />
    <section>
      <ul class="list">
        <Card v-for="(card, key) in cards" :key="key" :card="card" :index="key" />
      </ul>
    </section>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Memory from "@/components/Memory.vue"; // @ is an alias to /src
import Card from "@/components/cards/Card.vue"; // @ is an alias to /src
import { mapState, mapActions } from "vuex";

@Component({
  components: {
    Memory,
    Card
  },
  computed: mapState(["selected"]),
  methods: mapActions(["selectCard"])
})
export default class Home extends Vue {
  data() {
    return {
      cards: [
        {
          text: "Hej",
          answer: "Hello"
        },
        {
          text: "Saker",
          answer: "Stuff"
        },
        {
          text: "Hello",
          answer: "Hej"
        },
        {
          text: "Stuff",
          answer: "Saker"
        }
      ]
    };
  }
}
</script>

<style lang="scss">
@import "@/style/variables.scss";

.list {
  display: flex;
  flex-flow: row wrap;
  margin: 0 -15px;
}
</style>
