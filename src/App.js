import React from 'react';
import {
  Routes,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import usePromise from 'react-promise-suspense';
import {useState, useEffect, useRef} from 'react';

// Api
import axios from 'axios';
import {graphQLEndPoint, Query, querySetting} from './api/graphql/graphQLSchema.js';

// Style
import './scss/common/global.scss';

import UrlRecursive from './components/UrlRecursive';
import messageStorage from './util/messageStorage';
import Loading from './components/Loading';

// Pages
const HomePage = React.lazy(() => import('./pages/home/homeContainer'));
const GameplayPage = React.lazy(() => import('./pages/gameplay/gameplayContainer'));
const WhiteListPage = React.lazy(() => import('./pages/whitelist/whitelistContainer'));
// const PreSalePage = React.lazy(() => import('./pages/presale/presaleContainer'));
const Claim = React.lazy(() => import('./pages/claim/ClaimPage'));

function App(_props) {
  const [imgList, setImgList] = useState({});
  const [setting, setSetting] = useState([]);
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      new Promise((resolve) => axios({
        url: graphQLEndPoint,
        method: 'POST',
        data: {
          query: Query,
        },
      })
          .then((response) => {
            console.log('dynamicContents: ', response.data.data.dynamicContents);
            const data = response.data.data.dynamicContents;

            // Process url api list function: methodExplaning.js
            const process = (obj, name, value) => {
              // Trường hợp 3
              if (name.length === 1) {
                return {
                  [name[0]]: value,
                };
              } else {
                // Trường hợp 2
                if (name[0] in obj) {
                  const temp = [...name];
                  temp.shift();
                  const valueNew = process(obj[name[0]], temp, value);
                  obj[name[0]] = {
                    ...valueNew,
                    ...obj[name[0]],
                  };
                } else {
                  // Trường hợp 1
                  obj[name[0]] = {};
                  const temp = [...name];
                  temp.shift();
                  const valueNew = process(obj[name[0]], temp, value);
                  obj[name[0]] = {
                    ...valueNew,
                    ...obj[name[0]],
                  };
                }
              }
            };

            const mainObj = {};
            for (let key = 0; key < data.length; key++) {
              const pack = data[key];
              const name = pack.key.split('_');
              const value = pack.image === null ? pack.value : pack.image.url;
              process(mainObj, name, value);
            }
            console.log('mainObj: ', mainObj);
            resolve({...mainObj});
          })).then((img) => { // img là object chứa image list đã được resolve
        // Lấy các thiết lập dc lưu trên API về.
        axios({
          url: graphQLEndPoint,
          method: 'POST',
          data: {
            query: querySetting,
          },
        }).then((response) => {
          // console.log('Settings: ', response.data.data.settings);
          const data = response.data.data.settings;
          const setting = {};
          for (let i = 0; i < data.length; i++) {
            const pa = data[i];
            const name = pa.key;
            const value = pa.value;
            setting[name] = value;
          }
          setImgList(img);
          setSetting(setting);
        });
      });
    }
  }, []);


  const LoadData = () => {
    const load = usePromise((_a) =>
      new Promise((resolve) => {
        const data = axios.post('https://laboon.as.r.appspot.com/config')
            .then((value) => {
              return value.data.content;
            }).catch((_err) => {
              return {};
            //* Not to be error
            });
        messageStorage.getInstance().setMessage('config', data);
        resolve(true);
      })
    , {});

    return (<div></div>);
  };

  // CMS: Data (Remote Config)
  const UrlRecursiveContainer = ({Comp}) => {
    return (
      <UrlRecursive
        data={{
          url_api: imgList,
          setting: setting,
        }}
      >
        <Comp />
      </UrlRecursive>
    );
  };

  return (
    <React.Suspense fallback={<Loading />}> {/* Màn hình loading trong lúc web đang lấy dữ liệu */}
      <LoadData />
      <Router>
        <Routes>
          <Route path="/" element={<UrlRecursiveContainer Comp={HomePage} />} />
          <Route
            path="/gameplay"
            element={<UrlRecursiveContainer Comp={GameplayPage} />}
          />
          <Route
            path="/whitelist"
            element={<UrlRecursiveContainer Comp={WhiteListPage} />}
          />
          {/* <Route
            path="/presales"
            element={<UrlRecursiveContainer Comp={PreSalePage} />}
          /> */}
          {/* <Route path="/claim" element={<UrlRecursiveContainer Comp={Claim} />} /> */}
        </Routes>
      </Router>
    </React.Suspense>
  );
}
export default App;

/*
  TODO:
  Create a new database
  Add 104 items from old database to new one.
  Replace database
*/
