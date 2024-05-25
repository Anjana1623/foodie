// export function populateRestaurantCards(mockData) {
//     for(let i = 0 ; i < mockData.length; i++){
        
//         var cardTile = document.createElement('div');
//         cardTile.setAttribute('class','dish-card');

//         var restaurantImg = document.createElement('img');
//         restaurantImg.setAttribute('class','dish-image');
//         if(mockData[i].feature_image == ''){
//             restaurantImg.setAttribute('src', '../assets/restPlaceholder.jpg');
//         }else{
//             restaurantImg.setAttribute('src',mockData[i].feature_image);
//         }
//         restaurantImg.setAttribute('alt','Restaurant Image');

//         var restaurantName = document.createElement('div');
//         restaurantName.setAttribute('class','dish-name');
//         restaurantName.appendChild(document.createTextNode(mockData[i].name));

//         var restaurantDescription = document.createElement('div');
//         restaurantDescription.setAttribute('class','description');
//         restaurantDescription.appendChild(document.createTextNode(mockData[i].cuisines));

//         var restaurantRating = document.createElement('div');
//         restaurantRating.setAttribute('class', 'rating');
//         restaurantRating.appendChild(document.createTextNode(mockData[i].rating));

//         var ratingIcon = document.createElement('i');
//         ratingIcon.setAttribute('class','fa fa-star');

//         restaurantRating.appendChild(ratingIcon);

//         var restaurantReview = document.createElement('div');
//         restaurantReview.setAttribute('class', 'reviews');
//         restaurantReview.appendChild(document.createTextNode(mockData[i].reviews + ' Reviews'));

//         cardTile.appendChild(restaurantImg);
//         cardTile.appendChild(restaurantName);
//         cardTile.appendChild(restaurantDescription);
//         cardTile.appendChild(restaurantRating);
//         cardTile.appendChild(restaurantReview);

//         document.getElementById('menu-container').appendChild(cardTile);
//     }
// }

export function populateCards(mockData){
   
    for(let i = 0; i < mockData.length; i++){
       // console.log(mockData[i].name);
       var cardContainer = document.createElement('div');
       cardContainer.setAttribute('class','dish-card');

       var imgElement = document.createElement('img');
       imgElement.setAttribute('class','dish-image');
       if(mockData[i].feature_image == ''){
            imgElement.setAttribute('src', '../assets/restPlaceholder.jpg');
        }else{
            imgElement.setAttribute('src',mockData[i].feature_image);
        }
      // imgElement.setAttribute('src',mockData[i].feature_image);
       imgElement.setAttribute('alt','Restaurant Image');

       var restaurantName = document.createElement('div');
       restaurantName.setAttribute('class','dish-name');
       restaurantName.appendChild(document.createTextNode(mockData[i].name));

       var restaurantDescription = document.createElement('div');
       restaurantDescription.setAttribute('class','description');
       restaurantDescription.appendChild(document.createTextNode(mockData[i].cuisines));

        var rating = document.createElement('div');
        rating.setAttribute('class','rating');
        rating.appendChild(document.createTextNode(mockData[i].rating));

        var iElement = document.createElement('i');
        iElement.setAttribute('class','fa fa-star');
        rating.appendChild(iElement);

        var review = document.createElement('div');
        review.setAttribute('class','reviews');
        review.appendChild(document.createTextNode(mockData[i].reviews + " Reviews"));

        cardContainer.appendChild(imgElement);
        cardContainer.appendChild(restaurantName);
        cardContainer.appendChild(restaurantDescription);
        cardContainer.appendChild(rating);
        cardContainer.appendChild(review);

       console.log(cardContainer);

       document.getElementById('menu-container').appendChild(cardContainer);
    }
}
