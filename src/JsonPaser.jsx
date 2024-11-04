import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        "행정구역별": "전국",
        "성별": "계",
        "연령별": "합계",
        "1년 전 거주지 - 전국": 3654729,
        "서울": 770591,
        "부산": 228586,
        "대구": 166400,
        "인천": 207354,
        "광주": 100708,
        "대전": 118149,
        "울산": 69046,
        "세종": 27570,
        "경기": 825052,
        "강원": 85697,
        "충북": 78922,
        "충남": 131301,
        "전북": 89064,
        "전남": 93205,
        "경북": 138724,
        "경남": 156853,
        "제주": 32010,
        "기타": 335497
    },
    {
        "행정구역별": "읍부",
        "성별": "계",
        "연령별": "합계",
        "1년 전 거주지 - 전국": 343768,
        "서울": 36822,
        "부산": 18276,
        "대구": 20273,
        "인천": 12445,
        "광주": 9749,
        "대전": 8757,
        "울산": 9605,
        "세종": 3146,
        "경기": 74998,
        "강원": 11029,
        "충북": 12304,
        "충남": 20195,
        "전북": 14138,
        "전남": 14009,
        "경북": 21989,
        "경남": 21022,
        "제주": 3838,
        "기타": 31173
    },
    {
        "행정구역별": "면부",
        "성별": "계",
        "연령별": "합계",
        "1년 전 거주지 - 전국": 308788,
        "서울": 32794,
        "부산": 14572,
        "대구": 13757,
        "인천": 11976,
        "광주": 12687,
        "대전": 10732,
        "울산": 4882,
        "세종": 2612,
        "경기": 65178,
        "강원": 11468,
        "충북": 10617,
        "충남": 20420,
        "전북": 13296,
        "전남": 12440,
        "경북": 15911,
        "경남": 19738,
        "제주": 2689,
        "기타": 33019
    },
    {
        "행정구역별": "동부",
        "성별": "계",
        "연령별": "합계",
        "1년 전 거주지 - 전국": 3002173,
        "서울": 700975,
        "부산": 195738,
        "대구": 132370,
        "인천": 182933,
        "광주": 78272,
        "대전": 98660,
        "울산": 54559,
        "세종": 21812,
        "경기": 684876,
        "강원": 63200,
        "충북": 56001,
        "충남": 90686,
        "전북": 61630,
        "전남": 66756,
        "경북": 100824,
        "경남": 116093,
        "제주": 25483,
        "기타": 271305
    },
    {
        "행정구역별": "서울특별시",
        "성별": "계",
        "연령별": "합계",
        "1년 전 거주지 - 전국": 823582,
        "서울": 387599,
        "부산": 15449,
        "대구": 11065,
        "인천": 27900,
        "광주": 7905,
        "대전": 11526,
        "울산": 4793,
        "세종": 4419,
        "경기": 181656,
        "강원": 14843,
        "충북": 10299,
        "충남": 15768,
        "전북": 9750,
        "전남": 8000,
        "경북": 11455,
        "경남": 12422,
        "제주": 6213,
        "기타": 82520
    },
    {
        "행정구역별": "부산광역시",
        "성별": "계",
        "연령별": "합계",
        "1년 전 거주지 - 전국": 239557,
        "서울": 8504,
        "부산": 132498,
        "대구": 4029,
        "인천": 1558,
        "광주": 1033,
        "대전": 1351,
        "울산": 8531,
        "세종": 485,
        "경기": 8296,
        "강원": 1358,
        "충북": 1206,
        "충남": 1640,
        "전북": 1079,
        "전남": 2211,
        "경북": 7023,
        "경남": 36518,
        "제주": 1855,
        "기타": 20382
    },
    {
        "행정구역별": "대구광역시",
        "성별": "계",
        "연령별": "합계",
        "1년 전 거주지 - 전국": 170682,
        "서울": 5845,
        "부산": 3791,
        "대구": 92873,
        "인천": 1071,
        "광주": 563,
        "대전": 1389,
        "울산": 2309,
        "세종": 417,
        "경기": 6875,
        "강원": 1267,
        "충북": 1356,
        "충남": 1409,
        "전북": 743,
        "전남": 673,
        "경북": 32342,
        "경남": 6729,
        "제주": 786,
        "기타": 10244
    },
    {
        "행정구역별": "인천광역시",
        "성별": "계",
        "연령별": "합계",
        "1년 전 거주지 - 전국": 252160,
        "서울": 38166,
        "부산": 2305,
        "대구": 1658,
        "인천": 98882,
        "광주": 1619,
        "대전": 2127,
        "울산": 886,
        "세종": 834,
        "경기": 62128,
        "강원": 3774,
        "충북": 3003,
        "충남": 6263,
        "전북": 2639,
        "전남": 2392,
        "경북": 2971,
        "경남": 2560,
        "제주": 1798,
        "기타": 18155
    },
    {
        "행정구역별": "광주광역시",
        "성별": "계",
        "연령별": "합계",
        "1년 전 거주지 - 전국": 96570,
        "서울": 4679,
        "부산": 786,
        "대구": 414,
        "인천": 1030,
        "광주": 46011,
        "대전": 926,
        "울산": 224,
        "세종": 391,
        "경기": 5072,
        "강원": 556,
        "충북": 653,
        "충남": 1143,
        "전북": 4514,
        "전남": 21144,
        "경북": 627,
        "경남": 1057,
        "제주": 705,
        "기타": 6638
    },
    {
        "행정구역별": "대전광역시",
        "성별": "계",
        "연령별": "합계",
        "1년 전 거주지 - 전국": 124057,
        "서울": 8538,
        "부산": 1729,
        "대구": 1796,
        "인천": 1930,
        "광주": 1389,
        "대전": 50790,
        "울산": 721,
        "세종": 5923,
        "경기": 11402,
        "강원": 2018,
        "충북": 6641,
        "충남": 11396,
        "전북": 3981,
        "전남": 1456,
        "경북": 3003,
        "경남": 2092,
        "제주": 640,
        "기타": 8612
    },
    {
        "행정구역별": "울산광역시",
        "성별": "계",
        "연령별": "합계",
        "1년 전 거주지 - 전국": 67862,
        "서울": 2612,
        "부산": 7159,
        "대구": 2368,
        "인천": 586,
        "광주": 283,
        "대전": 519,
        "울산": 30269,
        "세종": 170,
        "경기": 2953,
        "강원": 525,
        "충북": 568,
        "충남": 777,
        "전북": 421,
        "전남": 632,
        "경북": 5605,
        "경남": 5472,
        "제주": 394,
        "기타": 6549
    },
    {
        "행정구역별": "세종특별자치시",
        "성별": "계",
        "연령별": "합계",
        "1년 전 거주지 - 전국": 33426,
        "서울": 4003,
        "부산": 729,
        "대구": 609,
        "인천": 851,
        "광주": 602,
        "대전": 7110,
        "울산": 272,
        "세종": "X",
        "경기": 5260,
        "강원": 574,
        "충북": 3284,
        "충남": 3507,
        "전북": 1016,
        "전남": 534,
        "경북": 773,
        "경남": 888,
        "제주": 376,
        "기타": 3038
    },
    {
        "행정구역별": "경기도",
        "성별": "계",
        "연령별": "합계",
        "1년 전 거주지 - 전국": 961576,
        "서울": 234161,
        "부산": 12632,
        "대구": 9607,
        "인천": 47681,
        "광주": 7470,
        "대전": 12471,
        "울산": 5220,
        "세종": 4642,
        "경기": 410917,
        "강원": 22338,
        "충북": 17280,
        "충남": 30014,
        "전북": 11898,
        "전남": 10203,
        "경북": 15013,
        "경남": 14041,
        "제주": 6138,
        "기타": 89850
    },
    {
        "행정구역별": "강원특별자치도",
        "성별": "계",
        "연령별": "합계",
        "1년 전 거주지 - 전국": 95804,
        "서울": 15018,
        "부산": 1521,
        "대구": 1271,
        "인천": 4476,
        "광주": 625,
        "대전": 1711,
        "울산": 612,
        "세종": 398,
        "경기": 24220,
        "강원": 25370,
        "충북": 3284,
        "충남": 2143,
        "전북": 1000,
        "전남": 958,
        "경북": 2825,
        "경남": 1812,
        "제주": 695,
        "기타": 7865
    },
    {
        "행정구역별": "충청북도",
        "성별": "계",
        "연령별": "합계",
        "1년 전 거주지 - 전국": 97353,
        "서울": 10084,
        "부산": 1707,
        "대구": 1829,
        "인천": 3637,
        "광주": 1026,
        "대전": 6871,
        "울산": 822,
        "세종": 3430,
        "경기": 20680,
        "강원": 3604,
        "충북": 17569,
        "충남": 5779,
        "전북": 2157,
        "전남": 1287,
        "경북": 3822,
        "경남": 2455,
        "제주": 685,
        "기타": 9909
    },
    {
        "행정구역별": "충청남도",
        "성별": "계",
        "연령별": "합계",
        "1년 전 거주지 - 전국": 159880,
        "서울": 14754,
        "부산": 2379,
        "대구": 2130,
        "인천": 7301,
        "광주": 1841,
        "대전": 12671,
        "울산": 1186,
        "세종": 3938,
        "경기": 35232,
        "강원": 2758,
        "충북": 5925,
        "충남": 39537,
        "전북": 5267,
        "전남": 2600,
        "경북": 3541,
        "경남": 3560,
        "제주": 918,
        "기타": 14342
    },
    {
        "행정구역별": "전라북도",
        "성별": "계",
        "연령별": "합계",
        "1년 전 거주지 - 전국": 94227,
        "서울": 7827,
        "부산": 1016,
        "대구": 683,
        "인천": 2262,
        "광주": 4683,
        "대전": 3056,
        "울산": 527,
        "세종": 860,
        "경기": 11358,
        "강원": 904,
        "충북": 1653,
        "충남": 4284,
        "전북": 37192,
        "전남": 4538,
        "경북": 1060,
        "경남": 1687,
        "제주": 772,
        "기타": 9865
    },
    {
        "행정구역별": "전라남도",
        "성별": "계",
        "연령별": "합계",
        "1년 전 거주지 - 전국": 103528,
        "서울": 6841,
        "부산": 2198,
        "대구": 694,
        "인천": 2081,
        "광주": 23205,
        "대전": 1163,
        "울산": 618,
        "세종": 400,
        "경기": 9503,
        "강원": 921,
        "충북": 1034,
        "충남": 1959,
        "전북": 4118,
        "전남": 31699,
        "경북": 1352,
        "경남": 3363,
        "제주": 919,
        "기타": 11460
    },
    {
        "행정구역별": "경상북도",
        "성별": "계",
        "연령별": "합계",
        "1년 전 거주지 - 전국": 144331,
        "서울": 8747,
        "부산": 6783,
        "대구": 28912,
        "인천": 2780,
        "광주": 770,
        "대전": 2330,
        "울산": 6165,
        "세종": 593,
        "경기": 13436,
        "강원": 2809,
        "충북": 2985,
        "충남": 2593,
        "전북": 1265,
        "전남": 1421,
        "경북": 39810,
        "경남": 7828,
        "제주": 1017,
        "기타": 14087
    },
    {
        "행정구역별": "경상남도",
        "성별": "계",
        "연령별": "합계",
        "1년 전 거주지 - 전국": 154976,
        "서울": 7289,
        "부산": 34238,
        "대구": 5585,
        "인천": 1859,
        "광주": 1000,
        "대전": 1545,
        "울산": 5425,
        "세종": 426,
        "경기": 9524,
        "강원": 1504,
        "충북": 1515,
        "충남": 2317,
        "전북": 1428,
        "전남": 2712,
        "경북": 6636,
        "경남": 52992,
        "제주": 1355,
        "기타": 17626
    },
    {
        "행정구역별": "제주특별자치도",
        "성별": "계",
        "연령별": "합계",
        "1년 전 거주지 - 전국": 35158,
        "서울": 5924,
        "부산": 1666,
        "대구": 877,
        "인천": 1469,
        "광주": 683,
        "대전": 593,
        "울산": 466,
        "세종": 244,
        "경기": 6540,
        "강원": 574,
        "충북": 667,
        "충남": 772,
        "전북": 596,
        "전남": 745,
        "경북": 866,
        "경남": 1377,
        "제주": 6744,
        "기타": 4355
    }
]

const JsonParser = () => {

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
