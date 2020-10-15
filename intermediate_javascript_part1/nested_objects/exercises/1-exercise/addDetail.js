let instructorData = {
    name: "Elie",
    additionalData: {
        instructor: true,
        favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
        moreDetails: {
            favoriteBasketballTeam: "New York Knicks",
            numberOfSiblings: 3,
            isYoungest: true,
            hometown: {
                city: "West Orange",
                state: "NJ",
            },
            citiesLivedIn: ["Seattle", "Providence", "New York"]
        }
    }
};
function addDetail(key,value){
    let moreDetails = instructorData.additionalData.moreDetails
    moreDetails[key] = value
    return moreDetails
}
function removeDetail(key)
{
    let moreDetails = instructorData.additionalData.moreDetails
    let removeValue = moredetails[key]
    delete removeValue
    return moreDetails
}