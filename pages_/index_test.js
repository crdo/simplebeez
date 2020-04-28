import useTranslation from "next-translate/useTranslation";
// ...
const Home = (props) => {
	const { t } = useTranslation();
	return <div>{t("hero:claim")}</div>;
};

export default Home;
