<template>
    <div class="text-center">
        <img class="img-fluid rounded elevation-5" :src="giftProp.url" alt="">
        <button v-if="giftProp.opened == false" @click="openGift()" class="btn btn-dark">Open Gift</button>
    </div>
</template>


<script>
import { Gift } from "../models/Gift.js";
import { computed } from 'vue';

import { AppState } from '../AppState.js';
import { logger } from '../utils/Logger.js';
import { giftService } from '../services/GiftService.js';

export default {
    props: {
        giftProp: { type: Gift, required: true }
    },
    setup(props) {
        return {
            async openGift() {
                try {
                    let gift = props.giftProp
                  
                    gift.opened = !gift.opened
                
                    await giftService.openGift(gift)
                } catch (error) {
                    logger.error(error)
                    Pop.toast(error.message, 'error')
                }
            }
        }
    }
}
</script>


<style lang="scss" scoped></style>