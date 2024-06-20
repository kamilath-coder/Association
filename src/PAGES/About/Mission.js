import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from "react";
import { removeTags } from '../../UTILS/Util';
export function Mission(props) {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    const browserLang = savedLanguage || navigator.language || navigator.userLanguage;
    const lang = browserLang.substr(0, 2);
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
    console.log('Langue actuelle :', lang);

     // Ajoutez cet écouteur d'événements pour mettre à jour currentLanguage chaque fois que la langue change
    i18n.on('languageChanged', lng => {
      setCurrentLanguage(lng);
    });

    // N'oubliez pas de nettoyer l'écouteur d'événements lorsque le composant est démonté
    return () => {
      i18n.off('languageChanged');
    };
  }, [i18n]);
  const { t} = useTranslation();
  const data = [
    {
      label: t('Notre histoire'),
      value: "html",
      desc: (currentLanguage==="fr"? (props.info.site_history_fr ? removeTags(props.info.site_history_fr) : "It really matters and then like it really doesn't matter."):(props.info.site_history ? removeTags(props.info.site_history) : "It really matters and then like it really doesn't matter."))
    },
    {
      label: t('Nos valeurs'),
      value: "react",
      desc:(currentLanguage==="fr"?  (props.info.site_value_fr ? removeTags(props.info.site_value_fr):"sa valeur fr"):(props.info.site_value? removeTags(props.info.site_value):`Because it's about motivating the doers. Excepteur sint 
      occaecat cupidatat non proident, sunt in culpa qui officia 
      deserunt mollit anim id est laborum.Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.Excepteur sint 
      occaecat cupidatat non proident, sunt in culpa qui officia 
      deserunt mollit anim id est laborum.`)),
    },
    {
      label:t('Notre mission'),
      value: "vue",
      desc:(currentLanguage==="fr"? (props.info.site_mission_fr ? removeTags(props.info.site_mission_fr):"sa mission") :(props.info.site_mission? removeTags(props.info.site_mission): `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`)),
    },
    {
      label: t('Notre vision'),
      value: "angular",
      desc: (currentLanguage==="fr"? (props.info.site_vision_fr ? removeTags(props.info.site_vision_fr) :"leur mission") :(props.info.site_vision ? removeTags(props.info.site_vision) : `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`)),
    },
    
  ];
 
  return (
    <Tabs  value="html" className="max-w-[40rem] bg-[#DDF1FF] rounded p-3">
      <TabsHeader
        className="bg-transparent"
        indicatorProps={{
          className: "bg-gray-900/10 shadow-none !text-gray-900",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}