import styles from "./styles.module.scss";
import HeroTextComponent from "@/components/HeroTextComponent/HeroTextComponent";
import InfoHeroComponent from "@/components/InfoHeroComponent/InfoHeroComponent";
import EventHeroComponent from "@/components/EventHeroComponent/EventHeroComponent";

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
		</>
	)
}