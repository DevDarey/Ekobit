function removeDetail(key){
    let detailsObject = instructorData.additionalData.moreDetails;
    let valueToBeRemoved = detailsObject[key];
    delete valueToBeRemoved;
    return detailsObject;
}