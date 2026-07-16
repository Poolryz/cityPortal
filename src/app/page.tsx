import styles from "./styles.module.scss";
import HeroTextComponent from "@/components/HeroTextComponent/HeroTextComponent";
import InfoHeroComponent from "@/components/InfoHeroComponent/InfoHeroComponent";
import EventHeroComponent from "@/components/EventHeroComponent/EventHeroComponent";
import PagesItemComponent from "@/components/PagesItemComponent/PagesItemComponent";
import { Bed, BusFront, CalendarDays, Flag, Landmark, Route, Store, Utensils } from "lucide-react";
import AboutCityComponent from "@/components/AboutCityComponent/AboutCityComponent";

export const generateMetadata = () => {
	return {
		title: 'Главный городской портал Лысьвы | ЛысьваЛайв',
		description: 'Городской портал ЛысьваЛайв: свежие новости, афиша и справочная информация для жителей и гостей Лысьвы. Присоединяйтесь к нашему сообществу!',
	};
};

export default function HomePage() {
	return (
		<>
			<div className={styles.hero}>
				<div className={styles["hero__body"]}>
					<div className={styles.container}>
						<div className={styles["hero__content"]}>
							<div className={styles["hero__left"]}>
								<HeroTextComponent />
								<InfoHeroComponent />
							</div>
							<div className={styles["hero__right"]}>
								<EventHeroComponent />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={`${styles.pages} _container`}>
				<ul className="pages__list">
					<PagesItemComponent icon={<CalendarDays size={30} />} name={"Календарь событий"} text={"Актуальные мероприятия города: праздники, фестивали, выставки и многое другое."} active={true} link={"/calendar"} />
					<PagesItemComponent icon={<Landmark size={30} />} name={"Достопремичательности"} text={"История, культура и уникальные места Лысьвы, которые стоит увидеть"} active={false} link={""} />
					<PagesItemComponent icon={<Store size={30} />} name={"Бизнес"} text={"Каталог компаний и услуг лысьвы"} active={false} link={""} />
					<PagesItemComponent icon={<Utensils size={30} />} name={"Где поесть"} text={"Рестораны, кафе и бары на любой вкус и повод"} active={false} link={""} />
					<PagesItemComponent icon={<Bed size={30} />} name={"Где остановиться"} text={"Гостиницы, отели и уютные апартаменты для гостей нашего города"} active={false} link={""} />
					<PagesItemComponent icon={<Route size={30} />} name={"Маршруты"} text={"Готовые маршруты для прогулок, экскурсий и активного отдыха"} active={false} link={""} />
					<PagesItemComponent icon={<BusFront size={30} />} name={"Транспорт"} text={"Расписание движения общественного транспорта и полезная информация"} active={false} link={""} />
				</ul>
			</div>
			<AboutCityComponent />
		</>
	)
}