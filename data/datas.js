const fs = require('fs');

const data ={
 cardDatas :[
    // cards
    {
        cardimagePath:'https://img1.imgtp.com/2023/03/31/9M7eUeax.png',
        cardTitle:'test1',
        cardText:'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid'
    },
    {
        cardimagePath:'https://img1.imgtp.com/2023/03/31/9M7eUeax.png',
        cardTitle:'test2',
        cardText:'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid'
    }
    ,{
        cardimagePath:'https://img1.imgtp.com/2023/03/31/9M7eUeax.png',
        cardTitle:'test3',
        cardText:'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid'
    },
    {
        cardimagePath:'https://img1.imgtp.com/2023/03/31/9M7eUeax.png',
        cardTitle:'test4',
        cardText:'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid'
    },
],

    // carousels 轮播
 carouselsDatas:[
    {
        carouselsImage:'https://img1.imgtp.com/2023/03/31/wrNxMw4L.png',
        carouselsTitle:'First slide label',
        carouselsDescrip:'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    },
    {
        carouselsImage:'https://img1.imgtp.com/2023/03/31/0hZQzCEn.png',
        carouselsTitle:'Second slide label',
        carouselsDescrip:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        carouselsImage:'https://img1.imgtp.com/2023/03/31/XlafgolE.png',
        carouselsTitle:'Third slide label',
        carouselsDescrip:'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    }
],

// 购物车数据
 cartDatas :[
    // carts
    {
        cartimagePath:'https://img1.imgtp.com/2023/03/31/9M7eUeax.png',
        phoneName:'phone1',
        price:900,
        number:1,
        phoneDescrip:'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid'
    },
    {
        cartimagePath:'https://img1.imgtp.com/2023/03/31/9M7eUeax.png',
        phoneName:'phone2',
        price:990,
        number:1,
        phoneDescrip:'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid'
    }
    ,{
        cartimagePath:'https://img1.imgtp.com/2023/03/31/9M7eUeax.png',
        phoneName:'phone3',
        price:1190,
        number:1,
        phoneDescrip:'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid'
    },
    {
        cartimagePath:'https://img1.imgtp.com/2023/03/31/9M7eUeax.png',
        phoneName:'phone4',
        price:1299,
        number:1,
        phoneDescrip:'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid'
    },
]
}


fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) {
      throw err;
    }
    console.log('JSON data is saved.');
  });
  