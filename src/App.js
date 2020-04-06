
import React from 'react'
import { withLeaflet } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css';
import Header from './HeaderComponent/HeaderComponent';
import PhCaseComponent from './PhilippinesComponent/Ph';
import FooterComponent from './FooterComponent/FooterComponent';
import initStore from './store/store';
import { Provider } from 'react-redux';



const App = () => {
    return (
      <Provider store={initStore}>
                <div>
                  <Header />
                  <PhCaseComponent />
                  <FooterComponent />
                </div>  
      </Provider>        
    )
}

export default withLeaflet(App)