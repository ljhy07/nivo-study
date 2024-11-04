import React, { useState } from 'react';
import Papa from 'papaparse';

const JsonPaser = () => {
  const [csvData, setCsvData] = useState(null);

  // CSV 파일을 읽고 파싱하는 함수
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    
    if (file) {
      Papa.parse(file, {
        complete: (result) => {
            setCsvData(result.data);
        },
        header: true,
        skipEmptyLines: true,
      });
    }
  };

  return csvData;
};

export default JsonPaser;
