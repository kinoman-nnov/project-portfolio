<template lang="pug">
  .works-slider__thumbs-wrapper
    transition-group(
      tag="ul"
      :css="false"

      @enter="enterCb"
      @after-enter="afterCb"
      @leave="leaveCb"
    ).works-slider__thumbs
      li.works-slider__thumb-item(
        v-for="(slide, index) in works" :key="slide.id" :data-index="index"
        :class="{active: currentWork.id === slide.id}"
      )
        button(
          @click="$emit('handleClick', slide.id)" 
        ).works-slider__thumb-link
          img(:src="slide.photo").works-slider__thumb
</template>

<script>
export default {
  props: ["works", "currentWork", "slideDirection"],
  methods: {
    enterCb(el, done) {
      const list = el.closest("ul");
      const offsetList = list.offsetHeight / 3; // сдвинуть список на высоту слайда

      switch(this.slideDirection) {
        case "next":
          el.classList.add('outsided-top');
          list.classList.add('transition');
          list.style.transform = `translateY(${offsetList}px)`;
          break;

        case "prev":
          el.classList.add('outsided-bottom');
          list.classList.add('transition');
          list.style.transform = `translateY(${-offsetList}px)`;
          break;

        case "handleClick":
          console.log("enter");
          // el.classList.add('outsided-top');
          // list.classList.add('transition');
          // list.style.transform = `translateY(${offsetList}px)`;
          break;
      }
      
      list.addEventListener("transitionend", e => done());
    },
    afterCb(el, done) { console.log("after");
      const list = el.closest("ul");

      list.classList.remove('transition');
      list.style.transform = "translateY(0px)";

      switch(this.slideDirection) {
        case "next":
          el.classList.remove('outsided-top');
          break;

        case "prev":
          el.classList.remove('outsided-bottom');
          break;

        case "handleClick":
          // el.classList.remove('outsided-top');
          break;
      }
    },
    leaveCb(el, done) { console.log("leave");
      // const list = el.closest("ul");
      // for (let i = 0; i < list.children.length; i++) {
      //   // console.log(list.children[i]);
      // }
      // for (let node of list.children) {
      //   console.log(node); // покажет все узлы из списка ul
      // }
      // const ind = this.works.map(item => item.id).indexOf(slideId);
      
      // setTimeout(function () {

      //   el.classList.add('fade');
  
      //   el.addEventListener("transitionend", e => done());
      // }, 1500);

      el.classList.add('fade');

      el.addEventListener("transitionend", e => done());
    }
  }
}
</script>

<style lang="postcss" scoped src="./slider-thumbs.pcss">
</style>