import React from 'react';
import {
  Routes,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import usePromise from 'react-promise-suspense';
import { useState, useEffect, useRef } from 'react';

// Api
import axios from 'axios';
import { graphQLEndPoint, Query, querySetting } from './api/graphql/graphQLSchema.js';

// Style
import './scss/common/global.scss';

import UrlRecursive from './components/UrlRecursive';
import messageStorage from './util/messageStorage';
import Loading from './components/Loading';

// Pages
const HomePage = React.lazy(() => import('./pages/home/homeContainer'));
const GameplayPage = React.lazy(() => import('./pages/gameplay/gameplayContainer'));
const WhiteListPage = React.lazy(() => import('./pages/whitelist/whitelistContainer'));
<<<<<<< HEAD
// const PreSalePage = React.lazy(() => import('./pages/presale/PresaleContainer'));
const Claim = React.lazy(() => import('./pages/claim/ClaimPage'));
=======
const PreSalePage = React.lazy(() => import('./pages/presale/presaleContainer'));
// const Claim = React.lazy(() => import('./pages/claim/ClaimPage'));
>>>>>>> 42d57dfc9f9a4540fa594a67401bdbdf9a66e1e1

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
          const data = response.data.data.dynamicContents;
          const process = (obj, name, value) => {
            // Gia su name =[A,B,C]
            if (name.length === 1) {
              return {
                [name[0]]: value,
              };
            } else {
              if (name[0] in obj) { // Trương hợp đã có
                const temp = [...name]; // Bỏ phần tử đầu tiên
                temp.shift();
                const valueNew = process(obj[name[0]], temp, value);
                obj[name[0]] = {
                  ...valueNew,
                  ...obj[name[0]],
                };
              } else {// Trương hoợp lần đầu tiên
                obj[name[0]] = {};
                const temp = [...name];// Bỏ phần tử đầu tiên
                temp.shift();
                const valueNew = process(obj[name[0]], temp, value);
                obj[name[0]] = {
                  ...valueNew,
                };
              }
            }
          };
          const mainObj = {};
          for (let key = 0; key < data.length; key++) {
            const pack = data[key];
            const name = pack.key.split('_');
            const value = pack.value;
            process(mainObj, name, value);
          }

          resolve({ ...mainObj });
        })).then((img) => {
          axios({
            url: graphQLEndPoint,
            method: 'POST',
            data: {
              query: querySetting,
            },
          }).then((response) => {
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
      new Promise(async (resolve) => {
        const data = await axios.post('https://laboon.as.r.appspot.com/config')
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
  const UrlRecursiveContainer = ({ Comp }) => {
    return (
      <UrlRecursive
        data={{
          urlApi: imgList,
          setting: setting,
        }}
      >
        <Comp />
      </UrlRecursive>
    );
  };

  return (
    <React.Suspense fallback={<Loading />}>
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
          <Route path="/claim" element={<UrlRecursiveContainer Comp={Claim} />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
}
export default App;
