
const surgeries = require("../data/SurgeryData");

const manchesterAreaCodes = [
  "M1",
  "M2",
  "M3",
  "M4",
  "M5",
  "M6",
  "M7",
  "M8",
  "M9",
  "M10",
  "M11",
  "M12",
  "M13",
  "M14",
  "M15",
  "M16",
  "M17",
  "M18",
  "M19",
  "M20",
  "M21",
  "M22",
  "M23",
  "M24",
  "M25",
  "M26",
  "M27",
  "M28",
  "M29",
  "M30",
  "M31",
  "M32",
  "M33",
  "M34",
  "M35",
  "M38",
  "M40",
  "M41",
  "M43",
  "M44",
  "M45",
  "M44",
  "M45",
  "M50",
  "M90"
];

export function getData() {
  const dataObjects = surgeries.data.list;
  let surgeryValues = [];
  dataObjects.forEach(object => {
    if (object.postcode.length === 6) {
      const value = object.postcode.substring(0, 2);
      object.key = value;
      object.keyInt = object.key.substring(1);
      return surgeryValues;
    }
    if (object.postcode.length === 7) {
      const value = object.postcode.substring(0, 3);
      object.key = value;
      object.keyInt = object.key.substring(1);
      return surgeryValues;
    }
    if (object.postcode.length === 8) {
      const value = object.postcode.substring(0, 4);
      object.key = value;
      object.keyInt = object.key.substring(1);
      return surgeryValues;
    }
    //Code below added to catch the well surgery with 123 as postcode
    object.key = object.postcode;
  });

  let result = [];
  
  let reducedDataObjects = [];
//Looks up if surgery is in Manchester Area Codes from png
  dataObjects.forEach(object => {
    const lookup = manchesterAreaCodes.includes(object.key);
    if (lookup === true) {
      reducedDataObjects.push(object);
      return reducedDataObjects;
    }
  });

  //Used in calculating total percentage value of surgeries
  const totalSurgeryNumber = Object.keys(reducedDataObjects).length;

  //Groups surgeries by Outward code
  for (let i = 0; i < reducedDataObjects.length; i++) {
    let data = reducedDataObjects[i];
    let found = false;
    for (let j = 0; j < result.length; j++) {
      if (result[j].key === data.key) {
        found = true;
        result[j].count = result[j].count + 1;
        result[j].percentage = (
          (result[j].count / totalSurgeryNumber) *
          100
        ).toFixed(1);
        result[j].data.push(data);
        break;
      }
    }
    if (!found) {
      const object = {
        key: data.key,
        count: 1,
        keyInt: parseInt(data.keyInt),
        percentage: ((1 / totalSurgeryNumber) * 100).toFixed(1),
        data: [data]
      };
      result.push(object);
    }
  }

  //Sorts data by outward code int value
  result.sort(function(a, b) {
    return a.keyInt - b.keyInt;
  });
  return result;
}
