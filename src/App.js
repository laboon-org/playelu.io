
/* eslint-disable */
import UrlRescusive from './UrlRescusive';

import './App.css';
import './scss/home/playeluHome.scss'
import React from 'react';
import {
  Routes,
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Loading from './components/Loading';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


const PlayeluBaner = React.lazy(() => import('./pages/banner/playeluBaner'))
const Gameplay = React.lazy(() => import('./pages/gameplay/gameplay'))
const Queryimage = "https://api-eu-central-1.graphcms.com/v2/ckxidcmyc26eh01xpc7na45t8/master";
const Query = `
{
  dynamicContents(first: 1000	){
      key
      value
    }
  }
`;
const QueryFunction = `
{
  settings(){
      key
      value
    }
  }
`;
function App(props) {
  const [imgList, setImgList] = useState({});
  const isFirst = React.useRef(true)

  const valueFunction = axios({
    url: Queryimage,
    method: "POST",
    data: {
      query: QueryFunction,
    },
  }).then((response) => {
    let data1 = response.data.data.settings
    console.log('data1', data1);
  })
  if (isFirst.current == true) {
    isFirst.current = false
    const value = axios({
      url: Queryimage,
      method: "POST",
      data: {
        query: Query,
      },
    })
      .then((response) => {
        let data = response.data.data.dynamicContents
        const process = (obj, name, value) => {
          //Gia su name =[A,B,C]
          if (name.length == 1) {
            return {
              [name[0]]: value
            }
          } else {
            if (name[0] in obj) { //Trương hợp đã có
              let temp = [...name] //Bỏ phần tử đầu tiên
              temp.shift()
              const valueNew = process(obj[name[0]], temp, value)
              obj[name[0]] = {
                ...valueNew,
                ...obj[name[0]]
              }
            } else {//Trương hoợp lần đầu tiên
              obj[name[0]] = {}
              let temp = [...name]//Bỏ phần tử đầu tiên
              temp.shift()
              const valueNew = process(obj[name[0]], temp, value)
              obj[name[0]] = {
                ...valueNew,
              }
            }
          }
        }
        const mainObj = {}
        for (var key = 0; key < data.length; key++) {
          const pack = data[key]
          const name = pack.key.split('_')
          const value = pack.value
          process(mainObj, name, value)
        }
        setImgList({ ...mainObj })
      })
  }

  const UrlRescusivePanel = ({ Comp }) => {
    return (
      <UrlRescusive data={
        { ...imgList }

      }>
        <Comp />
      </UrlRescusive>
    )
  }

  return (
    <React.Suspense fallback={<Loading />}>
      <Router>
        <Routes>
          <Route path='/' element={<UrlRescusivePanel Comp={PlayeluBaner} />}>  </Route>
          <Route path='/gameplay' element={<UrlRescusivePanel Comp={Gameplay} />}>
          </Route>
        </Routes>
      </Router>
    </React.Suspense>
  );
}
export default App;
