import React, { FC, useState, useEffect } from 'react';
import { Link } from 'umi';
import './index.scss';
import '@/assests/scss/index.scss';
import logoIcon from '@/assests/imgaes/logo.png';

const Layout: FC<{}> = ({ children }) => {
  const [path, setPath] = useState<string>('/');

  useEffect(() => {
    const pathName = window.location.pathname.split('/')[1];
    setPath(pathName);
  }, []);

  return (
    <div className="layout-wrap title-red">
      <div className="d-flex bg-black fix-nav-container ai-center px-4">
        <div className="d-flex flex-1 h-100 ai-center">
          <div className="mr-3">
            <img className="logo-img" src={logoIcon} />
          </div>
          <div>
            <div className="text-white fs-md">王者荣耀</div>
            <div className="text-grey-1 fs-xxs">团队成就更多</div>
          </div>
        </div>
        <div className="bg-primary text-center download-btn d-flex ai-center px-2 py-3 fs-xxs">
          立即下载
        </div>
      </div>
      <div className="d-flex jc-around bg-primary text-white pt-3 pb-2 nav-container nav">
        <div
          className={`${path === '/' || path === '' ? 'active' : ''} nav-item `}
        >
          <Link to="/">首页</Link>
        </div>
        <div className={`${path === '/' ? 'active' : ''} nav-item`}>
          <Link to="/">攻略中心</Link>
        </div>
        <div className={`${path === '/' ? 'active' : ''} nav-item`}>
          <Link to="/">赛事中心</Link>
        </div>
        <div className={`${path === '/' ? 'active' : ''} nav-item`}>
          <Link to="/">IP 新游</Link>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
