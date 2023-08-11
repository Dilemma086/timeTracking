fetch('./data.json')
      .then(response => response.json())
      .then(json =>  renderData(json))

const root = document.querySelector('root')
const blockDiv = document.createElement('div')

blockDiv.classList.add('mainBlock')
root.append(blockDiv)
blockDiv.innerHTML=`
    <div class="title">
        <div>Дата</div>
        <div>Начало проведение работ</div>
        <div>Описание</div>
        <div>Продолжительность</div>
        <div>Цена за час</div>
        <div>Стоимость</div>
    </div>
`

class ItemTrack{
    elem = document.createElement('div')
    
    constructor(day, timeStart, description, duration, priceHour, totalPriceHour){
        this.day = day;
        this.timeStart = timeStart;
        this.description = description;
        this.duration = duration;
        this.priceHour = priceHour
        this.totalPriceHour = totalPriceHour
    }
   
    render(){
        this.elem.innerHTML += `
            <div class="itemBlock">
                <div>${this.day}</div>
                <div>${this.timeStart}</div>
                <div>${this.description}</div>
                <div>${this.duration}</div>
                <div>${this.priceHour}</div>
                <div>${this.totalPriceHour} р</div>
            </div>
        `
        blockDiv.append(this.elem)
    }

}   

function renderData(data){
    data.map((item, i) => {
        const reg = new RegExp("\\d+", "g")
        const num = item.duration.match(reg).join('.')
        const time = item.priceHour.match(reg).join('.')
        const totalPriceHour = +num * +time
        new ItemTrack(`${item.day}`, `${item.timeStart}`, `${item.description}`, `${item.duration}`, `${item.priceHour}`, totalPriceHour).render();
        
    })
}