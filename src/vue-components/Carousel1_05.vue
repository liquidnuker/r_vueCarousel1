<template>
<div>
  <!-- begin vueCarousel105 -->
  <div class="vueCarousel105">
    <div class="vueCarousel105_content">
      {{ items[cIndex].itemName }}<br>
      <div class="vueCarousel105_description">
        {{ items[cIndex].description }}
      </div>
    </div>
    <nav id="vueCarousel105_pagination" class="vueCarousel105_pagination">
      <div class="vueCarousel105_pagebuttons"
        v-for="(i, index) in items"
        @click="customPage(index)"
        :class="{vueCarousel105_active: i.isActive}"
        :aria-selected="i.isActive">
      </div>
    </nav>
    <div class="row vueCarousel105_prevnext">
      <span @click="prevItem()"
        class="vueCarousel105_previous">
        <!-- chevron left -->
        <svg xmlns="http://www.w3.org/2000/svg" class="vueCarousel105_chevron">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
        </svg>
      </span>
      <span @click="nextItem()"
        class="vueCarousel105_next">
        <!-- chevron right -->
        <svg xmlns="http://www.w3.org/2000/svg" class="vueCarousel105_chevron">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
        </svg>
      </span>
    </div>
  </div>
  <!-- end vueCarousel105 -->
</div>
</template>
<script>
// import {store} from "../js/store.js";
export default {
  data() {
      return {
        items: [
      {
        itemName: "item1",
        description: "desc1",
        imgSrc: "",
        isActive: true
      }, 
      {
        itemName: "item2",
        description: "desc2",
        imgSrc: "",
        isActive: false
      }, 
      {
        itemName: "item3",
        description: "desc3",
        imgSrc: "",
        isActive: false
      }],
        cIndex: 0,
        activePageButton: 0
      }
    },
    watch: {
      // : function () {
      // }
    },
    props: [
      "prName1"
    ],
    components: {},
    mounted: function () {},
    methods: {
      prevItem: function () {
        let cIndex = this.cIndex;
        let items = this.items;

        if (cIndex === 0) {
          cIndex = items.length; // go to last
        }
        cIndex = cIndex - 1;

        this.cIndex = cIndex;
        this.setActivePageButton(this.cIndex);
      },
      nextItem: function () {
        let cIndex = this.cIndex;
        let items = this.items;

        cIndex = cIndex + 1;
        cIndex = cIndex % items.length; // go to first

        this.cIndex = cIndex;
        this.setActivePageButton(this.cIndex);
      },
      customPage: function (num) {
        this.cIndex = num;
        this.setActivePageButton(num);
      },
      setActivePageButton: function (index) {
        let activeItem = index;
        let activePageButton = this.activePageButton;

        this.items[activeItem].isActive = true;

        if (activePageButton !== activeItem) {
          this.items[activePageButton].isActive = false;

          // set current activePageButton
          this.activePageButton = activeItem;
        }
      }
    }
}
</script>