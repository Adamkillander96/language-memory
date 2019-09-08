<template>
  <li class="card">
    <button :id="card.text" class="card-body" @click="select($event, card)">
      <div class="card-text front">
        <i class="fad fa-dice-d6 fa-fw fa-8x"></i>
      </div>
      <div class="card-text back">
        <span>{{ card.text }}</span>
      </div>
    </button>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapState, mapActions } from "vuex";

@Component({
  computed: mapState(["selected"]),
  methods: {
    ...mapActions({ selectCard: "selectCard" }),
    select(event: { target: any }, card: Object): void {
      let btn = event.target.closest("button");
      this.$store.dispatch("selectCard", { card, btn });
    }
  }
})
export default class Card extends Vue {
  @Prop() private card!: Object;
}
</script>

<style lang="scss">
@import "@/style/variables.scss";

.svg-inline--fa {
  .fa-primary {
    fill: $white;
  }
  .fa-secondary {
    fill: darken($white, 10%);
  }
}

.card {
  position: relative;
  height: 300px;
  perspective: 1000px;
  flex: 1 1 auto;
  padding: 0 15px 15px;
  background-color: transparent;

  .card-body {
    background: darken($turquoise, 20%);
    position: relative;
    width: 100%;
    height: 100%;
    transition: 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    &.open {
      transform: rotateY(180deg) scale(1) rotate(0deg);
      pointer-events: none;
      opacity: 1;
      &.closing {
        transform: rotateY(180deg) scale(0.5) rotate(10deg);
        opacity: 0;
      }
      &.correct .back {
        background-image: $grass;
      }
      &.wrong .back {
        background-image: $fire;
      }
    }
    .card-text {
      padding: 2em;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      text-align: center;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      &.back {
        background-color: $purple;
        color: $white;
        backface-visibility: hidden;
        transform: rotateY(180deg);
      }
      &.front {
        transform: scaleX(-1);
        backface-visibility: hidden;
      }
    }
  }
}
</style>