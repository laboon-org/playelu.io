import React from 'react';
import {
  Routes,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import usePromise from 'react-promise-suspense';
import {useState, useEffect, useRef} from 'react';
import axios from 'axios';

// import './scss/sale_page/style.scss';
// import './scss/common/font.scss';

import UrlRescusive from './UrlRescusive';
import messageStorage from './module/messageStorage';
import Loading from './components/header/Loading';

// Pages
const HomePage = React.lazy(() => import('./pages/home/homeContainer'));
const GameplayPage = React.lazy(() => import('./pages/gameplay/gameplayContainer'));
const WhiteListPage = React.lazy(() => import('./pages/whitelist/whitelistContainer'));
// const SalePage = React.lazy(() => import('./pages/sale_page/SalePage'));
// const Claim = React.lazy(() => import('./pages/claim/ClaimPage'));

// Api
const Queryimage = 'https://api-eu-central-1.graphcms.com/v2/ckxidcmyc26eh01xpc7na45t8/master';
const Query = `
{
  dynamicContents(first: 1000){
      key
      value
    }
  }
`;
const querySetting = `
{
  settings{
      key
      value
    }
  }
`;

function App(_props) {
  const [imgList, setImgList] = useState({});
  const [setting, setSetting] = useState([]);
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      new Promise((resolve) => axios({
        url: Queryimage,
        method: 'POST',
        data: {
          query: Query,
        },
      })
          .then((response) => {
            const data = response.data.data.dynamicContents;
            const process = (obj, name, value) => {
            // Gia su name =[A,B,C]
              if (name.length == 1) {
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

            resolve({...mainObj});
          })).then((img) => {
        axios({
          url: Queryimage,
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
  const UrlRescusivePanel = ({Comp}) => {
    return (
      <UrlRescusive data={
        {
          urlApi: imgList,
          setting: setting,
        }
      }>
        <Comp />
      </UrlRescusive>
    );
  };

  return (
    <React.Suspense fallback={<Loading />}>
      <LoadData></LoadData>
      <Router>
        <Routes>
          <Route path="/" element={<UrlRescusivePanel Comp={HomePage} />} />
          <Route
            path="/gameplay"
            element={<UrlRescusivePanel Comp={GameplayPage} />}
          />
          <Route
            path="/whitelist"
            element={<UrlRescusivePanel Comp={WhiteListPage} />}
          />
          {/* <Route
            path="/presales"
            element={<UrlRescusivePanel Comp={SalePage} />}
          /> */}
          {/* <Route path="/claim" element={<UrlRescusivePanel Comp={Claim} />} /> */}
        </Routes>
      </Router>
    </React.Suspense>
  );
}
export default App;
