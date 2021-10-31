import React from 'react';
import { Link } from 'react-router-dom';
import background from '../../../imgs/bg-2.jpg';
import './Sites.css'
const Sites = () => {
    return (
        <div className="tent-sites text-center text-white" style={{ backgroundImage: `url(${background})`, backgroundSize: 'auto' }}>
            <div className="tent-box">
                <h2 className="text-center">
                    Tent Sites
                </h2>
                <p className="text-center">Get back to basics and sleep under starry night skies on one of our rustic tent camping sites. Choose from primitive options or upgrade to a site that includes water and electric.</p>
                <Link to="/way">
                    <button type="button" class="btn btn-light">Ways to Stay</button>
                </Link>
            </div>
        </div>
    );
};

export default Sites;