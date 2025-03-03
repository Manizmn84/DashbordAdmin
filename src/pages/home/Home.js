import './Home.css'
import Features from '../../components/features/Features';
import Chart from '../../components/Chart/Chart';
import { xAxisData } from '../../datas';
import WidgetSm from '../../components/widgetSm/widgetSm';
import WidgetLg from '../../components/WidgetLg/WidgetLg';
function Home() {
    return (
        <div className='home'>
            <Features></Features>
            <Chart grid title="Month Sale" data={xAxisData} dataKey="Sale" />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg></WidgetLg>
            </div>
        </div>
     );
}

export default Home;