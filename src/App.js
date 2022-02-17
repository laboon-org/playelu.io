import React from 'react';
import {
  Routes,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import {useState, useEffect, useRef} from 'react';

// Api
import axios from 'axios';
import restApi from "./api/rest/RestApi.js";

// Services
import { loadDataConfig } from './services/loadDataService.js';

// Utils
import {
  processData,
  mapSettingData,
  mapDynamicContent,
} from "./utilities/calcUtil.js";

import {graphQLEndPoint, Query, querySetting} from './api/graphql/graphQLSchema.js';

// Style
import './scss/common/global.scss';

// Components
import UrlRecursive from './components/UrlRecursive';
import Loading from "./components/Loading";

// Stores
import messageStorage from "./stores/messageStorage";

// Pages
const HomePage = React.lazy(() => import('./pages/home/homeContainer'));
const GameplayPage = React.lazy(() => import('./pages/gameplay/gameplayContainer'));
const WhiteListPage = React.lazy(() => import('./pages/whitelist/whitelistContainer'));
// const PreSalePage = React.lazy(() => import('./pages/presale/presaleContainer'));
// const Claim = React.lazy(() => import('./pages/claim/ClaimPage'));

// ---------- APP -------------
function App(_props) {
  const [imgList, setImgList] = useState({});
  const [setting, setSetting] = useState([]);
  const isFirst = useRef(true);

  useEffect(() => {
    loadDataConfig();
  }, []);

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
            const mainObj = mapDynamicContent(response.data.data.dynamicContents);
            resolve({...mainObj});
        })).then((img) => {
          axios({
            url: graphQLEndPoint,
            method: 'POST',
            data: {
              query: querySetting,
            },
          }).then((response) => {
            const setting = mapSettingData(response.data.data.settings);
            setImgList(img);
            setSetting(setting);
          });
      });
    }
  }, []);

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
    <React.Suspense fallback={<Loading />}>
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
