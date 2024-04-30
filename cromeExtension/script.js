// async function fetchData(){
//     return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=bbcb39d7-309a-4bfd-8fcb-cb18345c37e5&offset=0")
//    .then(response => response.json())
//    .then(response =>{
//     const data = response.data;
//     // const iplData = data
//     // .filter(series => series.series_id === '76ae85e2-88e5-4e99-83e4-5f352108aebc')
//     // .filter(series => series.matchEnded === false)
//     console.log(data);
//     // return iplData;
// })
// }   
// fetchData();

// // function team1Name(){
// //     return fetchData().then(iplData => {
// //        const info1 = iplData.map(info => info.teamInfo[0])
// //         const name1 = info1.map(name => name.name);
// //        const img1 = info1.map(img => img.img)
// //        console.log(info1)
// //        console.log(name1)
// //        console.log(img1)
// //        return {info1, name1, img1};
       
// //     });
// // }



// // team1Name();


async function fetchData(){
    const response = await fetch("https://api.cricapi.com/v1/currentMatches?apikey=bbcb39d7-309a-4bfd-8fcb-cb18345c37e5&offset=0");
    const data = await response.json();
    console.log(data);                  
    return data;
}   

fetchData();
