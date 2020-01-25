import React from 'react'
import Market from './component/Market/Market'
export default function App() {
   const market = [
       {title: "L'Oreal Paris Excellence стойкая крем-краска для волос ", price: "196₽", imgUrl:" https://avatars.mds.yandex.net/get-mpic/1861069/img_id2811433203166761085.jpeg/x166_trim"},
       {title: "Протеин Optimum Nutrition 100% Whey Gold Standard (2.225-2.353 кг) ", price: "2900₽", imgUrl:"https://avatars.mds.yandex.net/get-mpic/1767151/img_id8368609153047348767.png/x166_trim"},
        {title: "Гейнер R-Line Titan Creatine (4000 г) ", price: "1949₽", imgUrl:" https://avatars.mds.yandex.net/get-mpic/1970506/img_id3382731196527026562.jpeg/x166_trim"},
        {title: "BCAA vplab BCAA Ultra Pure (120 капсул) ", price: "1120₽", imgUrl:" https://avatars.mds.yandex.net/get-mpic/1937077/img_id3682685945026872146.jpeg/x166_trim"}    
    ]
    

    return (
        <div>
           <Market title={market[0].title} price={market[0].price} imgUrl={market[0].imgUrl}  />,
           <Market title={market[1].title} price={market[2].price} imgUrl={market[1].imgUrl}  />,
           <Market title={market[2].title} price={market[2].price} imgUrl={market[2].imgUrl}  />,
           <Market title={market[3].title} price={market[3].price} imgUrl={market[3].imgUrl}  />,
        </div>
    )
}