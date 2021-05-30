import {useEffect, useContext} from 'react';
// import { API_KEY, API_URL } from '../config';
import {Preloader} from './Preloader';
import {GoodsList} from './GoodsList';
import {Cart} from './Cart';
import {BasketList} from './BasketList';
import {Alert} from './Alert';
import { ShopContext } from '../context';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = 'https://fortniteapi.io/v1/shop?lang=ru';

function Shop() {
    const {goods, loading, order, isBasketShow, alertName, setGoods} = useContext(ShopContext);
    

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
               setGoods(data.featured);
            })
    }, []);

    return (
        <main className="container content">
            <Cart quantity={order.length} />
            {loading ? <Preloader /> : <GoodsList  />}
            {
            isBasketShow && (
                    <BasketList />
            )}
            {
                alertName && <Alert />
            }
        </main>
    )
};
export {Shop};