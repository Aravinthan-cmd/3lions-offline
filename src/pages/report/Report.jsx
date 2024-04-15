import React, { useEffect, useState } from "react";
import "../report/report.scss";
import report_logo from "../../assets/images/7079771_3324619.svg";
import report_logo_nano from "../../assets/images/1311213_313.svg";
import * as XLSX from "xlsx";

const Report = () => {
  const [data, setData] = useState([]);
  const [nanoData, setNanoData] = useState([]);
  const [selectXyma, setSelectXyma] = useState('density');
  const [selectNano, setSelectNano] = useState('temperaure');
  const [xymaName, setXymaName] = useState('Temperature');

  useEffect(() => {
    const interval = setInterval(() => {
      fetchAllData();
      fetchNanoData(selectNano);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  },[selectNano]);

  const fetchAllData = async () => {
    var urlxyma;
    try {
      urlxyma = "http://192.168.0.100:4000/sensor/getReportsensor";
      console.log("urlxyma", urlxyma);
      const response = await fetch(urlxyma);
      const dataVal = await response.json();
      setData(dataVal);
    } catch (error) {
      console.log("error", error);
    }
  };
  const fetchNanoData = async () => {
    var url;
    try {
        url = `http://192.168.0.100:4000/sensor/getNanoGraph?graphName=${selectNano}`;
      console.log("url", url);
      const response = await fetch(url);
      const dataVal = await response.json();
      setNanoData(dataVal);
    } catch (error) {
      console.log("error", error);
    }
  };

  var density = [];
  var temperature = [];
  var viscosity = [];
  var tbn = [];
  var timexyma = [];
  for (let index = 0; index < data.length; index++) {
    density[index] = data[index].density;
    temperature[index] = data[index].temperature;
    viscosity[index] = data[index].viscosity;
    tbn[index] = data[index].dtn;
    timexyma[index] = data[index].updatedAt;
  }

    const handleDownload = () => {
      let selectedArray = [];
      // let time = timexyma;
      let selectedName;
      if (!selectedArray) {
        console.error('Invalid XymaData');
        return;
      }
      switch (selectXyma) {
        case 'density':
          selectedName = 'density';
          selectedArray = density;
          break;
        case 'viscosity':
          selectedName = 'viscosity';
          selectedArray = viscosity;
          break;
        case 'temperature':
          selectedName = 'temperature';
          selectedArray = temperature;
          break;
        case 'dtn':
          selectedName = 'Tbn';
          selectedArray = tbn;
          break;
        default:
          selectedName = 'density';
          selectedArray = density;
          break;
      }
      const formattedDateTimesXyma = timexyma.map(dateTimeString => {
        const dateTime = new Date(dateTimeString);
        const year = dateTime.getFullYear();
        const month = dateTime.getMonth() + 1;
        const day = dateTime.getDate();
        const hours = dateTime.getHours();
        const minutes = dateTime.getMinutes();
        return `${year}-${month}-${day} ${hours}:${minutes}`;
    });

      console.log("excel",selectedName);
      console.log('times', formattedDateTimesXyma);
      const data = [[selectedName, 'timestamp'], ...selectedArray.map((value, index) => [value, formattedDateTimesXyma[index]])];
      const worksheet = XLSX.utils.aoa_to_sheet(data);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet 1");
      XLSX.writeFile(workbook, `xyma_data_${selectedName}.xlsx`);
    };  

    const handleDownloadNano = () => {
  setTimeout(() => {
    const val = nanoData[0]?.data;
    const timestamps = nanoData[0]?.timestamp;

    if (!val || !timestamps) {
      console.error('Invalid nanoData');
      return;
    }

    const formattedTimestamps = timestamps.map((epochTimestamp) => {
      const date = new Date(epochTimestamp * 1000);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      return `${year}-${month}-${day} ${hours}:${minutes}`;
    });

    const data = [[`${selectNano}`, 'timestamp'], ...val.map((value, index) => [value, formattedTimestamps[index]])];
    const worksheet = XLSX.utils.aoa_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet 1");
    XLSX.writeFile(workbook, "3Lions.xlsx");
  }, 3000);
};
    
//nano
    const options = ["temperature", "battery", "sound-rms", "humidity", "flux-rms", "speed"];
    const handleOptionChange = (event) => {
      let value = event.target.value;
      setSelectNano(value);
    };
//xyma
    const optionxyma = ["Density", "Viscosity", "Temperature","TDN"];
    const handleOptionChangexyma = (event) => {
      let value = event.target.value;
      console.log("val",value);
      switch (value) {
        case 'Density':
          setXymaName('Density');
          setSelectXyma('density');
          break;
        case 'Viscosity':
          setXymaName('Viscosity');
          setSelectXyma('viscosity');
          break;
        case 'Temperature':
          setXymaName('Temperature');
          setSelectXyma('temperature');
          break;
        case 'TDN':
          setXymaName('TDN')
          setSelectXyma('dtn');
          break;
        default:
          setSelectXyma('viscosity');
          break;
      }
    };
    console.log("xyma", selectXyma);

    console.log("data", data);

  return (
    <>
    {data.length !== 0 ? (
      <div className="report">
      <div className="header">
        <div className="title">
          <h1>Excel</h1>
        </div>
      </div>
      <div className="body">
        <div className="xyma">
          <div className="name">
            <h1>Xyma Sensor</h1>
          </div>
          <div className="bottom">
            <div className="logo">
              <img
                src={report_logo}
                alt="report_logo"
                style={{ width: "400px", height: "400px" }}
              />
            </div>
            <div className="input">
          <label htmlFor="xymadropdown">Select</label>
          <select className="xymavalue"
            id="xymadropdown"
            onChange={handleOptionChangexyma}
            value={xymaName || ""}
          >
            {optionxyma.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          </div>
            <div
              className="xl_btn"
              onClick={() => {
                handleDownload();
              }}
            >
              <span>Download</span>
            </div>
          </div>
        </div>
        <div className="nano">
          <div className="name">
            <h1>Nano Precise Sensors</h1>
          </div>
          <div className="bottom">
            <div className="logo">
              <img
                src={report_logo_nano}
                alt="report_logo"
                style={{ width: "400px", height: "400px" }}
              />
            </div>
            <div className="input">
          <label htmlFor="nanodropdown">Select</label>
          <select className="value"
            id="nanodropdown"
            onChange={handleOptionChange}
            value={selectNano || ""}
          >
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          </div>
            <div className="xl_btn" 
            onClick={() => {
              handleDownloadNano();
            }}>
              <span>Download</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    ):(
      <div className="overlay-graph">
        <div className="load">
          <div class="loader">
            <div class="inner one"></div>
            <div class="inner two"></div>
            <div class="inner three"></div>
          </div>
        </div>
      </div>
    ) }
    </>
  );
};

export default Report;
