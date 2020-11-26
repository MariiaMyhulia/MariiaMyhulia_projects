import React from 'react';
import styles from './Years.module.css';

//Components
import Item from "./Item/Item";

const Years = () => {
	const info = [
		{
			title: 2010,
			text: 'Текст о чем-то и, что-то еще...',
			dataClass: styles.years__itemLeft
		},
		{
			title: 2012,
			text: 'Lorem ipsum dolor sit amet, consectetur adipiselit. Vivamus varius nec diam vitae hendrerit bigus mit. Begitus vit urna nulla.',
			dataClass: styles.years__itemRight
		},
		{
			title: 2013,
			text: 'Sed at auctor sem, nec tincidunt elit. Pellentesque enim turpis, porttitor ac orci in, ultrices efficitur nisl. Ut odio libero, sodales a tellus eleifend, suscipit dapibus mi.',
			dataClass: styles.years__itemLeft + ' ' + styles.years__itemBigPoint
		},
		{
			title: 2014,
			text: 'Lorem ipsum dolor sit amet, consectetur adipiselit. Vivamus varius nec diam vitae hendrerit bigus mit. Begitus vit urna nulla.',
			dataClass: styles.years__itemRight
		},
	];
	
	const ItemInfo = info.map((item, key) => {
		return <Item title={item.title} text={item.text} dataClass={item.dataClass} key={key} />
	});
	
	return (
		<section className={styles.years} id={styles.years}>
			<div className="container">
				{ItemInfo}
			</div>
		</section>
	);
}

export default Years;
