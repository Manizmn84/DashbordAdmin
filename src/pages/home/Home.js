import './Home.css'
import Features from '../../components/features/Features';
import Chart from '../../components/Chart/Chart';
import { xAxisData } from '../../datas';
function Home() {
    return (
        <div className='home'>
            <Features></Features>
            <Chart grid title="Month Sale" data={xAxisData} dataKey="Sale" />
        </div>
     );
}

export default Home;