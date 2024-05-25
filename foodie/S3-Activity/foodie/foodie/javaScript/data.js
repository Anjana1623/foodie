// const mockData = [
//     {
//         "id": "66330",
//         "name": "Kakada Ramprasad",
//         "address": "348/343, Ground Floor, Mint Street, Sowcarpet, Chennai",
//         "cuisines": "Mithai, Street Food, North Indian",
//         "rating": "4.4",
//         "reviews": "865",
//         "feature_image": "https://b.zmtcdn.com/data/pictures/8/18387708/05ccffe6286d86a43e664cff382b1cda.jpg?output-format=webp",
//         "thumbnail_image": "https://b.zmtcdn.com/data/pictures/8/18387708/05ccffe6286d86a43e664cff382b1cda.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
//     },
//     {
//         "id": "71679",
//         "name": "National Lodge",
//         "address": "112, Govindappa Naickan Street, Sowcarpet, Chennai",
//         "cuisines": "Andhra, South Indian",
//         "rating": "4.1",
//         "reviews": "505",
//         "feature_image": "https://b.zmtcdn.com/data/reviews_photos/081/6ed1609b97a184fcf604c126e724a081_1476178734.jpg?output-format=webp",
//         "thumbnail_image": "https://b.zmtcdn.com/data/reviews_photos/081/6ed1609b97a184fcf604c126e724a081_1476178734.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
//     },
//     {
//         "id": "68329",
//         "name": "Hotel Krishna Prasad",
//         "address": "76, NSC Bose Road, Sowcarpet, Chennai",
//         "cuisines": "South Indian",
//         "rating": "4.2",
//         "reviews": "285",
//         "feature_image": "",
//         "thumbnail_image": ""
//     },
//     {
//         "id": "67408",
//         "name": "Board Walk - Ramada",
//         "address": "2A, Poniamman Koil Street, Egmore, Chennai",
//         "cuisines": "North Indian, Continental",
//         "rating": "4.1",
//         "reviews": "537",
//         "feature_image": "https://b.zmtcdn.com/data/pictures/chains/8/67408/0b2d25e072826702a848b1549fbab770.jpg?output-format=webp",
//         "thumbnail_image": "https://b.zmtcdn.com/data/pictures/chains/8/67408/0b2d25e072826702a848b1549fbab770.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
//     },
//     {
//         "id": "66334",
//         "name": "Novelty Tea House",
//         "address": "175, Mint Street, Sowcarpet, Chennai",
//         "cuisines": "North Indian, South Indian, Street Food, Fast Food",
//         "rating": "4.2",
//         "reviews": "380",
//         "feature_image": "https://b.zmtcdn.com/data/pictures/chains/4/66334/b8da914ca74b6b829c9dac0da239f6fb.jpg",
//         "thumbnail_image": "https://b.zmtcdn.com/data/pictures/chains/4/66334/b8da914ca74b6b829c9dac0da239f6fb.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
//     },
//     {
//         "id": "66312",
//         "name": "National Durbar Restaurant",
//         "address": "3, Raja Muthiah Road, Near Central Railway Station, Park Town, Chennai",
//         "cuisines": "Andhra, Chinese, Street Food",
//         "rating": "4.1",
//         "reviews": "240",
//         "feature_image": "https://b.zmtcdn.com/data/reviews_photos/b74/0edfc927dc03d31a965d78dd2217eb74_1472533017.jpg?output-format=webp",
//         "thumbnail_image": "https://b.zmtcdn.com/data/reviews_photos/b74/0edfc927dc03d31a965d78dd2217eb74_1472533017.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
//     },
//     {
//         "id": "66342",
//         "name": "Sree Agarwal Bhojanaalay",
//         "address": "15, Venkatarayan Lane, N.S.C Bose Road, Sowcarpet, Chennai",
//         "cuisines": "Rajasthani, Street Food",
//         "rating": "4.2",
//         "reviews": "385",
//         "feature_image": "https://b.zmtcdn.com/data/reviews_photos/9ef/797cc9fadff12009200fb00da83d59ef_1431844211.jpg?output-format=webp",
//         "thumbnail_image": "https://b.zmtcdn.com/data/reviews_photos/9ef/797cc9fadff12009200fb00da83d59ef_1431844211.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
//     },
//     {
//         "id": "66330",
//         "name": "Kakada Ramprasad",
//         "address": "348/343, Ground Floor, Mint Street, Sowcarpet, Chennai",
//         "cuisines": "Mithai, Street Food, North Indian",
//         "rating": "4.4",
//         "reviews": "865",
//         "feature_image": "https://b.zmtcdn.com/data/pictures/8/18387708/05ccffe6286d86a43e664cff382b1cda.jpg?output-format=webp",
//         "thumbnail_image": "https://b.zmtcdn.com/data/pictures/8/18387708/05ccffe6286d86a43e664cff382b1cda.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
//     },
//     {
//         "id": "66330",
//         "name": "Kakada Ramprasad",
//         "address": "348/343, Ground Floor, Mint Street, Sowcarpet, Chennai",
//         "cuisines": "Mithai, Street Food, North Indian",
//         "rating": "4.4",
//         "reviews": "865",
//         "feature_image": "https://b.zmtcdn.com/data/pictures/8/18387708/05ccffe6286d86a43e664cff382b1cda.jpg?output-format=webp",
//         "thumbnail_image": "https://b.zmtcdn.com/data/pictures/8/18387708/05ccffe6286d86a43e664cff382b1cda.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
//     }
//     ,
//     {
//         "id": "66330",
//         "name": "Kakada Ramprasad",
//         "address": "348/343, Ground Floor, Mint Street, Sowcarpet, Chennai",
//         "cuisines": "Mithai, Street Food, North Indian",
//         "rating": "4.4",
//         "reviews": "865",
//         "feature_image": "https://b.zmtcdn.com/data/pictures/8/18387708/05ccffe6286d86a43e664cff382b1cda.jpg?output-format=webp",
//         "thumbnail_image": "https://b.zmtcdn.com/data/pictures/8/18387708/05ccffe6286d86a43e664cff382b1cda.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
//     },
//     {
//         "id": "66330",
//         "name": "Kakada Ramprasad",
//         "address": "348/343, Ground Floor, Mint Street, Sowcarpet, Chennai",
//         "cuisines": "Mithai, Street Food, North Indian",
//         "rating": "4.4",
//         "reviews": "865",
//         "feature_image": "https://b.zmtcdn.com/data/pictures/8/18387708/05ccffe6286d86a43e664cff382b1cda.jpg?output-format=webp",
//         "thumbnail_image": "https://b.zmtcdn.com/data/pictures/8/18387708/05ccffe6286d86a43e664cff382b1cda.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
//     },    {
//         "id": "66330",
//         "name": "Kakada Ramprasad",
//         "address": "348/343, Ground Floor, Mint Street, Sowcarpet, Chennai",
//         "cuisines": "Mithai, Street Food, North Indian",
//         "rating": "4.4",
//         "reviews": "865",
//         "feature_image": "https://b.zmtcdn.com/data/pictures/8/18387708/05ccffe6286d86a43e664cff382b1cda.jpg?output-format=webp",
//         "thumbnail_image": "https://b.zmtcdn.com/data/pictures/8/18387708/05ccffe6286d86a43e664cff382b1cda.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
//     }

// ];

import { populateCards } from "./index.js";

//populateCards(mockData);


// populateRestaurantCards(mockData);


export var mockData = [];

async function getFoodieData(){
    const response = await fetch('https://api.jsonbin.io/v3/b/64cd66bfb89b1e2299cb75af')
    .then(data => data.json())
    .then(response => {
        console.log(response);
        mockData = response.record;
       // console.log(mockData);
        populateCards(mockData);
    });
};

// getFoodieData();

// async function getFoodieData(){
//     const response = await fetch('https://api.jsonbin.io/v3/b/64cd66bfb89b1e2299cb75af')
//     .then(data => {
//         console.log(data.json());
//     });
// }
 getFoodieData();