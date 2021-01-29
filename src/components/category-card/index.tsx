import React, { FC, ReactNode, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

interface ICategoryCard {
  categoryTitle: string;
  categoryIcon: string;
  bgPic?: string;
  //   导航数据
  categoryList?: Array<string>;
  //   类型
  type: number;
}

const swiperTypeMap = ['news', 'heros', 'videos'];

const CategoryCard: FC<ICategoryCard> = props => {
  const { categoryTitle, categoryIcon, bgPic, children, categoryList } = props;

  const [contentList, setContentList] = useState<Array<any>>([]);

  const renderItemNode = (index: number, node: ReactNode) => {
    // console.log(contentList);
    if (!contentList[index]) {
      // 表示没有这个数据源
      return <div></div>;
    } else {
      //    当存在数据的时候，返回数据
      //      contentList[index]
      return <div>{contentList[index]}</div>;
    }
  };

  const changeDataHandler = (index: number) => {
    setContentList(preState => {
      if (categoryList) {
        if (preState.length < categoryList.length) {
          const newArr = [...preState, index + ''];
          return newArr;
        }
      }
      return preState;
    });
  };

  useEffect(() => {
    console.log('asdasdasdad');
    //   页面加载的时候请求一遍
    changeDataHandler(0);
  }, []);

  return (
    <div className="category-card-cantainer">
      <div className="category-card-header">
        <div className="d-flex ai-center jc-between">
          <div className="d-flex ai-center">
            <div className="category-title">{categoryTitle}</div>
            <div className="category-icon">
              <img src={categoryIcon} />
            </div>
          </div>
          <div>展开按钮</div>
        </div>

        {bgPic && (
          <div className="bg-container">
            <img src={bgPic} />
          </div>
        )}
      </div>

      <div className="category-card-content">
        <div className="category-card-nav">
          <ul
            className=" d-flex ai-center"
            onClick={e => {
              const target = e.target as HTMLElement;
              if (target.tagName.toLowerCase() === 'li') {
                const index = target.dataset.index!;
                changeDataHandler(Number(index));
              }
            }}
          >
            {categoryList &&
              categoryList.map((item, index) => {
                return (
                  <li key={index} data-index={index}>
                    {item}
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="content">
          <Swiper
            onSlideChange={function({ realIndex: index }) {
              changeDataHandler(index);
            }}
          >
            {categoryList &&
              contentList.length > 0 &&
              contentList &&
              categoryList.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="category-card-item">
                      {renderItemNode(index, children)}
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
        {/* { children } */}
      </div>
    </div>
  );
};
export default CategoryCard;
