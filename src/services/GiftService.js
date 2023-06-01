import { AppState } from "../AppState";
import { Account } from "../models/Account.js";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";
import { giphyapi } from "./AxiosService";
import { Gift } from "../models/Gift.js";

class GiftService {
  async getGifts() {
    const res = await api.get("api/gifts");
    // logger.log("[GETTING GIFTS]", res.data);
    AppState.gifts = res.data.map(g => new Gift(g))
    console.log(AppState.gifts);
  }
  
  async openGift(gift){
    const res = await api.put(`api/gifts/${gift.id}`, gift)
   AppState.gifts = new Gift(res.data)

  }
}

export const giftService = new GiftService();
