import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import './Features.css'

function Features() {
    return ( 
        <div className="features">
            <div className="feature-item">
                    <span className="features-title">Reveneu</span>
                    <div className="features-container">
                            <span className="features-money">$2.14</span>
                            <span className="features-rates">
                                -11.4 <ArrowDownwardIcon className='features-icon negative'></ArrowDownwardIcon>
                            </span>
                    </div>
                    <span className='feature-sub'>Compared to last month</span>
            </div>

            <div className="feature-item">
                    <span className="features-title">Reveneu</span>
                    <div className="features-container">
                            <span className="features-money">$2.14</span>
                            <span className="features-rates">
                                -11.4 <ArrowDownwardIcon className='features-icon negative'></ArrowDownwardIcon>
                            </span>
                    </div>
                    <span className='feature-sub'>Compared to last month</span>
            </div>
            
            <div className="feature-item">
                    <span className="features-title">Reveneu</span>
                    <div className="features-container">
                            <span className="features-money">$2.14</span>
                            <span className="features-rates">
                                -11.4 <ArrowDownwardIcon className='features-icon negative'></ArrowDownwardIcon>
                            </span>
                    </div>
                    <span className='feature-sub'>Compared to last month</span>
            </div>
        </div>
     );
}

export default Features;