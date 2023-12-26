import React from 'react'
import './BottomNavigation.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function BottomNavigation() {
    return (
        <>
           <div className='navbar-overflow navlinks '>
                <div className='navbar-overflow-content'>
                    <div className='navbar-overflow-width'>
                        <table>
                            <tbody className='navbarlink'>
                                <tr>
                                    <td><a href=''><img style={{marginLeft:'3.7rem'}} src='https://www.dbs.com/documents/1055266/18764039/businessclass-icon.png/32aae5da-2a38-509f-824a-1a2a610a927a?t=1576041256828'/><div>About BussinessClass</div></a></td>
                                    <td><a href=''><img style={{marginLeft:'1rem'}}  src='https://www.dbs.com/documents/1055266/18764039/subscribe-icon.png/abeffc66-2a00-f925-8fc3-6d8d3b2910a1?t=1576041257313'/><div>Subscribe</div></a></td>
                                    <td><a href=''><img style={{marginLeft:'1.5rem'}}  src='https://www.dbs.com/documents/1055266/18764039/contact-us-icon.png/94cc8236-ef13-54e6-a9b0-74666edf8775?t=1576041256957'/><div>Bank with DBS</div></a></td>
                                    <td><a href=''><img style={{marginLeft:'2rem'}}  src='https://www.dbs.com/documents/1055266/18761604/icon-onboarding-dbs-may23.png/6cd22a79-e12f-109d-a75f-5b19001b010f?t=1576041292558'/><div>Bussiness Account</div></a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    );
}





export default BottomNavigation
