import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Papa from 'papaparse';

const JsonParser = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // CSV 파일 경로
    const csvFilePath = 'path/to/your/data.csv';

    // CSV 파일을 JSON으로 변환
    Papa.parse(csvFilePath, {
      download: true,
      header: true,
      complete: (results) => {
        const jsonData = results.data.map((row) => ({
          region: row['행정구역별'],
          서울: Number(row['서울']),
          부산: Number(row['부산']),
          대구: Number(row['대구']),
          인천: Number(row['인천']),
          광주: Number(row['광주']),
          대전: Number(row['대전']),
          울산: Number(row['울산']),
          세종: Number(row['세종']),
          경기: Number(row['경기']),
          강원: Number(row['강원']),
          충북: Number(row['충북']),
          충남: Number(row['충남']),
          전북: Number(row['전북']),
          전남: Number(row['전남']),
          경북: Number(row['경북']),
          경남: Number(row['경남']),
          제주: Number(row['제주']),
          기타: Number(row['기타']),
        }));
        setData(jsonData);
      },
    });
  }, []);

  return (
    <div>
      <h2>행정구역별 인구 데이터</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <XAxis dataKey="region" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="서울" fill="#8884d8" />
          <Bar dataKey="부산" fill="#82ca9d" />
          <Bar dataKey="대구" fill="#ffc658" />
          <Bar dataKey="인천" fill="#ff7300" />
          <Bar dataKey="광주" fill="#ff0000" />
          <Bar dataKey="대전" fill="#0000ff" />
          <Bar dataKey="울산" fill="#00ff00" />
          <Bar dataKey="세종" fill="#ff00ff" />
          <Bar dataKey="경기" fill="#ffff00" />
          <Bar dataKey="강원" fill="#00ffff" />
          <Bar dataKey="충북" fill="#800080" />
          <Bar dataKey="충남" fill="#808080" />
          <Bar dataKey="전북" fill="#008000" />
          <Bar dataKey="전남" fill="#000080" />
          <Bar dataKey="경북" fill="#800000" />
          <Bar dataKey="경남" fill="#ffa500" />
          <Bar dataKey="제주" fill="#ff69b4" />
          <Bar dataKey="기타" fill="#a52a2a" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default JsonParser;
