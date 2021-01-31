import React, { useState } from 'react';
import SwiperCore, { Autoplay, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import './index.scss';

import CategoryCard from '@/components/category-card';

// install Swiper components
SwiperCore.use([Pagination, Scrollbar, Autoplay]);

export default () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // const [text, setTest] = useState<Array<Number | String>>([]);

  const renderSwiper = () => {
    return (
      <Swiper slidesPerView={4} scrollbar={{ draggable: true, hide: true }}>
        <SwiperSlide>
          <div className="entry-item   bg-white px-2 py-3">
            <div className="d-flex flex-column ai-center entry-item-wrap">
              <i className="sprite mb-1 sprite-news"></i>
              <span className="fs-sm">爆料站</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="entry-item   bg-white px-2 py-3">
            <div className="d-flex flex-column ai-center entry-item-wrap">
              <i className="sprite mb-1 sprite-story"></i>
              <span className="fs-sm">故事站</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="entry-item   bg-white px-2 py-3">
            <div className="d-flex flex-column ai-center entry-item-wrap">
              <i className="sprite mb-1 sprite-store"></i>
              <span className="fs-sm">周边商城</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="entry-item   bg-white px-2 py-3">
            <div className="d-flex flex-column ai-center entry-item-wrap">
              <i className="sprite mb-1 sprite-experience"></i>
              <span className="fs-sm">体验服</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="entry-item   bg-white px-2 py-3">
            <div className="d-flex flex-column ai-center entry-item-wrap">
              <i className="sprite mb-1 sprite-noviciate"></i>
              <span className="fs-sm">新人专区</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="entry-item   bg-white px-2 py-3">
            <div className="d-flex flex-column ai-center entry-item-wrap">
              <i className="sprite mb-1 sprite-honer"></i>
              <span className="fs-sm">荣耀.传承</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="entry-item   bg-white px-2 py-3">
            <div className="d-flex flex-column ai-center entry-item-wrap">
              <i className="sprite mb-1 sprite-campsite"></i>
              <span className="fs-sm">王者营地</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="entry-item   bg-white px-2 py-3">
            <div className="d-flex flex-column ai-center entry-item-wrap">
              <i className="sprite mb-1 sprite-public"></i>
              <span className="fs-sm">公众号</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="entry-item   bg-white px-2 py-3">
            <div className="d-flex flex-column ai-center entry-item-wrap">
              <i className="sprite mb-1 sprite-pubilc"></i>
              <span className="fs-sm">公众号</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="entry-item   bg-white px-2 py-3">
            <div className="d-flex flex-column ai-center entry-item-wrap">
              <i className="sprite mb-1 sprite-edition"></i>
              <span className="fs-sm">版本介绍</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="entry-item   bg-white px-2 py-3">
            <div className="d-flex flex-column ai-center entry-item-wrap">
              <i className="sprite mb-1 sprite-env"></i>
              <span className="fs-sm">对局环境</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="entry-item   bg-white px-2 py-3">
            <div className="d-flex flex-column ai-center entry-item-wrap">
              <i className="sprite mb-1 sprite-king"></i>
              <span className="fs-sm">无线王者团</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="entry-item   bg-white px-2 py-3">
            <div className="d-flex flex-column ai-center entry-item-wrap">
              <i className="sprite mb-1 sprite-idea"></i>
              <span className="fs-sm">创意互动营</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    );
  };

  const renderFlex = () => {
    return <div></div>;
  };

  // const renderText = () => {
  //   return <div>{text.length}</div>;
  // };

  return (
    <div className="home-container">
      <Swiper
        autoplay={{
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        }}
        loop
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="slide-item">slideitem1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-item">slideitem2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-item">slideitem3</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-item">slideitem4</div>
        </SwiperSlide>
      </Swiper>

      <div className="entry-container mt-4">
        {isOpen ? <div>{renderFlex()}</div> : <div>{renderSwiper()}</div>}
        <div
          className="entry-tips  bg-light text-center"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? '收起' : '展开'}
        </div>
      </div>

      <div className="news-category-container">
        <CategoryCard
          categoryTitle="新闻资讯"
          categoryIcon=""
          categoryList={['热门', '新闻', '公共', '活动', '赛事']}
          type={0}
        >
          <div className="news-children">
            <div>这是标签</div>
            <div>这是具体标题</div>
            <div>这是时间</div>
          </div>
        </CategoryCard>
      </div>

      {/* <div className="heros-category-container">
        <CategoryCard
          categoryTitle="英雄列表"
          categoryIcon=""
          categoryList={[
            '热门',
            '战士',
            '法师',
            '坦克',
            '刺客',
            '射手',
            '辅助',
          ]}
          type={1}
        >
          <div className="heros-children">
            <div>
              <img />
            </div>
          </div>
        </CategoryCard>
      </div>

      <div className="videos-category-container">
        <CategoryCard
          categoryTitle="精彩视频"
          categoryIcon=""
          categoryList={['精彩栏目', '英雄攻略', '赛事精品']}
          type={2}
        >
          <div className="videos-children">
            <div>这是背景</div>
            <div>这是标题</div>
            <div>
              <div>这是播放量</div>
              <div>这是时间</div>
            </div>
          </div>
        </CategoryCard>
      </div> */}

      {/* <div
        onClick={() => {
          const number = [...text];
          number.push('1');
          setTest(number);
        }}
      >
        text按钮
      </div>

      {text.length && renderText()} */}
    </div>
  );
};
