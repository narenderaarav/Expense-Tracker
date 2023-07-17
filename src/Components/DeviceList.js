import { Typography } from "@material-ui/core";
import React, { useState } from "react";
const ListDevices = {
  statusCode: 200,
  data: [
    {
      id: 10000,
      deviceId: "fcce62bc-6609-4042-9adc-5be5e446f1b8",
      userId: 1491217,
      accountId: 712938,
      partnerId: 1000002,
      clientId: 3,
      status: "INACTIVE",
      fraudFlagged: false,
      userNotified: false,
      approvedByUser: true,
      meta: {
        "cf-ray": "7d624c9b7fce85a8-BOM",
        "x-real-ip": "14.143.254.122",
        "user-agent":
          "PluangStage/5.3.0 (com.EmasDigi.stag; build:5; iOS 16.3.1) Alamofire/5.4.4",
        "x-device-id": "fcce62bc-6609-4042-9adc-5be5e446f1b8",
        "x-device-os": "16.3.1",
        "cf-ipcountry": "IN",
        "x-device-make": "Apple",
        "x-device-mode": "dark",
        "x-device-model": "iPhone15,2",
        "x-device-family": "iOS",
      },
      lastNotifiedAt: "2023-06-12T13:04:25.333+00:00",
      createdAt: "2023-06-12T13:04:25.337+00:00",
      updatedAt: "2023-06-12T13:40:23.010+00:00",
    },
    {
      id: 10001,
      deviceId: "0fb41c45bd2071d8",
      userId: 1491217,
      accountId: 712938,
      partnerId: 1000002,
      clientId: 3,
      status: "INACTIVE",
      fraudFlagged: true,
      userNotified: true,
      approvedByUser: true,
      meta: {
        "cf-ray": "7d62501c8d8cf2da-BOM",
        "x-real-ip": "14.143.254.122",
        "user-agent": "okhttp/4.9.0",
        "x-device-id": "0fb41c45bd2071d8",
        "x-device-os": "33",
        "cf-ipcountry": "IN",
        "x-device-make": "OnePlus",
        "x-device-mode": "dark",
        "x-device-model": "CPH2467",
        "x-device-family": "android",
      },
      lastNotifiedAt: "2023-06-12T13:06:46.348+00:00",
      createdAt: "2023-06-12T13:06:46.249+00:00",
      updatedAt: "2023-06-12T13:20:21.677+00:00",
    },
    {
      id: 10002,
      deviceId: "web-200f131f43e09992763dfb1303c851e8",
      userId: 1491217,
      accountId: 712938,
      partnerId: 1000002,
      clientId: 3,
      status: "ACTIVE",
      fraudFlagged: false,
      userNotified: true,
      approvedByUser: false,
      meta: {
        "cf-ray": "7d625c9cbe3f3fd0-SIN",
        "sec-ch-ua": "",
        "x-real-ip": "13.251.226.106",
        "user-agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/113.0",
        "x-platform": "desktop-web",
        "x-device-id": "web-200f131f43e09992763dfb1303c851e8",
        "cf-ipcountry": "SG",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "sec-ch-ua-mobile": "",
        "sec-ch-ua-platform": "",
      },
      lastNotifiedAt: "2023-06-12T13:33:18.751+00:00",
      createdAt: "2023-06-12T13:33:18.621+00:00",
      updatedAt: "2023-06-12T13:33:18.751+00:00",
    },
    {
      id: 10003,
      deviceId: "web-220377cfee089acce96d15f0fbbf34d1",
      userId: 1491217,
      accountId: 712938,
      partnerId: 1000002,
      clientId: 3,
      status: "INACTIVE",
      fraudFlagged: false,
      userNotified: true,
      approvedByUser: false,
      meta: {
        "cf-ray": "7d627826ca613ffa-SIN",
        "sec-ch-ua":
          '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
        "x-real-ip": "13.251.226.106",
        "user-agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
        "x-platform": "desktop-web",
        "x-device-id": "web-220377cfee089acce96d15f0fbbf34d1",
        "cf-ipcountry": "SG",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
      },
      lastNotifiedAt: "2023-06-12T13:34:06.325+00:00",
      createdAt: "2023-06-12T13:34:06.311+00:00",
      updatedAt: "2023-06-12T13:47:37.078+00:00",
    },
    {
      id: 11756,
      deviceId: "web-3ad0d28d90596d493ec317198595402c",
      userId: 1491217,
      accountId: 712938,
      partnerId: 1000002,
      clientId: 3,
      status: "INACTIVE",
      fraudFlagged: false,
      userNotified: true,
      approvedByUser: false,
      meta: {
        "cf-ray": "7ddb8dbb7be38ae1-DEL",
        "sec-ch-ua":
          '"Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',
        "x-real-ip": "14.143.254.122",
        "user-agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
        "x-platform": "desktop-web",
        "x-device-id": "web-3ad0d28d90596d493ec317198595402c",
        "cf-ipcountry": "IN",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
      },
      lastNotifiedAt: "2023-06-27T06:15:07.214+00:00",
      createdAt: "2023-06-27T06:15:07.189+00:00",
      updatedAt: "2023-06-27T11:42:03.417+00:00",
    },
    {
      id: 11938,
      deviceId: "cd7f6041b142d3c5",
      userId: 1491217,
      accountId: 712938,
      partnerId: 1000002,
      clientId: 3,
      status: "INACTIVE",
      fraudFlagged: false,
      userNotified: true,
      approvedByUser: false,
      meta: {
        "cf-ray": "7dddae438f9e8e80-DEL",
        "x-real-ip": "14.143.254.122",
        "user-agent": "okhttp/4.9.0",
        "x-device-id": "cd7f6041b142d3c5",
        "x-device-os": "33",
        "cf-ipcountry": "IN",
        "x-device-make": "vivo",
        "x-device-mode": "dark",
        "x-device-model": "I2208",
        "x-device-family": "android",
      },
      lastNotifiedAt: "2023-06-27T12:26:51.140+00:00",
      createdAt: "2023-06-27T12:26:51.118+00:00",
      updatedAt: "2023-06-27T12:32:47.575+00:00",
    },
    {
      id: 11844,
      deviceId: "ac2effbd974d3188",
      userId: 1491217,
      accountId: 712938,
      partnerId: 1000002,
      clientId: 3,
      status: "ACTIVE",
      fraudFlagged: false,
      userNotified: true,
      approvedByUser: false,
      meta: {
        "cf-ray": "7ddcd7d2ce85f494-BOM",
        "x-real-ip": "14.143.254.122",
        "user-agent": "okhttp/4.11.0",
        "x-device-id": "ac2effbd974d3188",
        "x-device-os": "33",
        "cf-ipcountry": "IN",
        "x-device-make": "vivo",
        "x-device-mode": "light",
        "x-device-model": "V2141",
        "x-device-family": "android",
      },
      lastNotifiedAt: "2023-06-27T10:00:27.568+00:00",
      createdAt: "2023-06-27T10:00:27.546+00:00",
      updatedAt: "2023-06-27T10:00:27.568+00:00",
    },
  ],
};

const DeviceList = () => {
  const [devices] = useState(ListDevices.data);
  const filterDevice = devices.filter((item) => {
    return (
      item.meta["x-device-family"] === "android" ||
      item.meta["x-device-family"] === "iOS" ||
      item.meta["x-platform"] === "desktop-web"
      
    );
  });
  const result = filterDevice.reduce((devicess, devic) => {
    const devicesName = devic.meta["x-device-family"] || devic.meta["x-platform"];
    const deviceType = devic.status;
    if (!devicess[devicesName]) {
      devicess[devicesName] = {};
    }
    if (!devicess[devicesName][deviceType]) {
      devicess[devicesName][deviceType] = [];
    }
    devicess[devicesName][deviceType].push(devic);
    return devicess;
  }, {});
  // console.log("---",result['android']['ACTIVE']);
  // console.log("result",result);

  const people = [
    {
        name:'narender',
        age:40,
        gender:'male'
    },
    {
        name:'ravi',
        age:40,
        gender:'male'
    },
    {
        name:'abhi',
        age:10,
        gender:'male'
    },
    {
        name:'aarav',
        age:10,
        gender:'male'
    },
    {
        name:'manorama',
        age:40,
        gender:'female'
    },
    {
        name:'ajay',
        age:29,
        gender:'male'
    },
    {
        name:'sweta',
        age:29,
        gender:'female'
    }
    ];
    
    
    const groupPeople  = people.reduce((acc,curr)=>{
       const key = curr.gender 
       const ageKey = curr.age
       if(!acc[key]){
           acc[key] = {};
       }
       if(!acc[key][ageKey]){
           acc[key][ageKey] = []
       }
       acc[key][ageKey].push(curr);
       return acc;
    },{});
    
    // console.log(groupPeople)

    const [maleData, setMaleData] = useState({
      10: [
        {
          name: 'narender',
          age: 10,
          gender: 'male',
        },
        {
          name: 'kumar',
          age: 10,
          gender: 'male',
        },
      ],
      20: [
        {
          name: 'ravi',
          age: 20,
          gender: 'male',
        },
        {
          name: 'kari',
          age: 20,
          gender: 'male',
        },
      ],
    });

    
  return (
    // <div>
    //   <h1>List of Devices</h1>
    //   <Typography>Device no:</Typography>{result['android']['INACTIVE'].length}
    //   {result['android']['INACTIVE'].map((item) =>{
    //    return(
    //     <div>
    //         <Typography>{item.meta['x-device-family']}</Typography>
    //         <Typography>{item.status}</Typography>
    //         <Typography>{item.meta['cf-ipcountry']}</Typography>
    //     </div>
    //    )
    //   })}
    // </div>
    <>

    <div>
      {Object.keys(maleData).map((age) => {
        // console.log('age', maleData[age]);
        return(
          <div key={age}>
          <h3>Age: {age}</h3>
          {maleData[age].map((person, index) => (
            <div key={index}>
              <p>Name: {person.name}</p>
              <p>Age: {person.age}</p>
              <p>Gender: {person.gender}</p>
            </div>
          ))}
        </div>
        )
      }
        
      )}
    </div>
    <div>
      {Object.keys(groupPeople).map((gender) =>{
        console.log('gender', groupPeople[gender]);
        return(
          <div key={gender}>
            <h1>Gender: {gender}</h1>

          {Object.keys(groupPeople[gender]).map((age) =>{
            console.log('age', groupPeople[gender][age]);

            return(
              <>
              <h3>Age:{age}</h3>

              {groupPeople[gender][age].map((person, index) => (
            <div key={index}>
              <p>Name: {person.name}</p>
              <p>Age: {person.age}</p>
              <p>Gender: {person.gender}</p>
            </div>
          ))}
              </>
            )
          })}
          </div>
        )
      })}
    </div>
    </>
  );
};
export default DeviceList;
