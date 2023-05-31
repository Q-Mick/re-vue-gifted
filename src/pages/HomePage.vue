<template>
  <div class="container-fluid">
    <div class="row p-3">
      <div class="col-md-3 my-3" v-for="g in gifts" :key="g.id">
        <GiftCard :giftProp="g"/>        
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { giftService } from "../services/GiftService.js";
import { logger } from "../utils/Logger.js";
import { AppState } from '../AppState'
import GiftCard from '../components/GiftCard.vue'
export default {
  components: { GiftCard },
  setup() {
    async function getGifts(){
      try {
        await giftService.getGifts()
      } catch (error) {
        logger.error(error)
      }
    }
      onMounted(()=> {
        getGifts()
      })
    return {
        gifts: computed(() => AppState.gifts)

    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
