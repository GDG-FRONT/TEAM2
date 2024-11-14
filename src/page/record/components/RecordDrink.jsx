import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../scss/record/_recordDrink.scss';
import water from '../../../assets/record/water.svg';
import coffee from '../../../assets/record/coffee.svg';
import tea from '../../../assets/record/tea.svg';
import milk from '../../../assets/record/milk.svg';
import soda from '../../../assets/record/soda.svg';
import juice from '../../../assets/record/juice.svg';
import DrinkItem from './RecordDrinkItem';

// drink 종류를 하나하나 치거나 다양한 방법이 있지만 여기서는 map()를 사용해보았다.
// 자세한 참고 내용은 "https://velog.io/@yongchan/GDSC-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-Map-%ED%95%A8%EC%88%98%EC%9D%98-%EA%B3%A0%EB%82%9C-2" 여기서 볼 수 있다.
const RecordDrink = () => {
  const navigate = useNavigate();
  const [selectDrink, setSelectDrink] = useState(null);

  const drinks = [
    { text: '물', img: water },
    { text: '커피', img: coffee },
    { text: '차', img: tea },
    { text: '우유', img: milk },
    { text: '탄산수', img: soda },
    { text: '쥬스', img: juice },
  ];

  const handleDrinkClick = (drink) => {
    setSelectDrink(drink);

    const routeMap = {
      물: '/water',
      커피: '/coffee',
      차: '/tea',
      우유: '/milk',
      탄산수: '/soda',
      쥬스: '/juice',
    };

    const route = routeMap[drink.text] || '/';
    navigate(route, { state: { drink } });
    // navigate('/route,', { state: { drink } }); // 여기서는 현지님 작업물로 이동하는 navigate다.
    // let route = '/defaultPage';

    // if (drink.text === '물') route = '/waterPage';
    // else if (drink.text === '커피') route = '/coffeePage';
    // else if (drink.text === '차') route = '/teaPage';
    // else if (drink.text === '우유') route = '/milkPage';
    // else if (drink.text === '탄산수') route = '/sodaPage';
    // else if (drink.text === '쥬스') route = '/juicePage';

    // navigate(route, { state: { drink } });
  };
  //

  return (
    <div className="record-drink-grid">
      {drinks.map((drink, index) => (
        <DrinkItem
          key={index}
          drink={drink}
          isSelected={selectDrink === drink}
          onClick={handleDrinkClick}
        />
      ))}
    </div>
  );
};

export default RecordDrink;
