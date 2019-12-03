// cheeseRecords is array of cheese record objects
// searchTerms is a cheese record object
export default function searchRecords(cheeseRecords, searchTerms) {
  return cheeseRecords.filter(cheeseRecord => {
    // if any term is present but does not match the the record, return false
    for (const name in searchTerms) {
      if (searchTerms[name] && searchTerms[name] !== "") {
        if (
          !cheeseRecord[name]
            .toLowerCase()
            .includes(searchTerms[name].toLowerCase())
        ) {
          return false;
        }
      }
    }
    // take this record
    return true;
  });
}
