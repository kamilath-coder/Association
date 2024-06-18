import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useTranslation } from 'react-i18next';
export function Mission(props) {
  //const { i18n } = useTranslation();
  //const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const { t} = useTranslation();
  const data = [
    {
      label: t('Notre histoire'),
      value: "html",
      desc: props.info.site_history ? props.info.site_history : "It really matters and then like it really doesn't matter."
    },
    {
      label: t('Nos valeurs'),
      value: "react",
      desc: props.info.site_value? props.info.site_value:`Because it's about motivating the doers. Excepteur sint 
      occaecat cupidatat non proident, sunt in culpa qui officia 
      deserunt mollit anim id est laborum.Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.Excepteur sint 
      occaecat cupidatat non proident, sunt in culpa qui officia 
      deserunt mollit anim id est laborum.`,
    },
    {
      label:t('Notre mission'),
      value: "vue",
      desc:props.info.site_mission?props.info.site_mission: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: t('Notre vision'),
      value: "angular",
      desc: props.info.site_vision ? props.info.site_vision : `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
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