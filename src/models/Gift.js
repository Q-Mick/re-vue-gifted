

export class Gift{
    constructor(data){
        this.id = data.id
        this.tag = data.tag, 
        this.url = data.url || 'src/assets/img/giftbox-sticker.gif'
        this.opened = data.opened
        this.creatorId = data.creatorId
    }
}
